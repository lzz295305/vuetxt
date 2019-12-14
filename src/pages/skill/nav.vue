<template>
    <div class="nav">
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
      <ul class="nav-box">
        <li class="nav-context">
          <div class="nav-context1">
            <h3>优质技能专区</h3>
            <span>excellent skills</span>
          </div>
          <i class="iconfont icon-faburenwu"></i>
        </li>
        <li class="nav-context">
          <div class="nav-context1">
            <h3>游戏大神专区</h3>
            <span>让游戏变得更容易</span>
          </div>
          <i class="iconfont icon-faburenwu"></i>
        </li>
      </ul>
    </div>
</template>

<script>
  import {navItems2} from './config';
  export default {
    name: 'SkillNav',
    created() {
      this.navs = navItems2;
    }
  };
</script>

<style lang="scss" scoped>
  @import "~assets/scss/mixins";

  .nav {
    width: 100%;
    padding-top: 0px;

    &-left {
      font-size: 20px;
    }

    &-list {
      margin-top: 20px;
      display: flex;
      flex-wrap: wrap;
    }

    &-item {
      width: 20%;
      margin-bottom: 15px;
    }

    &-link {
      @include flex-center(column);
    }

    &-pic {
      width: 40%;
      margin-bottom: 8px;
    }

    &-box {
      display: flex;
      justify-content: space-between;
    }
    &-context {
      height: 46px;
      width: 48%;
      box-shadow: 0 0 5px #cccccc;
      border-radius: 5px;
      background-color: #fff;
      display: flex;
      justify-content: space-between;
    }

    &-context1 {
      width: 60%;
      margin: 8px 5px 8px 20px;
    }

    h3 {
      font-size: 18px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    .iconfont {
      margin-top: 15px;
      margin-right: 10px;
      font-size: 20px;
    }
  }
</style>
