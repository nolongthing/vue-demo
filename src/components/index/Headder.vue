<template>
    <div>
        this is headder !{{$store.state.count}}
        <el-button type="primary">主要按钮</el-button>
    </div>    
</template>
<script>
export default {
    props:{
        dataId:String,
    },
    created(){
        console.log(this.dataId);
    }
}
</script>
<style scoped>
    div{
        color: red;
    }
</style>
