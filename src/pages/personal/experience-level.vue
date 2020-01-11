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
          <span>猎人等级</span>
        </div>
      </div>
    </div>
    <div class="editdata-container">
      <router-link to="/"><div class="editdata-container-4">
        <span class="editdata-container-left">猎人世界有什么好处？</span>
        <span class="editdata-container-right">
        <svg class="editdata-container-iconyou" aria-hidden="true">
          <use xlink:href="#icon-you"></use>
        </svg>
      </span>
      </div></router-link>
      <div class="editdata-container-4" style="border-bottom: 1.5px #FBFBFB solid">
        <span class="editdata-container-left">猎人等级有什么好处？</span>
        <span class="editdata-container-right">
        <svg class="editdata-container-iconyou" aria-hidden="true">
          <use xlink:href="#icon-you"></use>
        </svg>
      </span>
      </div>
      <div class="editdata-container-4" >
        <span class="editdata-container-left">如何提升等级？</span>
        <span  class="editdata-container-right">
        <svg class="editdata-container-iconyou" aria-hidden="true">
        <use xlink:href="#icon-you"></use>
        </svg>
      </span>
      </div>
      <div class="editdata-container-4">
        <span class="editdata-container-left">邀请猎人有什么好处？</span>
        <span class="editdata-container-right">
        <svg class="editdata-container-iconyou" aria-hidden="true">
        <use xlink:href="#icon-you"></use>
        </svg>
      </span>
      </div>
      <div class="editdata-container-4">
        <span class="editdata-container-left">如何邀请别人成为自己下面的二代猎人？</span>
        <span class="editdata-container-right">
        <svg class="editdata-container-iconyou" aria-hidden="true">
          <use xlink:href="#icon-you"></use>
        </svg>
      </span>
      </div>
      <div class="editdata-container-4">
        <span class="editdata-container-left">等级福利一览？</span>
        <span class="editdata-container-right">
        <svg class="editdata-container-iconyou" aria-hidden="true">
          <use xlink:href="#icon-you"></use>
        </svg>
      </span>
      </div>
      <div class="editdata-container-4">
        <span class="editdata-container-left">猎人代目是什么意思？</span>
        <span class="editdata-container-right">
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
    name: 'experience-level'
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
    margin: 18px 10px;
    color: black;
    float: left;
    width: 1.6em;
    height: 1.6em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }

/*  内容*/
  .editdata-container {
    width: 100%;
    height: 300px;
  }
  .editdata-container-4 {
    height: 30px;
    margin: 13px 13px 10px 10px;
    color: black;
  }
  .editdata-container-left {
    margin-left: 10px;
    float: left;
    font-size: 15px;
  }
  .editdata-container-right {
    float: right;
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
</style>
