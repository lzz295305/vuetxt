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
        <span>通知管理</span>
      </div>
    </div>
  </div>
  <div class="container1">
    <div class="container-1-1">
      <span class="container-1">接受钱道App通知</span>
      <p style="color:#ccc;font-size: 8px;margin-bottom: 20px;">小米、华为等机型需要打开“自启动”选项<a style="color: #4EBDFB">查看教程</a></p>
    </div>
    <svg class="container-1-2" aria-hidden="true">
      <use xlink:href="#icon-you"></use>
    </svg>
  </div>
  <div class="container1">
    <div class="container-1">
      <span>聊天消息通知</span>
      <van-switch v-model="checked1"
      size="19px" active-color="#fde344"
      class="container-1-switch"/>
    </div>
    <div class="container-1">
      <span>评论区回复通知</span>
      <van-switch v-model="checked2"
      size="19px" active-color="#fde344"
      class="container-1-switch"/>
    </div>
  </div>
  <div class="container1">
    <div class="container-1">
      <span>雇主任务审核通过</span>
      <van-switch v-model="checked3"
      size="19px" active-color="#fde344"
      class="container-1-switch"/>
    </div>
    <div class="container-1">
      <span>有新的作品提交</span>
      <van-switch v-model="checked4"
      size="19px" active-color="#fde344"
      class="container-1-switch"/>
    </div>
    <div class="container-1">
      <span>即将到时作品提醒</span>
      <van-switch v-model="checked5"
      size="19px" active-color="#fde344"
      class="container-1-switch"/>
  </div>
  </div>
  <div class="container1">
    <div class="container-1">
      <div class="container-1-1">
        <span>任务完成结果通知</span>
        <p style="color:#ccc;font-size: 8px;">任务获得奖励或未被采纳时发送通知</p>
      </div>
      <van-switch v-model="checked6"
      size="19px" active-color="#fde344"
      class="container-1-3"/>
    </div>
    <div class="container-1">
      <div class="container-1-1">
        <span>任务完成结果通知</span>
        <p style="color:#ccc;font-size: 8px;">收到订单、开始工作、工作即将到时，订单完成等重要</p>
      </div>
      <van-switch v-model="checked6"
      size="19px" active-color="#fde344"
      class="container-1-3"/>
    </div>
    <div class="container-1">
      <div class="container-1-1">
        <span>任务完成结果通知</span>
        <p style="color:#ccc;font-size: 8px;">当钱道举办活动时收到通知，建议开启以领取活动奖励</p>
      </div>
      <van-switch v-model="checked6"
      size="19px" active-color="#fde344"
      class="container-1-3"/>
    </div>
  </div>
</div>
</template>

<script>
  export default {
    name: 'inform',
    data() {
      return {
        checked1: true,
        checked2: true,
        checked3: true,
        checked4: false,
        checked5: true,
        checked6: true,
        checked7: true,
        checked8: false
      };
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
  }
  .header-container-center span{
    margin-top: 15px;
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
  .container1 {
    color: black;
    width: 95%;
    padding-right: 5%;
    float: right;
    margin: 0 auto;
    border-bottom: #ececec 1px solid;
  }
  .container-1-1 {
    /*border: #5d656b 1px solid;*/
    width: 80%;
    float: left;
  }
  .container-1-2 {
    margin-top: 20px;
    font-weight: bold;
    color: black;
    float: right;
    width: 1.25em;
    height: 1.25em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
  .container-1-3 {
    float: right;
    margin-top: 15px;
  }
  .container-1 {
    font-size: 14.5px;
    /*height: 60px;*/
    /*border: #FDE344 2px solid;*/
    padding: 7px 0 7px 0;
    line-height: 30px;
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
  .container-1-switch {
    float: right;
    /*border: #5d656b 1px solid;*/
    margin: 3px 3px 0 0;
  }
  .container-1-span2 {
    /*border: #5d656b 1px solid;*/
  }
</style>
