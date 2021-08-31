<template>
  <div id="app">

    <router-view/>
    <div id="bottom">
        <div id="tab-bar">
            <div  class="tab-bar-item" @click="msg"><div v-if="!isActive1"><i class="el-icon-s-comment"></i></div><div v-else><i class="el-icon-chat-dot-round"></i></div>消息</div>
          <div class="tab-bar-item" @click="friend"><div v-if="!isActive2"><i class="el-icon-user-solid"></i></div><div v-else><i class="el-icon-user"></i></div>好友</div>
            <div class="tab-bar-item" @click="me"><div v-if="!isActive3"><i class="el-icon-s-tools"></i></div><div v-else><i class="el-icon-setting"></i></div>我</div>
        </div>
    </div>
  </div>
</template>
<script>
  export default {
    name : "App",
    data(){
      return {
        path: '/'
      }
    },
    computed:{
      isActive1(){
        return this.$route.path !== '/';
      },
      isActive2(){

        return this.$route.path !== '/friend';
      },
      isActive3(){

        return this.$route.path !== '/me';
      }
    },
    methods:{
      msg(){
        // this.$router.push("/");
        this.path = '/';
        this.$router.replace("/");
      },
      friend(){
        this.path = '/friend';
        this.$router.replace("/friend");
      },
      me(){
        this.path = '/me';
        this.$router.replace("/me");
      }
    }
  }
</script>
<style>
  #tab-bar{
    display: flex;

    background-color: #f6f6f6;
    position: fixed;
    left: 0;
    bottom: 0;
    right:0;
  }
  .tab-bar-item{
    flex:1;
    text-align: center;
    height: 49px;
    font-size: 14px;

  }
  .tab-bar-item i{
    width: 100%;
    font-size: 30px;
  }
</style>
