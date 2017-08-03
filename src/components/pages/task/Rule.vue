<template>
    <div class="rule">
    	<div class="rule-table">
            <table class="table">
                <thead>
                    <tr>
                        <th>任务名称</th>
                        <th>任务描述</th>
                        <th>重要性</th>
                  </tr>
                </thead>
                <tbody>
                    <tr v-for="item in list">
                        <td>{{item.name}}</td>
                        <td>
                            <span>{{item.description}}</span>
                            <i class="ivu-icon ivu-icon-help-circled">
                                <div class="rule-detail">
                                    <h5>任务生成条件</h5>
                                    <p>{{item.generateRulesDescription}}</p>
                                    <h5>任务完成条件</h5>
                                    <p>{{item.completeRulesDescription}}</p>
                                    <h5>任务有效期</h5>
                                    <p>{{item.duration}}个自然日</p>
                                    <h5>任务生成日</h5>
                                    <p>每天早上8点</p>
                                </div>
                            </i>
                        </td>
                        <td>
                            <Rate :value="item.importance" disabled></Rate>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import dao from '@dao'

export default {
    data () {
        return {
            list: []
        }
    },

    methods: {
        getRuleData () {
            dao.task.getHeadquarterSystemList().then((res) => {
                this.list = res.data.data.list
            });
        }
    },

    mounted () {
        this.getRuleData();
    }
}
</script>

<style scoped lang="less">
	.rule-table {
        width: 90%;
        margin: 10px auto;
    }
    .ivu-icon {
        position: relative;
        cursor: pointer;
        .rule-detail {
            position: absolute;
            top: 15px;
            left: 10px;
            display: none;
            opacity: 0;
            background-color: #ffc;
            padding: 10px;
            max-width: 400px;
            min-width: 250px;
            cursor: default;
            text-align: left;
            z-index: 999;
        }
        &:hover .rule-detail {
            display: block;
            opacity: 1;
        }
    }
</style>
