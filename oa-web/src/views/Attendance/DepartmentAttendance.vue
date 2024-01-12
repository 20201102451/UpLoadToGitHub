<template>
    <div class="majorBody">
        <div class="tableBody">
            <el-table :data="tableData" border style="width: 100%; margin-left: 1em" highlight-current-row
                @current-change="handleCurrentChange" max-height="750" @row-click="clickRow">
                <el-table-column prop="deptId" label="部门ID" width="150" align="center">
                </el-table-column>
                <el-table-column prop="deptName" label="部门" width="200" align="center">
                </el-table-column>
                <el-table-column prop="leader" label="负责人" width="200" align="center">
                </el-table-column>
                <el-table-column prop="contact" label="联系方式" width="150" align="center">
                </el-table-column>
                <el-table-column prop="number" label="员工数" width="160" align="center">
                </el-table-column>
            </el-table>
        </div>
        <div class="sortBox">
            <div class="sortHead">
                本月出勤排行榜
            </div>
            <div class="sortBody">
                <el-table :data="sortData" style="width: 100%; margin-left: 2em; padding-top: 1em;">
                    <el-table-column type="index" label="排名" width="70" align="center">
                    </el-table-column>
                    <el-table-column prop="id" label="工号" width="70" align="center">
                    </el-table-column>
                    <el-table-column prop="name" label="姓名" width="100" align="center">
                    </el-table-column>
                    <el-table-column prop="number" label="联系方式" width="120" align="center">
                    </el-table-column>
                    <el-table-column prop="posts" label="职位" width="120" align="center">
                    </el-table-column>
                    <el-table-column prop="count" label="出勤次数" width="80" align="center">
                    </el-table-column>
                </el-table>
            </div>
        </div>
        <e-charts class="chart1" :option="option" />
    </div>
</template>

<script>
import tableDataDept from "@/views/Attendance/tableDataDept.json"
import sortDataDept from "@/views/Attendance/sortData.json";
export default {
    mounted() {
        //第一次进入页面，首先将表格数据渲染（后期和后端联合，这个地方发送请求接收数据，可以将请求方法写在methods中，并在这里进行调用this.methodName()）
        this.tableData = tableDataDept;
        //根据第一次请求的表格数据，根据表中第一个部门的内容发送请求，渲染图表
        this.getSortData(tableDataDept[0].deptId);
        this.getOptionChart(tableDataDept[0].deptId);
    },
    data() {
        return {
            input: '',
            option: {
                title: {
                    text: "部门本月出勤率"
                },
                tooltip: {
                    formatter: '{a} <br/>{b} : {c}%'
                },
                series: [
                    {
                        name: 'Pressure',
                        type: 'gauge',
                        progress: {
                            show: true
                        },
                        detail: {
                            valueAnimation: true,
                            formatter: '{value}%'
                        },
                        data: [
                            {
                                value: 0,
                                name: '出勤率'
                            }
                        ]
                    }
                ]
            },
            tableData: null,
            sortData: null
        }
    },
    methods: {
        clickRow(row) {//根据被选点击行，渲染图表数据
            this.getSortData(row.deptId);
            this.getOptionChart(row.deptId);
        },
        handleCurrentChange(val) {
            this.currentRow = val;
        },
        getSortData(deptId) {//渲染排行榜
            console.log(deptId);
            const sortData = sortDataDept;
            // console.log(sortData);
            for (let i = 0; i < sortData.length; i++) {
                if (deptId == sortData[i].deptId) {
                    this.sortData = sortData[i].sortList;
                }
            }
        },
        getOptionChart(deptId) {//渲染出勤率图
            //后台获取计算部门出勤率API
            //这里写好静态数据，直接根据部门ID获取,模拟获取过程
            const tableData = this.tableData;
            console.log(tableData);
            for (let i = 0; i < tableData.length; i++) {
                if (deptId == tableData[i].deptId) {
                    this.option.series[0].data[0].value = tableData[i].attendanceRate * 100;
                }
            }
        }
    }
}

</script>

<style scoped>
.sortBox {
    margin-top: 1em;
    margin-left: 3em;
    float: left;
    height: 25em;
    width: 40em;
}

.sortHead {
    width: 39em;
    background-color: #FFDB6B;
    height: 1.5em;
    border-radius: 8px;
    text-align: center;
    font-weight: bolder;
    font-size: large;
}

.sortBody {
    position: relative;
    top: 1em;
    left: 2em;
    background-color: #FFF;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
    border-radius: 8px;
    width: 40em;
    height: 20em;
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
    margin-top: 2em;
    float: left;
    height: 50em;
}

.chart1 {
    margin-top: 1em;
    margin-left: 3em;
    float: left;
    height: 30em;
    width: 40em;
    /* background-color: red;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04); */
}
</style>