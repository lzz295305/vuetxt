<template>
    <div class="MoreTask">
      <Header />
      <more-task-slider />
    </div>
</template>

<script>
  import Header from './header';
  import MoreTaskSlider from './slider';

  export default {
    name: 'MoreTask',
    components: {
      Header,
      MoreTaskSlider
    }
  };
</script>

<style scoped>

</style>
