<template>
    <div class="myNotes" :style="{ backgroundColor: randomColor() }">
        <el-button class="deleteButton" type="danger" icon="el-icon-delete" circle @click="deleteButton" plain></el-button>
        <!-- <p>{{ message.id }}---这是子组件id</p> -->
        <form action="">
            <textarea v-model="content" placeholder="清输入你的便签内容"></textarea>
            <el-button class="saveButton" @click="onSubmit" plain>保存</el-button>
        </form>
    </div>
</template>


<script>
export default {
    data() {
        return {
            content: this.message.content
        }
    },
    props: ['message'],
    methods: {
        deleteButton() {
            const data = this.message;
            this.$emit('listen-click', data);
        },
        randomColor() {
            const colors = ['#FFE0D3', '#C6E2FF', '#FFF6E0', '#E7DBFF'];
            return colors[this.message.id % colors.length];
        },
        onSubmit(){
            console.log("OnSubmit!!!");
        }

    }
}

</script>

<style>
.myNotes {
    float: left;
    /* margin-top: 1%; */
    margin-left: 1%;
    margin-bottom: 1%;
    width: 30%;
    height: 390px;
    /* background-color: #FFFFFF; */
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    border-radius: 8px;
}

.deleteButton,.saveButton{
    float: right;
}

textarea {
    background-color: transparent;
    border: none;
    width: 88%;
    height: 300px;
    resize: none;
    font-size: large;
    font-family: '微软雅黑';
    margin-left: 5%;
}

textarea::-webkit-resizer {
    display: none;
}
</style>