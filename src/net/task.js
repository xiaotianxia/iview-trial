let prefix = '/sme-cs/web/';

export default {
    //获取首页summary数据
    getSummaryData(options = {}) {
        return axios.get(prefix + 'summary', {
            params: options
        });
    }, 

	//查询有效任务列表
    getTaskValidList(options = {}) {
        return axios.get(prefix + 'task/valid/list', {
            params: options
        });
    },

    //查询已结束任务列表
    getTaskFinishedList(options = {}) {
        return axios.get(prefix + 'task/finished/list', {
            params: options
        });
    },

    //添加工作记录
    addJobLog(data) {
        return axios.post(prefix + 'joblog/add', data);
    },

    //任务监控查询列表
    getMonitorList(options = {}) {
        return axios.get(prefix + 'task/monitor/list', {
            params: options
        });
    },

    //总部任务下发提交
    headquarterIssue(data = {}) {
        return axios.post(prefix + 'taskrule/headquarters/issue', data);
    },

    //总部任务下发列表
    getHeadquarterList(options = {}) {
        return axios.get(prefix + 'taskrule/headquarters/issue/list', {
            params: options
        });
    },

    //查询系统设定任务规则
    getHeadquarterSystemList(options = {}) {
        return axios.get(prefix + 'taskrule/system/list', {
            params: options
        });
    },
}