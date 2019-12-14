<template>
  <div class="tab">
    <ul class="tab-title">
      <li @click="show(true)" class="left">
        <span >热门技能</span>
      </li>
      <li @click="show(false)" class="right">
        <span >猎人动态</span>
      </li>
    </ul>
    <div v-if="temp" class="content">
      <ul class="tab-data">
        <li>
          <div class="content-title">
            <img src="./img/nav-item-1.png" alt="" class="title-img">
            <span>奈黑酱</span>
          </div>
          <div class="content-matter">
            <img src="./img/nav-item-1.png" alt="" class="content-img">
            <div class="content-txt">
              <span>陪聊（可盐可甜）</span>
              <p class="content-info">
                <span>8.80元</span>
                <span>
              <i class="iconfont icon-xiaoxi">5.0</i>
              <i class="iconfont icon-xiaoxi"></i>
            </span>
              </p>
              <span>官方认证</span>
            </div>
          </div>
        </li>
        <li>
          <div class="content-title">
            <img src="./img/nav-item-1.png" alt="" class="title-img">
            <span>奈黑酱</span>
          </div>
          <div class="content-matter">
            <img src="./img/nav-item-1.png" alt="" class="content-img">
            <div class="content-txt">
              <span>陪聊（可盐可甜）</span>
              <p class="content-info">
                <span>8.80元</span>
                <span>
              <i class="iconfont icon-xiaoxi">5.0</i>
              <i class="iconfont icon-xiaoxi"></i>
            </span>
              </p>
              <span>官方认证</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div v-if="!temp">
      <skill-state/>
    </div>
  </div>
</template>

<script>
  import SkillState from './state';

  export default {
    name: 'SkillTab',
    data() {
      return {
        temp: true
      };
    },
    components: {
      SkillState
    },
    methods: {
      show(t) {
        this.temp = t;
      }
    }
  };
</script>

<style lang="scss" scoped>

  .tab {
    width: 100%;
    margin: 0;
    padding: 0;
  }

  .tab-title {
    width: 100%;
    list-style: none;
    display: flex;
  }

  .left {
    display: inline-block;
    border-bottom: 5px solid #AC8D22;
    line-height: 1px !important;
    font-size: 15px;
    font-weight: bold;
  }

  .right {
    margin-left: 20px;
  }

  .content {
    margin-top: 10px;
  }

  .title-img {
    width: 15px;
    height: 15px;
    border-radius: 50%;
  }

  .content-matter {
    width: 100%;
    margin-top: 10px;
    display: flex;
    justify-content: left;
  }

  .content-img {
    width: 50px;
    border-radius: 5px;
  }

  .content-txt {
    width: 100%;
    margin-left: 10px;
    align-items: center;
    margin-top: 5px;
    font-size: 15px;
  }

  .content-info {
    margin-top: 5px;
    display: flex;
    justify-content: space-between;
    margin-right: 10px;
  }

  .tab-data>li {
    padding: 10px;
  }
</style>
