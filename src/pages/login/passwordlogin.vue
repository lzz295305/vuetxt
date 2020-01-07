<template>
<div>
  <div class="container-input">
    <span style="color:#000; font-size: 18px;margin-right: 10px">手机号</span>
    <input type="text" class="input1" style="color:black; font-size: 18px;background-color: transparent;"
           placeholder="输入手机号" maxlength="11" v-model="usernameModel">
    <p class="register-show">{{ userErrors.errorText }}</p>

    <br><span style="color:#000; font-size: 18px;">密&nbsp;&nbsp;&nbsp;码</span>
    <input type="password" class="input2"
           style="color:black;font-size: 18px;background-color: transparent;"
           placeholder="输入密码" v-model="passwordModel">
  </div>
  <div class="button">
     <spqn style="font-size: 17px;" @click="toHome">登录</spqn>
  </div>
</div>
</template>

<script>
  export default {
    name: 'passwordlogin',
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
      show() {
        this.visible = true;
      },
      hide() {
        this.visible = false;
      },
      show1() {
        this.temp = !this.temp;
      },
      toHome() {
        let name = this.usernameModel;
        let pwd = this.passwordModel;
        this.$http.get('/login/ptl/' + name + '/' + pwd, result => {
          console.log(result.number);
          if (result.number) {
            this.$router.push('/home');
          } else {
            alert('没有此用户,请先去注册账户');
          }
        }, err => {
          console.log(err);
        });
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

<style scoped>
  .input1 {
    background-color: #F8F8F8;
    /*border-radius: 30px;*/
    /*opacity: 0.2;*/
    width: 58%;
    height: 50px;
    margin: -25px 0 25px 0px;
    border-bottom: 2px #F8F8F8 solid;
  }
  .input2 {
    background-color: #F8F8F8;
    /*border-radius: 30px;*/
    /*opacity: 0.2;*/
    width: 58%;
    height: 50px;
    margin-left: 10px;
    margin-bottom: 25px;
    border-bottom: 2px #F8F8F8 solid;
  }
  .button {
    height: 40px;
    background-color: #FDE344;
    border-radius: 30px;
    width: 75%;
    /*height: 50px;*/
    text-align: center;
    margin: 10px auto;
    padding: 15px;
    /*border: deepskyblue 2px solid;*/
  }
  .register-show {
    margin-top: -5px;
    font-size: 15px;
    height: 20px;
    color: red;
  }
</style>
