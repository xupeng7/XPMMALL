/*
* @Author: hasee
* @Date:   2017-09-08 13:56:03
* @Last Modified by:   hasee
* @Last Modified time: 2017-09-08 21:38:45
*/

/*
* @Author: hasee
* @Date:   2017-08-30 21:29:21
* @Last Modified by:   hasee
* @Last Modified time: 2017-09-07 00:22:57
*/
'use strict';

var _mm = require('util/mm.js');

var _address = {
	//获取地址列表
	getAddressList :  function(resolve, reject){
		_mm.request({
			url     : _mm.getServerUrl('/shipping/list.do'),
			data    : {
				pagesize : 50
			},
			success : resolve,
			error    : reject
		});
	},
	// 新建收件人
	save :  function(addressInfo, resolve, reject){
		_mm.request({
			url     : _mm.getServerUrl('/shipping/add.do'),
			data    : addressInfo,
			success : resolve,
			error    : reject
		});
	},
	// 更新收件人
	update :  function(addressInfo, resolve, reject){
		_mm.request({
			url     : _mm.getServerUrl('/shipping/update.do'),
			data    : addressInfo,
			success : resolve,
			error    : reject
		});
	},
	// 删除收件人
	deleteAddress :  function(shippingId, resolve, reject){
		_mm.request({
			url     : _mm.getServerUrl('/shipping/del.do'),
			data    : {
				shippingId : shippingId
			},
			success : resolve,
			error    : reject
		});
	},
	//获取单挑收件人信息
	getAddress :  function(shippingId,resolve, reject){
		_mm.request({
			url     : _mm.getServerUrl('/shipping/select.do'),
			data    : {
				shippingId : shippingId
			},
			success : resolve,
			error    : reject
		});
	}

}
module.exports=_address;