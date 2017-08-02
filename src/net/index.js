import task from './task';
import accountInfo from './accountInfo';

axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
axios.defaults.headers.common['Cache-Control'] = 'no-cache, no-store, must-revalidate';
axios.defaults.headers.common['Pragma'] = 'no-cache';
axios.defaults.headers.common['Expires'] = '0';

axios.interceptors.request.use(function(config) {
    if (/\?/.test(config.url)) {
        config.url += '&_=' + new Date().getTime()
    } else {
        config.url += '?_=' + new Date().getTime()
    }
    return config;
}, function(error) {
    return Promise.reject(error);
});

axios.interceptors.response.use(response => {
    let data = response.data
    if (data.ssoRedirect) {
        window.location.href = data.ssoLocation + "&target_url=" + encodeURIComponent(location.href);
        return Promise.reject(error);
    }
    return response;
}, error => {
    console.log(error);
    // return Promise.reject(error);
});

export default {
    task,
    accountInfo
}
