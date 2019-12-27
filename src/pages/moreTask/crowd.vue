<template>
    <div class="crowd">
      <me-search-box class="crowd-search"/>
      <more-task-nav />
      众包任务
    </div>
</template>

<script>
  import MeSearchBox from 'base/search-box';
  import MoreTaskNav from './nav';
  export default {
    name: 'crowd',
    components: {
      MeSearchBox,
      MoreTaskNav
    }
  };
</script>

<style scoped>
  .crowd-search {
    margin-top: 10px;
    margin-bottom: 5px;
  }
</style>
