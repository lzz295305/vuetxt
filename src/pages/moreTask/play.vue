<template>
    <div class="play">
      <me-search-box class="play-search"/>
      <more-task-nav />
      App试玩
    </div>
</template>

<script>
  import MeSearchBox from 'base/search-box';
  import MoreTaskNav from './nav';
  export default {
    name: 'play',
    components: {
      MeSearchBox,
      MoreTaskNav
    }
  };
</script>

<style scoped>
  .play-search {
    margin-top: 10px;
    margin-bottom: 5px;
  }
</style>
