<template>
    <div id="app">
        <my-header></my-header>
        <div class="menu-wrapper">
            <my-menu></my-menu>
        </div>
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
    .menu-wrapper {
        position: fixed;
        top: 50px;
        left: 0;
        width: 165px;
        height: 100%;
        padding-top: 15px;
        overflow: auto;
        border-right: 1px solid #d7dde4;
        background-color: #f6f6f6;
        user-select: none;
        font-family: Lato,'Helvetica Neue',Arial,Helvetica,sans-serif;
    }
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
