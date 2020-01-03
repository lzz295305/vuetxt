<template>
  <div class="community">
    <com-header/>
    <me-scroll>
      <com-nav/>
      <com-tab/>
    </me-scroll>
  </div>
</template>

<script>
  import ComHeader from './header';
  import ComNav from './nav';
  import ComTab from './tab';
  import MeScroll from 'base/scroll';

  export default {
    name: 'Community',
    components: {
      ComHeader,
      ComNav,
      ComTab,
      MeScroll
    }
  };
</script>

<style lang="scss" scoped>
  .community {
    width: 100%;
  }
</style>
