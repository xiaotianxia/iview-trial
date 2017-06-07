import Vue from 'vue';
import iView from 'iview';
import Router from 'vue-router';
import RouterConfig from './config';

Vue.use(Router);

let router = new Router(RouterConfig);

router.beforeEach((to, from, next) => {
    iView.LoadingBar.start();
    next();
});

router.afterEach(() => {
    iView.LoadingBar.finish();
    window.scrollTo(0, 0);
});

export default router;


