<template>
  <me-navbar class="header" v-show="visible">
    <i class="iconfont" slot="left"></i>
    <span slot="title">重置密码</span>
  </me-navbar>
</template>

<script>
  import MeNavbar from 'base/navbar';

  export default {
    name: 'ForgetHeader',
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
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import "~assets/scss/mixins";

  .header {
    &.mine-navbar {
      background-color: #FDE344;
      transition: background-color 0.5s;
    }

    &.header-transition {
      background-color: $icon-color-default;
      border-bottom: 1px solid #080808;
    }

    .iconfont {
      color: $icon-color-default;
      font-size: $icon-font-size;
    }
  }
</style>
