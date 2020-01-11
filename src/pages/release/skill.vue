<template>
    <div class="skill">
      <me-navbar class="header">
        <i class="iconfont icon-guanbi" slot="left" @click="back"></i>
        <i class="iconfont" slot="title">创建技能-选择分类</i>
      </me-navbar>
      <ul class="container">
        <li @click="ToFound">
          个人成长
        </li>
        <li>
          爱情婚姻
        </li>
        <li>
          子女教育
        </li>
        <li>
          职场心理
        </li>
        <li>
          综合治愈
        </li>
        <li>
          其他
        </li>
      </ul>
    </div>
</template>

<script>
  import MeNavbar from 'base/navbar';
  export default {
    name: 'skill',
    data() {
      return {
      };
    },
    components: {
      MeNavbar
    },
    methods: {
      back() {
        this.$router.push('/home');
      },
      ToFound() {
        this.$router.push({
          path: '/skill-creation',
          query: {
            id: 1
          }
        });
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import "~assets/scss/mixins";
  .task {
    height: 94%;
  }
  .header {
    &.mine-navbar {
      background-color: transparent;
    }
    .iconfont {
      color: black;
    }
  }
  .container {
    margin-left: 3%;
    margin-right: 3%;
  }
  .container>li {
    margin-top: 10px;
    margin-bottom: 30px;
    font-size: 14px;
  }
</style>
