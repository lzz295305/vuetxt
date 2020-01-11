<template>
<div>
  <div class="header">
    <router-link to="/personal">
      <svg class="header-img-right" aria-hidden="true">
        <use xlink:href="#icon-fanhui"></use>
      </svg>
    </router-link>
    <span>待支付订单</span>
    <span class="header-right">取消</span>
  </div>
  <div class="container">
    <img src="https://cdn.xgl6.top/img/71b5665646cd43eb8d398d3fa2cad79.jpg" alt="">
    <span style="font-size: 15px;">订单待支付</span><br>
    <span>$5.00</span>
    <span>支付剩余时间<van-count-down :time="time" /></span>
    <p>支付方式：微信支付</p>
  </div>
  <div class="footer">
    <button class="button1">立即支付</button><br>
    <button class="button2">取消订单</button>
  </div>
</div>
</template>

<script>
  export default {
    name: 'paysuccess',
    data() {
      return {
        time: 24 * 60 * 60 * 1000
      };
    }
  };
</script>

<style scoped>
  .header-img-right {
    font-weight: bold;
    color: black;
    float: left;
    width: 1.5em;
    height: 1.5em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
  .header {
    margin: 15px 0 8px;
    color: black;
    font-size: 16px;
    line-height: 40px;
    text-align: center;
    height: 50px;
    border-bottom: #F8F8F8 2px solid;
  }
  .header-right {
    float: right;
    margin-right: 8px;
  }
  .container {
    text-align: center;
    font-size: 15px;
    margin: 15px;
    line-height: 30px;
  }
  .container img {
    width: 15%;
    border-radius: 50%;
  }

  .footer {
    margin: 18px auto;
    text-align: center;
  }
  .button1 {
    font-size: 16px;
    background-color: #FDE344;
    width: 70%;
    height: 40px;
    margin-bottom: 10px;
    border-radius: 30px;
  }
  .button2 {
    font-size: 16px;
    border-radius: 30px;
    height: 40px;
    background-color: transparent;
    border: #F8F8F8 2px solid;
    width: 70%;
  }
</style>
