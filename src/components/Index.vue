<template>
    <div class="index">
    	<div class="index-select">
    		<Select v-model="city" style="width:200px" @on-change="onChange">
		        <Option v-for="item in cityList" :value="item.value" :key="item">{{ item.label }}</Option>
		    </Select>
    	</div>
    	<div class="index-display">
    		<Row>
		        <Col span="11">
		            <Card>
		                <p slot="title">标准卡片</p>
		                <p>{{city}}</p>
		            </Card>
		        </Col>
		        <Col span="11" offset="2">
		            <Card dis-hover>
		                <p slot="title">禁用悬停阴影的卡片</p>
		                <p>{{city}}</p>
		            </Card>
		        </Col>
		    </Row>
    	</div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            cityList: [
                {
                    value: 'beijing',
                    label: '北京市'
                },
                {
                    value: 'shanghai',
                    label: '上海市'
                },
                {
                    value: 'shenzhen',
                    label: '深圳市'
                },
                {
                    value: 'hangzhou',
                    label: '杭州市'
                },
                {
                    value: 'nanjing',
                    label: '南京市'
                },
                {
                    value: 'chongqing',
                    label: '重庆市'
                }
            ],
            city: ''
        }
    },

    methods: {
    	onChange(val) {
    		console.log(this.city);
    	}
    }
}
</script>

<style scoped lang="less">
	.index-display {
		margin-top: 10px;
	}
</style>
