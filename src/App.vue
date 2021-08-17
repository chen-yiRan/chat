<template>
  <div id="app">

    <router-view/>
    <div id="bottom">
        <div id="tab-bar">
            <div class="tab-bar-item"><i class="el-icon-chat-dot-round"></i>消息</div>
            <div class="tab-bar-item"><i class="el-icon-user"></i>好友</div>
            <div class="tab-bar-item"><i class="el-icon-setting"></i>我</div>
        </div>
    </div>
  </div>
</template>

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
