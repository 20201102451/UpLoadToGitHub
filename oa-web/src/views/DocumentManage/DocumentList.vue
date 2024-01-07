<template>
    <div>
        <div>
            <el-input v-model="search" placeholder="输入关键字搜索"></el-input>
            <el-button class="searchButton" icon="el-icon-search" round>查询</el-button>
            <el-button class="addFile" @click="addFile">上传文件</el-button>
            <el-button class="allMyFile">查看我上传的文件</el-button>
            <AddDocument ref="addFile"/>
        </div>
        <el-table :data="tableData" :default-sort="{ prop: 'date', order: 'descending' }">
            <el-table-column fixed prop="fileName" label="文件名" width="300" align="center">
            </el-table-column>
            <el-table-column prop="uploadTime" sortable label="上传时间" width="250" align="center">
            </el-table-column>
            <el-table-column prop="expirationTime" sortable label="过期时间" width="250" align="center">
            </el-table-column>
            <el-table-column prop="size" sortable label="大小" width="200" align="center">
            </el-table-column>
            <el-table-column prop="uploader" label="上传者" width="200" align="center">
            </el-table-column>
            <el-table-column label="操作" width="350" align="center">
                <template slot-scope="scope">
                    <el-button type="primary" size="mini" round>下载</el-button>
                    <el-button type="danger" @click.native.prevent="deleteRow(scope.$index, tableData)" size="small" round>
                        删除
                    </el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination background layout="prev, pager, next" :total="total" @current-change="handleCurrentChange"
            :page-size="pageSize" :current-page="currentPage">
        </el-pagination>
    </div>
</template>

<script>
import AddDocument from './AddDocument.vue';
export default {
    components: {
        AddDocument
    },
    data() {
        return {
            search:'',
            currentPage: 2,//当前页码
            pageSize: 13,//每页显示数据条数
            total: 100,//总条数
            tableData: [{
                fileName: '文件1.docx',
                uploadTime: '2023-11-11 13:30:00',
                expirationTime: '2023-11-11 13:30:00',
                size: '30MB',
                uploader: '王小明'
            }, {
                fileName: '文件1.docx',
                uploadTime: '2023-11-11 13:30:00',
                expirationTime: '2023-11-11 13:30:00',
                size: '30MB',
                uploader: '王小明'
            }, {
                fileName: '文件1.docx',
                uploadTime: '2023-11-11 13:30:00',
                expirationTime: '2023-11-11 13:30:00',
                size: '30MB',
                uploader: '王小明'
            }, {
                fileName: '文件1.docx',
                uploadTime: '2023-11-11 13:30:00',
                expirationTime: '2023-11-11 13:30:00',
                size: '30MB',
                uploader: '王小明'
            }, {
                fileName: '文件1.docx',
                uploadTime: '2023-11-11 13:30:00',
                expirationTime: '2023-11-11 13:30:00',
                size: '30MB',
                uploader: '王小明'
            }, {
                fileName: '文件1.docx',
                uploadTime: '2023-11-11 13:30:00',
                expirationTime: '2023-11-11 13:30:00',
                size: '30MB',
                uploader: '王小明'
            }, {
                fileName: '文件1.docx',
                uploadTime: '2023-11-11 13:30:00',
                expirationTime: '2023-11-11 13:30:00',
                size: '30MB',
                uploader: '王小明'
            }, {
                fileName: '文件1.docx',
                uploadTime: '2023-11-11 13:30:00',
                expirationTime: '2023-11-11 13:30:00',
                size: '30MB',
                uploader: '王小明'
            }, {
                fileName: '文件1.docx',
                uploadTime: '2023-11-11 13:30:00',
                expirationTime: '2023-11-11 13:30:00',
                size: '30MB',
                uploader: '王小明'
            }, {
                fileName: '文件1.docx',
                uploadTime: '2023-11-11 13:30:00',
                expirationTime: '2023-11-11 13:30:00',
                size: '30MB',
                uploader: '王小明'
            }, {
                fileName: '文件1.docx',
                uploadTime: '2023-11-11 13:30:00',
                expirationTime: '2023-11-11 13:30:00',
                size: '30MB',
                uploader: '王小明'
            }, {
                fileName: '文件1.docx',
                uploadTime: '2023-11-11 13:30:00',
                expirationTime: '2023-11-11 13:30:00',
                size: '30MB',
                uploader: '王小明'
            }, {
                fileName: '文件1.docx',
                uploadTime: '2023-11-11 13:30:00',
                expirationTime: '2023-11-11 13:30:00',
                size: '30MB',
                uploader: '王小明'
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
        addFile() {
            this.$refs.addFile.dialogVisible = true;
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
</style>