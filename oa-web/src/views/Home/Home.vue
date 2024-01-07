<template>
    <div class="home">
        <Calenda class="calenda" />
        <Clock class="clock" />
        <Bulletin class="bulletin" />
        <PendingTask class="pendingTask" />
        <el-divider content-position="left">
            <i class="el-icon-mobile-phone"></i>
            个人便签
            <el-button @click="getHandler" type="primary" size="small" icon="el-icon-circle-plus-outline"
                circle></el-button>
        </el-divider>
        <component v-for="(item, index) in noteList" :key="item.id" :is="item.objectTest" :message="item"
            @listen-click="handlerChildData">
        </component>
    </div>
</template>

<script>
import Calenda from './Calenda.vue'
import Clock from './Clock.vue'
import PendingTask from './PendingTask.vue'
import MyNotes from './MyNotes.vue'
import Bulletin from './Bulletin.vue'


export default {
    created() {
        this.getNotes();
    },
    data() {
        return {
            noteCount: 0,
            noteList: [],
            noteClass: MyNotes,
            userId: this.getUserId(),
            noteData: []
        }
    },
    methods: {
        getUserId() {
            return '20201102451';
        },
        getNotes() {
            const noteData = [
                {
                    id: 1,
                    content: '这是我的第一个便签内容,俩货到后定位为好多好多看好i卡到爆i为活动i啊'
                },
                {
                    id: 2,
                    content: '这是我的第二个便签内容,看见大海大概u更多爱的快马报文段怪物哦等人发起app给i打开i勃艮第啊u不过我丢给吧奥列克定标报告的'
                },
                {
                    id: 3,
                    content: '这是我的第三个便签内容,打卡机勃艮第啊u各单位iu阿贵大家都八零打卢克不低啊比我低百万吨啊论文的哪里看到扣篮卡拉那我打卢克我电脑lawn登陆看看领导你'
                }
            ];
            this.noteCount = noteData.length;
            for (let i = 0; i < noteData.length; i++) {
                this.noteList.push({ id: noteData[i].id, objectTest: this.noteClass, content: noteData[i].content })
            }
            return noteData;
        },
        getHandler() {
            // alert("你点击了这个按钮")
            let length = this.noteCount++;
            this.noteList.push({ id:this.noteCount, objectTest: this.noteClass ,content:''});
            this.noteData.push({id:this.noteCount,content:''});
        },
        handlerChildData(data) {
            console.log(data.id);
            const index = this.noteList.findIndex(component => component.id === data.id);
            this.noteList.splice(index, 1);
        }
    },
    components: {
        Calenda,
        Clock,
        PendingTask,
        Bulletin,
        MyNotes
    }
}
</script>

<style>
.el-divider {
    float: left;
}

.home {
    font-size: 8px;

    .calenda,
    .clock,
    .pendingTask,
    .bulletin {
        border-radius: 8px;
    }

    .calenda {
        float: left;
        margin-top: 1%;
        margin-left: 1%;
        width: 25%;
        height: 390px;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    }

    .clock {
        float: left;
        margin-top: 1%;
        margin-left: 1%;
        width: 26%;
        height: 390px;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    }

    .pendingTask {
        float: left;
        margin-top: 1%;
        margin-left: 1%;
        width: 79%;
        height: 390px;
        background-color: #FFFFFF;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    }

    .bulletin {
        float: left;
        margin-top: 1%;
        margin-left: 1%;
        width: 26%;
        height: 390px;

        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    }

    .el-button {
        margin-left: 10px;
    }
}</style>