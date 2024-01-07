<template>
    <div class="layout">
        <!-- 首页 -->
        <!-- 左侧菜单栏 --> 
        <MyMenu class="menu" :isCollapse="isCollapse"/>
        <!-- 右侧内容区 --> 
        <Content class="content" @changeMenu="changeMenu" :isCollapse="isCollapse" :class="{isActive:isCollapse}"/>
    </div>
</template>

<script>
import MyMenu from './MyMenu.vue';
import Content from './Content.vue';
export default{
    data(){
        return{
            isCollapse:false//   菜单栏折叠，默认为false
        }
    },
    components: {
        MyMenu,
        Content
    },
    methods: {
        /**
         * 父组件接收事件
         */
        changeMenu(){
            this.isCollapse = !this.isCollapse;
        }
    }
}
</script>


<style scoped>
.layout{
    /* display: flex; */
    position: relative;
    .menu{
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        /* width: 200px; */
        border: solid 1px #e6e6e6;
        /* overflow-y: scroll; */
    }
    .content{
        margin-top: 0;
        margin-left: 192px;
        width: 90.2%;
    }
    .isActive{
        margin-left: 58px;
        width: 97.3%;
    }
}
</style>