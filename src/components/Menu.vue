<template>
    <Row>
        <Col span="8">
            <Menu :theme="theme2">
                <Submenu name="1">
                    <template slot="title">
                        <Icon type="ios-paper"></Icon>
                        首页
                    </template>
                    <Menu-item name="1-1">
                    	<router-link to="/">首页</router-link>
                    </Menu-item>
                </Submenu>
                <Submenu name="2">
                    <template slot="title">
                        <Icon type="ios-people"></Icon>
                        任务管理
                    </template>
                    <Menu-item name="2-1">
                    	<router-link to="/task/list">任务列表</router-link>
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
                <Submenu name="3">
                    <template slot="title">
                        <Icon type="stats-bars"></Icon>
                        1
                    </template>
                    <Menu-group title="使用">
                        <Menu-item name="3-1">111</Menu-item>
                        <Menu-item name="3-2">222</Menu-item>
                        <Menu-item name="3-3">333</Menu-item>
                    </Menu-group>
                    <Menu-group title="留存">
                        <Menu-item name="3-4">444</Menu-item>
                        <Menu-item name="3-5">555</Menu-item>
                    </Menu-group>
                </Submenu>
            </Menu>
        </Col>
    </Row>
</template>
<script>
    export default {
        data () {
            return {
                theme2: 'light'
            }
        }
    }
</script>
