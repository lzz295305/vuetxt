<template>
<div>
  <div class="header">
    <div class="header-return">
      <router-link to="/personaldata">
        <svg class="header-img-right" aria-hidden="true" @click="back">
          <use xlink:href="#icon-fanhui"></use>
        </svg>
      </router-link>
    </div>
    <div class="header-container">
      <a href="https://cdn.xgl6.top/img/9ef126f301f12078f30713097fc4c1e.png"><img src="https://cdn.xgl6.top/img/9ef126f301f12078f30713097fc4c1e.png" alt=""></a>
      <div class="editdata-bianji">
        <svg class="editdata-img-bianji" aria-hidden="true">
          <use xlink:href="#icon-bianji"></use>
        </svg>
      </div>
    </div>
    <div class="editdata-container-span1">
      <span @click="go">设置背景</span>
    </div>
  </div>
  <div class="editdata-container">
    <router-link to="/"><div class="editdata-container-4">
      <span class="editdata-container-left">昵称</span>
      <span class="editdata-container-right">
        <span>猎人1659098</span>
        <svg class="editdata-container-iconyou" aria-hidden="true">
          <use xlink:href="#icon-you"></use>
        </svg>
      </span>
    </div></router-link>
    <div class="editdata-container-4" style="border-bottom: 1.5px #FBFBFB solid">
      <span class="editdata-container-left">个性签名</span>
      <span class="editdata-container-right">
        <span>未填写</span>
        <svg class="editdata-container-iconyou" aria-hidden="true">
          <use xlink:href="#icon-you"></use>
        </svg>
      </span>
    </div>
    <div class="editdata-container-4" >
      <span class="editdata-container-left">基本信息</span>
      <span  class="editdata-container-right">
        <svg class="editdata-container-iconyou" aria-hidden="true">
        <use xlink:href="#icon-you"></use>
        </svg>
      </span>
    </div>
    <div class="editdata-container-4">
      <span class="editdata-container-left">联系方式</span>
      <span class="editdata-container-right">
        <svg class="editdata-container-iconyou" aria-hidden="true">
        <use xlink:href="#icon-you"></use>
        </svg>
      </span>
    </div>
    <div class="editdata-container-4">
      <span class="editdata-container-left">教育/工作经历</span>
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
    name: 'editdata'
    // methods: {
    //   back() {
    //     this.$router.push('/personaldata');
    //   }
    // }
  };
</script>

<style scoped>

  /*头部*/
  .header {
    background-image: linear-gradient(#35302C,#121011);
    height: 350px;
  }
  .header-return {
    padding-top: 21px;
    padding-left: 8px;
    height: 55px;
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
    color: white;
    float: left;
    width: 2.1em;
    height: 2.1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
  /*.editdata-bianji {*/
  /*  margin: 0 auto;*/
  /*  width: 20px;*/
  /*  height: 30px;*/
  /*  background-color: red;*/
  /*}*/
  .editdata-img-bianji {
    background-color: #333;
    border-radius: 50%;
    margin: -25px 0 12px 48px ;
    width: 1.8em;
    height: 1.8em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
  .editdata-container-span1 {
    padding: 8px;
    border: 1.5px white solid;
    width: 100px;
    margin: 83px auto;
    text-align: center;
    border-radius: 30px;
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
</style>
