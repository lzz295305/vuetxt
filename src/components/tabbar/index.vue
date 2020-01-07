<template>
  <div class="g-tabbar">
    <router-link class="g-tabbar-item" to="/home">
      <i class="iconfont icon-renwu"></i>
      <span>任务</span>
    </router-link>
    <router-link class="g-tabbar-item" to="/skill">
      <i class="iconfont icon-jineng"></i>
      <span>技能</span>
    </router-link>
    <div class="g-tabbar-item" @click="showPopup" id="windows">
      <div class="excircle">
        <div class="fillet">
          <span class="fillet-choose">+</span>
        </div>
      </div>
    </div>
    <router-link class="g-tabbar-item" to="/news">
      <i class="iconfont icon-shequ"></i>
      <span>消息</span>
    </router-link>
    <router-link class="g-tabbar-item" to="/personal">
      <i class="iconfont icon-wo"></i>
      <span>我的</span>
    </router-link>
    <popup
      v-model="show"
      position="bottom"
      round
      :style="{ height: '20%' }"
    >
      <div class="nav">
        <ul class="nav-container">
          <li>
            <div class="nav-link" @click="toReleaseTask">
              <img src="./img/nav-item-1.png" class="nav-pic">
              <p>发布任务</p>
            </div>
          </li>
          <li>
            <div class="nav-link" @click="toReleaseSkill">
              <img src="./img/nav-item-2.png" class="nav-pic">
              <p>发布技能</p>
            </div>
          </li>
          <li>
            <div class="nav-link" @click="toReleasePost">
              <img src="./img/nav-item-3.png" class="nav-pic">
              <p>发布帖子</p>
            </div>
          </li>
          <li>
            <div class="nav-link" @click="toReleaseDynamic">
              <img src="./img/nav-item-4.png" class="nav-pic">
              <p>发布动态</p>
            </div>
          </li>
        </ul>
      </div>
    </popup>
  </div>
</template>

<script>
  import { Popup } from 'vant';
  export default {
    name: 'CTabbar',
    data() {
      return {
        show: false
      };
    },
    components: {
      Popup
    },
    methods: {
      showPopup() {
        this.show = true;
      },
      toReleaseTask() {
        this.$router.push('/releaseTask');
      },
      toReleaseSkill() {
        this.$router.push('/releaseSkill');
      },
      toReleasePost() {
        this.$router.push('/releasePost');
      },
      toReleaseDynamic() {
        this.$router.push('/releaseDynamic');
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import "~assets/scss/mixins";

  .router-link-active {
    color: $link-active-color;
  }

  .g-tabbar-item:hover {
    background-color: #fff;
  }

  .nav {
    margin: 5%  3%  0 3%;
  }
  .nav-container {
    border-radius: 15px;
    display: flex;
    justify-content: space-between;
  }
  .nav-container>li {
    margin: 10px;
  }
  .nav-link {
    width: 100%;
    text-align: center;
  }
  .nav-pic {
    width: 50%;
    margin-bottom: 8px;
  }
  .excircle {
    border: 1px solid black;
    border-radius: 50%;
    padding: 3%;
    background-color: white;
  }
  .fillet {
    width: 30px;
    height: 30px;
    background-color: black;
    border-radius: 50%;
    display: flex;
    justify-content: center;
  }
  .fillet-choose {
    color: #FDE344;
    font-size: 30px;
  }
  #windows {
    margin-bottom: 40px;
  }
</style>
