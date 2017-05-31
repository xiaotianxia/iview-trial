<template>
    <div class="monitor">
    	<div class="monitor-form">
            <div class="form-group">
                <div class="form-item">
                    <label>运营单位</label>
                    <Select v-model="agentId">
                        <Option v-for="item in 5" :value="item" :key="item">{{ item }}</Option>
                    </Select>
                </div>
                <div class="form-item">
                    <label>下发日期</label>
                    <Date-picker type="daterange" 
                        format="yyyyMMdd"
                        v-model="date" 
                        :options="datePickerOptions" 
                        placement="bottom-end" 
                        placeholder="选择日期">
                    </Date-picker>
                </div>
                <div class="form-item">
                    <label>任务来源</label>
                    <Select v-model="source">
                        <Option v-for="item in Enum.TASK_DATA_CONFIG.source" :value="item.value" :key="item">{{ item.text }}</Option>
                    </Select>
                </div>
            </div>
            <div class="form-group">
                <div class="form-item">
                    <label>任务名称</label>
                    <Input v-model="name" placeholder="请输入..."></Input>
                </div>
                <div class="form-item">
                    <label>账户名称</label>
                    <Input v-model="accountName" placeholder="请输入..."></Input>
                </div>
                <div class="form-item">
                    <label>重要性</label>
                    <Select v-model="importance" name="importance">
                        <Option v-for="item in Enum.TASK_DATA_CONFIG.importance" :value="item.value" :key="item">{{ item.text }}</Option>
                    </Select>
                </div>
            </div>
            <div class="form-group">
                <div class="form-item">
                    <label>任务状态</label>
                    <Select v-model="status">
                        <Option v-for="item in Enum.TASK_DATA_CONFIG.source" :value="item.value" :key="item">{{ item.text }}</Option>
                    </Select>
                </div>
                <div class="form-item">
                    <Button type="primary" @click="onQuery">查询</Button>
                    <Button @click="onReset">重置</Button>
                    <Button type="success">报表导出</Button>
                </div>
            </div>
        </div>
        <div class="monitor-table">
        <table class="table">
                <thead>
                    <tr>
                        <th>账户名称</th>
                        <th>代理商</th>
                        <th>部门</th>
                        <th>客服</th>
                        <th>任务名称</th>
                        <th>任务来源</th>
                        <th>任务下发时间</th>
                        <th>最后跟进时间</th>
                        <th>任务逾期时间</th>
                        <th>任务结束时间</th>
                        <th>重要性</th>
                        <th>任务状态</th>
                        <th>操作</th>
                  </tr>
                </thead>
                <tbody>
                    <tr v-for="item in list">
                        <td>
                            <router-link :to="{path:'/account/detail', query:{uid:item.accountId}}">{{item.accountName}}</router-link>
                        </td>
                        <td>{{item.agentCsName}}</td>
                        <td>{{item.agentCustDeptName}}</td>
                        <td>{{item.agentCsName}}</td>
                        <td>{{item.name}}</td>
                        <td>{{item.sourceName}}</td>
                        <td>{{item.assignTime}}</td>
                        <td>{{item.lastTraceTime}}</td>
                        <td>{{item.expiredTime}}</td>
                        <td>{{item.completedTime}}</td>
                        <td>
                            <div class="ui mini star rating">
                                <Rate :value="item.importance"></Rate>
                            </div>
                        </td>
                        <td class="status" :class="`status-${item.status}`">{{item.statusName}}</td>
                        <td>
                            <a href="javascript:;" @click="onCheckDetail(item)">查看</a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <task-detail-modal ref="taskDetailModal" :detail-data="detailData"></task-detail-modal>
    </div>
</template>

<script>
import Enum from '@Enum'
import net from '@net'
import TaskDetailModal from '@components/component/modal/TaskDetailModal'

export default {
    data () {
        return {
            ...this.initParams(),
            initParamsObj: this.initParams(),
            list: [],
            Enum: Enum,
            startDate: Enum.START_DATE,
            endDate: Enum.END_DATE,
            datePickerOptions: Enum.datePickerOptions,
            detailData: {}
        }
    },

    components: {
        TaskDetailModal        
    },

    methods: {
    	initParams () {
            return {
                agentId: '',
                agentCsIds: '',
                date: [],
                assignStartDate: Enum.START_DATE,
                assignEndDate: Enum.END_DATE,
                importance: 0,
                status: -1,
                name: '',
                accountName: '',
                source: -1
            }
        },

        parseParams () {
            let paramObj = {};
            Object.keys(this.initParamsObj).map(key => {
                paramObj[key] = this[key];
            });

            paramObj.pageSize = this.pageSize;
            paramObj.pageNo = this.pageNo;

            return paramObj;
        },

        onReset () {
            Object.keys(this.initParamsObj).map(key => {
                this[key] = this.initParamsObj[key];
            });
        },

        onQuery () {
            net.task.getMonitorList(this.parseParams()).then(res => {
                let data = res.data;
                if(data.success) {
                    this.list = data.data.list;
                    // this.total = data.data.totalCount;
                }
            });
        },

        onCheckDetail (data) {
            this.detailData = data;
            this.$refs.taskDetailModal.showModal();
        }
    },

    watch: {
        date (data) {
            this.startDate = moment(data[0]).format('YYYYMMDD');
            this.endDate = moment(data[1]).format('YYYYMMDD');
        }
    },

    mounted () {
        this.onQuery();
    }
}
</script>

<style scoped lang="less">
    .monitor-table {
        width: 99%;
        margin: 0 auto;
    }
</style>
