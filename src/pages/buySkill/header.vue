<template>
  <me-navbar class="header" v-show="visible">
    <i class="iconfont icon-fanhui" slot="left" @click="back"></i>
    <span slot="title">购买技能</span>
  </me-navbar>
</template>

<script>
  import MeNavbar from 'base/navbar';
  export default {
    name: 'BuyHeader',
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
      background-color: rgba(0, 0, 0, 0);
    }

    .iconfont {
      color: black;
    }
  }
</style>
