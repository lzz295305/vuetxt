<template>
  <div>
    <div class="header">
      <span>我的</span>
      <router-link class="icon" to="#">
        <span class="iconfont icon-shezhi"></span>
      </router-link>
      <router-link class="icon" to="#">
        <span class="iconfont icon-xiaoxi"></span>
      </router-link>
    </div>
    <me-scroll style="height: 100vh">
      <div class="header-container">
        <div class="header-1">
          <div class="header-img" to="">
            <a href="#"><img src="https://cdn.xgl6.top/img/9ef126f301f12078f30713097fc4c1e.png" alt=""></a>
            <div class="header-Id">
              <span>猎人_165481</span>
              <router-link to="/personaldata">
                <svg class="header-img-right" aria-hidden="true">
                  <use xlink:href="#icon-you"></use>
                </svg>
              </router-link>
              <div class="grade">
                <a href="#">ID:165481</a>
                <span>lv.1</span>
              </div>
            </div>
          </div>
          <table border="1" class="table-style">
            <tr class="table-style-row">
              <td>0.00</td>
              <td>0.00</td>
              <td>0.00</td>
            </tr>
            <tr>
              <td>现金（元）</td>
              <td>猎人币（枚）</td>
              <td>总收入（元）</td>
            </tr>
          </table>
          <router-link to="/index"><a href="#" class="button">个人资产</a></router-link>
        </div>
      </div>
      <div class="container-1">
        <div>
          <ul>
            <li>
              <svg class="backlog" aria-hidden="true">
                <use xlink:href="#icon-daibanshixiang"></use>
              </svg>
              <span class="backlog-1">待办事项 &nbsp;&nbsp;&nbsp;|</span>
              <span class="backlog-2">已完成全部事项</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="container-2">
        <span>我发布的技能</span>
        <ul>
          <li @click="go">
            <svg class="order-container-1" aria-hidden="true">
              <use xlink:href="#icon-jiedan"></use>
            </svg>
            <span>0个技能接单中</span>
          </li>
          <router-link to="/orderreceiving">
            <li>
            <svg class="order-container-2" aria-hidden="true">
              <use xlink:href="#icon-order-copy"></use>
            </svg>
            <span>接单</span>
          </li>
          </router-link>
        </ul>
      </div>
      <div class="container-3">
        <span>我在做的任务</span>
        <ul>
          <li>
            <svg class="order-container-3" aria-hidden="true">
              <use xlink:href="#icon-jinhangzhong"></use>
            </svg>
            <span class="order-container-3-word">进行中（0）</span>
          </li>
          <li>
            <svg class="order-container-4" aria-hidden="true">
              <use xlink:href="#icon-swticonyijieshu"></use>
            </svg>
            <span class="order-container-4-word">已结束（0）</span>
          </li>
        </ul>
      </div>
      <div class="container-4">
        <span>我发布的任务</span>
        <ul>
          <li>
            <svg class="order-container-5" aria-hidden="true">
              <use xlink:href="#icon-daifukuan"></use>
            </svg>
            <a class="order-container-5-word">代付款（0）</a>
          </li>
          <li>
            <svg class="order-container-6" aria-hidden="true">
              <use xlink:href="#icon-jinhangzhong"></use>
            </svg>
            <a class="order-container-6-word">进行中（0）</a>
          </li>
          <li>
            <svg class="order-container-7" aria-hidden="true">
              <use xlink:href="#icon-jujue"></use>
            </svg>
            <a class="order-container-7-word">已拒绝（0）</a>
          </li>
        </ul>
      </div>
      <div class="container-5">
        <span>我购买的技能</span>
        <ul>
          <li>
            <svg class="order-container-8" aria-hidden="true">
              <use xlink:href="#icon-order-copy"></use>
            </svg>
            <a class="order-container-8-word">购买的技能订单</a>
          </li>
          <li>
            <svg class="order-container-9" aria-hidden="true">
              <use xlink:href="#icon-shoucang"></use>
            </svg>
            <a class="order-container-9-word">收藏的技能</a>
          </li>
        </ul>
      </div>
      <div class="container-6">
        <div>
        <span class="container-6-span-1">猎人成长体系</span>
        <span class="container-6-span-2">经验等级说明</span>
        </div>
        <ul>
          <li>
            <svg class="order-container-10" aria-hidden="true">
              <use xlink:href="#icon-dengji"></use>
            </svg>
            <a class="order-container-10-word">一级见习</a>
          </li>
          <li class="progress">
            <el-progress :percentage="0"></el-progress>
          </li>
        </ul>
      </div>
      <div class="container-7">
        <span class="container-7-span-1">猎人信用积分</span>
        <span class="container-7-span-2">信用积分说明</span>
        <span class="container-7-span-3">5.0</span>
        <div class="block">
