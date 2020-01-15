<template>
<!--  专业技能二级页面-->
  <div class="skill">
    <me-navbar class="header">
      <i class="iconfont icon-guanbi" slot="left" @click="back"></i>
      <i class="iconfont" slot="title">创建技能-选择分类</i>
    </me-navbar>
    <ul class="container">
      <li @click="ToFound(item.stContent)" v-for="(item, index) in classify" :key="index">
        {{item.stContent}}
      </li>
    </ul>
  </div>
</template>

<script>
  import MeNavbar from 'base/navbar';
  import axios from 'axios';
  export default {
    name: 'skillPlay',
    data() {
      return {
        classify: []
      };
    },
    components: {
      MeNavbar
    },
    created() {
      this.init();
    },
    methods: {
      init() {
        let pubId = this.$route.query.id + 1;
        axios.get('http://api.qiandao.xgl6.top/pubSkill/getGameSkills/' + pubId).then(res => {
          this.classify = res.data;
        }).catch(err => {
          console.log(err);
        });
      },
      back() {
        this.$router.push('/home');
      },
      // 专业技能二级页面传数据
      ToFound(title) {
        let id = 66;
        this.$router.push({
          path: '/skill-creation',
          query: {
            name: title,
            id: id
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
