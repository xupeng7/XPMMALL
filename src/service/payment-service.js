/*
* @Author: hasee
* @Date:   2017-09-07 20:37:29
* @Last Modified by:   hasee
* @Last Modified time: 2017-09-09 13:41:02
*/

'use strict';

var _mm = require('util/mm.js');

var _payment = {

	// 获取支付信息
	getPaymentInfo : function(orderNumber, resolve, reject){
		_mm.request({
			url      : _mm.getServerUrl('/order/pay.do'),
			data     : {
				orderNo : orderNumber
			},
			success  : resolve,
			error    : reject
		});
	},
	// 获取订单状态
	getPaymentStatus : function(orderNumber, resolve, reject){
		_mm.request({
			url      : _mm.getServerUrl('/order/query_order_pay_status.do'),
			data     : {
				orderNo : orderNumber
			},
			success  : resolve,
			error    : reject
		});
	}
	

}

	
module.exports = _payment;