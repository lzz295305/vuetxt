<template>
  <div class="g-tabbar">
    <router-link class="g-tabbar-item" to="/home">
      <i class="iconfont icon-renwu"></i>
      <span>任务</span>
    </router-link>
    <router-link class="g-tabbar-item" to="/category">
      <i class="iconfont icon-jineng"></i>
      <span>技能</span>
    </router-link>
    <router-link class="g-tabbar-item" to="/cart">
      <i class="iconfont icon-shequ"></i>
      <span>社区</span>
    </router-link>
    <router-link class="g-tabbar-item" to="/personal">
      <i class="iconfont icon-wo"></i>
      <span>我的</span>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: 'CTabbar'
  };
</script>

<style lang="scss" scoped>
  @import "~assets/scss/mixins";

  .router-link-active {
    color: $link-active-color;
  }

  .g-tabbar-item:hover {
    background-color: #fff;
      .iconfont {
        transform: scale(1.3);
      }
  }
</style>
