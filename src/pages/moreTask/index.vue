<template>
    <div class="MoreTask">
      <Header />
      <div class="slider">
        <swiper :options="swiperOption" v-model="index">
          <swiper-slide>
            <div id="1" @click="change(1)" :class="{'active': index === 1}">
              官方任务
            </div>
          </swiper-slide>
          <swiper-slide>
            <div id="2" @click="change(2)" :class="{'active': index === 2}">
              社区互助
            </div>
          </swiper-slide>
          <swiper-slide>
            <div id="3" @click="change(3)" :class="{'active': index === 3}">
              App试玩
            </div>
          </swiper-slide>
          <swiper-slide>
            <div id="4" @click="change(4)" :class="{'active': index === 4}">
              众包任务
            </div>
          </swiper-slide>
          <swiper-slide>
            <div id="5" @click="change(5)" :class="{'active': index === 5}">
              个人问卷
            </div>
          </swiper-slide>
          <swiper-slide>
            <div id="6" @click="change(6)" :class="{'active': index === 6}">
              联盟问卷
            </div>
          </swiper-slide>
        </swiper>
        <div>
          <div v-if="index == 1">
            <all-task />
          </div>
          <div v-if="index == 2">
            <support />
          </div>
          <div v-if="index == 3">
            <play />
          </div>
          <div v-if="index == 4">
            <crowd />
          </div>
          <div v-if="index == 5">
            <question />
          </div>
          <div v-if="index == 6">
            <alliance />
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import Header from './header';
  import { swiper, swiperSlide } from 'vue-awesome-swiper';
  import AllTask from './allTask';
  import support from './support';
  import play from './play';
  import crowd from './crowd';
  import question from './question';
  import alliance from './alliance';

  export default {
    name: 'MoreTask',
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
      Header,
      swiper,
      swiperSlide,
      AllTask,
      support,
      play,
      crowd,
      question,
      alliance
    },
    created() {
      this.getId();
    },
    methods: {
      getId() {
        if (this.$route.params.id !== '') {
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
    margin: 5%;
  }
  .active {
    font-size: 15px;
    display: inline-block;
    border-bottom: 5px solid #AC8D22;
    font-weight: bold;
  }
</style>
