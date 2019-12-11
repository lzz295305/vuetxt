<template>
  <nav class="nav">
    <div class="nav-title">
      <div class="nav-left">做任务赚钱</div>
      <div class="nav-right">
        <a href="">我的任务</a>
      </div>
    </div>
    <ul class="nav-list">
      <li
        class="nav-item"
        v-for="(item, index) in navs"
        :key="index">
        <a :href="item.linkUrl" class="nav-link">
          <img :src="item.picUrl" class="nav-pic">
          <span>{{item.text}}</span>
        </a>
      </li>
    </ul>
    <div class="nav-title">
      <div class="nav-left">超简单赚钱任务</div>
    </div>
    <ul class="nav-list">
      <li
        class="nav-item"
        v-for="(item, index) in navs1"
        :key="index">
        <a :href="item.linkUrl" class="nav-link">
          <img :src="item.picUrl" class="nav-pic">
          <span>{{item.text}}</span>
        </a>
      </li>
    </ul>
    <div class="nav-title">
      <div class="nav-left">平台福利</div>
    </div>
    <ul class="nav-list">
      <li class="nav-content">
        <a href="#" class="nav-link">
          <span>邀请好友</span>
          <span>坐享额外收入</span>
          <img src="#" class="nav-pic">
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
  import {navItems, navItems1} from './config';

  export default {
    name: 'HomeNav',
    created() {
      this.navs = navItems;
      this.navs1 = navItems1;
    }
  };
</script>

<style lang="scss" scoped>
  @import "~assets/scss/mixins";

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
      width: 25%;
      margin-bottom: 15px;
    }

    &-link {
      @include flex-center(column);
    }

    &-pic {
      width: 40%;
      margin-bottom: 8px;
    }

    &-content {
      width: 30%;
      margin: 0 10px 15px 10px;
      border: 1px solid #de181b;
    }
  }

</style>
