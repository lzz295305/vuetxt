<template>
    <div class="skillDetail">
      <header class="g-header-container">
        <skill-detail-header/>
      </header>
        <div class="g-content-container">
          <skill-detail-slider/>
        </div>
        <div class="g-main-container">
          <div style="overflow-y: scroll">
            <skill-detail-main/>
            <main-evaluate class="main-evaluate"/>
          </div>
        </div>

      <router-view></router-view>
      <div class="task-footer">
        <router-link class="footer-left" :to="{path: '/skillContact'}">
          <span>
            <i class="iconfont icon-xiaoxi">联系猎人</i>
          </span>
        </router-link>
        <div class="footer-right" @click="init">
          <span>
            <i class="iconfont icon-chaye">购买技能</i>
          </span>
        </div>
      </div>
    </div>
</template>

<script>
  import SkillDetailHeader from './header';
  import SkillDetailSlider from './slider';
  import SkillDetailMain from './main';
  import MeScroll from 'base/scroll';
  import MainEvaluate from './evaluate';

  export default {
    name: 'SkillDetail',
    data() {
      return {
      };
    },
    components: {
      SkillDetailHeader,
      SkillDetailSlider,
      SkillDetailMain,
      MeScroll,
      MainEvaluate
    },
    methods: {
      updateScroll() {
      },
      pullToRefresh(end) {
        this.$refs.slider.update().then(end);
      },
      init() {
        let skillId = this.$route.query.id;
        let UserInfo = localStorage.getItem('UserInfo');
        if (UserInfo === null) {
          this.$router.push('/login');
        } else {
          this.TOBuy(skillId);
        }
      },
      TOBuy(key) {
        this.$router.push({
          path: '/buySkill',
          query: {
            id: key
          }
        });
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import "~assets/scss/mixins";

  .skillDetail {
    overflow-y: scroll;
    width:100%;
    height:90%;
  }
  .g-content-container {
    padding-top: 0px;
    width: 100%;
    height: 40%;
    display: flex;
    position: relative;
  }
  .g-main-container {
    position: absolute;
    top: 280px;
    background-color: white;
    border-radius: 20px 20px 0 0;
    width: 100%;
    height: 50%;
    z-index: 3;
    overflow-y: scroll;
  }
  .task-footer {
    z-index: 3;
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 8%;
    text-align: center;
    display: flex;
    justify-content: space-between;
  }
  .footer-left {
    width: 35%;
    background-color: #080808;
    line-height: 53px;
  }
  .footer-left>span {
    color: white;
  }
  .footer-right {
    width: 65%;
    background-color: #FDE344;
    line-height: 53px;
  }
  .footer-right>span {
    color: #080808;
  }
</style>
