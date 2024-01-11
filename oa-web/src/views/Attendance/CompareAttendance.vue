<template>
    <div>
        <e-charts class="chart2" :option="option2" />
        <e-charts class="chart2" style="width: 73%;" :option="option3" />
        <e-charts class="chart1" :option="option1" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            option3: {
                tooltip: {
                    trigger: 'item',
                    formatter: '{b} : {c}人次'
                },
                color:[
                    'red'
                ],
                title: {
                    text: '本月各部门缺勤',
                    y: 'bottom',
                    x: 'center'
                },
                xAxis: {
                    type: 'category',
                    data: ['数学组', '语文组', '教务处', '历史组', '化学组', '物理组', '音乐组','政治组' , '地理组','英语组','生物组']
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        data: [10,20,8,2,1,3,15,5,8,9,10],
                        type: 'bar'
                    }
                ]
            },
            option2: {
                title: {
                    text: '各部门年度无故缺勤对比',
                    y: 'bottom',
                    x: 'center'

                },
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b} : {c} ({d}%)'
                },
                legend: {
                    top: '1%',
                    left: 'center',
                },

                series: [
                    {
                        name: '无故缺勤',
                        type: 'pie',
                        radius: ['40%', '70%'],
                        avoidLabelOverlap: false,
                        itemStyle: {
                            borderRadius: 10,
                            borderColor: '#fff',
                            borderWidth: 2
                        },
                        label: {
                            show: false,
                            position: 'center',
                        },
                        emphasis: {
                            label: {
                                show: true,
                                fontSize: 20,
                                fontWeight: 'bold'
                            }
                        },
                        labelLine: {
                            show: false
                        },
                        data: [
                            { value: 20, name: '数学组' },
                            { value: 0, name: '语文组' },
                            { value: 15, name: '教务处' },
                            { value: 8, name: '历史组' },
                            { value: 12, name: '化学组' },
                            { value: 6, name: '物理组' },
                            { value: 3, name: '音乐组' },
                            { value: 1, name: '政治组' },
                            { value: 3, name: '地理组' },
                            { value: 8, name: '英语组' },
                            { value: 9, name: '生物组' },
                        ]
                    }
                ]
            },
            option1: {
                title: {
                    text: '各部门月出勤率对比'
                },
                tooltip: {
                    trigger: 'axis',
                },
                legend: {
                    data: ['数学组', '语文组', '教务处', '历史组', '化学组', '物理组', '音乐组', '政治组', '地理组', '英语组', '生物组'],
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true,
                },
                toolbox: {
                    feature: {
                        saveAsImage: {}
                    }
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: ['2023-1', '2023-2', '2023-3', '2023-4', '2023-5', '2023-6', '2023-7','2023-8','2023-9','2023-10','2023-11','2023-12']
                },
                yAxis: {
                    type: 'value',
                    name: '出勤率',
                    axisLabel: {
                        //这种做法就是在y轴的数据的值旁边拼接单位，貌似也挺方便的
                        formatter: "{value} %",
                    },
                },
                series: [
                    {
                        name: '数学组',
                        type: 'line',
                        smooth: true,
                        data: [20, 50, 30.5, 20.4, 60.8, 80.8, 30.9],
                    },
                    {
                        name: '语文组',
                        type: 'line',
                        smooth: true,
                        data: [80, 18.2, 19.1, 23.4, 29.0, 33.0, 31.0]
                    },
                    {
                        name: '教务处',
                        type: 'line',
                        smooth: true,
                        data: [15.0, 23.2, 20.1, 15.4, 19.0, 33.0, 41.0]
                    },
                    {
                        name: '历史组',
                        type: 'line',
                        smooth: true,
                        data: [32.0, 33.2, 30.1, 33.4, 39.0, 33.0, 32.0]
                    },
                    {
                        name: '化学组',
                        type: 'line',
                        smooth: true,
                        data: [82.0, 93.2, 90.1, 93.4, 12.90, 13.30, 13.20]
                    },
                    {
                        name: '物理组',
                        type: 'line',
                        smooth: true,
                        data: [35.0, 93.2, 65.2, 93.4, 82.2, 22.0, 45.3]
                    },
                    {
                        name: '音乐组',
                        type: 'line',
                        smooth: true,
                        data: [85.7,90.8,50.8,60.9,80.8,90.9]
                    },
                    {
                        name: '政治组',
                        type: 'line',
                        smooth: true,
                        data: [85.7,90.8,50.8,60.9,80.8,90.9]

                    },
                    {
                        name: '地理组',
                        type: 'line',
                        smooth: true,
                        data: [85.7,90.8,50.8,60.9,80.8,90.9]
                    },
                    {
                        name: '英语组',
                        type: 'line',
                        smooth: true,
                        data: [85.7,90.8,50.8,60.9,80.8,90.9]
                    },
                    {
                        name: '生物组',
                        type: 'line',
                        smooth: true,
                        data: [85.7,90.8,50.8,60.9,80.8,90.9]
                    }
                ]
            }
        }
    }
}

</script>

<style scoped>
.chart1 {
    float: left;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
    background-color: #fff;
    height: 480px;
}

.chart2 {
    float: left;
    margin-left: 1em;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
    background-color: #fff;
    height: 400px;
    width: 400px;
    margin-bottom: 1em;
}
</style>