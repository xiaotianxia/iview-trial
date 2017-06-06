let Mock = require('mockjs'),
    Random = Mock.Random;

module.exports = {
    "status": 0,
    "message": "success",
    "data": {
        "totalCount|10-50": 10,
        "totalPageCount": 10,
        "pageNo": 1,
        "pageSize": 10,
        "list|10-50": [
            {
                "id": Mock.mock('@id'),
                "accountId": Mock.mock('@id'),
                "accountName": Mock.mock('@cname'),
                "name": Mock.mock('@cname(2)'),
                "sourceName|+1": ["系统生成", "总部下发"],
                "importance|1": [1, 2, 3, 4, 5],
                "description": Mock.mock('@cparagraph'),
                "duration|1-10": 10,
                "generateRulesDescription": Mock.mock('@cparagraph'),
                "completeRulesDescription": Mock.mock('@cparagraph'),
                "assignTime": Random.datetime('yyyy-MM-dd HH:mm:ss'),
                "lastTraceTime": Random.datetime('yyyy-MM-dd HH:mm:ss'),
                "expiredTime": Random.datetime('yyyy-MM-dd HH:mm:ss'),
                "completedTime": Random.datetime('yyyy-MM-dd HH:mm:ss'),
                "statusName|1": [
                    "新下发",
                    "已删除",
                    "111",
                    "222",
                    "333",
                    "444"
                ],
                "status|0-5": 0
            }
        ]
    }
}