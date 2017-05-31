let ENUM =  {
	START_DATE: moment().subtract(29, 'days').format('YYYYMMDD'),
	END_DATE: moment().format('YYYYMMDD'),
	datePickerOptions: {
		shortcuts: [
            {
                text: '今天',
                value () {
                    return [moment().format('YYYYMMDD'), moment().format('YYYYMMDD')];
                }
            },
            {
                text: '昨天',
                value () {
                    return [moment().subtract(1,'days').format('YYYYMMDD'), moment().subtract(1,'days').format('YYYYMMDD')];
                }
            },
            {
                text: '一周前',
                value () {
                    return [moment().subtract(7, 'days').format('YYYYMMDD'), moment().subtract(1,'days').format('YYYYMMDD')];
                }
            },
            {
                text: '最近一个月',
                value () {
                    return [moment().subtract(30, 'days').format('YYYYMMDD'), moment().subtract(1,'days').format('YYYYMMDD')];
                }
            }
        ]
	},
	TASK_DATA_CONFIG: {
        status: [
            {
                value: -1,
                text: '全部',
                type: 'all'
            }, {
                value: 0,
                text: '新下发',
                type: 'valid'
            }, {
                value: 1,
                text: '已跟进',
                type: 'valid'
            }, {
                value: 2,
                text: '已完成-已跟进',
                type: 'finish'
            }, {
                value: 3,
                text: '已逾期-未跟进',
                type: 'finish'
            }, {
                value: 4,
                text: '已逾期-已跟进',
                type: 'finish'
            }, {
                value: 5,
                text: '已完成-未跟进',
                type: 'finish'
            }, {
                value: 6,
                text: '已关闭-系统删除',
                type: 'finish'
            }
        ],
        importance: [
            {
                value: '0',
                text: '全部'
            }, {
                value: '1',
                text: '一星'
            }, {
                value: '2',
                text: '二星'
            }, {
                value: '3',
                text: '三星'
            }, {
                value: '4',
                text: '四星'
            }, {
                value: '5',
                text: '五星'
            }
        ],
        jobLogResult: [
            {
                value: '1',
                text: '有效跟进-已联系上客户'
            }, {
                value: '2',
                text: '有效跟进-客户接受方案'
            }, {
                value: '3',
                text: '有效跟进-其他'
            }, {
                value: '4',
                text: '无效跟进-未联系上客户'
            }, {
                value: '5',
                text: '无效跟进-客户拒绝方案'
            }, {
                value: '6',
                text: '无效跟进-其他'
            },
        ],
        source: [
            {
                value: '-1',
                text: '全部来源'
            },
            {
                value: '0',
                text: '系统生成'
            },
            {
                value: '1',
                text: '总部下发'
            }
        ]
    },
}
export default ENUM;