let prefix = '/sme-cs/web/';

export default {
    //获取首页summary数据
    getAccountInfo (param) {
        // return axios.get(prefix + 'summary', param);
        return axios.get(prefix + '/init', param);
        // return {id: 123,name: '234'};
    },
}
