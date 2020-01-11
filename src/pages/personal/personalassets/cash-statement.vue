<template>
  <div>
    <div class="header-return">
      <div class="header-container">
        <router-link to="/personalassets">
          <svg class="header-img-right" aria-hidden="true">
            <use xlink:href="#icon-fanhui"></use>
          </svg>
        </router-link>
        <div class="header-container-center">
          <span>{{this.queryId==1?"现金":"金币"}}收支明细</span>
        </div>
      </div>
    </div>
    <me-scroll style="height: 100vh">
      <div class="container">
      <div class="container-1">
        <ul v-show="active">
          <li v-for="(item, index) in moneyList" :key="index" >
            <div class="container-left">
              <span style="font-size: 14px;color: black">{{item.crCause}}</span><br><br>
              <span>{{$moment(item.crDate).format('YYYY-MM-DD')}}</span>
            </div>
            <div class="container-right">
              <span>{{item.crChangetype == 0 ? "-" : "+"}}{{item.crChange}}</span>
            </div>
          </li>
        </ul>
        <ul v-show="!active">
          <li v-for="(item, index) in moneyList" :key="index">
            <div class="container-left">
              <span style="font-size: 14px;color: black">{{item.vcrCause }}</span><br><br>
              <span>{{$moment(item.vcrTime).format('YYYY-MM-DD')}}</span>
            </div>
            <div class="container-right">
              <span>{{item.vcrChangetype == 0 ? "-" : "+"}}{{item.vcrChange}}</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
      <div style="height: 600px"></div>
      <div style="height: 300px"></div>
      <div style="height: 300px"></div>
      <div style="height: 300px"></div>
      <div style="height: 300px"></div>
    </me-scroll>
  </div>
</template>

<script>
  import MeScroll from 'base/scroll/index.vue';
  import axios from 'axios';
  export default {
    name: 'Cash-statement',
    data() {
      return {
        moneyList: [],
        active: false
      };
    },
    components: {
      MeScroll
    },
    created() {
      // const map = {boolean: {0: '否', 1: '是', 2: '不知道'}};
      this.queryId = this.$route.params.id;
      this.init();
    },
    methods: {
      init() {
        if (this.queryId === 1) {
          this.active = true;
          axios.get('http://192.168.0.5:8080/cashrecord/sel/yh10002').then(result => {
            this.moneyList = result.data;
          });
        } else {
          this.active = false;
          axios.get('http://192.168.0.5:8080/Virtual/sel/yh10002').then(result => {
            this.moneyList = result.data;
            this.cause = result.data.vcrCause;
            console.log(this.cause);
          });
        }
      }
    }
  };
</script>

<style scoped>
  .header-return {
    /*padding-top: 21px;*/
    /*padding-left: 8px;*/
    height: 55px;
    /*border: 2px red solid;*/
  }
  .header-container {
    height: 55px;
    /*margin-left: -10px;*/
    border-bottom: 3px #F8F8F8 solid;
  }
  .header-container-center {
    /*border: #5d656b 2px solid;*/
    color: black;
    font-size: 16px;
    margin: 10px auto;
    text-align: center;
  }
  .header-container-center span{
    margin-top: 15px;
    line-height: 55px;
  }
  .header-img-right {
    margin: 20px 10px;
    font-weight: bold;
    color: black;
    float: left;
    width: 1.35em;
    height: 1.35em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
  .container-1 {
    height: 81px;
    width: 87%;
    margin: 0 auto;
    /*border-bottom: #F8F8F8 2px solid;*/
  }
  li{
    width: 100%;
    display: flex;
    justify-content: space-between;
    border-bottom: #F8F8F8 2px solid;
    padding-bottom: 10px;
  }
  .container-left {
    margin-top: 23px;
    float: left;
    /*border: #5d656b 2px solid;*/
  }
  .container-right {
    color: #FDE344;
    font-size: 21px;
    float: right;
    margin: 25px 0 0 0;
  }
</style>
