<template>
<div>
  <div class="header-container">
    <router-link to="/personalassets">
      <svg class="header-img-right" aria-hidden="true">
        <use xlink:href="#icon-fanhui"></use>
      </svg>
    </router-link>
    <div class="header-container-center">
      <span>出售猎人币</span>
    </div>
  </div>
  <div class="sell-container">
    <div class="sell-container-1">
      <span>预计售得现金（元）</span>
      <span class="sell-container-1-span2">当前汇率：1猎人币=￥0.05</span>
      <p style="font-size: 21px;color: black;margin-top: 3px">0.00</p>
    </div>
    <div class="sell-container-2">
      <span>出售数量（枚）</span>
      <div>
        <input type="text" class="sell-container-2-input" placeholder="最多可出售猎人币0.30枚" >
        <span class="sell-container-2-input-span" @click="show()">全部</span>
      </div>
    </div>
    <div class="sell-container-3">
      <span>出售所得现金进入账户现金余额，一旦出售无法购回。</span>
<!--      <button class="sell-container-3-button disabled">出售</button>-->
      <el-button disabled="false" type="primary">出售</el-button>
    </div>
  </div>
</div>
</template>

<script>
  export default {
    name: 'sell',
    methods: {
      show() {
        this.disabled = true;
      }
    }
  };
</script>

<style scoped>
  .header-container {
    height: 55px;
    padding: 20px 10px;
    /*margin-left: -10px;*/
    /*border-bottom: 3px #f8f8f8 solid;*/
  }
  .header-img-right {
    /*margin: 20px 10px;*/
    font-weight: bold;
    color: black;
    float: left;
    width: 1.35em;
    height: 1.35em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
  .header-container-center {
    width: 110px;
    text-align: center;
    /*border: #4EBDFB 1px solid;*/
    /*padding: 10px;*/
    margin: 0 auto;
    font-size: 16px;
  }

/*  内容*/
  .sell-container {
    margin: 15px auto;
    width: 90%;
    height: 222px;
    border: #ececec 1px solid;
    box-shadow: 2px 2px 2px
    #ececec ;
  }
  .sell-container-1 {
    margin: 10px auto;
    width: 90%;
    height: 54px;
    border-bottom: #f8f8f8 2px solid;
  }
  .sell-container-1-span2 {
    float: right;
  }

  .sell-container-2 {
    margin: 10px auto;
    width: 90%;
    height: 53px;
    border-bottom: #f8f8f8 2px solid;
  }
  .sell-container-2-input {
    margin-top: 5px;
    font-size: 13px;
    padding: 6px 0 6px 0;
    width: 100%;
    /*border: #5d656b 1px solid;*/
    background-color: transparent;
  }
  .sell-container-2-input-span {
    float: right;
    margin: -22px 6px 0 0;
  }

  .sell-container-3 {
    width: 90%;
    margin: 0 auto;
    /*border: #5d656b 1px solid;*/
  }
  .sell-container-3-button {
    background-color: #FDE344;
    margin: 15px 0 12px 0;
    border-radius: 30px;
    font-size: 14px;
    width: 100%;
    height: 40px;
  }
  .disabled {
    /*opacity: 0.6;*/
    background-color: #ececec;
    cursor: not-allowed;
  }
</style>
