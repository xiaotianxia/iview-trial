<template>
    <div class="menu-wrapper">
        <Menu :theme="theme" accordion :open-names="openNames" :active-name="activeName">
            <Menu-item name="1-1">
                <!-- <Icon type="ios-home"></Icon> -->
            	<router-link to="/">首页</router-link>
            </Menu-item>
            <Submenu name="2">
                <template slot="title">
                    <!-- <Icon type="ios-people"></Icon> -->
                    任务管理
                </template>
                <Menu-item name="2-1">
                	<router-link to="/task/list/valid">任务列表</router-link>
                </Menu-item>
                <Menu-item name="2-2">
                	<router-link to="/task/monitor">任务监控</router-link>
                </Menu-item>
                <Menu-item name="2-3">
                	<router-link to="/task/headquarters">总部任务下发</router-link>
                </Menu-item>
                <Menu-item name="2-4">
                	<router-link to="/task/rule">任务管理规则</router-link>
                </Menu-item>
            </Submenu>
            <!-- <Submenu name="3"> -->
                <Menu-item name="1">
                    <!-- <Icon type="ios-paper"></Icon> -->
                    <router-link to="/task/rule">管理</router-link>
                </Menu-item>
                <!-- <template slot="title">
                    <Icon type="stats-bars"></Icon>
                    1
                </template> -->
                <!-- <Menu-group title="使用">
                    <Menu-item name="3-1">111</Menu-item>
                    <Menu-item name="3-2">222</Menu-item>
                    <Menu-item name="3-3">333</Menu-item>
                </Menu-group>
                <Menu-group title="留存">
                    <Menu-item name="3-4">444</Menu-item>
                    <Menu-item name="3-5">555</Menu-item>
                </Menu-group> -->
            <!-- </Submenu> -->
        </Menu>
    </div>
</template>
<script>
import menuConfig from './menuConfig';

export default {
    data () {
        return {
            theme: 'light',
            openNames: [],
            activeName: ''
        }
    },

    created () {
        this.initMenu();
    },

    watch: {
        '$route.path' () {
            this.initMenu();
        }
    },

    methods: {
        initMenu () {
            let names = menuConfig.initMenu(this.$route.path);
            if(names) {
                this.openNames = [names.openNames];
                this.activeName = names.activeName;
            }
        }
    }
}
</script>
<style lang="less" scoped>
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
    .ivu-menu {
        width: 100%!important;
    }
    .ivu-menu,
    .ivu-menu-submenu,
    .ivu-menu-item {
        font-size: 14px;
    }
    .ivu-menu-item {
        padding: 0 24px!important;
        height: 38px;
        line-height: 38px;
        a {
            display: inline-block;
            width: 100%;
            height: 100%;
            color: rgba(0, 0, 0, .87)!important;
        }
        &:hover {
            background: none!important;
        }
    }
    .ivu-menu-item-selected {
        font-weight: bold;
        background-color: #e0e0e0;
        a {
            color: #1b1c1d;
        }
        &:hover {
            background-color: #e0e0e0!important;
        }
    }
    .ivu-menu-item-active {
        border: none!important;
    }
    .ivu-menu-submenu-title {
        color: rgba(0, 0, 0, .87)!important;
    }
    .ivu-menu-vertical.ivu-menu-light {
        background-color: transparent;
    }
    .ivu-menu-vertical.ivu-menu-light:after {
        width: 0;
    }
</style>
