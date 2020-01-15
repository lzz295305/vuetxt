<template>
  <div class="community">
    <com-header/>
    <com-nav/>
    <com-tab/>
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
