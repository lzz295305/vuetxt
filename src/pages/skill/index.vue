<template>
  <div class="skill">
    <header class="g-header-container">
      <skill-header/>
    </header>
    <div class="g-content-container">
      <div class="slider">
        <skill-slider></skill-slider>
      </div>
      <div class="main">
        <category-content :curId="curId"/>
      </div>
    </div>
  </div>
</template>

<script>
  import SkillHeader from './header';
  import SkillSlider from './slider';

  export default {
    name: 'skill',
    components: {
      SkillHeader,
      SkillSlider
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
    display: flex;
  }

</style>
