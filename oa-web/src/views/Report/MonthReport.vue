<template>
    <div>
        <div v-for="(item,index) in DataList" :key="index">
            <el-card class="box-card">
                <div slot="header" class="clearfix">
                    <span>第{{item.count}}月</span>
                    <el-button style="float: right; padding: 3px 0" type="text">查看</el-button>
                </div>
                <div>
                    <i :class="applyClass(item.status)" style="font-size: xx-large;"> {{stutasContent[item.status]}}</i>
                </div>
                <div class="timeFont">{{item.startTime}} 至 {{item.endTime}}</div>
            </el-card>
        </div>
    </div>
</template>

<script>
import testData from "@/views/Report/Month.json"
export default {
    data() {
        return {
            DataList: testData,
            CardClass: {
                "el-icon-success":true, //通过审核
                "el-icon-warning": false, //未提交
                "el-icon-s-promotion": false, //等待审核
                "el-icon-error": false, //未通过
                "success": true,
                "warning": false,
                "danger": false
            },
            stutasContent: ["审核完成","未提交","等待审核","未通过"]
        }
    },
    methods: {
        applyClass(status){
            switch (status) {
                case "0":
                    return "el-icon-success success";//通过审核
                case "1":
                    return "el-icon-warning danger"; //未提交
                case "2":
                    return "el-icon-s-promotion warning"; //等待审核
                default:
                    return "el-icon-error danger";//未通过
            }
        }
    }
}
</script>

<style scoped>
.success{
    color: green;
}
.warning{
    color: #E0BD22;
}
.danger{
    color: red;
}

.text {
    font-size: 14px;
}

.item {
    margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
    display: table;
    content: "";
}

.clearfix:after {
    clear: both
}

.box-card {
    width: 350px;
    margin-left: 1%;
    float: left;
}
.timeFont{
    font-size: medium;
    margin-top: 5%;
}
</style>