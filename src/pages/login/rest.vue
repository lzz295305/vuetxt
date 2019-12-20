<template>
  <div class="rest">
    <forget-header/>
    <div class="rest-content">
      <ul>
        <li class="rest-top">
          <label class="forget-phone">
            <span class="rest-title">设置密码</span>
            <input type="text" class="rest-text" v-model="passwordModel" placeholder="请输入新密码">
          </label>
          <p class="forget-show">{{ pwdErrors.errorText }}</p>
        </li>
        <li>
          <label class="forget-phone">
            <span class="rest-title">确认密码</span>
            <input type="text" class="rest-text" v-model="newModel" placeholder="请再次输入密码">
          </label>
          <p class="forget-show">{{ newErrors.errorText }}</p>
        </li>
      </ul>
    </div>
    <div class="rest-foot">
      <div class="rest-choose">
        <span @click="change()" class="rest-main">完成</span>
      </div>
    </div>
  </div>
</template>

<script>
  import ForgetHeader from './header';
  export default {
    name: 'rest',
    data() {
      return {
        passwordModel: '',
        newModel: '',
        errorText: ''
      };
    },
    components: {
      ForgetHeader
    },
    methods: {
      change() {
        this.$router.push('/login');
      }
    },
    computed: {
      pwdErrors() {
        let errorText, status;
        if (this.passwordModel < 8) {
          status = false;
          errorText = '';
        } else if (!/^[a-z0-9]+$/g.test(this.passwordModel)) {
          status = false;
          errorText = '密码由字母和数字组成';
        } else {
          status = true;
          errorText = '';
        }
        return {
          status,
          errorText
        };
      },
      newErrors() {
        let errorText, status;
        if (this.newModel === this.passwordModel) {
          status = true;
          errorText = '';
        } else {
          status = false;
          errorText = '两次输入密码不一致';
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
  .rest-content {
    text-align: center;
  }

  .rest-content>ul {
    margin-top: 100px;
    font-size: 20px;
  }

  .rest-content>ul>li {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    margin-top: 30px;
  }
  .rest-title {
    font-size: 15px;
    color: #080808;
    margin-left: -70px;
  }

  .rest-text {
    width: 160px;
    height: 35px;
    border-bottom-width: 0;
    border-left-width: 0;
    border-right-width: 0;
    border-top-width: 0;
    text-indent: 20px;
    font-size: 20px;
  }

  .forget-show {
    margin-top: 5px;
    font-size: 15px;
  }
  .forget-phone {
    border-bottom:#eee 1px solid;
    width: 300px;
  }
  .rest-foot {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }

  .rest-choose {
    width: 80%;
    margin-top: 80px;
    background-color: #FDE344;
    border: 1px solid #eee;
    border-radius: 20px;
    text-align: center;
  }

  .rest-main {
    height: 40px;
    color: black;
    font-size: 20px;
    line-height: 40px;
  }
</style>
