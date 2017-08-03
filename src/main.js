import Vue from 'vue';
import App from './App';
import router from './router';
import net from './net';
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import '@/style/main.less';

Vue.use(iView);

Vue.config.productionTip = false;

net.accountInfo.getAccountInfo().then(res => {
    Vue.prototype.accountInfo = {id: 123,name: '234'};

    new Vue({
        el: '#app',
        router,
        render: h => h(App)
    });
});