<!--          <span class="demonstration">默认不区分颜色</span>-->
          <el-rate
            v-model="value"
            show-text>
          </el-rate>
        </div>
        <a class="container-7-a-4">完美声誉</a>
      </div>
      <div class="container-8">
        <span class="container-8-span-1">其他功能</span>
        <ul>
          <li>
            <svg class="order-container-11" aria-hidden="true">
              <use xlink:href="#icon-yaoqinghaoyou"></use>
            </svg>
            <a class="order-container-11-word">我的关系</a>
          </li>
          <li>
            <svg class="order-container-12" aria-hidden="true">
              <use xlink:href="#icon-yaoqinghaoyou1"></use>
            </svg>
            <a class="order-container-12-word">补填邀请码</a>
          </li>
        </ul>
      </div>
      <div class="container-9">
        <span>编辑</span>
      </div>
      <div class="container-10">
      </div>
    </me-scroll>
  </div>
</template>

<script>
  import MeScroll from 'base/scroll/index.vue';
  export default {
    name: 'Personal',
    components: {
      MeScroll
    },
    data() {
      return {
        value1: null
      };
    },
    methods: {
      go() {
        this.$router.push('/issueskill');
      }
      // goorddrreceiving() {
      //   this.$router.push('/orderreceiving')
      // }
    }
  };
</script>

<style scoped>
.header {
  height: 55px;
  width: 100%;
  background-color: #FDE344;
}
.header span {
  font-size: 22px;
  margin-left: 15px;
  line-height: 55px;
  color: black;
}
  .icon {
    float: right;
  }
  .icon span {
    font-size: 22px;
    margin-right: 10px;
  }
  .header-img {
    background-color: #FDE344;
    /*border: red 2px solid;*/
    height: 72px;
  }
  .header-img img{
    margin-top: 5px;
    height: 55px;
    width: 55px;
    border-radius: 50%;
    margin-left: 15px;
  }
  .header-container {
    background-color: #FDE344;
  }
  .header-1 {
    background-color: #FDE344;
    margin: 0px 13px 0px 13px;
    /*border: 3px solid deepskyblue;*/
    height: 152px;
  }
  .header-Id {
    padding: 5px 0 5px 0;
    width: 77%;
    height: 63px;
    float: right;
    /*border: 3px solid blue;*/
    margin-bottom: 5px;
  }
  .header-Id span {
    font-weight: bold;
    font-size: 17px;
    margin: 16px 0 5px 0;
    color: black;
  }
  .grade {
    margin: 15px 0 5px 0;
  }
  .grade span{
    background-color: #FFEE96;
    font-size: 8px;
    width: 13px;
    height: 10px;
  }
  .header-img-right {
    color: black;
    float: right;
    width: 2.1em;
    height: 2.1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }

  .table-style {
    /*border:blue 2px solid ;*/
    margin: 5px 0 0px 13px;
    line-height: 15px;
  }
  .table-style-row {
    color: black;
  }
  .button {
    float: right;
    font-weight: bold; /*加粗*/
    background-color: white; /* Green */
    border: none;
    color: black;
    border-radius: 18px;
    padding: 10px 15px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 14px;
    margin: -30px 0px;
    cursor: pointer;
  }

