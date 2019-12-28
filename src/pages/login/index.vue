<template>
  <div  class="bgc">
    <div class="logo">
      <img src="https://cdn.xgl6.top/img/白色图标.png">
    </div>
    <div class="container">
      <span class="container-1">每时每刻都有新收获</span>
    </div>
    <div class="header1">
      <div class="span1">
        <router-link :to="{path: '/login/login'}">
          <span @click="show(true)" :class="{'active': toggleActive}">登录</span>
        </router-link>
      </div>
      <div class="span2">
        <router-link :to="{path: '/login/register'}">
          <span @click="show(false)" :class="{'active': !toggleActive}">注册</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'login',
    data() {
      return {
        toggleActive: true
      };
    },
    methods: {
      show(t) {
        this.toggleActive = t;
      }
    }
  };
</script>

<style scoped>
  * {
    padding: 0 auto;
    margin: 0 auto;
  }
  .bgc {
    width: 100%;
    height: 100%;
    background-image: linear-gradient(#5769F5,#4EBDFB);
  }
  .logo {
    text-align: center;
    margin: 0px auto;
    width: 150px;
    /*border: 1px red solid;*/
  }
  .logo img {
    margin-top: 250px;
    width: 90px;
    margin-bottom: 20px;
  }
  /*中间*/
  .container {
    text-align: center;
    font-size: 22px;
    color: white;
  }

/*  底部*/
  .header1 {
    /*border: 3px red solid;*/
    width: 80%;
    height: 80px;
    margin: 140px auto;
    font-size: 20px;
  }
  .span1 {
    width: 100px;
    height: 40px;
    border-radius: 8px;
    text-align: center;
    line-height: 30px;
    float: left;
    border: white 2px solid;
    color: white;
  }
  .span2 {
    width: 100px;
    height: 40px;
    border-radius: 8px;
    text-align: center;
    line-height: 30px;
    float: right;
    border: white 2px solid;
    color: white !important;
  }
.active {
  /*border-bottom: yellow 3px solid;*/
  /*font-size: 21px;*/
  color: deepskyblue;
  /*font-weight: bold;*/
  display: inline-block;
  padding-bottom: 7px;
  background-color: white;
}
  span {
    width: 100%;
    height: 100%;
  }

</style>
