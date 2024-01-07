<template>
    <el-row class="tac">
        <el-col :span="24">
            <el-menu class="el-menu-vertical-demo" router :collapse="isCollapse">
                <el-menu-item>
                    <span>清格办公</span>
                </el-menu-item>
                <el-menu-item index="/home">
                    <i class="el-icon-s-home"></i>
                    <template slot="title">
                        <span>首页</span>
                    </template>
                </el-menu-item>
                <el-menu-item index="/friends">
                    <i class="el-icon-chat-line-round"></i>
                    <template slot="title">
                        <span>朋友圈</span>
                    </template>
                </el-menu-item>
                <el-menu-item index="/meeting">
                    <i class="el-icon-mic"></i>
                    <template slot="title">
                        <span>会议管理</span>
                    </template>
                </el-menu-item>
                <el-menu-item index="/auxiliary">
                    <i class="el-icon-suitcase"></i>
                    <template slot="title">
                        <span>辅助功能</span>
                    </template>
                </el-menu-item>
                <el-menu-item index="/documentManage">
                    <i class="el-icon-folder-opened"></i>
                    <template slot="title">
                        <span>文件管理</span>
                    </template>
                </el-menu-item>
                <el-submenu index="/examineAndApprove">
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>流程审批</span>
                    </template>
                    <el-menu-item-group>
                        <template slot="title"></template>
                        <el-menu-item index="/examineAndApprove/apply">申请审批</el-menu-item>
                        <el-menu-item index="/examineAndApprove/applicationRecord">申请记录</el-menu-item>
                        <el-menu-item index="/examineAndApprove/pending">待审流程</el-menu-item>
                        <el-menu-item index="/examineAndApprove/pendingRecord">审批记录</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                <el-submenu index="/report">
                    <template slot="title">
                        <i class="el-icon-document-copy"></i>
                        <span>工作报告</span>
                    </template>
                    <el-menu-item-group>
                        <template slot="title"></template>
                        <el-menu-item index="/report">我的工作报告</el-menu-item>
                        <el-menu-item index="/report">待审报告</el-menu-item>
                        <el-menu-item index="/report">审理记录</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                <el-submenu index="/attendance">
                    <template slot="title">
                        <i class="el-icon-date"></i>
                        <span>考勤管理</span>
                    </template>
                    <el-menu-item-group>
                        <template slot="title"></template>
                        <el-menu-item index="/attendance">部门考勤对比</el-menu-item>
                        <el-menu-item index="/attendance">今日缺勤</el-menu-item>
                        <el-submenu index="/attendance">
                            <template slot="title">本月考勤</template>
                            <el-menu-item index="/attendance">员工</el-menu-item>
                            <el-menu-item index="/attendance">部门</el-menu-item>
                        </el-submenu>
                    </el-menu-item-group>
                </el-submenu>
                <el-submenu index="/department">
                    <template slot="title">
                        <i class="el-icon-user"></i>
                        <span>部门管理</span>
                    </template>
                    <el-menu-item-group>
                        <template slot="title"></template>
                        <el-menu-item index="/department">人员管理</el-menu-item>
                        <el-menu-item index="/department">公告管理</el-menu-item>
                        <el-menu-item index="/department">工作报告管理</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                <el-menu-item index="/admin">
                    <i class="el-icon-view"></i>
                    <template slot="title">
                        <span>管理员功能</span>
                    </template>
                </el-menu-item>
            </el-menu>
        </el-col>
    </el-row>
</template>

<script>
import { RouterView } from 'vue-router';


export default {
    props: ["isCollapse"],
    data() {
        return {};
    },
    methods: {},
    components: { RouterView }
}

</script>

<style scoped>
.el-menu{
    border-right: 0;
}
.tac {
    /* 设置侧边栏滚动条 */
    max-height: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    background-color: #fff;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>