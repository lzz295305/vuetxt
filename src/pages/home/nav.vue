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
        <router-link :to="{path: '/moreTask'}" class="nav-link">
          <img :src="item.picUrl" class="nav-pic">
          <span>{{item.text}}</span>
        </router-link>
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
    <div class="nav-card">
      <ul>
        <li class="nav-content1">
          <a href="#" class="nav-link">
            <span class="nav-link-title">邀请好友</span>
            <span class="nav-link-center">坐享额外收入</span>
            <i class="iconfont icon-faburenwu"></i>
          </a>
        </li>
        <li class="nav-content2">
          <a href="#" class="nav-link">
            <span class="nav-link-title">新手任务</span>
            <span class="nav-link-center">快速成为猎人</span>
            <i class="iconfont icon-faburenwu"></i>
          </a>
        </li>
        <li class="nav-content3">
          <a href="#" class="nav-link">
            <span class="nav-link-title">日常任务</span>
            <span class="nav-link-center">领取每日福利</span>
            <i class="iconfont icon-faburenwu"></i>
          </a>
        </li>
      </ul>
    </div>
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
  * {
    margin: 0;
    padding: 0;
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
      width: 25%;
      margin-bottom: 15px;
    }

    &-link {
      @include flex-center(column);

      &-title {
        margin-top: 20px;
        color: white;
        font-size: 15px;
      }

      &-center {
        margin-top: 10px;
        color: white;
      }
    }

    &-pic {
      width: 40%;
      margin-bottom: 8px;
    }

    &-card>ul {
      width: 100%;
      display: flex;
      flex-wrap: nowrap;
      margin-top: 10px;
    }

    &-content1,
    &-content2,
    &-content3 {
      width: 30%;
      margin: 0 10px 15px 10px;
      border-radius: 5px;
    }

    &-content1 {
      background-color: #10D58E;
    }
    &-content2 {
      background-color: #3F9EFA;
    }
    &-content3 {
      background-color: #FDC722;
    }

    .iconfont {
      margin-top: 5px;
      margin-bottom: 10px;
      font-size: 40px;
      color: white;
    }
  }

</style>
