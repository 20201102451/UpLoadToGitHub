<template>
    <el-tabs v-model="activeName" @tab-click="handleClick" type="border-card">
        <el-tab-pane label="" name="first" disabled></el-tab-pane>
        <el-tab-pane label="" name="second" disabled></el-tab-pane>
        <el-tab-pane label="周报" name="weekly">
            <WeekReport class="bodycard"></WeekReport>
        </el-tab-pane>
        <el-tab-pane label="月报" name="monthly">
            <MonthReport class="bodycard"></MonthReport>
        </el-tab-pane>
    </el-tabs>
</template>
<script>
import WeekReport from "@/views/Report/WeekReport.vue"
import MonthReport from "@/views/Report/MonthReport.vue"
export default {
    components: {
        WeekReport,
        MonthReport
    },
    data() {
        return {
            activeName: 'weekly'
        };
    },
    methods: {
        handleClick(tab, event) {
            var index = tab.index;
            if (index == 2) {
                console.log("跳转周报页面！");

            } else if (index == 3) {
                console.log("跳转月报页面！");


            } else {
                console.log("跳转出错！");

            }
        }
    }
};
</script>

<style scoped>

</style>