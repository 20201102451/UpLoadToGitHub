<template>
    <div class="majorBody">
        <el-input v-model="search" placeholder="输入关键字搜索"></el-input>
        <el-button class="searchButton" icon="el-icon-search" round>查询</el-button>
        <el-button class="searchButton" icon="el-icon-plus" round>新增员工</el-button>
        <el-table :data="tableData" :default-sort="{ prop: 'date', order: 'descending' }">
            <el-table-column fixed prop="id" label="工号" width="250" align="center">
            </el-table-column>
            <el-table-column prop="name" label="姓名" width="250" align="center">
            </el-table-column>
            <el-table-column prop="number" label="联系方式" width="200" align="center">
            </el-table-column>
            <el-table-column prop="deptName" label="部门" width="200" align="center">
            </el-table-column>
            <el-table-column prop="posts" label="职位" width="200" align="center">
            </el-table-column>
            <el-table-column label="权限" width="200" align="center">
                <template slot-scope="scope">
                    <i :class="applyClass(scope.row.statusCode)" style="font-size: larger;"> {{
                        statusContent[scope.row.statusCode] }}</i>
                </template>
            </el-table-column>
            <el-table-column label="操作" width="200" align="center">
                <template slot-scope="scope">
                    <el-button type="primary" size="mini" round @click="getReportData(scope.row)">修改</el-button>
                    <el-button type="primary" size="mini" round @click="getReportData(scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination background layout="prev, pager, next" :total="total" @current-change="handleCurrentChange"
            :page-size="pageSize" :current-page="currentPage">
        </el-pagination>
    </div>
</template>

<script>
export default {
    data() {
        return {
            search: '',
            currentPage: 2,//当前页码
            pageSize: 13,//每页显示数据条数
            total: 100,//总条数
            tableData: null
        }
    },
    mounted(){
        //进入页面时，向后台发送请求，进行第一页员工信息查询
        //这里模拟请求发送，接收数据，实际数据来源于json文件
        
    }
}

</script>

<style scoped>
.el-pagination {
    margin-top: 0.5%;
    text-align: center;
}
.searchButton {
    margin-left: 0.5%;
}

.el-input {
    margin-top: 1%;
    margin-left: 5%;
    width: 45%;
}

.majorBody {
    margin-left: 1em;
    margin-top: 1em;
    overflow-x: hidden;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
}
</style>