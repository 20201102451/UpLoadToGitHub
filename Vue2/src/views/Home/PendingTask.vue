<template>
    <div>
        <div class="titlePending">我的代办</div>
        <el-table :data="tableData" max-height="290px">
            <el-table-column fixed prop="id" label="任务ID" width="150" align="center">
            </el-table-column>
            <el-table-column prop="pendType" label="申请类型" width="120" align="center">
            </el-table-column>
            <el-table-column prop="pendTime" label="申请时间" width="180" align="center">
            </el-table-column>
            <el-table-column prop="endTime" label="结束时间" width="180" align="center">
            </el-table-column>
            <el-table-column prop="applicant" label="申请人" width="200" align="center">
            </el-table-column>
            <el-table-column label="操作" width="430" align="center">
                <template slot-scope="scope">
                    <el-button type="primary" size="mini" round>查看详情</el-button>
                    <el-button type="success" size="mini" round>流程记录</el-button>
                    <el-button type="danger" size="mini" round>驳回</el-button>
                    <el-button @click.native.prevent="deleteRow(scope.$index, tableData)" type="text" size="small">
                        移除
                    </el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
export default {
    methods: {
        deleteRow(index, rows) {
            rows.splice(index, 1);
        }
    },
    data() {
        return {
            tableData: [{
                id: '10001',
                pendType: '请假申请',
                pendTime: '2023-10-11 13:30:00',
                endTime: '2023-10-12 14:25:30',
                applicant: '王小明'
            }, {
                id: '10002',
                pendType: '请假申请',
                pendTime: '2023-10-11 13:30:00',
                endTime: '2023-10-12 14:25:30',
                applicant: '王小明'
            }, {
                id: '10003',
                pendType: '请假申请',
                pendTime: '2023-10-11 13:30:00',
                endTime: '2023-10-12 14:25:30',
                applicant: '王小明'
            }, {
                id: '10004',
                pendType: '请假申请',
                pendTime: '2023-10-11 13:30:00',
                endTime: '2023-10-12 14:25:30',
                applicant: '王小明'
            }, {
                id: '10005',
                pendType: '请假申请',
                pendTime: '2023-10-11 13:30:00',
                endTime: '2023-10-12 14:25:30',
                applicant: '王小明'
            }, {
                id: '10006',
                pendType: '请假申请',
                pendTime: '2023-10-11 13:30:00',
                endTime: '2023-10-12 14:25:30',
                applicant: '王小明'
            }, {
                id: '10007',
                pendType: '请假申请',
                pendTime: '2023-10-11 13:30:00',
                endTime: '2023-10-12 14:25:30',
                applicant: '王小明'
            }]
        }
    }
}

</script>

<style scoped>
.titlePending {
    margin-top: 2%;
    margin-left: 3%;
    font-size: large;
    color: #606266;
}

.el-table {
    width: 95%;
    margin-left: 3%;
    overflow-x: hidden !important;
}
</style>