<template>
    <div class="bulletin">
        <div class="details01">公告</div>
        <div class="details03"><el-link type="primary" :underline="false">查看更多</el-link></div>
        <div class="details02">
            <el-table :data="tableData">
                <el-table-column prop="titles" width="230" show-overflow-tooltip>
                </el-table-column>
                <el-table-column prop="date" width="100" align="right">
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
                date: '2016-05-02',
                titles: '这是第一个公告标题大大伟大',
            }, {
                date: '2016-05-04',
                titles: '这是第二个公告标题各色管道施工',
            }, {
                date: '2016-05-01',
                titles: '这是第三个公告标题都啊版报到报到不懂爱比哦打五笔哦对',
            }, {
                date: '2016-05-03',
                titles: '这是第四个公告标题大厅噶卫生服务',
            }, {
                date: '2016-05-03',
                titles: '这是第五个公告标题大厅噶卫到哪都爱你都i闹难道弄完',
            }
            ]
        };
    },
    methods: {

    },
}
</script>


<style scoped>
.bulletin{
    background-color: #FFFFFF;
}
.details01 {
    margin-top: 3%;
    margin-left: 8%;
    font-size: large;
    color: #606266;
}

.details02 {
    margin-left: 8%;
    font-size: medium;
}
.details03{
    float: right;
    margin-right: 10%;
    margin-top: 2%;
}
</style>