<template>
    <div class="majorBody">
        <div class="searchBody">
            <el-input v-model="input" placeholder="输入关键字搜索"></el-input>
            <el-button class="searchButton" icon="el-icon-search" round>查询</el-button>
        </div>
        <div class="tableBody">
            <el-table :data="tableData" border style="width: 100%; margin-left: 1em" highlight-current-row
                @current-change="handleCurrentChange" max-height="750" @row-click="clickRow">
                <el-table-column prop="id" label="工号" width="180" align="center">
                </el-table-column>
                <el-table-column prop="name" label="姓名" width="180" align="center">
                </el-table-column>
                <el-table-column prop="dept" label="部门" width="180" align="center">
                </el-table-column>
                <el-table-column prop="number" label="联系方式" width="180" align="center">
                </el-table-column>
                <el-table-column prop="posts" label="职位" width="180" align="center">
                </el-table-column>
            </el-table>
        </div>
        <e-charts class="chart1" :option="option1" />
        <e-charts class="chart1" :option="option2" />
    </div>
</template>

<script>
import tableDataEmp from '@/views/Attendance/tableDataEmp.json';
import monthAttendance from '@/views/Attendance/monthAttendance.json';
export default {
    mounted() {
        //第一次进入页面，首先将表格数据渲染（后期和后端联合，这个地方发送请求接收数据，可以将请求方法写在methods中，并在这里进行调用this.methodName()）
        this.tableData = tableDataEmp;
        //根据第一次请求的表格数据，根据表中第一个员工的内容发送请求，渲染图表
        this.getOption1Chart(tableDataEmp[0].id);
        this.getOption2Chart(tableDataEmp[0].id);
    },
    data() {
        return {
            input: '',
            option1: {
                title: {
                    text: '员工考勤分布',
                    left: 'center'
                },
                tooltip: {
                    trigger: 'item'
                },
                legend: {
                    orient: 'vertical',
                    left: 'left'
                },
                series: [
                    {
                        type: 'pie',
                        radius: '50%',
                        data: [
                            { value: 1048, name: '正常出勤', itemStyle: { color: '#73c0de' } },
                            { value: 735, name: '考勤豁免', itemStyle: { color: '#fc8452' } },
                            { value: 580, name: '无故缺勤', itemStyle: { color: '#ee6666' } },
                        ],
                        emphasis: {
                            itemStyle: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    }
                ]
            },
            option2: {
                legend: {},
                tooltip: {},
                dataset: {
                    source: [
                        ['product', '考勤豁免', '正常出勤', '缺勤'],
                        ['第一周', 0, 0, 0],
                        ['第二周', 0, 0, 0],
                        ['第三周', 0, 0, 0],
                        ['第四周', 0, 0, 0]
                    ]
                },
                xAxis: { type: 'category' },
                yAxis: {},
                series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' }]
            },
            tableData: null
        }
    },
    methods: {
        clickRow(row){//根据被选点击行，渲染图表数据
            this.getOption1Chart(row.id);
            this.getOption2Chart(row.id);
        },
        handleCurrentChange(val) {
            this.currentRow = val;
        },
        getOption1Chart(id) {//渲染第一张员工图表,参数中的data为tableData中第一个员工的id,即工号
            console.log(id);
            const weekData = monthAttendance;
            var normal = null;
            var absences = null;
            var exempt = null;
            for (let i = 0; i < weekData.length; i++) {
                if (id == weekData[i].id) {
                    normal = weekData[i].weekList.first.normal + weekData[i].weekList.second.normal + weekData[i].weekList.third.normal + weekData[i].weekList.fourth.normal;
                    absences = weekData[i].weekList.first.absences + weekData[i].weekList.second.absences + weekData[i].weekList.third.absences + weekData[i].weekList.fourth.absences;
                    exempt = weekData[i].weekList.first.exempt + weekData[i].weekList.second.exempt + weekData[i].weekList.third.exempt + weekData[i].weekList.fourth.exempt;
                }
            }
            this.option1.series[0].data[0].value = normal;
            this.option1.series[0].data[1].value = absences;
            this.option1.series[0].data[2].value = exempt;
        },
        getOption2Chart(id) {//渲染第二张员工图表,参数中的data为tableData中第一个员工的id,即工号
            const weekData = monthAttendance;
            for (let i = 0; i < weekData.length; i++) {
                if (id == weekData[i].id) {
                    //要更新柱状图数据，需要先将原source数据进行重置
                    this.option2.dataset.source = [
                        ['product', '考勤豁免', '正常出勤', '缺勤'],
                        ['第一周', 0, 0, 0],
                        ['第二周', 0, 0, 0],
                        ['第三周', 0, 0, 0],
                        ['第四周', 0, 0, 0]
                    ]
                    //第一周数据
                    this.option2.dataset.source[1][1] = weekData[i].weekList.first.exempt;
                    this.option2.dataset.source[1][2] = weekData[i].weekList.first.normal;
                    this.option2.dataset.source[1][3] = weekData[i].weekList.first.absences;
                    //第二周数据
                    this.option2.dataset.source[2][1] = weekData[i].weekList.second.exempt;
                    this.option2.dataset.source[2][2] = weekData[i].weekList.second.normal;
                    this.option2.dataset.source[2][3] = weekData[i].weekList.second.absences;
                    //第三周数据
                    this.option2.dataset.source[3][1] = weekData[i].weekList.third.exempt;
                    this.option2.dataset.source[3][2] = weekData[i].weekList.third.normal;
                    this.option2.dataset.source[3][3] = weekData[i].weekList.third.absences;
                    //第四周数据
                    this.option2.dataset.source[4][1] = weekData[i].weekList.fourth.exempt;
                    this.option2.dataset.source[4][2] = weekData[i].weekList.fourth.normal;
                    this.option2.dataset.source[4][3] = weekData[i].weekList.fourth.absences;
                }
            }
        }
    }
}

</script>

<style scoped>
.searchButton {
    position: absolute;
    margin-left: 2em;
}

.searchBody {
    margin-bottom: 1em;
    margin-top: 1.5em;
    margin-left: 3em;
    width: 300px;
}

.majorBody {
    margin-left: 1em;
    margin-top: 1em;
    overflow-x: hidden;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
}

.tableBody {
    float: left;
    height: 50em;
}

.chart1 {
    margin-top: 1em;
    margin-left: 3em;
    float: left;
    height: 25em;
    width: 40em;
    /* background-color: red;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04); */
}
</style>