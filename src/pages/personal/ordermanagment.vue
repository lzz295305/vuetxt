<template>
  <div class="ordermanagment-container">
    <svg class="icon" aria-hidden="true">
      <use xlink:href="#icon-zanwushuju"></use>
    </svg>
    <div style="text-align: center;margin-top: 10px">
      <span style="font-size: 18px;">暂无数据</span>
    </div>
  </div>
</template>
<!--订单管理页-->
<script>
  export default {
    name: 'ordermanagment'
  };
</script>

<style scoped>
  .ordermanagment-container {
    /*border: #4EBDFB 2px solid;*/
    margin: 30% auto;
    text-align: center;
  }
  .icon {
    height: 130px;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
    text-align: center;
    margin: 20px 30px;
  }
</style>
