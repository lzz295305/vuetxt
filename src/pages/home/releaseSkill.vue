<template>
  <div class="releaseSkill">
    <me-navbar class="header">
      <i class="iconfont icon-fanhui" slot="left" @click="back"></i>
      <span slot="title">创建技能-选择分类</span>
    </me-navbar>
    <ul class="nav-list">
      <li
        class="nav-item"
        v-for="(item, index) in navs"
        :key="index"
      >
        <router-link :to="{path: '/skillBranch'}" class="nav-link">
          <img :src="item.picUrl" class="nav-pic">
          <span>{{item.text}}</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  import {navItems4} from './config';
  import MeNavbar from 'base/navbar';
  export default {
    name: 'releaseSkill',
    data() {
      return {
        visible: true
      };
    },
    created() {
      this.navs = navItems4;
    },
    components: {
      MeNavbar
    },
    methods: {
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
       background-color: transparent;
     }

    .icon-fanhui {
      color: black;
      font-size: $icon-font-size;
    }
  }
  .nav {
    width: 100%;
    padding-top: 15px;
    /*background-color: #fff;*/

    &-title {
      display: flex;
      justify-content: space-between;
      margin: 0 10px 0 10px;
    }

    &-left {
      font-size: 20px;
    }

    &-list {
      margin-top: 20px;
      display: flex;
      flex-wrap: wrap;
    }

    &-item {
      width: 30%;
      margin-bottom: 15px;
    }

    &-link {
      @include flex-center(column);
    }

    &-pic {
      width: 40%;
      margin-bottom: 8px;
    }

    .iconfont {
      margin-top: 5px;
      margin-bottom: 10px;
      font-size: 40px;
      color: white;
    }
  }
</style>
