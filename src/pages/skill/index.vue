<template>
  <div class="skill">
    <header class="g-header-container">
      <skill-header/>
    </header>
    <me-scroll>
      <div class="g-content-container">
        <div class="slider">
          <skill-slider/>
        </div>
        <div class="main">
          <skill-nav/>
        </div>
        <div class="tab">
          <skill-tab/>
        </div>
      </div>
    </me-scroll>
  </div>
</template>

<script>
  import SkillHeader from './header';
  import SkillSlider from './slider';
  import SkillNav from './nav';
  import SkillTab from './tab';
  import MeScroll from 'base/scroll';

  export default {
    name: 'skill',
    components: {
      SkillHeader,
      SkillSlider,
      SkillNav,
      SkillTab,
      MeScroll
    }
  };
</script>
<style lang="scss" scoped>
  @import "~assets/scss/mixins";

  .skill {
    overflow:hidden;
    width:100%;
    height:100%;
    background-color: $bgc-theme;
  }

  .g-content-container {
    height: 180px;
    width: 95%;
    display: flex;
    flex-wrap: wrap;
    margin-left: 10px;
    margin-right: 10px;

    .slider {
      overflow: hidden;
      height: 180px;
      border-radius: 5px;
    }

    .main {
      width: 100%;
    }

    .tab {
      width: 100%;
      margin-top: 15px;
    }
  }

</style>
