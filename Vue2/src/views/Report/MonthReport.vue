<template>
    <div>
        <div v-for="(item, index) in DataList" :key="index">
            <el-card class="box-card">
                <div slot="header" class="clearfix">
                    <span>第{{ item.count }}月</span>
                    <el-button style="float: right; padding: 3px 0" type="text"
                        @click="handleOpen(item.count)">查看</el-button>

                </div>
                <div>
                    <i :class="applyClass(item.status)" style="font-size: xx-large;"> {{ stutasContent[item.status] }}</i>
                </div>
                <div class="timeFont">{{ item.startTime }} 至 {{ item.endTime }}</div>
            </el-card>
        </div>
        <el-drawer :title="count" :visible.sync="drawer" :direction="direction" :before-close="handleClose">
            <div class="editContent">
                <el-input type="textarea"  :autosize="{ minRows: 15, maxRows: 20}" maxlength="255" show-word-limit placeholder="请输入内容" v-model="content" style="width: 35em;">
                </el-input>
            </div>
            <el-button class="saveButton">保存</el-button>
            <div v-show="commentData != null" style="margin-top: 15%; margin-left: 1em;">
                <span style="font-size: x-large;">批语：</span>
                <div style="margin-top: 1em;margin-right: 1em;">{{ commentData }}</div>
            </div>
        </el-drawer>
    </div>
</template>

<script>
import testData from "@/views/Report/Month.json"
export default {
    data() {
        return {
            DataList: testData,
            stutasContent: ["审核完成", "未提交", "等待审核", "未通过"],
            drawer: false,
            direction: 'rtl',
            count: null,
            content: '',
            // commentData: "这是一条测试批语蒂卡波迪阿贝变得比贝阿朵标榜为i蒂卡波迪阿贝变得比贝阿朵标榜为i蒂卡波迪阿贝变得比贝阿朵标榜为i蒂卡波迪阿贝变得比贝阿朵标榜为i蒂卡波迪阿贝变得比贝阿朵标榜为i"
            commentData: null
        }
    },
    methods: {
        applyClass(status) {
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
        },
        handleOpen(count) {//获取周报内容，进入周报编辑页
            this.drawer = true;
            this.count = "第" + count + "周";

        },
        handleClose(done) {//关闭周报详情页
            this.$confirm('确认关闭？')
                .then(_ => {
                    done();
                })
                .catch(_ => { });
        }
    }
}
</script>

<style scoped>
.saveButton{
    position: relative;
    top: 2em;
    right: 3em;
}
.el-textarea{
    margin-top: 2em;
    margin-right: 2em;
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

.timeFont {
    font-size: medium;
    margin-top: 5%;
}
</style>