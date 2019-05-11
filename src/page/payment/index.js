/*
* @Author: hasee
* @Date:   2017-09-01 11:42:35
* @Last Modified by:   hasee
* @Last Modified time: 2017-09-09 13:40:04
*/

'use strict';
require('./index.css');
require('page/common/header/index.js');
require('page/common/nav/index.js');
var _mm             = require('util/mm.js');
var templateIndex   = require('./index.string');
var _payment         = require('service/payment-service.js');
/* page逻辑部分 */
var page = {
	data : {
		orderNumber : _mm.getUrlParam('orderNumber')
	},
	init : function(){
		this.onLoad();
	},
	onLoad : function(){
		//加载detail数据
		this.loadPaymentInfo();
	},
	
	//加载订单列表
	loadPaymentInfo : function(){
		var paymentHtml = '',
			_this         = this,
			$pageWrap      = $('.page-wrap');
		$pageWrap.html('<div class="loading"></div>')	
		_payment.getPaymentInfo(this.data.orderNumber, function(res){
			//渲染html
			paymentHtml = _mm.renderHtml(templateIndex,res);
			$pageWrap.html(paymentHtml);
			_this.listenOrderStatus();
		},function(errMsg){
			$pageWrap.html('<p class="err-tip">'+ errMsg +'</p>');
		});
	},
	// 监听订单状态
	listenOrderStatus : function(){
		var _this = this;
		this.paymentTimer = window.setInterval(function(){
			_payment.getPaymentStatus(_this.data.orderNumber, function(res){
				if(res == true){
					window.location.href =
					 		'./result.html?type=payment&orderNumber=' + _this.data.orderNumber;
				}
			});
		},5e3);
	}
};
$(function(){
	page.init();
});