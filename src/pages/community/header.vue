<template>
  <me-navbar class="header" v-show="visible">
    <i class="iconfont icon-fanhui" slot="left" @click="back"></i>
    <span slot="title">猎人讨论区</span>
    <i class="iconfont icon-xiaoxi" slot="right"></i>
  </me-navbar>
</template>

<script>
  import MeNavbar from 'base/navbar';

  export default {
    name: 'HomeHeader',
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
      background-color: #F5F5F5;
    }

    .iconfont {
      color: black;
      font-size: $icon-font-size;
    }
  }
</style>
