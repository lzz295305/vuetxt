<template>
    <div class="bgc">
      <div class="logo">
        <img src="https://cdn.xgl6.top/img/图标4.png" alt="">
      </div>
      <div class="container">
<!--        <router-link to="/passwordlogin">-->
          <div class="container-password">
            <span style="color:#000;margin-right: 15px" @click="change(1)" :class="{'active': index === 1}">密码登录</span>
          </div>
<!--        </router-link>-->
<!--        <router-link to="/verificationlogin">-->
          <div class="container-yanzhengma">
            <span style="color:#000;" @click="change(2)" :class="{'active': index === 2}">验证码登录</span>
          </div>
        <div>
          <div v-if="index == 1">
            <passwordlogin />
          </div>
        </div>
        <div>
          <div v-if="index == 2">
            <verificationlogin />
          </div>
        </div>
<!--        </router-link>-->
        <router-view class="routerview"></router-view>
      </div>
      <div>
        <div  class="forget">
          <router-link :to="{path: '/login/register'}">
            <span class="forget1">注册账号</span>
          </router-link>
          <router-link :to="{path: '/login/forget'}">
            <span class="forget2">忘记密码</span>
          </router-link>
        </div>
      </div>
      <div class="header-container">
        <p style="color:#ccc; font-size: 14px;text-align: center">——————其他登录方式——————</p>
      </div>
      <div class="header-container-logo">
          <svg class="weibo" aria-hidden="true">
            <use xlink:href="#icon-weibo"></use>
          </svg>
          <svg class="weibo" aria-hidden="true">
            <use xlink:href="#icon-QQ"></use>
          </svg>
          <svg class="weibo" aria-hidden="true">
            <use xlink:href="#icon-zhifubao"></use>
          </svg>
          <svg class="weibo" aria-hidden="true">
            <use xlink:href="#icon-weixin"></use>
          </svg>
      </div>
    </div>
</template>

<script>
  import Passwordlogin from './passwordlogin';
  import Verificationlogin from './verificationlogin';
  export default {
    name: 'login',
    components: {Verificationlogin, Passwordlogin},
    data() {
      return {
        index: 1
      };
    },
    methods: {
      change(index) {
        this.index = index;
      }
    }
  };
</script>

<style scoped>
  .routerview {
    /*border: #3F9EFA 2px solid;*/
  }
  .active {
    color: black;
    font-weight: bold;
    border-bottom: 2px solid yellow;
    transform: scale(1.1);
    opacity: 0.8;
    transition: all 0.8s ease;
  }

  *{
    padding: 0;
    margin: 0;
  }
  .bgc {
    /*background-color: white;*/
    width: 100%;
    height: 100%;
    /*border: #ccc 1px solid;*/
  }
  .logo {
    width: 93px;
    /*border: red 1px solid;*/
    padding-top: 50px;
    margin: 0px auto;
  }
  .logo img {
    height: 90px;
  }
  /*内容*/

  .container {
    color: white;
    width: 95%;
    height: 290px;
    margin: 40px auto;
    padding-top: 20px;
    bottom: 0;
    text-align: center;
    line-height: 100%;
    /*border: #3F9EFA 3px solid;*/
  }
  .container-password {
    padding-top: 5px;
    font-size: 18px;
    float: left;
    width: 49%;
    /*border: #3F9EFA 2px solid;*/
  }
  .container-yanzhengma {
    padding-top: 5px;
    font-size: 18px;
    float: left;
    width: 49%;
    /*border: #FDC722 2px solid;*/
    margin-bottom: 27px;
  }
  /*输入框*/
  /*.container-input {*/
  /*  border: #FDE344 2px solid;*/
  /*}*/

  input::-webkit-input-placeholder,
  textarea::-webkit-input-placeholder{
    color: #ccc;
    text-shadow : none; -webkit-text-fill-color: initial;
    font-size: 17px ;
  }

  .forget {
  color: black;
  margin: 0 auto;
  height: 20px;
  width: 70%;
  margin-top: -10px;
  /*border: 2px red solid;*/
}
  .forget1 {
    /*font-weight: bold;*/
    font-size: 14px;
    float: left;
  }
  .forget2 {
    /*font-weight: bold;*/
    font-size: 14px;
    float: right;
  }
  .container div {
    height: 40px;
  }
  .toggle {
    /*margin-bottom: 20%;*/
    width: 80%;
    margin: 0 0 20% 34px;
    color: black;
  }
  .toggle1 {
    float: left;
    color: #ccc;
    font-size: 20px;
    margin:10px 10px 20px 3px;
    padding-bottom: 7px;
  }
  .toggle2 {
    color: #ccc;
    float: right;
    font-size: 20px;
    margin-top: 10px;
  }
  .active {
    /*border-bottom: yellow 3px solid;*/
    /*font-size: 21px;*/
    color: black;
    /*font-weight: bold;*/
    display: inline-block;
    padding-bottom: 7px;

  }

  /*header 部分*/

  .header-container {
    width: 78%;
    margin: 38px auto;
    margin-bottom: 20px;
    /*border: 1px red solid;*/
  }

  .header-container-logo {
    /*border: 1px red solid;*/
    line-height: 100px;
    width: 70%;
    text-align: center;
    margin: auto auto;
    padding: 10px;
    /*border: 1px blue solid;*/
  }
  .weibo {
    /*font-size: 20px;*/
    width: 9%;
    height: 25px;
    margin: 15px;
    /*text-align: center;*/
    /*border: 1px greenyellow solid;*/
  }

</style>
