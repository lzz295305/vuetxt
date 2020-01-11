<template>
<div>
  <div class="header-return">
    <div class="header-container">
      <router-link to="/editdata">
      <svg class="header-img-right" aria-hidden="true">
        <use xlink:href="#icon-guanbi"></use>
      </svg>
    </router-link>
      <span class="header-container-sapn">修改昵称</span>
      <span class="header-right">完成</span>
    </div>
  </div>
  <div class="container">
    <input type="text" class="input" maxlength="20">
    <div class="input-span">
      <span>20个字以内，30天内修改一次，</span>
    </div>
  </div>
</div>
</template>

<script>
  export default {
    name: 'rename'
  };
</script>

<style scoped>
  .header-return {
    padding-top: 21px;
    padding-left: 8px;
    height: 55px;
    text-align: center;
    /*border-bottom: #F8F8F8 2px solid;*/
  }
  .header-img-right {
    margin-left: 5px;
    font-weight: bold;
    color: black;
    float: left;
    width: 1.6em;
    height: 1.6em;
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
  .container {
    margin: 0 auto;
    width: 90%;
  }
  .input {
    font-size: 16px;
    height: 30px;
    margin-top: 20px;
    width: 100%;
    border-bottom: #F8F8F8 1px solid;
  }
  .input-span {
    margin: 12px;
    float: right;
  }
</style>
