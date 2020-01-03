<template>
    <div class="comment">
      <me-navbar class="header" v-show="visible">
        <i class="iconfont icon-fanhui" slot="left" @click="back"></i>
        <span class="iconfont " slot="title">评价</span>
      </me-navbar>
      <ul>
        <li>
          <div class="comment-container">
            <div class="container-img">
              <img src="./1.jpg" />
            </div>
            <div class="container">
              <div class="container-info">
                <div class="info-title">
                  <p class="info-name">诗人二凡</p>
                  <div class="info-star">
                    小星星
                  </div>
                </div>
                <p class="info-time">昨天12:30</p>
              </div>
              <div class="comment-main">
                该用户没有填写评价
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="comment-container">
            <div class="container-img">
              <img src="./1.jpg" />
            </div>
            <div class="container">
              <div class="container-info">
                <div class="info-title">
                  <p class="info-name">诗人二凡</p>
                  <div class="info-star">
                    小星星
                  </div>
                </div>
                <p class="info-time">昨天12:30</p>
              </div>
              <div class="comment-main">
                该用户没有填写评价
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
</template>

<script>
  import MeNavbar from 'base/navbar';
  export default {
    name: 'comment',
    components: {
      MeNavbar
    },
    data() {
      return {
        visible: true
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
      back() {
        this.$router.go(-1);
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import "~assets/scss/mixins";

  .header {
    &.mine-navbar {
     background-color: #FFFFFF;
    }

    .iconfont {
      color: black;
    }
  }
  .comment-container {
    margin: 20px 5% 20px 5%;
    display: flex;
  }
  .container-img {
    width: 50px;
    height: 50px;
  }
  .container-img>img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
  .container {
    width: 100%;
    margin-left: 10px;
  }
  .info-title {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  .info-name {
    font-size: 15px;
    color: black;
  }
  .info-time {
    margin-top: 5px;
  }
  .comment-main {
    margin-top: 20px;
    font-size: 14px;
    color: black;
  }
  ul>li {
    border-bottom: 1px solid #eee;
  }
</style>
