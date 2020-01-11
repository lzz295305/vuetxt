<template>
<div>
  <div>
    <div class="header">
      <span class="header-span">共关注1位猎人</span>
    </div>
    <div class="container">
      <div class="container-1">
        <img src="https://cdn.xgl6.top/img/9ef126f301f12078f30713097fc4c1e.png" alt="">
      </div>
      <div class="container-left">
        <span class="container-span1">点我头像关注我</span><br>
        <span style="font-size: 13px;margin-left: 6px">ID:820207</span>
      </div>
      <div class="container-right">
        <van-cell is-link @click="showPopup">
          <svg class="header-img-right" aria-hidden="true">
            <use xlink:href="#icon-guanzhu"></use>
          </svg>
        </van-cell>
      </div>
      <div>
        <van-popup v-model="show" round position="bottom" :style="{ height: '25%' }">
          <div class="header-span1">
            <span>取消关注对方？</span>
          </div>
            <div class="header-span2">
              <a style="color: red">确定</a>
            </div>
            <div class="header-span3">
              <a style="color: black">取消</a>
            </div>
        </van-popup>
      </div>
    </div>
  </div>
</div>
</template>

<script>
  export default {
    name: 'my-attention',
    data() {
      return {
        show: false
      };
    },
    methods: {
      showPopup() {
        this.show = true;
      }
    }
  };
</script>

<style scoped>

.header {
  width: 112%;
  margin-left: -19px;
  height: 45px;
  margin-top: 10px;
  padding-left: 15px;
  background-color: #F8F8F8;
  color: black;
}
  .header-span {
    font-size: 15px;
    line-height: 45px;
  }

  .container {
    padding: 15px 0 0 0;
    border-bottom: #F8F8F8 2px solid;
    height: 75px;
  }
  .container-1 img {
    float: left;
    margin-top: 6px;
    width: 10%;
  }
  .container-left {
    line-height: 20px;
  }
  .container-span1 {
    font-size: 14px;
    margin: 0 6px 0 6px ;
  }

  .header-img-right {
    float: right;
    margin: -35px 10px;
    font-weight: bold;
    width: 2.3em;
    height: 2.3em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }

/*  底部*/
  .header-span1 {
    margin: 20px auto;
    padding-bottom: 15px;
    text-align: center;
    border-bottom: #F8F8F8 2px solid;
  }
  .header-span2 {
    font-size: 17px;
    margin: 20px auto;
    text-align: center;
    padding-bottom: 15px;
    border-bottom: #ccc 4px solid;
  }
  .header-span3 {
    font-size: 17px;
    margin: 20px auto;
    text-align: center;
  }
</style>
