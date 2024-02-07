<template>
    <div class="content">
        <!-- 内容区 -->
        <div class="header">
            <i v-if="!isCollapse" class="el-icon-d-arrow-left" @click="changeMenu"></i>
            <i v-else class="el-icon-d-arrow-right" @click="changeMenu"></i>
            <div class="header-user">
                <label>
                    <el-dropdown trigger="click">
                        <span class="el-dropdown-link">{{ username }}<i class="el-icon-arrow-down el-icon--right"></i></span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item icon="el-icon-user-solid">个人中心</el-dropdown-item>
                            <el-dropdown-item icon="el-icon-remove">退出登录</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </label>
            </div>
        </div>
        <!-- 路由出口 -->
        <router-view></router-view>
    </div>
</template>
<script>

export default {
    props: ['isCollapse'],
    data(){
        return{
            username:"20201102451",
        }
    },
    methods: {
        //自定义事件，触发父组件里的事件，折叠菜单栏
        changeMenu() {
            this.$emit('changeMenu')
        },
        getUserHandler() {
            alert('button click');
        }
    }
}

</script>
<style scoped>
.content {

    .header {
        height: 50px;
        line-height: 50px;
        background-color: #303133;
        color: aliceblue;
        border-radius: 4px;

        .header-user {
            display: inline-block;
            position: absolute;
            right: 10%;
            .el-dropdown-link{
                cursor: pointer;
                color: aliceblue;
            }
        }
    }

}
</style>