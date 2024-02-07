<template>
    <DocumentList class="documentList"/>
</template>
<script>
import DocumentList from './DocumentList.vue';
export default{
    components:{
        DocumentList
    }
    ,data(){
        return{

        }
    }
}

</script>
<style scoped>

.documentList{
    float: left;
    margin-top: 0.3%;
    margin-left: 1%;
    width: 98%;
    height: 898px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    background-color: #fff;
    border-radius: 8px;
}
</style>