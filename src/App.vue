<template>
    <div id="app">
        <div class="menu-wrapper">
            <my-menu></my-menu>
        </div>
        <div class="main">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import MyMenu from '@components/component/menu/Menu'

export default {
    name: 'app',
    components: {
        MyMenu
    }
}
</script>

<style lang="less">
    .menu-wrapper {
        position: fixed;
        top: 0;
        left: 0;
        width: 240px;
        height: 100%;
        overflow: auto;
        border-right: 1px solid #d7dde4;
    }
    .main {
        padding: 10px 0;
        margin-left: 245px;
    }
</style>
