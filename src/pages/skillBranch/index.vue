<template>
    <div class="branch">
      <me-navbar class="header">
        <i class="iconfont icon-fanhui" slot="left" @click="back"></i>
        <me-search-box
          name="search"
          placeholder="搜索任务发布者ID"
          slot="center"
          fake
          @query="getQuery"
          @click.native="goToSearch"
        />
      </me-navbar>
      <branch-nav />
    </div>
</template>

<script>
  import MeNavbar from 'base/navbar';
  import MeSearchBox from 'base/search-box';
  import BranchNav from './nav';
  export default {
    name: 'SkillBranch',
    components: {
      MeNavbar,
      MeSearchBox,
      BranchNav
    },
    data() {
      return {
        visible: true
      };
    },
    methods: {
      goToSearch() {
        this.$router.push('/search');
      },
      back() {
        this.$router.push('/skill');
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import "~assets/scss/mixins";

  .header {
    &.mine-navbar {
       background-color: #fff;
    }

    .iconfont {
      color: black;
    }
  }
</style>
