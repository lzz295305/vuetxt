<template>
  <div class="taskDetail">
    <product-header/>
    <me-scroll>
      <task-nav class="taskDetail-nav"/>
      <task-main class="taskDetail-main"/>
      <task-info class="taskDetail-info"/>
    </me-scroll>
    <div class="task-footer">
      <div class="footer-item" @click="ToDetail">
        <span>接受任务</span>
      </div>
    </div>
  </div>
</template>

<script>
  import ProductHeader from './header';
  import TaskNav from './nav';
  import TaskMain from './main';
  import TaskInfo from './info';
  import MeScroll from 'base/scroll';

  export default {
    name: 'TaskDetail',
    components: {
      ProductHeader,
      TaskNav,
      TaskMain,
      TaskInfo,
      MeScroll
    },
    methods: {
      ToDetail() {
        let UserInfo = localStorage.getItem('UserInfo');
        if (UserInfo === null) {
          this.$router.push('/login');
        }
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import "~assets/scss/mixins";
  .taskDetail {
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;
    z-index: $product-z-index;
    width: 100%;
    height: 100%;
    background-color: $bgc-theme;

    .task-footer {
      z-index: 3;
      position: fixed;
      bottom: 0;
      width: 100%;
      height: 8%;
      background-color: #FDE344;
      text-align: center;
      margin-top: 20px;
    }
  }

  .taskDetail-nav {
    background-color: black;
  }

  .footer-item>span {
    font-size: 20px;
    color: black;
    line-height: 50px;
  }
  .taskDetail-info {
    margin-bottom: 40%;
  }
</style>
