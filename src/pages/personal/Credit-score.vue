<template>
<div>
  <div class="header-return">
    <div class="header-container">
      <router-link to="/personal">
        <svg class="header-img-right" aria-hidden="true">
          <use xlink:href="#icon-fanhui" @click="back"></use>
        </svg>
      </router-link>
      <div class="header-container-center">
        <span>信用积分说明</span>
      </div>
    </div>
    <div class="container">
      <span style="font-size: 15px; font-weight: bold;color: black;margin:5px 0 10px 10px;">猎人信用体系积分规则是什么？</span>
      <div class="container-style">
        <p style="margin-bottom: 30px;">1. 满分5分</p>
        <p style="margin-bottom: 30px;">2. 减分策略</p>
        <p style="margin-bottom: 30px;">2.1 私聊或发布的任务被举报一一核实后根据原因-0.5-2.0<br>分/任务</p>
        <p style="margin-bottom: 30px;">2.2 任何一个权限被封禁一一0.3分/次</p>
        <p style="margin-bottom: 30px;">2.3 发布任务审核通过后超过7天未付款一一0.3分/次</p>
        <p style="margin-bottom: 30px;">3. 加分策略</p>
        <p style="margin-bottom: 30px;">3.1 任务成功结束（时间到，奖励发完）一一+0.3分/次</p>
        <p style="margin-bottom: 30px;">3. 每周自动恢复一一+0.2分/周</p>
        <p style="margin-bottom: 30px;">4. 评分影响</p>
        <p style="margin-bottom: 30px;">4.1 小于4分降低任务在列表中权重，展示率降低</p>
        <p style="margin-bottom: 30px;">4.2 小于3分禁止发布任务</p>
      </div>
    </div>
</div>
</div>
</template>

<script>
  export default {
    name: 'Credit-score'
  };
</script>

<style scoped>
  .header-return {
    padding-left: 8px;
    height: 55px;
  }
  .header-container {
    height: 55px;
    margin-left: -10px;
    border-bottom: 3px #F8F8F8 solid;
  }
  .header-container-center {
    color: black;
    font-size: 16px;
    margin: 10px auto;
    text-align: center;
  }
  .header-container-center span{
    margin-top: 15px;
    line-height: 55px;
  }
  .header-img-right {
    margin: 18px 8px;
    color: black;
    float: left;
    width: 1.6em;
    height: 1.6em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }

  .container {
    margin-top: 15px;
  }
  .container-style {
    color: black;
    font-size:14px ;
    margin-left: 5px;
    margin-top: 20px;
  }
</style>
