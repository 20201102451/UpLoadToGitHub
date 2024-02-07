<template>
    <div>
        测试ECharts图表
        <e-charts class="chart" :option="option" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            option : {
                xAxis: {
                    type: 'category',
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        data: [150, 230, 224, 218, 135, 147, 260],
                        type: 'line'
                    }
                ]
            }
        }
    }
}
</script>

<style scoped>
.chart{
    height: 400px;
    background-color: #fff;
}
</style>