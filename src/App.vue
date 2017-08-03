<template>
    <div id="app">
        <my-header></my-header>
        <my-menu></my-menu>
        <div class="main">
            <router-view :key="$route.fullPath"></router-view>
        </div>
    </div>
</template>

<script>
import MyMenu from '@components/layout/menu/Menu';
import MyHeader from '@components/layout/Header';

export default {
    name: 'app',
    components: {
        MyMenu,
        MyHeader
    }
}
</script>

<style lang="less">
    #app {
        padding-top: 50px;
    }
    .main {
        padding: 10px;
        margin-left: 165px;
    }
    .ivu-loading-bar {
        top: 50px;
    }
</style>
