<template>
<div>
  <div class="header-return">
    <div class="header-container">
      <router-link to="/personal">
        <svg class="header-img-right" aria-hidden="true">
          <use xlink:href="#icon-fanhui"></use>
        </svg>
      </router-link>
      <span style="margin-right: 30px;font-size: 16px;">技能讨论</span>
    </div>
  </div>
  <me-scroll style="height: 100vh">
<!--      <div class="box">-->
        <van-sticky class="header-container1">
        <div class="header-container1-son">
<!--          <van-button style="font-size: 17px;height: 33px;margin: 50px auto;background-color: transparent;-->
<!--            border: none;color: white;" :class="navBarFixed == true ? 'navBarWrap' :''">技能讨论</van-button>-->
          <div class="header-container1-2">
            <p style="color: white">来秀秀技能交易的那些事</p>
            <p style="color: white">182个帖子</p>
          </div>
          <div class="header-container1-3">
            <a>发起讨论</a>
          </div>
        </div>
      </van-sticky>
<!--      </div>-->
      <div class="container2">
        <div class="container2-1">
          <span>5</span>
        </div>
        <div class="container2-2">
          <span>12月13日技能推荐TOP10</span>
        </div>
        <div class="container2-3">
          <div>
            <img src="https://cdn.xgl6.top/img/71b5665646cd43eb8d398d3fa2cad79.jpg" class="container2-3-img1">
            <span style="float: left;margin: 7px 10px 0 0;font-size: 13px;">猎人_243185</span>
            <span style="float: left;margin-top: 7px">2019-12</span>
          </div>
          <div class="container2-3-right">
            <img src="https://cdn.xgl6.top/img/9.9.png" class="container2-3-img2">
          </div>
        </div>
      </div>
      <div class="container2">
        <div class="container2-1">
          <span>4</span>
        </div>
        <div class="container2-2">
          <span>夜神猎人更新公告V2.1.7</span>
        </div>
        <div class="container2-3">
          <div>
            <img src="https://cdn.xgl6.top/img/71b5665646cd43eb8d398d3fa2cad79.jpg" class="container2-3-img1">
            <span style="float: left;margin: 7px 10px 0 0;font-size: 13px;">猎人_243185</span>
            <span style="float: left;margin-top: 7px">2019-10</span>
          </div>
        </div>
      </div>
      <div class="container2">
        <div class="container2-1">
          <span>0</span>
        </div>
        <div class="container2-2">
          <span>【技能讨论】&nbsp;版规</span>
        </div>
        <div class="container2-3">
          <div>
            <img src="https://cdn.xgl6.top/img/71b5665646cd43eb8d398d3fa2cad79.jpg" class="container2-3-img1">
            <span style="float: left;margin: 7px 10px 0 0;font-size: 13px;">猎人_243185</span>
            <span style="float: left;margin-top: 7px">2小时前</span>
          </div>
        </div>
      </div>
      <div class="container2">
        <div class="container2-1">
          <span>5</span>
        </div>
        <div class="container2-2">
          <span>太难了太难了</span>
        </div>
        <div class="container2-3">
          <div>
            <img src="https://cdn.xgl6.top/img/71b5665646cd43eb8d398d3fa2cad79.jpg" class="container2-3-img1">
            <span style="float: left;margin: 7px 10px 0 0;font-size: 13px;">猎人_243185</span>
            <span style="float: left;margin-top: 7px">昨天19:37</span>
          </div>
        </div>
      </div>
      <div class="container2">
        <div class="container2-1">
          <span>4</span>
        </div>
        <div class="container2-2">
          <span>发啥技能了呀</span>
        </div>
        <div class="container2-3">
          <div>
            <img src="https://cdn.xgl6.top/img/71b5665646cd43eb8d398d3fa2cad79.jpg" class="container2-3-img1">
            <span style="float: left;margin: 7px 10px 0 0;font-size: 13px;">猎人_243185</span>
            <span style="float: left;margin-top: 7px">01.03</span>
          </div>
          <div class="container2-3-right">
            <img src="https://cdn.xgl6.top/img/455a1acf4d8b5caeaac68aff2602faf.jpg" class="container2-3-img2">
          </div>
        </div>
      </div>
      <div class="container2">
        <div class="container2-1">
          <span>3</span>
        </div>
        <div class="container2-2">
          <span>王者代练</span>
        </div>
        <div class="container2-3">
          <div>
            <img src="https://cdn.xgl6.top/img/71b5665646cd43eb8d398d3fa2cad79.jpg" class="container2-3-img1">
            <span style="float: left;margin: 7px 10px 0 0;font-size: 13px;">猎人_243185</span>
            <span style="float: left;margin-top: 7px">昨天06:24</span>
          </div>
        </div>
      </div>
      <div class="container2">
        <div class="container2-1">
          <span>3</span>
        </div>
        <div class="container2-2">
          <span>王者代练</span>
        </div>
        <div class="container2-3">
          <div>
            <img src="https://cdn.xgl6.top/img/71b5665646cd43eb8d398d3fa2cad79.jpg" class="container2-3-img1">
            <span style="float: left;margin: 7px 10px 0 0;font-size: 13px;">猎人_243185</span>
            <span style="float: left;margin-top: 7px">昨天06:24</span>
          </div>
        </div>
      </div>
      <div class="container2">
        <div class="container2-1">
          <span>3</span>
        </div>
        <div class="container2-2">
          <span>王者代练</span>
        </div>
        <div class="container2-3">
          <div>
            <img src="https://cdn.xgl6.top/img/71b5665646cd43eb8d398d3fa2cad79.jpg" class="container2-3-img1">
            <span style="float: left;margin: 7px 10px 0 0;font-size: 13px;">猎人_243185</span>
            <span style="float: left;margin-top: 7px">昨天06:24</span>
          </div>
        </div>
      </div>
    </me-scroll>
