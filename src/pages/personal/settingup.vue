<template>
  <div>
    <div class="header-return">
      <div class="header-container">
        <router-link to="/personal">
          <svg class="header-img-right" aria-hidden="true">
            <use xlink:href="#icon-fanhui"></use>
          </svg>
        </router-link>
        <div class="header-container-center">
          <span>设置</span>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="container1">
        <div class="container-1">
          <span>通知管理</span>
          <svg class="container-1-right" aria-hidden="true">
            <use xlink:href="#icon-you"></use>
          </svg>
        </div>
        <div class="container-1">
        <span>公开关注关系</span>
      </div>
      </div>
      <div class="container1">
        <div class="container-1">
          <span>清除图片缓存</span>
          <svg class="container-1-right" aria-hidden="true">
            <use xlink:href="#icon-you"></use>
          </svg>
        </div>
        <div class="container-1">
          <span>清除文件缓存</span>
        </div>
      </div>
      <div class="container1">
        <div class="container-1">
          <span>黑名单管理</span>
          <svg class="container-1-right" aria-hidden="true">
            <use xlink:href="#icon-you"></use>
          </svg>
        </div>
        <div class="container-1">
          <span>更换手机号</span>
        </div>
      </div>
      <div class="container1">
        <div class="container-1">
          <span>常见问题</span>
          <svg class="container-1-right" aria-hidden="true">
            <use xlink:href="#icon-you"></use>
          </svg>
        </div>
        <div class="container-1" @click="round">
          <span>关于我们</span>
        </div>
      </div>
    </div>
    <div class="footer" @click="tologin">
      <span class="footer-span">退出账号</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'settingup',
    data() {
      return {
      };
    },
    created() {
    },
    mounted() {
    },
    methods: {
      round() {
        alert(1);
      }
    }
    // methods: {
    //   tologin() {
    //     alert(1);
    //   },
    //   quit() {
    //     alert(333);
    //     console.log(1);
    //     window.localStorage.clear();
    //     localStorage.removeItem('UserInfo');
    //     alert(1);
    //     // this.$router.push('/login');
    //   }
    // }
  };
</script>

<style scoped>
  .header-return {
    height: 55px;
  }
  .header-container {
    height: 55px;
    border-bottom: 3px #F8F8F8 solid;
  }
  .header-container-center {
    color: black;
    font-size: 16px;
    margin: 10px 14px;
    text-align: center;
  }
  .header-container-center span{
    margin-top: 15px;
    line-height: 55px;
  }
  .header-img-right {
    margin: 20px 10px;
    font-weight: bold;
    color: black;
    float: left;
    width: 1.35em;
    height: 1.35em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }

/*  内容*/
  .container1 {
    color: black;
    width: 95%;
    padding-right: 5%;
    float: right;
    margin: 0 auto;
    border-bottom: #ececec 1px solid;
  }
  .container-1 {
    font-size: 14px;
    padding: 7px 0 7px 0;
    line-height: 30px;
  }
  .container-1-right {
    margin-top: 6px;
    font-weight: bold;
    color: black;
    float: right;
    width: 1.2em;
    height: 1.2em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }

/*  底部*/
  .footer {
    color: black;
    font-size: 15px;
    height: 50px;
    border-top: #ececec 1px solid;
    display: flex;
    align-items: center;
    flex-direction: column;
    position: fixed;
    bottom: 0;
    width: 100%;
  }
  .footer-span {
    line-height: 45px;
  }
</style>
