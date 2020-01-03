<template>
  <me-navbar class="header" v-show="visible">
    <i class="iconfont icon-fanhui" slot="left" @click="back"></i>
    <i class="iconfont icon-shenglvehao" slot="right"></i>
  </me-navbar>
</template>

<script>
  import MeNavbar from 'base/navbar';
  export default {
    name: 'ContactHeader',
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
      background-color: #FDE344;
    }

    .iconfont {
      color: white;
    }
  }
</style>
