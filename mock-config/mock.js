let Mock = require('mockjs');
let fs = require('fs');
let template = require('./template/index').template;
let base = '../src/mock/';

let init = function () {
	for(var key in template) {
		var data = Mock.mock(template[key])
		fs.writeFile(base + key + '.json', JSON.stringify(data, null, 4),  function(err) {
			if (err) {
				return console.error(err);
			}
			console.log("zh_CN.js 数据写入成功！");
		});
	}
}

init()

module.exports = {
	init: init
}


