<template>
    <div>
        <div>
            <el-input v-model="searchContent" placeholder="输入关键字搜索"></el-input>
            <el-button class="searchButton" icon="el-icon-search" @click="getMettingBySomethings" round>查询</el-button>
            <el-button class="addMetting" @click="addMetting">发布会议</el-button>
        </div>
        <el-table :data="tableData" :default-sort="{ prop: 'date', order: 'descending' }">
            <el-table-column fixed prop="mettingName" label="会议名称" width="250" align="center">
            </el-table-column>
            <el-table-column prop="startTime" sortable label="开始时间" width="250" align="center">
            </el-table-column>
            <el-table-column prop="endTime" sortable label="结束时间" width="250" align="center">
            </el-table-column>
            <el-table-column prop="mettingAddress" label="会议地点" width="200" align="center">
            </el-table-column>
            <el-table-column prop="Minutes" label="会议纪要" width="200" align="center">
            </el-table-column>
            <el-table-column prop="participatDept" label="参会部门" width="200" align="center">
            </el-table-column>
            <el-table-column label="操作" width="200" align="center">
                <template slot-scope="scope">
                    <el-button type="primary" size="mini" round>查看详情</el-button>
                    <el-button type="danger" @click.native.prevent="deleteRow(scope.$index, tableData)" size="small" round>
                        移除
                    </el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination background layout="prev, pager, next" :total="total"
            @current-change="handleCurrentChange"
            :page-size="pageSize"
            :current-page="currentPage">
        </el-pagination>
        <AddMetting ref="dialogAddMetting"/> <!-- 会议发布子组件 -->
    </div>
</template>

<script>
import AddMetting from './AddMetting.vue'
export default {
    components:{
        AddMetting
    },
    data() {
        return {
            searchContent:null,//搜索内容
            currentPage: 5,//当前页码
            pageSize: 13,//每页显示数据条数
            total: 100,//总条数
            tableData: [{
                mettingName: '信息组第一次会议',
                startTime: '2023-11-11 13:30:00',
                endTime: '2023-11-11 16:30:00',
                mettingAddress: '3号教学楼401教室',
                Minutes: '第一次会议纪要.doc',
                participatDept: '信息组'
            }, {
                mettingName: '信息组第二次会议',
                startTime: '2023-10-11 13:30:00',
                endTime: '2023-11-11 16:30:00',
                mettingAddress: '3号教学楼401教室',
                Minutes: '未上传',
                participatDept: '信息组'
            }, {
                mettingName: '信息组第三次会议',
                startTime: '2023-12-11 13:30:00',
                endTime: '2023-11-11 16:30:00',
                mettingAddress: '3号教学楼401教室',
                Minutes: '未上传',
                participatDept: '信息组'
            }, {
                mettingName: '信息组第四次会议',
                startTime: '2023-01-11 13:30:00',
                endTime: '2023-11-11 16:30:00',
                mettingAddress: '3号教学楼401教室',
                Minutes: '未上传',
                participatDept: '信息组'
            }, {
                mettingName: '信息组第五次会议',
                startTime: '2023-02-11 13:30:00',
                endTime: '2023-11-11 16:30:00',
                mettingAddress: '3号教学楼401教室',
                Minutes: '未上传',
                participatDept: '信息组'
            }, {
                mettingName: '信息组第六次会议',
                startTime: '2023-03-11 13:30:00',
                endTime: '2023-11-11 16:30:00',
                mettingAddress: '3号教学楼401教室',
                Minutes: '未上传',
                participatDept: '信息组'
            }, {
                mettingName: '信息组第七次会议',
                startTime: '2023-04-11 13:30:00',
                endTime: '2023-11-11 16:30:00',
                mettingAddress: '3号教学楼401教室',
                Minutes: '未上传',
                participatDept: '信息组'
            }, {
                mettingName: '信息组第八次会议',
                startTime: '2023-08-11 13:30:00',
                endTime: '2023-11-11 16:30:00',
                mettingAddress: '3号教学楼401教室',
                Minutes: '未上传',
                participatDept: '信息组'
            }, {
                mettingName: '信息组第九次会议',
                startTime: '2023-06-11 13:30:00',
                endTime: '2023-11-11 16:30:00',
                mettingAddress: '3号教学楼401教室',
                Minutes: '未上传',
                participatDept: '信息组'
            }, {
                mettingName: '信息组第十次会议',
                startTime: '2023-10-15 13:30:00',
                endTime: '2023-11-11 16:30:00',
                mettingAddress: '3号教学楼401教室',
                Minutes: '未上传',
                participatDept: '信息组'
            }, {
                mettingName: '信息组第十一次会议',
                startTime: '2023-10-20 13:30:00',
                endTime: '2023-11-11 16:30:00',
                mettingAddress: '3号教学楼401教室',
                Minutes: '未上传',
                participatDept: '信息组'
            }, {
                mettingName: '信息组第十二次会议',
                startTime: '2023-08-21 13:30:00',
                endTime: '2023-11-11 16:30:00',
                mettingAddress: '3号教学楼401教室',
                Minutes: '未上传',
                participatDept: '信息组'
            }, {
                mettingName: '信息组第十三次会议',
                startTime: '2023-07-05 13:30:00',
                endTime: '2023-11-11 16:30:00',
                mettingAddress: '3号教学楼401教室',
                Minutes: '未上传',
                participatDept: '信息组'
            }]
        }
    },
    methods: {
        deleteRow(index, rows) {
            rows.splice(index, 1);
        },
        handleCurrentChange(currentPage) {
            alert("翻页啦！");
            //这里还需要给后台发送请求
        },
        getMettingBySomethings(){
            alert("根据会议名称模糊检索，还需要将请求发送至后台");
        },
        /**
         * 弹窗添加会议
         */
        addMetting(){
            this. $refs.dialogAddMetting.dialogVisible = true;
        }
    }
}

</script>


<style scoped>
.el-table {
    width: 95%;
    overflow-x: hidden !important;
    margin-left: 3%;
}

.el-input {
    margin-top: 1%;
    margin-left: 5%;
    width: 45%;
}

.searchButton {
    margin-left: 0.5%;
}

.addMetting {
    margin-left: 26%;

}
.el-pagination{
    margin-top: 0.5%;
    text-align: center;
}
</style>