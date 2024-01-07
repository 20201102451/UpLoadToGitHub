<template>
    <el-form ref="form" label-width="80px" size="mini">
        <div class="details01">考勤</div>
        <div class="moringDiv">上午
            <el-form-item size="small" label="签到时间:">
                <span>{{ moringIn }}</span>
                <el-button type="primary" @click="getCurrentTime">签到</el-button>
            </el-form-item>
            <el-form-item size="small" label="签退时间:">
                <span>{{ moringOut }}</span>
                <el-button type="primary" @click="getCurrentTime">签退</el-button>
            </el-form-item>
        </div>
        <div class="afternoonDiv">下午
            <el-form-item size="small" label="签到时间:">
                <span>{{ afternootIn }}</span>
                <el-button type="primary" @click="getCurrentTime">签到</el-button>
            </el-form-item>
            <el-form-item size="small" label="签退时间:">
                <span>{{ afternootOut }}</span>
                <el-button type="primary" @click="getCurrentTime">签退</el-button>
            </el-form-item>
        </div>
    </el-form>
</template>


<script>
export default {
    data() {
        return {
            //已设置好的时间
            moringIn: '08:30:00',
            moringOut: '12:00:00',
            afternootIn: '14:00:00',
            afternootOut: '18:00:00',
            //当前签到时间
            currentTime: null,
        }
    },
    methods: {
        getCurrentTime() {
            const current = new Date();
            const year = current.getFullYear();
            const month = current.getMonth() + 1;
            const day = current.getDate();
            const hours = current.getHours();
            const minutes = current.getMinutes();
            const seconds = current.getSeconds();
            this.currentTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
            console.log(this.currentTime);
        }
    },
}
</script>

<style scoped>
.el-form{
    background-color: #FFFFFF;
}
.details01{
    margin-top: 3%;
    margin-left: 8%;
    font-size: large;
    color: #606266;
}
.el-form-item {
    margin-left: 15%;
}

.el-form span {
    margin-left: 5%;
    margin-right: 20%;
}
.moringDiv,.afternoonDiv{
    font-size: large;
    margin-top: 10%;
    margin-left: 10%;
    
}
</style>