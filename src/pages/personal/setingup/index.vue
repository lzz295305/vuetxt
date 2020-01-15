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
      <router-link to="/inform">
          <div class="container-1">
          <span style="color: black">通知管理</span>
            <svg class="container-1-right" aria-hidden="true">
              <use xlink:href="#icon-you"></use>
            </svg>
          </div>
      </router-link>
      <div class="container-1">
        <span>公开关注关系</span>
        <van-switch v-model="checked"
        size="19px" active-color="#fde344"
        class="container-1-switch"/>
      </div>
    </div>
    <div class="container1">
      <div class="container-1" @click="success">
        <span>清除图片缓存</span>
        <span></span>
        <svg class="container-1-right" aria-hidden="true">
          <use xlink:href="#icon-you"></use>
        </svg>
      </div>
      <div class="container-1" @click="success">
        <span>清除文件缓存</span>
        <span class="container-1-span2" ></span>
        <svg class="container-1-right" aria-hidden="true">
          <use xlink:href="#icon-you"></use>
        </svg>
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
        <svg class="container-1-right" aria-hidden="true">
          <use xlink:href="#icon-you"></use>
        </svg>
      </div>
    </div>
    <div class="container1">
      <div class="container-1">
        <span>常见问题</span>
        <svg class="container-1-right" aria-hidden="true">
          <use xlink:href="#icon-you"></use>
        </svg>
      </div>
      <router-link to="/about-us">
        <div class="container-1">
        <span>关于我们</span>
          <svg class="container-1-right" aria-hidden="true">
            <use xlink:href="#icon-you"></use>
          </svg>
        </div>
      </router-link>
    </div>
  </div>
  <div class="header" @click="quit">
    <span class="header-span">退出账号</span>
  </div>
</div>
</template>

<script>
  import {Toast} from 'vant';
  export default {
    name: 'setingup',
    data() {
      return {
        checked: true
      };
    },
    methods: {
      quit() {
        Toast.success('退出成功');
        localStorage.removeItem('UserInfo');
        this.$router.push('/login');
      }
    }
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
    font-size: 14.5px;
    /*height: 60px;*/
    /*border: #FDE344 2px solid;*/
    padding: 7px 0 7px 0;
    line-height: 30px;
  }
  .container-1-right {
    margin-top: 8px;
    font-weight: bold;
    color: black;
    float: right;
    width: 1.0em;
    height: 1.0em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
  .container-1-switch {
    float: right;
    /*border: #5d656b 1px solid;*/
    margin: 3px 3px 0 0;
  }
  .container-1-span2 {
    /*border: #5d656b 1px solid;*/
  }

/*  底部*/
  .header {
    color: black;
    font-size: 15px;
    height: 50px;
    border-top: #ececec 1.5px solid;
    display: flex;
    align-items: center;
    flex-direction: column;
    position: fixed;
    bottom: 0;
    width: 100%;
  }
  .header-span {
    line-height: 45px;
  }
</style>
