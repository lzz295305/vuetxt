<template>
  <me-navbar class="header" v-show="visible">
    <me-search-box
      placeholder="搜索猎人ID或者关键词"
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
    name: 'NewsHeader',
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
      getQuery(query) {
        console.log(query);
      },
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
      background-color: #FFFFFF;
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
