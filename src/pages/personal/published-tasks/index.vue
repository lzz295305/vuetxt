<template>
  <div class="header">
    <div class="header-return">
      <div class="header-container">
        <router-link to="/personal">
          <svg class="header-img-right" aria-hidden="true">
            <use xlink:href="#icon-fanhui"></use>
          </svg>
        </router-link>
        <div class="issueskill-header-2">
          <span>发布的任务</span>
        </div>
        <div class="issueskill-header-3">
          <span>发任务</span>
        </div>
      </div>
    </div>

<!--    <Header />-->
    <div class="slider">
      <swiper :options="swiperOption" v-model="index" class="slider-div">
        <swiper-slide class="swiper1">
          <div style="margin-right: -30px;" id="1" @click="change(1)" :class="{'active': index === 1}">
            全部任务
          </div>
        </swiper-slide>
        <swiper-slide class="swiper1">
          <div id="2" style="margin-left: 11px;" @click="change(2)" :class="{'active': index === 2}">
            审核中
          </div>
        </swiper-slide>
        <swiper-slide class="swiper1">
          <div id="3" @click="change(3)" :class="{'active': index === 3}">
            待付款
          </div>
        </swiper-slide>
        <swiper-slide class="swiper1">
          <div id="4" @click="change(4)" :class="{'active': index === 4}">
            进行中
          </div>
        </swiper-slide>
        <swiper-slide class="swiper1">
          <div style="margin-left: -7px;" id="5" @click="change(5)" :class="{'active': index === 5}">
            等待结束
          </div>
        </swiper-slide>
        <swiper-slide class="swiper1">
          <div id="6" @click="change(6)" :class="{'active': index === 6}">
            已拒绝
          </div>
        </swiper-slide>
      </swiper>
      <div>
        <div v-if="index === 1">
          <all-task/>
        </div>
        <div v-if="index === 2">
          <under-review/>
        </div>
        <div v-if="index === 3">
          <payment/>
        </div>
        <div v-if="index === 4">
          <underway/>
        </div>
        <div v-if="index === 5">
          <waiting-for-end/>
        </div>
        <div v-if="index === 6">
          <denied/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { swiper, swiperSlide } from 'vue-awesome-swiper';
  import AllTask from './all-task';
  import Support from '../support';
  import UnderReview from './under-review';
  import Payment from './payment';
  import Underway from './underway';
  import WaitingForEnd from './waiting-for-end';
  import Denied from './denied';
  export default {
    name: 'index',
    data() {
      return {
        index: '',
        swiperOption: {
          slidesPerView: 4.5,
          spaceBetween: 15,
          freeModel: true,
          freeModeMomentumBounce: false,
          clickable: true
        }
      };
    },
    components: {
      Denied,
      WaitingForEnd,
      Underway,
      Payment,
      UnderReview,
      Support,
      AllTask,
      swiper,
      swiperSlide
    },
    created() {
      this.getId();
    },
    methods: {
      getId() {
        if (this.$route.params.id) {
          this.index = this.$route.params.id;
        } else {
          this.index = 1;
        }
      },
      change(x) {
        this.index = x;
      }
    }
  };
</script>

<style scoped>
  .slider {
    padding-top: 5px;
    margin: 0 auto;
    width: 97%;
  }

  .slider-div {
    /*border: #5d656b 2px solid;*/
    padding: 7px;
    height: 30px;
  }
  .active {
    color: black;
    font-size: 14px;
    display: inline-block;
    border-bottom: 5px solid #FDE344;
    font-weight: bold;
    transform: scale(1.2);
    opacity: 1;
    transition: all 0.8s ease;
  }
  .header {
    height: 100%;
    margin: 0 auto;
    width: 90%;
    /*border: 1px #4EBDFB solid;*/
  }
  .header-return {
    /*padding-top: 21px;*/
    padding-left: 8px;
    height: 55px;
    /*border: 2px red solid;*/
  }
  .header-container {
    height: 55px;
    margin-left: -10px;
    /*border: 2px seagreen solid;*/
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

  .swiper1 {
    font-size: 14px;
    margin-right: 20px;
    /*border: #4EBDFB 1px solid;*/
  }

  /*  头部*/
  .issueskill-header-2 {
    width: 110px;
    margin: 15px auto;
    text-align: center;
    color: black;
    /*font-weight: bold;*/
    font-size: 18px;
    /*border: 1px red solid;*/
  }

  .issueskill-header-3 {
    float: right;
    width: 50px;
    margin: -28px auto;
    text-align: center;
    color: black;
    /*font-weight: bold;*/
    font-size: 13px;
    /*border: 1px red solid;*/
  }

</style>
