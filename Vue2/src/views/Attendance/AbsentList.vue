<template>
    <div class="majorBody">
        <div class="titleText">
            今日缺勤员工
        </div>
        <div class="table">
            <el-table :data="tableData" border style="width: 100%; margin-left: 1em">
                <el-table-column prop="id" label="工号" width="180" align="center">
                </el-table-column>
                <el-table-column prop="name" label="姓名" width="180" align="center">
                </el-table-column>
                <el-table-column prop="dept" label="部门" width="180" align="center">
                </el-table-column>
                <el-table-column prop="number" label="联系方式" width="180" align="center">
                </el-table-column>
                <el-table-column prop="posts" label="职位" width="180" align="center">
                </el-table-column>
                <el-table-column prop="reason" label="缺勤原因" width="180" align="center">
                </el-table-column>
                <el-table-column label="操作" width="180" align="center">
                    <template slot-scope="scope">
                        <el-button type="primary" size="mini" @click="setTabletData(scope.row)" v-if="scope.row.status == 0">豁免</el-button>
                        <el-button type="danger" size="mini" @click="setTabletData(scope.row)" v-else="scope.row.status == 1">取消豁免</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            tableData: [{
                id: '10001',
                number: '18647377201',
                name: '王小虎',
                dept: '语文组',
                posts: '普通教师',
                reason: '这是缺勤原因',
                status: 1//1代表已经豁免过了
            },{
                id: '10002',
                number: '18647377208',
                name: '王小明',
                dept: '语文组',
                posts: '组长',
                reason: '这是缺勤原因',
                status: 0

            }]
        }
    }
}

</script>

<style scoped>
.titleText{
    font-size: xx-large;
    position: relative;
    left: 2em;
}
.majorBody{
    margin-left: 1em;
    margin-top: 1em;
    overflow-x: hidden;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
}
</style>