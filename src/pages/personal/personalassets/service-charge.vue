<template>
  <div>
    <div class="header-return">
      <div class="header-container">
        <router-link to="/personalassets">
          <svg class="header-img-right" aria-hidden="true">
            <use xlink:href="#icon-fanhui" @click="back"></use>
          </svg>
        </router-link>
        <div class="issueskill-header-2">
          <span>提现服务费怎么计算？</span>
        </div>
        <div class="container">
          <span class="container-span">提现服务费怎么计算？</span>
          <p class="container-p">1.夜神猎人用户可以通过参与活动获得免费提现额度；</p>
          <p class="container-p">2.提现超出免费额度后，超出的部分按照15%收取服务费，提现服务费在做任务获得奖励后直接扣除；</p>
          <p class="container-p">3.任务退款部分按照2%收取手续费；</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'service-charge'
  };
</script>

<style scoped>
  .header {
    height: 100%;
    margin: 0 auto;
    width: 90%;
    /*border: 1px #4EBDFB solid;*/
  }
  .header-return {
    padding-top: 21px;
    padding-left: 8px;
    height: 50px;
    /*border: 2px red solid;*/
  }
  .header-img-right {
    margin: 2px auto;
    font-weight: bold;
    color: black;
    float: left;
    width: 1.35em;
    height: 1.35em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
  .issueskill-header-2 {
    color: black;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    padding-bottom: 15px;
    border-bottom: #F8F8F8 3px solid;
  }

  /*  内容*/

  .container {
    /*border: #5d656b 2px solid;*/
    margin: 30px 10px 0 10px;
  }
  .container-span {
    color: black;
    font-size: 16px;
    font-weight: bold;
  }
  .container-p {
    color: black;
    padding-top: 15px;
    line-height: 23px;
  }
</style>
