<template>
	<Modal v-model="show"
		title="任务记录详情"
		@on-ok="ok"
        @on-cancel="cancel"
        :mask-closable="maskClosable"
        :loading="loading"
    >
	    <div class="content">
			<div class="content-item">
				<p class="content-header">
					<span class="header-item">
						<Icon type="clipboard"></Icon>
					</span>
					<span>{{detailData.name}}</span>
					<span>
						<Rate :value="detailData.importance" disabled></Rate>
					</span>
					<span>{{detailData.statusName}}</span>
				</p>
			</div>
			<div class="content-item">
				<p>
					<span class="key">任务描述：</span>
					<span class="value">{{detailData.description}}</span>
				</p>
				<p>
					<span class="key">任务生成时间：</span>
					<span class="value">{{detailData.assignTime}}</span>

					<span class="key">任务完成时间：</span>
					<span class="value">{{detailData.completedTime}}</span>

					<span class="key">任务逾期时间：</span>
					<span class="value">{{detailData.expiredTime}}</span>
				</p>
			</div>
			<div class="content-item">
				<p>
					<span class="key">任务详情：</span>
				</p>
				<p>
					<span class="key">任务生成条件：</span>
					<span class="value">{{detailData.generateRuleDescription}}</span>
				</p>
				<p>
					<span class="key">任务完成条件：</span>
					<span class="value">{{detailData.completeRuleDescription}}</span>
				</p>
			</div>
			<div class="content-item">
				<p>
					<span class="key">任务工作记录：</span>
				</p>
				<p v-for="item in detailData.traceLogs">
					<span class="value">{{item.createTime}}</span>
					<span class="value">{{item.resultName}}</span>
					<span class="value">{{item.content}}</span>
				</p>
			</div>
	    </div>
	</Modal>
</template>

<script>
export default {
	data() {
		return {
			show: false,
			maskClosable: false,
			loading: true
		}
	},

	props:['detailData'],

	methods: {
		ok () {
			console.log(this.$Modal);
			setTimeout(() => {
				this.show = false; //手动关闭
                this.$Message.info('异步关闭了对话框');
            }, 2000);
		},

		cancel () {

		},

		showModal () {
			this.show = true;
		}
	}
}

</script>

<style lang="less">
	.ivu-modal {
		.ivu-modal-body {
			padding-top: 0;
		}
		.ivu-rate {
			font-size: 14px;
		}
		.content {
			padding-top: 5px;
			padding-bottom: 5px;
		}
		.content-item {
			padding: 5px 0;
			font-size: 12px;
			p {
				margin: 0;
			}
			span {
				display: inline-block;
			}
			.key {
				font-weight: bold;
			}
			.value {
				color: #666;
				margin-right: 10px;
			}
			.content-header {
				display: flex;
				height: 50px;
				span {
					width: 25%;
					height: 100%;
					line-height: 50px;
				}
				.header-item i {
    				font-size: 50px;
				}
			}
		}
		.content-item:not(:last-child) {
			border-bottom: 1px #ccc dotted;
		}
	}
</style>