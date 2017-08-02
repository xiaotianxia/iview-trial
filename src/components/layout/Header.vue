<template>
    <div id="header" class="header ui borderless menu inverted">
        <div class="ui container fluid">
            <div class="logo">
                <div class="logo-title">AB-CDE</div>
                <div class="logo-subtitle">哈哈ABC</div>
            </div>
            <router-link to="/flow" class="item" active-class="active">
                用户列表
            </router-link>

            <router-link to="/task/monitor" class="item" active-class="active">
                账户列表
            </router-link>

            <router-link to="/report" class="item" active-class="active">
                CRM账户管理
            </router-link>

            <router-link to="/test" class="item" active-class="active">
                关系管理
            </router-link>

            <router-link to="/auth" class="item" active-class="active">
                我的账户
            </router-link>

            <div class="right menu">
                <span>代振</span>
                <span><a href="#">退出</a></span>
            </div>
        </div>
    </div>
</template>

<script>

export default {

}
</script>

<style lang="less" scoped>
    .header {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 50px;
        background: #393b46!important;
        border-radius: 0!important;
        border: 0;
        z-index: 999;
    }

    .header.ui.inverted.menu .item {
        color: white;
        font-size :14px;
    }

    .ui.borderless.menu.inverted.placeholder {
        margin: 0;
    }

    .right.menu {
        font-size: 12px;
        span {
            line-height: 50px;
            vertical-align: middle;
            padding: 0 20px;
            color : #fff
        }
        a {
            &,
            &:hover,
            &:visited {
                color: #fff;
            }
        }
    }
    .ui.inverted.menu .active.item {
        background: rgba(255,255,255,.15);
        color: #fff!important;
    }

    .logo {
        float: left;
        background: url("http://image.uc.cn/s/uae/g/0n/uccrm/crm-logo2.png") no-repeat left center;
        background-size: 32px 32px;
        margin-left: 23px;
        margin-right: 23px;
        height: 50px;
        line-height: 50px;
    }

    .logo-title, .logo-subtitle {
        color: #fff;
        text-indent:41px;
        box-sizing: content-box;
    }

    .logo-title {
        height: 20px;
        line-height: 20px;
        padding-top: 9px;
        font-size:20px;
        font-family: "Arial";
    }

    .logo-subtitle {
        height: 12px;
        line-height: 12px;
        font-size: 12px;
        font-family: "Microsoft YaHei", "SimSun";
    }
</style>
