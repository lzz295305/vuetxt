<template>
  <me-navbar class="header">
    <i class="iconfont" slot="left"></i>
    <!-- <div slot="center">搜索框</div> -->
    <me-search-box
      name="search"
      placeholder="搜索任务发布者ID"
      slot="center"
      fake
      @query="getQuery"
      @click.native="goToSearch"
    />
    <i class="iconfont icon-xiaoxi" slot="right"></i>
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
      goToSearch() {
        this.$router.push('/search');
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import "~assets/scss/mixins";

  .header {
    &.mine-navbar {
      background-color: transparent;
    }

    .iconfont {
      color:$icon-color-default;
      font-size: $icon-font-size;
    }

    .icon-xiaoxi{
      color: #080808;
    }
  }
</style>
