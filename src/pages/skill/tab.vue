<template>
  <div class="tab">
    <ul class="tab-title">
      <li @click="show(true)" class="left" :class="{'active': leftIsActive}">
        <span >热门技能</span>
      </li>
      <li @click="show(false)" class="right" :class="{'active': rightIsActive}">
        <span >猎人动态</span>
      </li>
    </ul>
    <div v-if="temp" class="content">
      <ul class="tab-data">
        <li @click="goSkillDetail(item.siSerialnumber)" v-for="(item, index) in skillList" :key="index">
          <div class="content-title">
            <img :src="item.siImg" alt="" class="title-img">
            <span>{{item.siTitle}}</span>
          </div>
          <div class="content-matter">
            <img :src="item.siImg" alt="" class="content-img">
            <div class="content-txt">
              <span>{{item.siTitle}}</span>
              <p class="content-info">
                <span>{{item.siMoney}}元</span>
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
  import axios from 'axios';

  export default {
    name: 'SkillTab',
    data() {
      return {
        temp: true,
        leftIsActive: true,
        rightIsActive: false,
        skillList: []
      };
    },
    components: {
      SkillState
    },
    created() {
      this.init();
    },
    methods: {
      show(t) {
        this.leftIsActive = t;
        this.rightIsActive = !t;
        this.temp = t;
      },
      goSkillDetail(siSerialnumber) {
        this.$router.push({
          path: '/skillDetail',
          query: {
            id: siSerialnumber
          }
        });
      },
      init() {
        axios.get('http://api.qiandao.xgl6.top/skills/selAll').then(result => {
          let goodsData = result.data;
          sessionStorage.setItem('skill', JSON.stringify(goodsData));
          this.skillList = goodsData;
        });
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

  .right {
    margin-left: 20px;
  }
  .active {
    font-size: 15px;
    display: inline-block;
    border-bottom: 5px solid #AC8D22;
    line-height: 0.4px;
    font-weight: bold;
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
    width: 15%;
    height: 15%;
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