.container-1 {
  /*border: #f23030 2px solid;*/
  border-radius: 5px;
  background-color: #FDFFFE;
  margin: -24px 14px 0 14px;
  height: 57px;
  border: 2px #F8F8F8 solid;
}

.container-1 ul li:nth-child(2) {
 float: left;
}
.backlog {
  float: left;
  width: 2.1em;
  height: 2.1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
  padding: 16px;
}
  .backlog-1 {
    margin: 8px -8px 8px 0px;
    line-height: 57px;
    font-size: 15px;
    text-align: center;
  }
  .backlog-2 {
    float: right;
    line-height: 57px;
    font-size: 15px;
    color: black;
    /*font-weight: bold;*/
    margin-right: 26%;
  }

  .container-2 {
    border: #F8F8F8 2px solid;
    border-radius: 5px;
    background-color: #FDFFFE;
    margin: 15px 14px 0 14px;
    height: 120px;
  }
  .container-2 span:nth-child(1) {
    float: left;
    font-size: 17px;
    color: black;
    /*font-weight: bold;*/
    margin: 13px 0 0 15px;
  }
  .container-2 span:nth-child(2) {
    float: left;
    margin: 85px 15px 15px -93px;
  }
  .order-container-1 {
    float: left;
    width: 2.5em;
    height: 2.5em;
    vertical-align: -0.2em;
    fill: currentColor;
    overflow: hidden;
    margin: 45px 15px 15px -74px;
  }
  .order-container-2 {
    float: left;
    width: 2.5em;
    height: 2.5em;
    vertical-align: -0.2em;
    fill: currentColor;
    overflow: hidden;
    margin: 45px 66px 0 40px;
  }

  .container-3 {
    border: #F8F8F8 2px solid;
    border-radius: 5px;
    background-color: #FDFFFE;
    margin: 15px 14px 0 14px;
    height: 120px;
  }
  .container-3>span {
    float: left;
    font-size: 17px;
    color: black;
    color: black;
    margin: 13px 0 0 15px;
  }

  .order-container-3 {
    float: left;
    width: 2.5em;
    height: 2.5em;
    vertical-align: -0.2em;
    fill: currentColor;
    overflow: hidden;
    margin: 50px 0px 50px -73px;
  }
  .order-container-3-word {
    float: left;
    margin: 87px 15px 15px -80px;
  }

  .order-container-4 {
    float: left;
    width: 2.5em;
    height: 2.5em;
    vertical-align: -0.2em;
    fill: currentColor;
    overflow: hidden;
    margin: 50px 0px 50px 40px;
  }
  .order-container-4-word {
    float: left;
    margin: 87px 15px 15px -38px;
  }

  .container-4 {
    border: #F8F8F8 2px solid;
    border-radius: 5px;
    background-color: #FDFFFE;
    margin: 15px 14px 0 14px;
    height: 120px;
  }
  .container-4 span {
    float: left;
    font-size: 17px;
    color: black;
    margin: 13px 0 0 15px;
  }

  .order-container-5 {
    float: left;
    width: 2.5em;
    height: 2.5em;
    vertical-align: -0.2em;
    fill: currentColor;
    overflow: hidden;
    margin: 50px 0px 50px -73px;
  }
  .order-container-5-word {
    float: left;
    margin: 87px 0px 0px -83px;
  }

  .order-container-6 {
    float: left;
    width: 2.5em;
    height: 2.5em;
    vertical-align: -0.2em;
    fill: currentColor;
    overflow: hidden;
    margin: 50px 0px 50px 43px;
  }
  .order-container-6-word {
    float: left;
    margin: 87px 0px 0px -42px;
  }

  .order-container-7 {
    float: left;
    width: 2.5em;
    height: 2.5em;
    vertical-align: -0.2em;
    fill: currentColor;
    overflow: hidden;
    margin: 50px 0px 50px 43px;
  }
  .order-container-7-word {
    float: left;
    margin: 87px 0px 0px -42px;
  }

  .container-5 {
    border: #F8F8F8 2px solid;
    border-radius: 5px;
    background-color: #FDFFFE;
    margin: 15px 14px 0 14px;
    height: 120px;
  }
  .container-5 span {
    float: left;
    font-size: 17px;
    color: black;
    margin: 13px 0 0 15px;
  }
  .order-container-8 {
    float: left;
    width: 2.5em;
    height: 2.5em;
    vertical-align: -0.2em;
    fill: currentColor;
    overflow: hidden;
    margin: 50px 0px 50px -73px;
  }
  .order-container-8-word {
    float: left;
    margin: 87px 0px 0px -95px;
  }

  .order-container-9 {
    float: left;
    width: 2.5em;
    height: 2.5em;
    vertical-align: -0.2em;
    fill: currentColor;
    overflow: hidden;
    margin: 50px 0px 50px 43px;
  }
  .order-container-9-word {
    float: left;
    margin: 87px 0px 0px -45px;
  }

