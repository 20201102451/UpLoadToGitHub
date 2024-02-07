<template>
    <div class="bodyClass">
        <div>
            <div>
                <el-input v-model="search" placeholder="输入关键字搜索"></el-input>
                <el-button class="searchButton" icon="el-icon-search" round>查询</el-button>
                <el-button class="addFile">已批阅</el-button>
                <el-button class="allMyFile">未批阅</el-button>
            </div>
            <el-table :data="tableData" :default-sort="{ prop: 'date', order: 'descending' }">
                <el-table-column fixed prop="startTime" label="报告开始日期" width="250" align="center">
                </el-table-column>
                <el-table-column prop="endTime" label="报告结束日期" width="250" align="center">
                </el-table-column>
                <el-table-column prop="name" label="姓名" width="200" align="center">
                </el-table-column>
                <el-table-column prop="number" sortable label="工号" width="200" align="center">
                </el-table-column>
                <el-table-column prop="submitTime" sortable label="最后修改时间" width="200" align="center">
                </el-table-column>
                <el-table-column label="状态" width="200" align="center">
                    <template slot-scope="scope">
                        <i :class="applyClass(scope.row.statusCode)" style="font-size: larger;"> {{
                            statusContent[scope.row.statusCode] }}</i>
                    </template>
                </el-table-column>
                <el-table-column label="操作" width="200" align="center">
                    <template slot-scope="scope">
                        <el-button type="primary" size="mini" round @click="getReportData(scope.row)">查看</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <el-pagination background layout="prev, pager, next" :total="total" @current-change="handleCurrentChange"
                :page-size="pageSize" :current-page="currentPage">
            </el-pagination>
        </div>
        <el-dialog :title="count" :visible.sync="centerDialogVisible" width="50%" center>
            <div class="textBody">
                <span style="color: #409EFF; font-size: larger;">报告内容</span>
                <p>{{ reportContent }}</p>
                <el-divider></el-divider>
            </div>
            <div class="commentBody">
                <span style="color: #409EFF; font-size: larger;">审核意见</span>
                <div class="inputDiv">
                    <el-input type="textarea" :autosize="{ minRows: 10, maxRows: 20 }" placeholder="请输入内容"
                        v-model="commentContent">
                    </el-input>
                </div>
                <span style="color: #409EFF; font-size: larger;">审核状态</span>
                <div style="margin-top: 1em; margin-left: 3em;">
                    <el-select v-model="value" placeholder="请选择">
                        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                </div>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="centerDialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
