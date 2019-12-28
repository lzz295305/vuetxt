<template>
  <div class="register">
    <me-navbar class="header" v-show="visible">
      <i class="iconfont icon-fanhui" slot="left" @click="back"></i>
      <span slot="title">注册</span>
    </me-navbar>
    <br>
    <br>
    <img src="http://lxy.xgl6.top/img/微信图片_20191218182257.png" alt="" style="width: 100px;height: 50px">
    <div class="register-content">
      <ul>
        <li>
          <label class="register-phone">
            <span class="register-title" id="forget-top">手机号</span>
            <input type="text" class="register-text" v-model="usernameModel">
          </label>
          <p class="register-show">{{ userErrors.errorText }}</p>
        </li>
        <li>
          <label class="register-phone">
            <span class="register-title" id="forget-bottom">密码</span>
            <input type="password" class="register-text" v-model="passwordModel">
          </label>
          <p class="register-show">{{ pwdErrors.errorText }}</p>
        </li>
        <li>
          <label class="register-phone">
            <span class="register-title">验证码</span>
            <input type="text" class="register-text" placeholder="请输入验证码">
            <span class="btn_send_code">发送验证码</span>
          </label>
        </li>
      </ul>
      <div class="register-hidden">
        <label class="register-radio"><input type="checkbox" @click="show1()">是否有邀请码</label>
        <div v-if="temp" class="register-invite">
          <label class="register-none">
            <span class="hidden-title">邀请码</span>
            <input type="text" class="hidden-text">
          </label>
        </div>
      </div>
    </div>
    <div class="register-foot">
      <div class="register-choose">
        <span @click="change()" class="register-main">完成</span>
      </div>
      <div class="register-deal">
        <span class="deal-title">注册即表示你同意</span>
        <a href="#" class="del-content">《本App服务协议》</a>
      </div>
      <div class="register-other">
        <span class="other-title">第三方登录</span>
        <div class="other-content">
          <a href="http://192.168.0.241/api/oauth/getCode">
            <i class="iconfont icon-QQ"></i>
          </a>
          <i class="iconfont icon-weixin"></i>
          <i class="iconfont icon-zhifubao"></i>
          <i class="iconfont icon-weibo"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import MeNavbar from 'base/navbar';

  export default {
    name: 'register',
    components: {
      MeNavbar
    },
    data() {
      return {
        visible: true,
        passwordModel: '',
        newModel: '',
        usernameModel: '',
        errorText: '',
        temp: ''
      };
    },
    methods: {
      // API
      show() {
        this.visible = true;
      },
      hide() {
        this.visible = false;
      },
      show1() {
        this.temp = !this.temp;
      },
      back() {
        this.$router.go(-1);
      },
      change() {
        this.$router.push('/login/login');
      }
    },
    computed: {
      userErrors() {
        let errorText, status;
        if (this.usernameModel < 11) {
          status = false;
          errorText = '';
        } else if (!/^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/g.test(this.usernameModel)) {
          status = false;
          errorText = '请输入正确的手机号';
        } else {
          status = true;
          errorText = '';
        }
        return {
          status,
          errorText
        };
      },
      pwdErrors() {
        let errorText, status;
        if (this.passwordModel < 8) {
          status = false;
          errorText = '';
          console.log(1);
        } else if (!/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,12}$/g.test(this.passwordModel)) {
          status = false;
          errorText = '密码由字母和数字组成';
          console.log(2);
        } else {
          status = true;
          errorText = '';
          console.log(3);
        }
        return {
          status,
          errorText
        };
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import "~assets/scss/mixins";

  .register {
    text-align: center;
  }
  .header {
    &.mine-navbar {
      background-color: #FDE344;
      transition: background-color 0.5s;
    }

    &.header-transition {
      background-color: $icon-color-default;
      border-bottom: 1px solid #080808;
    }

    .iconfont {
      color: $icon-color-default;
      font-size: $icon-font-size;
    }
  }

  .register-content {
    text-align: center;
  }

  .register-content>ul {
    margin-top: 40px;
  }

  .register-content>ul>li {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    margin-top: 20px;
  }

  .register-phone {
    border-bottom:#eee 1px solid;
    width: 300px;
  }

  .register-title {
    font-size: 15px;
    color: #080808;
    margin-left: -10px;
  }

  .register-text {
    width: 160px;
    height: 35px;
    border-bottom-width: 0;
    border-left-width: 0;
    border-right-width: 0;
    border-top-width: 0;
    text-indent: 20px;
    font-size: 15px;
  }

  .register-top {
    margin-left: 22px;
  }

  .register-foot {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
  .register-radio {
    font-size: 15px;
    margin-left: -190px;
  }

  .register-choose {
    width: 80%;
    /*margin-top: 40px;*/
    background-color: #FDE344;
    border: 1px solid #eee;
    border-radius: 20px;
    text-align: center;
  }

  .register-main {
    height: 40px;
    color: black;
    font-size: 20px;
    line-height: 40px;
  }

  .register-show {
    margin-top: 5px;
    font-size: 12px;
  }

  .register-right {
    width: 75px;
    height: 35px;
    font-size: 20px;
    border-radius: 5px;
  }

  .register-deal {
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: 12px;
  }

  .register-hidden {
    height: 75px;
    margin-top: 30px;
    padding-bottom: 10px;
  }

  .register-invite {
    width: 100%;
    height: 40px;
    margin-top: 10px;
    font-size: 20px;
  }

  .register-none {
    width: 300px !important;
    border-bottom:#eee 1px solid;
    line-height: 40px;
  }

  .hidden-title {
    color: #080808;
    font-size: 15px;
  }

  .register-choose {
    font-size: 20px;
  }

  .register-other {
    margin-top: 30px;
  }

  .other-content>i {
    padding: 20px;
  }

  .btn_send_code {
    font-size: 14px;
    line-height: 20px;
  }

  #forget-top {
    margin-left: -85px;
  }

  #forget-bottom {
    margin-left: -70px;
    letter-spacing: 15px;
  }

  .deal-title {
    color: black;
  }

  .del-content {
    color:  red;
  }

  .other-title {
    display: block;     /*设置为块级元素会独占一行形成上下居中的效果*/
    font-size: 15px;
    color: #212121;
    position: relative;
  }
  .other-title:before, .other-title:after {
    content: '';                 /*CSS伪类用法*/
    position: absolute;         /*定位背景横线的位置*/
    top: 52%;
    background: #494949;       /*宽和高做出来的背景横线*/
    width: 40%;
    height: 1px;
  }

  .other-title:before {
    left: -5%;
  }

  .other-title:after {
    right: -5%;
  }

  .other-content {
    margin-top: 30px;
  }

  .iconfont {
    font-size: 30px;
  }
</style>
