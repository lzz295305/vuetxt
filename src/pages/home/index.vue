<template>
  <div class="home">
    <header class="g-header-container">
      <home-header/>
    </header>
    <br>
    <br>
    <br>
    <br>
    <me-scroll
      :data="recommends"
      pullDown
      @pull-down="pullToRefresh"
      @scroll-end="scrollEnd"
      @scroll="scroll"
      @pull-down-transition-end="pullDownTransitionEnd"
      ref="scroll">
      <div class="g-content-container">
        <home-slider ref="slider" class="slider"/>
      </div>
      <home-nav/>
      <home-recommend @loaded="getRecommends" ref="recommend" class="home-recommend"/>
    </me-scroll>
<!--    返回顶部并且刷新-->
    <div class="g-backtop-container">
      <me-backtop :visible="isBacktopVisible" @backtop="backToTop"/>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  import MeScroll from 'base/scroll';
  import MeBacktop from 'base/backtop';
  import HomeHeader from './header';
  import HomeSlider from './slider';
  import HomeNav from './nav';
  import HomeRecommend from './recommend';

  export default {
    name: 'Home',
    components: {
      MeScroll,
      HomeHeader,
      HomeSlider,
      HomeNav,
      HomeRecommend,
      MeBacktop
    },
    data() {
      return {
        recommends: [],
        isBacktopVisible: false
      };
    },
    methods: {
      updateScroll() {
      },
      getRecommends(recommends) {
        this.recommends = recommends;
      },
      pullToRefresh(end) {
        this.$refs.slider.update().then(end);
      },
      scrollEnd(translate, scroll) {
        this.isBacktopVisible = translate < 0 && -translate > scroll.height();
      },
      backToTop() {
        this.$refs.scroll && this.$refs.scroll.scrollToTop();
      }
    }
  };
</script>

<style lang="scss" scoped>
@import "~assets/scss/mixins";

.home {
  overflow:hidden;
  width:100%;
  height:100%;
  background-color: $bgc-theme;
}
.g-content-container {
  height: 180px;
  padding-top: 0px;
  width: 95%;
  display: flex;
  margin-left: 10px;
  margin-right: 10px;

  .slider {
    overflow: hidden;
    height: 180px;
    border-radius: 5px;
  }
  .home-recommend {
    margin-bottom: 30%;
  }
}
</style>
