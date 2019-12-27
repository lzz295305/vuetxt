<template>
    <div class="support">
      <me-search-box class="support-search"/>
      <more-task-nav />
      社区互助
    </div>
</template>

<script>
  import MeSearchBox from 'base/search-box';
  import MoreTaskNav from './nav';
  export default {
    name: 'support',
    components: {
      MeSearchBox,
      MoreTaskNav
    }
  };
</script>

<style scoped>
  .support-search {
    margin-top: 10px;
    margin-bottom: 5px;
  }
</style>