export default {
    data() {
        return {
            options: [{
                value: '3',
                label: '不予通过'
            }, {
                value: '0',
                label: '审核通过'
            }],
            value: '',
            commentContent: '',
            count: null,
            centerDialogVisible: false,
            search: '',
            currentPage: 2,//当前页码
            pageSize: 13,//每页显示数据条数
            total: 100,//总条数
            statusContent: ["审核完成", "错误", "等待审核", "未通过"],
            reportContent: "这是测试内容大量看到你看得开按我看的那我打我打打我大大这是测试内容大量看到你看得开按我看的那我打我打打我大大这是测试内容大大这是测试内容大量看到你看得开按我看的那我打我打打我大大这是测试内大大这是测试内容大量看到你看得开按我看的那我打我打打我大大这是测试内大大这是测试内容大量看到你看得开按我看的那我打我打打我大大这是测试内大量看到你看得开按我看的那我打我打打我大大这是测试内容大量看到你看得开按我看的那我打我打打我大大这是测试内容大量看到你看得开按我看的那我打我打打我大大这是测试内容大量看到你看得开按我看的那我打我打打我大大这是测试内容大量看到你看得开按我看的那我打我打打我大大这是测试内容大量看到你看得开按我看的那我打我打打我大大这是测试内容大量看到你看得开按我看的那我打我打打我大大这是测试内容大量看到你看得开按我看的那我打我打打我大大这是测试内容大量看到你看得开按我看的那我打我打打我大大这是测试内容大量看到你看得开按我看的那我打我打打我大大这是测试内容大量看到你看得开按我看的那我打我打打我大大这是测试内容大量看到你看得开按我看的那我打我打打我大大这是测试内容大量看到你看得开按我看的那我打我打打我大大这是测试内容大量看到你看得开按我看的那我打我打打我大大这是测试内容大量看到你看得开按我看的那我打我打打我大大这是测试内容大量看到你看得开按我看的那我打我打打我大大这是测试内容大量看到你看得开按我看的那我打我打打我大大这是测试内容大量看到你看得开按我看的那我打我打打我大大",
            tableData: [
                {
                    startTime: '2024-1-1',
                    endTime: '2024-1-7',
                    name: '王小明',
                    number: '100001',
                    submitTime: '2024-1-6 13:40:05',
                    statusCode: '0',
                    type: 1,
                    count: 2
                },
                {
                    startTime: '2024-1-1',
                    endTime: '2024-1-7',
                    name: '王小明',
                    number: '100001',
                    submitTime: '2024-1-6 13:40:05',
                    statusCode: '3',
                    type: 1,
                    count: 2
                },
                {
                    startTime: '2024-1-1',
                    endTime: '2024-1-7',
                    name: '王小明',
                    number: '100001',
                    submitTime: '2024-1-6 13:40:05',
                    statusCode: '2',
                    type: 1,
                    count: 2
                },
                {
                    startTime: '2024-1-1',
                    endTime: '2024-1-7',
                    name: '王小明',
                    number: '100001',
                    submitTime: '2024-1-6 13:40:05',
                    statusCode: '3',
                    type: 1,
                    count: 2
                },
                {
                    startTime: '2024-1-1',
                    endTime: '2024-1-7',
                    name: '王小明',
                    number: '100001',
                    submitTime: '2024-1-6 13:40:05',
                    statusCode: '0',
                    type: 1,
                    count: 2
                },
                {
                    startTime: '2024-1-1',
                    endTime: '2024-1-7',
                    name: '王小明',
                    number: '100001',
                    submitTime: '2024-1-6 13:40:05',
                    statusCode: '0',
                    type: 1,
                    count: 2
                },
                {
                    startTime: '2024-1-1',
                    endTime: '2024-1-7',
                    name: '王小明',
                    number: '100001',
                    submitTime: '2024-1-6 13:40:05',
                    statusCode: '0',
                    type: 1,
                    count: 2
                },
                {
                    startTime: '2024-1-1',
                    endTime: '2024-1-7',
                    name: '王小明',
                    number: '100001',
                    submitTime: '2024-1-6 13:40:05',
                    statusCode: '0',
                    type: 1,
                    count: 2
                },
                {
                    startTime: '2024-1-1',
                    endTime: '2024-1-7',
                    name: '王小明',
                    number: '100001',
                    submitTime: '2024-1-6 13:40:05',
                    statusCode: '0',
                    type: 1,
                    count: 2
                },
                {
                    startTime: '2024-1-1',
                    endTime: '2024-1-7',
                    name: '王小明',
                    number: '100001',
                    submitTime: '2024-1-6 13:40:05',
                    statusCode: '0',
                    type: 1,
                    count: 2
                },
                {
                    startTime: '2024-1-1',
                    endTime: '2024-1-7',
                    name: '王小明',
                    number: '100001',
                    submitTime: '2024-1-6 13:40:05',
                    statusCode: '0',
                    type: 1,
                    count: 2
                },
                {
                    startTime: '2024-1-1',
                    endTime: '2024-1-7',
                    name: '王小明',
                    number: '100001',
                    submitTime: '2024-1-6 13:40:05',
                    statusCode: '0',
                    type: 1,
                    count: 2
                },
                {
                    startTime: '2024-1-1',
                    endTime: '2024-1-7',
                    name: '王小明',
                    number: '100001',
                    submitTime: '2024-1-6 13:40:05',
                    statusCode: '0',
                    type: 1,
                    count: 2
                },
                {
                    startTime: '2024-1-1',
                    endTime: '2024-1-7',
                    name: '王小明',
                    number: '100001',
                    submitTime: '2024-1-6 13:40:05',
                    statusCode: '0',
                    type: 0,
                    count: 2
                }
            ]
        }
    },
    methods: {
        handleCurrentChange(currentPage) {
            alert("翻页啦！");
            //这里还需要给后台发送请求
        },
        applyClass(statusCode) {
            switch (statusCode) {
                case '0':
                    return "el-icon-success success";//通过审核
                case '3':
                    return "el-icon-warning danger"; //未通过
                case '2':
                    return "el-icon-s-promotion warning"; //等待审核
                default:
                    return "el-icon-error danger";//错误
            }
        },
        getReportData(data) {
            this.centerDialogVisible = true
            if (data.type == 1) {
                this.count = "第" + data.count + "周";
            } else if (data.type == 0) {
                this.count = "第" + data.count + "月";
            } else {
                console.log("报告类型出错！");
            }

        }
    }
}
</script>

<style scoped>
.inputDiv {
    margin-top: 1em;
    margin-bottom: 1em;
}

.el-textarea {
    width: 58em;
}

.commentBody {
    margin-top: 1em;

}

.textBody {
    font-size: larger;
}

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

.addFile {
    margin-left: 18%;

}

.allMyFile {
    margin-left: 0.5%;

}

.el-pagination {
    margin-top: 0.5%;
    text-align: center;
}

.bodyClass {
    float: left;
    margin-top: 0.3%;
    margin-left: 1%;
    width: 98%;
    height: 898px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    background-color: #fff;
    border-radius: 8px;
}

.success {
    color: green;
}

.warning {
    color: #E0BD22;
}

.danger {
    color: red;
}
</style>