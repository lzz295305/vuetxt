<template>
  <div class="header">
    <div class="header-return">
      <div class="header-container">
        <router-link to="/personal">
<!--          <svg class="header-img-right" aria-hidden="true">-->
<!--            <use xlink:href="#icon-fanhui" @click="back"></use>-->
<!--          </svg>-->
        </router-link>
        <div class="issueskill-header-2">
          <span>在做的任务</span>
        </div>
      </div>
    </div>
    <div class="header-container-underway">
      <span>已结束</span>
    </div>
    <div class="header-container2">
      <div  @click="change(1)" :class="{'active': index === 1}" class="header-container-span1">
        <span>已获赏</span>
      </div>
      <div  @click="change(2)" :class="{'active': index === 2}" class="header-container-span2">
        <span>任务失败</span>
      </div>
    </div>
    <div>
      <div v-if="index == 1">
        <my-attention></my-attention>
      </div>
    </div>
    <div>
      <div v-if="index == 2">
<!--        <skills-of-the-order></skills-of-the-order>-->
      </div>
    </div>
  </div>
</template>

<script>
  import MyAttention from './my-attention';
  export default {
    name: 'finished',
    components: {
      MyAttention
    },
    data() {
      return {
        index: 1
      };
    },
    methods: {
      back() {
        this.$router.go(-1);
      },
      change(index) {
        this.index = index;
      }
    }
  };
</script>

<style scoped>
  .header-container2 .active {
    color: black;
    font-weight: bold;
    border-bottom: 2px solid yellow;
    transform: scale(1.1);
    opacity: 0.8;
    transition: all 0.8s ease;
  }
  .header-container2 {
    height: 30px;
    width: 83%;
    margin: 0 auto;
    line-height: 30px;
  }
  .header {
    height: 100%;
    margin: 0 auto;
    width: 90%;
  }
  .header-return {
    padding-left: 8px;
    height: 50px;
  }
  .header-container {
    height: 55px;
  }
  .header-container-underway {
    height: 40px;
    width: 120%;
    color: black;
    font-weight: bold;
    font-size: 19px;
    margin: 0 0 12px -30px;
    padding-top: 12px;
    text-align: center;
    border-bottom: #F8F8F8 2px solid;
  }
  .header-img-right {
    margin: 2px auto;
    font-weight: bold;
    color: black;
    float: left;
    width: 1.35em;
    height: 1.35em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
  .icon {
    height: 130px;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
    text-align: center;
    margin: 0 auto;
  }
  .skill {
    font-size: 14px;
    color: black;
    height: 43px;
    width: 235px;
    margin: 28px auto;
    line-height: 43px;
    border-radius: 30px;
    background-color: #FDE344;
  }
  /*  头部*/
  .issueskill-header-2 {
    width: 110px;
    margin: 15px auto;
    text-align: center;
    color: black;
    font-size: 18px;
  }

  .header-container-span1 {
    float: left;
    font-size: 17px;
  }
  .header-container-span2 {
    float: right;
    font-size: 17px;
  }
</style>
