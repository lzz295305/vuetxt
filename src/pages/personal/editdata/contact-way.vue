<template>
<div>
    <div class="header-return">
      <div class="header-container">
        <router-link to="/editdata">
          <svg class="header-img-right" aria-hidden="true">
            <use xlink:href="#icon-fanhui"></use>
          </svg>
        </router-link>
        <span class="header-container-sapn">联系方式</span>
      </div>
    </div>
    <div class="editdata-container">
      <div class="editdata-container-4">
        <span class="editdata-container-left">电子邮件</span>
        <span class="editdata-container-right">
        <span class="no-filled">请填写有效的常用邮箱</span>
        <svg class="editdata-container-iconyou" aria-hidden="true">
          <use xlink:href="#icon-you"></use>
        </svg>
      </span>
      </div>
      <div class="editdata-container-4" style="border-bottom: 1.5px #FBFBFB solid">
        <span class="editdata-container-left">手机号码</span>
        <span class="editdata-container-right">
        <span class="no-filled">18234857539</span>
        <svg class="editdata-container-iconyou" aria-hidden="true">
          <use xlink:href="#icon-you"></use>
        </svg>
      </span>
      </div>
      <div class="editdata-container-4" >
        <span class="editdata-container-left">微信</span>
        <span  class="editdata-container-right">
        <span class="no-filled">未认证</span>
        <svg class="editdata-container-iconyou" aria-hidden="true">
          <use xlink:href="#icon-you"></use>
        </svg>
      </span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'contact-way'
  };
</script>

<style scoped>
  .no-filled {
    color: #cccccc;
  }
  /*头部*/
  .header-return {
    padding-top: 21px;
    padding-left: 8px;
    height: 55px;
    margin-bottom: 15px;
    border-bottom: #F8F8F8 2px solid;
  }
  .header-container {
    margin: 0 auto;
    text-align: center;
  }
  .header-container img {
    width: 75px;
  }
  .header-img-right {
    font-weight: bold;
    color: black;
    float: left;
    width: 1.6em;
    height: 1.6em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
  .editdata-container-span1 span {
    font-size: 15px;
    color: white;
  }
  /*  内容*/
  .editdata-container {
    width: 100%;
    height: 300px;
    /*border: yellow 2px solid;*/
  }
  .editdata-container-4 {
    height: 30px;
    margin: 13px 10px 10px 10px;
    color: black;
    /*border: 1px red solid;*/
  }
  .editdata-container-left {
    float: left;
    font-size: 15px;
  }
  .editdata-container-right {
    float: right;
    /*margin-left: 150px;*/
    font-size: 14px;
  }

  .editdata-container-iconyou {
    color: black;
    float: right;
    width: 1.0em;
    height: 1.0em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }

  .header-container {
    text-align: center;
    /*border: red 2px solid;*/
    height: 30px;
  }
  .header-container-sapn {
    font-size: 16px;
    color: black;
  }
  .header-right {
    float: right;
    color: #5d656b;
    margin: 3px 13px 0 0 ;
  }
</style>