/*成长体系*/
  .container-6 {
    border: #F8F8F8 2px solid;
    border-radius: 5px;
    background-color: #FDFFFE;
    margin: 15px 14px 0 14px;
    height: 120px;
  }
  .container-6-span-1 {
    float: left;
    font-size: 17px;
    color: black;
    margin: 13px 0 0 15px;
  }
  .container-6-span-2 {
    float: right;
    /*border: 1px red solid;*/
    font-size: 13px;
    color: blue;
    margin: 13px 13px 0 62px;
  }
  .order-container-10 {
    float: left;
    width: 2.5em;
    height: 2.5em;
    vertical-align: -0.2em;
    fill: currentColor;
    overflow: hidden;
    margin: 50px 0px 50px -73px;
  }
  .order-container-10-word {
    float: left;
    margin: 87px 0px 0px -83px;
  }
  .progress {
    float: right;
    width: 65%;
    margin: 42px 10px 10px 10px;
  }

/*  猎人信用积分*/
  .container-7 {
    border: #F8F8F8 2px solid;
    border-radius: 5px;
    background-color: #FDFFFE;
    margin: 15px 14px 0 14px;
    height: 120px;
  }
  .container-7-span-1 {
    float: left;
    font-size: 17px;
    color: black;
    margin: 13px 0 0 15px;
  }
  .container-7-span-2 {
    float: right;
    /*border: 1px red solid;*/
    font-size: 13px;
    color: blue;
    margin: 13px 13px 0 62px;
  }
  .container-7-span-3 {
    float: left;
    font-size: 25px;
    color: orange;
    margin: 50px 0px 50px -70px;
  }
  .container-7-a-4 {
    /*border: 1px red solid;*/
    float: left;
    margin: 13px 0px 0px 40px;
  }
  .block {
    margin: 55px 0px 0px 170px;
  }

/*  其他功能*/
  .container-8 {
    border: #F8F8F8 2px solid;
    border-radius: 5px;
    background-color: #FDFFFE;
    margin: 15px 14px 0 14px;
    height: 120px;
  }
  .container-8-span-1 {
    float: left;
    font-size: 17px;
    color: black;
    margin: 13px 0 0 15px;
  }
  .order-container-11 {
    float: left;
    width: 2.5em;
    height: 2.5em;
    vertical-align: -0.2em;
    fill: currentColor;
    overflow: hidden;
    margin: 50px 0px 0px -39px;
  }
  .order-container-11-word {
    float: left;
    margin: 87px 0px 0px -47px;
  }
  .order-container-12 {
    float: left;
    width: 2.5em;
    height: 2.5em;
    vertical-align: -0.2em;
    fill: currentColor;
    overflow: hidden;
    margin: 50px 0px 0px 85px;
    }
  .order-container-12-word {
    float: left;
    margin: 87px 0px 0px -45px;
    }

/*  编辑*/
  .container-9 {
    border: #F8F8F8 2px solid;
    border-radius: 50%;
    background-color: #FDFFFE;
    line-height: 42px;
    margin: 7px auto;
    height: 45px;
    width: 45px;
  }
  .container-9 span {
    font-size: 14px;
    margin-left: 6px;
  }

  .container-10 {
    height: 110px;
  }
</style>
