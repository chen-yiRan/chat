<template>
    <div>
      <h1>聊天界面</h1>
      <div id="bottom"><el-input v-model="input" placeholder="请输入内容" ><el-button slot="append" >发送</el-button></el-input></div>
    </div>
</template>

<script>
export default {
  name: "Chat",
  data(){
      return {
        input: ''
      }
    }
}
</script>

<style scoped>
#bottom {

  position: fixed;
  left: 0;
  right: 0;
  bottom: 50px;
}
</style>