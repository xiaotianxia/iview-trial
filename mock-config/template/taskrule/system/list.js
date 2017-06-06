let Mock = require('mockjs'),
    Random = Mock.Random;

module.exports = {
    "status": 0,
    "message": "success",
    "data": {
        "totalCount|3-8": 5,
        "totalPageCount": 10,
        "pageNo": 1,
        "pageSize": 10,
        "list|3-5": [
            {
                "id": Mock.mock('@id'),
                "name": Mock.mock('@cname'),
                "description": Mock.mock('@cparagraph(2)'),
                "duration|2-8": 7,
                "importance|1-5": 5,
                "generateRulesDescription": Mock.mock('@cparagraph'),
                "completeRulesDescription": Mock.mock('@cparagraph')
            }
        ]
    }
}