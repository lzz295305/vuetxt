<template>
  <div id="app" class="g-container">
    <div class="g-view-container">
      <router-view></router-view>
    </div>
    <div class="g-footer-container" v-if="navShow">
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
        footNavs: ['/home', '/skill', '/community', '/personal'],
        navShow: true
      };
    },
    components: {
      CTabbar
    },
    watch: {
      '$route'(to, from) {
        this.navShow = this.footNavs.some(item => {
          if (item === to.path) {
            return true;
          }
        });
      }
    }
  };
</script>
