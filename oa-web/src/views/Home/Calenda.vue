<template>
    <el-calendar>
        <template slot="dateCell" slot-scope="{date, data}">
            <p :class="data.isSelected ? 'is-selected' : ''">
                {{ data.day.split('-').slice(1).join('-') }} {{ data.isSelected ? '✔️' : '' }}
            </p>
        </template>
    </el-calendar>
</template>
<script>
export default{
    data(){
        return{

        }
    },
    methods:{
       
    }
}

</script>
<style>
.is-selected {
    color: #1989FA;
  }
  .el-calendar-table .el-calendar-day {
    height: 40px !important;
  }
</style>
