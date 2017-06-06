var map = require('./map');

var template = {
	'task/finished/list': require('./task/finished/list'),
	'task/valid/list': require('./task/valid/list'),
	'task/monitor/list': require('./task/monitor/list'),
	'taskrule/system/list': require('./taskrule/system/list'),
}

module.exports = {
	template: template
}