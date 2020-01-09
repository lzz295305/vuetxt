<template>
  <div class="slider-wapper">
    <me-slider
      :data="sliders"
      :direction="direction"
      :loop="loop"
      :interval="interval"
      :pagination="pagination"
    >
      <swiper-slide
        v-for="(item, index) in skillImg"
        :key="index"
      >
        <a alt="" class='slider-link'>
          <img :src="item" alt="" class='slider-img'>
        </a>
      </swiper-slide>
    </me-slider>
  </div>
</template>

<script>
  import MeSlider from 'base/slider';
  import {swiperSlide} from 'vue-awesome-swiper';
  import {sliderOptions} from './config';
  import {getHomeSlider} from 'api/home';
  import MeLoading from 'base/loading';
  import axios from 'axios';

  export default {
    name: 'SkillDetailSlider',
    components: {
      MeSlider,
      MeLoading,
      swiperSlide,
      skillImg: []
    },
    data() {
      return {
        direction: sliderOptions.direction,
        loop: sliderOptions.loop,
        interval: sliderOptions.interval,
        pagination: sliderOptions.pagination,
        sliders: [
          {
            'linkUrl': 'https://www.imooc.com',
            'picUrl': require('./1.jpg')
          },
          {
            'linkUrl': 'https://www.imooc.com',
            'picUrl': require('./2.jpg')
          }
        ]
      };
    },
    created() {
      this.getSliders();
      this.init();
    },
    methods: {
      update() {
        return this.getSliders();
      },
      getSliders() {
        return getHomeSlider().then(data => {
          this.sliders = data;
        });
      },
      init() {
        let skillId = this.$route.query.id;
        axios.get('http://192.168.0.5:8080/skills/sel/' + skillId).then(result => {
          this.skillImg = result.data.skillsinfo.siImgages;
        }).catch(err => {
          console.log(err);
        });
      }
    }
  };
</script>

<style lang="scss" scoped>

  .slider-wapper {
    width: 100%;
    height: 300px;
  }

  .slider-link {
    display: block;
  }

  .slider-link,
  .slider-img {
    overflow: hidden;
    width: 100%;
    height: 100%;
  }

</style>
