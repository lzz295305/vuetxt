<template>
<div>
  <div class="header-return">
    <div class="header-container">
      <router-link to="/settingup">
        <svg class="header-img-right" aria-hidden="true">
          <use xlink:href="#icon-fanhui"></use>
        </svg>
      </router-link>
      <div class="header-container-center">
        <span>关于我们</span>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="container-img">
      <img src="https://cdn.xgl6.top/img/图标4.png">
    </div>
    <span style="font-size: 15px; color: #ccc">钱道 V1.1.0.7</span>
  </div>
  <div class="container-1" @click="success">
    <div style="width: 95%;">
      <span class="container-1-span">检查更新</span>
      <svg class="container-1-right" aria-hidden="true">
        <use xlink:href="#icon-you"></use>
      </svg>
    </div>
  </div>
  <div class="about-header">
    <span class="about-header-1">《用户服务协议》</span>
    <br><span style="font-size: 13px;">xxx科技有限公司&nbsp;版权所有</span>
    <br><span style="font-size: 13px;">©2020</span>
  </div>
</div>
</template>

<script>
  import {Toast} from 'vant';
  export default {
    name: 'about-us',
    methods: {
      success() {
        Toast.success('已是最新');
      }
    }
  };
</script>

<style scoped>
  .header-return {
    height: 55px;
  }
  .header-container {
    height: 55px;
    border-bottom: 3px #F8F8F8 solid;
  }
  .header-container-center {
    color: black;
    font-size: 16px;
    margin: 10px 14px;
    text-align: center;
    /*border: black 1px solid;*/
  }
  .header-container-center span{
    margin: 15px 18px 3px 3px;
    line-height: 55px;
  }
  .header-img-right {
    margin: 20px 10px;
    font-weight: bold;
    color: black;
    float: left;
    width: 1.35em;
    height: 1.35em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }

/*  内容*/
  .container {
    float: left;
    padding: 5px;
    text-align: center;
    margin-top: 30px;
  }
  .container-img {
    text-align: center;
    border: white 1px solid;
    margin: 0 0 0 0;
  }
  .container-img img {
    width: 20%;
  }
  .container1 {
    color: black;
    width: 95%;
    padding-right: 5%;
    float: right;
    margin: 0 auto;
    border-bottom: #ececec 1px solid;
  }
  .container-1 {
    margin: 28px auto;
    width: 100%;
    font-size: 14.5px;
    padding: 7px 0 7px 0;
    line-height: 30px;
    float: left;
  }
  .container-1-right {
    margin-top: 8px;
    font-weight: bold;
    color: black;
    float: right;
    width: 1.0em;
    height: 1.0em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
  .container-1-span {
    margin-left: 15px;
  }

/*  底部*/
  .about-header {
    font-size: 16px;
    /*border: #4EBDFB 1px solid;*/
    display: flex;
    align-items: center;
    flex-direction: column;
    position: fixed;
    bottom: 30px;
    width: 100%;
  }
  .about-header-1 {
    color: #fd9534;
    bottom: 0;
  }
</style>
