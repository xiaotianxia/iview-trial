<template>
    <div class="rule">
    	<div class="rule-table">
            <Table border stripe :columns="title" :data="list"></Table>   
        </div>
    </div>
</template>

<script>
import net from '@net'

export default {
    data () {
        return {
            title: [
                {
                    title: '任务名称',
                    key: 'name',
                    width: 100
                },
                {
                    title: '任务描述',
                    key: 'description'
                },
                {
                    title: '重要性',
                    key: 'importance',
                    width: 200,
                    render: (h, params) => {
                        return h('Rate', {
                            attrs: {
                                disabled: true
                            },
                            props: {
                                value: params.row.importance
                            }
                        });
                    }
                }
            ],
            list: []
        }
    },

    methods: {
        getRuleData () {
            net.task.getHeadquarterSystemList().then((res) => {
                this.list = res.data.data.list
            }, () => {
                console.log('error');
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
</style>
