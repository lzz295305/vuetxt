<template>
  <div id="app" class="g-container">
    <div class="g-view-container">
      <router-view></router-view>
    </div>
    <div class="g-footer-container" v-show="showNav">
      <c-tabbar/>
    </div>
  </div>
</template>

<script>
  import CTabbar from 'components/tabbar';
  export default {
    name: 'App',
    data() {
      return {
        showNav: false
      };
    },
    components: {
      CTabbar
    }
  };
</script>
