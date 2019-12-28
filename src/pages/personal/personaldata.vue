<template>
<div>
  <div class="header">
    <div class="header-return">
      <router-link to="/personal">
        <svg class="header-img-right" aria-hidden="true">
          <use xlink:href="#icon-fanhui" @click="back"></use>
        </svg>
      </router-link>
    </div>
    <div class="header-container">
      <a href="https://cdn.xgl6.top/img/9ef126f301f12078f30713097fc4c1e.png"><img src="https://cdn.xgl6.top/img/9ef126f301f12078f30713097fc4c1e.png" alt=""></a>
    </div>
    <div class="header-container-word">
      <span class="header-container-id">猎人_1659098</span>
      <div>
        <svg class="header-img-right2" aria-hidden="true">
          <use xlink:href="#icon-dengji"></use>
        </svg>
      </div>
      <span style="font-size: 15px; color: white">一级见习·完美声誉·ID：1659098</span>
      <div class="header-container-span1">
        <span @click="go">编辑资料</span>
      </div>
    </div>
    <div class="header-container-footer">
      <div class="header-container-footer-1">
        <span>0</span>
        <p style="padding: 7px">关注</p>
      </div>
      <span style="margin-left: 3px; font-size: 35px; color: whitesmoke">|</span>
      <div class="header-container-footer-2">
        <span>0</span>
        <p style="padding: 7px">被关注</p>
      </div>
    </div>
  </div>
  <div class="uls">
    <ul>
      <router-link to="/personaldata/task">
        <li @click="change(1)" :class="{'active': index === 1}" class="uls-1">任务</li>
      </router-link>
      <router-link to="/personaldata/skill">
        <li @click="change(2)" :class="{'active': index === 2}" class="uls-2">技能</li>
      </router-link>
      <router-link to="/personaldata/invitation">
        <li @click="change(3)" :class="{'active': index === 3}" class="uls-3">帖子</li>
      </router-link>
      <router-link to="/personaldata/dynamic">
        <li @click="change(4)" :class="{'active': index === 4}" class="uls-4">动态</li>
      </router-link>
    </ul>
  </div>

<!--  -->
<!--  <div>-->
<!--    <div v-if="index == 1">-->
<!--      <task></task>-->
<!--    </div>-->

<!--    <div>-->
<!--      <div v-if="index == 2">-->
<!--        <skill></skill>-->
<!--      </div>-->
<!--    </div>-->

<!--    <div>-->
<!--      <div v-if="index == 3">-->
<!--        <invitation></invitation>-->
<!--      </div>-->
<!--    </div>-->

<!--    <div>-->
<!--      <div v-if="index == 4">-->
<!--        <dynamic></dynamic>-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->
  <transition name="fade">
    <router-view class="zhanwei"></router-view>
  </transition>
</div>
</template>

<script>
  import skill from './skill';
  import task from './task';
  import invitation from './invitation';
  import dynamic from './dynamic';
  export default {
    name: 'personaldata',
    components: {
      task,
      skill,
      invitation,
      dynamic
    },
    data() {
      return {
        index: 2
      };
    },
    methods: {
      back() {
        this.$router.go(-1);
      },
      go() {
        this.$router.push('/editdata');
      },
      change(index) {
        this.index = index;
      }
    }
  };
</script>

<style scoped>
  .uls .active {
    color: black;
    font-weight: bold;
    border-bottom: 2px solid yellow;
    transform: scale(1.2);
    opacity: 0.8;
    transition: all 0.5s ease-in-out;
  }

  .fade-enter-active,.fade-leave-avtive {
    /*transition: opacity 0.3s;*/
    transition: all .8s ease;
  }
  .fade-enter,.fade-leave-to {
    opacity: 0;
    -webkit-transform: translate(-100%,0);
    transform: translate(-100%,0);
  }

/*头部*/
  .header {
    background-image: linear-gradient(#35302C,#121011);
    height: 350px;
  }
  .header-return {
    padding-top: 21px;
    padding-left: 8px;
    height: 55px;
  }
  .header-container {
    margin: 0 auto;
    text-align: center;
  }
  .header-container img {
    width: 75px;
  }
  .header-img-right {
    font-weight: bold;
    color: white;
    float: left;
    width: 2.1em;
    height: 2.1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
  .header-container-word {
    margin: 6px auto;
    text-align: center;
  }

  .header-container-span1 {
    margin: 20px auto;
    padding: 8px;
    font-size: 15px;
    color: white;
    border: 1.5px white solid;
    border-radius: 30px;
    width: 100px;
    /*width: 80px;*/
  }
  .header-container-id {
    font-size: 19px;
    color: white
  }
  .header-container-word a {
    color: white;
    width: 100px;
    border: white 2px solid;
  }
  .header-img-right2 {
    margin-top: 8px;
    margin-bottom: 5px;
    width: 2.1em;
    height: 2.1em;
    vertical-align: -0.15em;
    /*fill: currentColor;*/
    overflow: hidden;
  }
  .header-container-footer {
    margin-top: -10px;
    height: 100px;
    /*background-color: orange;*/
    /*border: 2px red solid;*/
  }
  .header-container-footer-1 {
    font-size: 16px;
    color: white;
    text-align: center;
    float: left;
    width: 48%;
    /*border: 1px blue solid;*/
  }
  /*.header-footer-span1{*/
  /*  margin-bottom: 10px;*/
  /*}*/
  .header-container-footer-2 {
    font-size: 16px;
    color: white;
    text-align: center;
    float: right;
    width: 48%;
    /*border: 1px black solid;*/
  }

/*  内容部分*/
  .uls {

  }
  .uls li {
    font-size: 15px;
    float: left;
    margin: 15px;
  }

  /*.active {*/
  /*  !*border-bottom: yellow 3px solid;*!*/
  /*  font-size: 21px;*/
  /*  color: black;*/
  /*  font-weight: bold;*/
  /*  !*display: inline-block;*!*/
  /*  padding-bottom: 7px;*/
  /*}*/
</style>