</div>
</template>

<script>
  import MeScroll from 'base/scroll/index.vue';
  export default {
    name: 'skills-to-discuss',
    components: {
      MeScroll
    },
    mounted() {
      window.addEventListener('scroll', this.watchScroll);
    },
    methods: {
      watchScroll() {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        //  当滚动超过 50 时，实现吸顶效果
        if (scrollTop > 49) {
          this.navBarFixed = true;
        } else {
          this.navBarFixed = false;
        }
      }
    }
  };
</script>

<style scoped>
  .header-return {
    padding-top: 21px;
    padding-left: 8px;
    height: 50px;
    text-align: center;
    background-color: #242831;
    /*-moz-opacity:0.7;*/
    opacity: 0.7;
    /*border-bottom: #F8F8F8 2px solid;*/
  }
  .header-img-right {
    margin-left: 5px;
    font-weight: bold;
    color: white;
    float: left;
    width: 1.6em;
    height: 1.6em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
  .header-container {
    color: white;
    width: 100%;
    text-align: center;
    height: 30px;
  }
/*  头部*/
  .header-container1 {
    height: 190px;
    margin: -50px 0 0 0;
    text-align: center;
    /*border: red 2px solid;*/
    background-image: url("https://cdn.xgl6.top/img/7.jpg");
    background-size: 100%;
    background-repeat: no-repeat;
  }
  .header-container1-son {
    height: 170px;
    padding-top: 75px;
    /*border: #4EBDFB 2px solid;*/
  }
  .header-container1-2 {
    height: 40px;
    line-height: 17px;
    /*border: red 2px solid;*/
  }
  .header-container1-3 {
    margin: 23px auto;
    color: black;
    background-color: #FDE344;
    width: 100px;
    height: 30px;
    line-height: 30px;
    border-radius: 30px;
  }

/*  内容*/
  .container2 {
    margin: 16px auto;
    width: 92%;
    text-align: center;
    border: #F8F8F8 2px solid;
    border-radius: 8px;
    height: 80px;
  }
  .container2-1 {
    height:18px;
    margin-top: 20px;
    padding: 3px;
    border-radius: 8px 0 0 8px;
    color: black;
    background-color: #D2d2d2;
    width: 30px;
    float: left;
    /*border: #5d656b 2px solid;*/
  }
  .container2-2 {
    margin: 21px 0 0 5px;
    float: left;
    color: black;
    font-size: 15px;
  }
  .container2-3 {
    width:60% ;
    /*border: #4EBDFB 2px solid;*/
    height: 30px;
    margin: 42px 0 0 35px;
  }
  .container2-3-img1{
    float: left;
    margin:2px 8px 0 0;
    width: 12%;
    border-radius: 50%;
  }
  .container2-3-img2 {
    float: right;
    height: 45px;
    width: 20%;
    margin: -26px -85px 0 0;
    border-radius: 5px;
  }
</style>
