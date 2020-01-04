<template>
    <div class="discussion">
      <me-navbar class="header" v-show="visible">
        <i class="iconfont icon-fanhui" slot="left" @click="back"></i>
        <span slot="title">技能讨论</span>
      </me-navbar>
      <div class="discussion-nav">
        <div class="nav-img">
          <img src="./1.jpg" alt="">
          <div class="nav-show">
            <div class="show-content">
              技能讨论
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import MeNavbar from 'base/navbar';
  export default {
    name: 'discussion',
    components: {
      MeNavbar
    }
  };
</script>

<style lang="scss" scoped>
  @import "~assets/scss/mixins";

  .header {
    &.mine-navbar {
      /*background-color: $header-bgc-translucent; */
      background-color: transparent;
      transition: background-color 0.5s;
    }

    &.header-transition {
      background-color: $header-bgc-translucent;
    }

    .iconfont {
      color: white;
      font-size: $icon-font-size;
    }
  }
  .nav-img {
    width: 100%;
    height: 38%;
  }
  .nav-img>img {
    width: 100%;
  }
</style>
