let Mock = require('mockjs');
let fs = require('fs');
let template = require('./template/index').template;
let base = './src/mock/';

let init = function () {
	for(var key in template) {
		var data = Mock.mock(template[key])
		console.log('building mock in ' + key);
		fs.writeFile(base + key + '.json', JSON.stringify(data, null, 4),  function(err) {
			if (err) {
				return console.error(err);
			}
			console.log('finish building mock');
		});
	}
}

module.exports = {
	init: init
}


