let Mock = require('mockjs'),
    Random = Mock.Random;

module.exports = {
    "success": true,
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
                "agentCsId": 123,
                "agentCsName": Mock.mock('@csentence(2)'),
                "agentCsDeptName": "客服一部",
                "name": "taskName",
                "sourceName": "系统生成",
                "importance": 3,
                "description": Mock.mock('@cparagraph'),
                "duration": Mock.mock('@cparagraph'),
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