<template>
  <div class="forget">
    <ForgetHeader/>
    <div class="forget-context">
      <ul>
        <li>
          <label class="forget-phone">
            <span class="forget-title" id="forget-top">手机号</span>
            <input type="text" class="forget-text" v-model="usernameModel" placeholder="请输入手机号">
          </label>
          <p class="forget-show">{{ userErrors.errorText }}</p>
        </li>
        <li>
          <label class="forget-phone">
            <span class="forget-title">验证码</span>
            <input type="text" class="forget-text" placeholder="请输入验证码" v-model="verify">
            <span class="btn_send_code" @click="send">发送验证码</span>
          </label>
        </li>
      </ul>
    </div>
    <div class="forget-foot">
      <div class="forget-choose">
        <p @click="change()" class="forget-main">修改密码</p>
      </div>
    </div>
  </div>
</template>

<script>
  import ForgetHeader from './header';

  export default {
    name: 'forget',
    data() {
      return {
        usernameModel: '',
        errorText: '',
        verify: ''
      };
    },
    components: {
      ForgetHeader
    },
    methods: {
      send() {
        let phone = this.usernameModel;
        let number = 3;
        this.$http.get('/login/gc/' + phone + '/' + number, result => {
          console.log(3);
        }, err => { console.log(err); });
      },
      change() {
        let phone = this.usernameModel;
        let vc = this.verify;
        this.$http.get('/login/ftpvc/' + phone + '/' + vc, result => {
          console.log(result);
          alert(result);
          if (result === '修改密码') {
            this.$router.push({
              path: '/login/rest',
              query: {
                id: phone
              }
            });
          } else {
            alert('不能修改');
          }
        }, err => { console.log(err); });
      }
    },
    computed: {
      userErrors() {
        let errorText, status;
        if (this.usernameModel.length < 11) {
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
      }
    }
  };
</script>

<style scoped>
  .forget {
    width: 100%;
    text-align: center;
  }

  .forget-context {
    text-align: center;
  }

  .forget-context>ul {
    margin-top: 100px;
  }

  .forget-context>ul>li {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    margin-top: 30px;
  }
  .forget-phone {
    border-bottom:#eee 1px solid;
    width: 300px;
  }

  .forget-title {
    font-size: 15px;
    color: #080808;
  }

  .forget-text {
    width: 160px;
    height: 35px;
    border-bottom-width: 0;
    border-left-width: 0;
    border-right-width: 0;
    border-top-width: 0;
    text-indent: 20px;
    font-size: 20px;
  }

  .forget-foot {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }

  .forget-choose {
    width: 80%;
    margin-top: 80px;
    background-color: #FDE344;
    border: 1px solid #eee;
    border-radius: 20px;
  }

  .forget-main {
    height: 40px;
    color: black;
    font-size: 20px;
    line-height: 40px;
  }

  .forget-show {
    margin-top: 5px;
    font-size: 15px;
  }

  .btn_send_code {
    font-size: 14px;
    line-height: 20px;
  }
  #forget-top {
    margin-left: -73px;
  }
</style>
