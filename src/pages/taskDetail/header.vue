<template>
  <me-navbar class="header" v-show="visible">
    <i class="iconfont icon-fanhui" slot="left" @click="back"></i>
    <i class="iconfont icon-shenglvehao" slot="right"></i>
  </me-navbar>
</template>

<script>
  import MeNavbar from 'base/navbar';
  import MeSearchBox from 'base/search-box';
  export default {
    name: 'HomeHeader',
    components: {
      MeNavbar,
      MeSearchBox
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
      background-color: #080808;
      border-bottom: 1px solid black;
    }

    .iconfont {
      color: white;
      font-size: $icon-font-size;
    }
  }
</style>
