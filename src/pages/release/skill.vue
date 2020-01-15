<template>
<!--  发布技能详情页面-->
    <div class="skill">
      <me-navbar class="header">
        <i class="iconfont icon-guanbi" slot="left" @click="back"></i>
        <i class="iconfont" slot="title">创建技能-选择分类</i>
      </me-navbar>
      <ul class="container" v-show="!skill">
        <li @click="ToFound(index, item.stContent, item.stNumber)" v-for="(item, index) in classify" :key="index">
          {{item.stContent}}
        </li>
      </ul>
<!--      专业技能-->
      <ul class="container" v-show="skill">
        <li @click="ToFound1(index)" v-for="(item, index) in classify" :key="index" class="info">
          <div>
            {{item.stContent}}
          </div>
          <i class="iconfont icon-you">
          </i>
        </li>
      </ul>
    </div>
</template>

<script>
  import MeNavbar from 'base/navbar';
  import axios from 'axios';
  export default {
    name: 'skill',
    data() {
      return {
        classify: [],
        skill: false
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
        if (this.$route.query.id < 4) {
          let pubId = this.$route.query.id + 1;
          axios.get('http://api.qiandao.xgl6.top/pubSkill/getSkills/' + pubId).then(res => {
            this.classify = res.data;
          }).catch(err => {
            console.log(err);
          });
        } else {
          this.skill = true;
          let pubId = this.$route.query.id + 1;
          axios.get('http://api.qiandao.xgl6.top/pubSkill/getSkills/' + pubId).then(res => {
            this.classify = res.data;
          }).catch(err => {
            console.log(err);
          });
        }
      },
      back() {
        this.$router.push('/home');
      },
      ToFound(index, title, oneself) {
        if (this.$route.query.title !== '游戏电玩') {
          this.$router.push({
            path: '/skill-creation',
            query: {
              id: index,
              name: title
            }
          });
        } else {
          this.$router.push({
            path: '/skillApprove',
            query: {
              id: index,
              name: title,
              number: oneself
            }
          });
        }
      },
      ToFound1(index) {
        this.$router.push({
          path: '/skillPlay',
          query: {
            id: index
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
  .info {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
