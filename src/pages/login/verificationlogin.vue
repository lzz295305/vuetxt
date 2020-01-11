<template>
<div>
  <div>
    <span style="font-size: 18px;margin-right: 13px;color: black">手机号</span>
    <input type="text" class="input1"
           style="color:black; font-size: 17px;background-color: transparent;"
           placeholder="输入手机号" maxlength="11" v-model="usernameModel">
    <p class="register-show">{{ userErrors.errorText }}</p>
    <br>
    <span style="font-size: 18px;margin-right: 3px;color: black">验证码</span>
    <input type="text" class="input2"
           style="color:black;font-size: 18px;background-color: transparent;"
           placeholder="输入验证码" v-model="newModel">
    <span class="forward" @click="send">发送验证码</span>
    <div class="button">
      <span style="color: black;" @click="toHome">登录</span>
    </div>
  </div>
</div>
</template>

<script>
  export default {
    name: 'verificationlogin',
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
      send() {
        let phone = this.usernameModel;
        let number = 1;
        this.$http.get('/login/gc/' + phone + '/' + number, result => {
          console.log(1);
        }, err => {
          console.log(err);
          alert('发送失败');
        });
      },
      toHome() {
        let phone = this.usernameModel;
        let vc = this.newModel;
        this.$http.get('/login/vcl/' + phone + '/' + vc, result => {
          console.log(result);
          if (result.number) {
            localStorage.setItem('UserInfo', JSON.stringify(result));
            this.$router.push('/home');
          } else {
            alert('手机号或验证码有误');
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
        } else if (!/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,12}$/g.test(this.passwordModel)) {
          status = false;
          errorText = '密码由字母和数字组成';
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
  .forward {
    margin: 0 0 0 -63px;
    background-color: transparent;
    color: black;
  }
</style>
