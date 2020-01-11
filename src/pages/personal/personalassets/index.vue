<template>
<div class="maxdiv">
  <div class="header">
    <div class="header-return">
    <div class="header-container">
      <router-link to="/personal">
        <svg class="header-img-right" aria-hidden="true">
          <use xlink:href="#icon-fanhui" @click="back"></use>
        </svg>
      </router-link>
      <div class="issueskill-header-2">
        <span>我的资产</span>
      </div>
      <div class="header-icon2">
        <svg class="header-icon-right" aria-hidden="true" @click="showhide()">
          <use xlink:href="#icon-yanjing_xianshi" id="pwd"></use>
        </svg>
      </div>
      <div class="header-1">
        <div class="header-container-left">
          <p style="font-size: 14px;float: left;line-height: 16px;margin-right: 5px">总资产（元）</p>
          <div style="background-color: #FFEE96;width: 60px; line-height: 19px;float: left">
            <svg class="header-icon3" aria-hidden="true">
              <use xlink:href="#icon-yirenzheng"></use>
            </svg>
            <span>保障中</span>
          </div>
          <p style="font-size: 24px;color: black;padding-top: 30px">0.00</p>
        </div>
        <div class="header-container-right">
          <p style="font-size: 14px;">历史总收入（元）</p>
  <!--          <span style="height: 15px;width: 50px"></span>-->
          <p style="font-size: 24px; padding-left: 55px;margin-top: 15px;color: black" id="pwd">0.00</p>
        </div>
      </div>
      <div class="header-2">
        <div class="header-container-left2">
          <p style="font-size: 14px;float: left;line-height: 16px;margin-right: 5px">现金余额（元）</p>
          <p style="font-size: 24px;color: black;padding-top: 30px">0.00</p>
        </div>
        <div class="header-container-right2">
          <router-link class="normalBtn" tag="a" :to="{name:'cash-statement',params: {id:1}}" >
            <div class="header-container-right2-1">
              <a style="font-size: 14px;margin-left: 6px">收支明细</a>
            </div>
          </router-link>
          <div class="header-container-right2-2">
            <a style="font-size: 14px;margin-left: 8px">提现</a>
          </div>
        </div>
      </div>
      <div class="header-3">
        <div class="header-container-left3">
          <p style="font-size: 14px;float: left;line-height: 16px;margin-right: 5px">猎人币余额（元）</p>
          <p style="font-size: 24px;color: black;padding-top: 30px">0.00</p>
        </div>
        <div class="header-container-right3">
          <!--<router-link to="/cash-statement">-->
          <router-link class="normalBtn" tag="a" :to="{name:'cash-statement',params: {id:2}}" >
            <div class="header-container-right2-1">
              <a style="font-size: 14px;margin-left: 6px;color: black">收支明细</a>
            </div>
          </router-link>
          <router-link to="/sell">
            <div class="header-container-right2-2">
              <a style="font-size: 14px;margin-left: 8px;color: black">出售</a>
            </div>
          </router-link>
        </div>
      </div>
      <div class="header-4">
        <div>
          <span style="float: left;color: black;font-size: 17px;margin-top: 5px">猎人币涨跌图</span>
          <span style="float: right;margin-top: 8px">实时单价：0.05元/猎人币</span>
        </div>
        <div class="container-photo">
          <ve-line :data="chartData" :settings="chartSettings" width="300px" height="220px"></ve-line>
        </div>
      </div>
      <div class="header-5">
        <div style="margin-bottom: 5px">
          <span style="font-size: 17px; color: black">我的资产服务说明</span>
        </div>
          <router-link to="/property">
            <div class="footer-1">
              <span>总资产如何计算？</span>
            </div>
          </router-link>
        <router-link to="/balance">
          <div class="footer-2">
            <span>猎人币余额是什么？</span>
          </div>
        </router-link>
        <router-link to="/service-charge">
          <div class="footer-3">
            <span>提现服务费怎么计算？</span>
          </div>
        </router-link>
        <router-link to="/real-name">
          <div class="footer-4">
            <span>提现为什么要实名认证</span>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</div>
</div>
</template>

<script type="text/javascript">
  export default {
    name: 'index',
    data() {
      this.chartSettings = {
        metrics: [ '实时单价' ],
        dimension: ['日期'],
        min: ['0.00'],
        max: ['0.15']
      };
      return {
        chartData: {
          columns: ['日期'],
          rows: [
            { '日期': '12/10', '实时单价': 0.06 },
            { '日期': '12/11', '实时单价': 0.06 },
            { '日期': '12/12', '实时单价': 0.09 },
            { '日期': '12/13', '实时单价': 0.03 },
            { '日期': '12/14', '实时单价': 0.14 },
            { '日期': '12/16', '实时单价': 0.034 },
            { '日期': '12/17', '实时单价': 0.04 },
            { '日期': '12/18', '实时单价': 0.042 },
            { '日期': '12/19', '实时单价': 0.038 },
            { '日期': '12/21', '实时单价': 0.045 },
            { '日期': '12/22', '实时单价': 0.046 },
            { '日期': '12/23', '实时单价': 0.042 },
            { '日期': '12/24', '实时单价': 0.047 },
            { '日期': '12/25', '实时单价': 0.048 },
            { '日期': '12/26', '实时单价': 0.045 },
            { '日期': '12/27', '实时单价': 0.049 },
            { '日期': '12/28', '实时单价': 0.050 },
            { '日期': '12/29', '实时单价': 0.052 }
          ]
        },
        show: false
      };
    }
  };
</script>

<style scoped>
  .maxdiv {
    width: 100%;
    background-color: #FFE344;
  }
  .header {
    margin: 0 auto;
    width: 90%;
    border: 1px #FFE344 solid;
    background-color: #FFE344;
  }
  .header-return {
    /*padding-top: 21px;*/
    padding-left: 8px;
    height: 8rem;
    background-color: #FFE344;
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
  .issueskill-header-2 {
    width: 90px;
    margin: 15px auto;
    text-align: center;
    color: black;
    /*font-weight: bold;*/
    font-size: 18px;
    /*border: 2px greenyellow solid;*/
  }
  .header-icon2 {
    margin: -33px 0 5px 5px;
    /*border: deepskyblue 2px solid;*/
    width: 27px;
    float: right;
  }
  .header-icon-right {
    /*border: #3F9EFA 2px solid;*/
    font-weight: bold;
    color: black;
    width: 2em;
    height: 2em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
  .header-icon3 {
    width: 1.4em;
    height: 1.4em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
  .header-1 {
    margin-top: 25px;
    /*border: #5d656b 2px solid;*/
    height: 70px;
  }

  .header-container-left {
    float: left;
    /*border: red 2px solid;*/
    height: 65px;
    width: 155px;
  }
  .header-container-right {
    float: right;
    /*border: red 2px solid;*/
    width: 138px;
    height: 65px;
  }
  .header-container-right p {
    margin-left: 22px;
    margin-bottom: 10px;
  }

/*  内容2*/
  .header-2 {
    margin-top: 18px;
    border-bottom: #F8F8F8 1.5px solid;
    height: 68px;
  }
  .header-container-left2 {
    float: left;
    /*border: red 2px solid;*/
    height: 65px;
    width: 110px;
  }
  .header-container-right2 {
    float: right;
    /*border: red 2px solid;*/
    width: 160px;
    height: 65px;
  }
  .header-container-right2 a{
    border-radius: 30px;
    color: black;
  }
  .header-container-right2-1 {
    width: 73px;
    height: 25px;
    line-height: 25px;
    border: #ccc 1px solid;
    /*background-color: greenyellow;*/
    border-radius: 30px;
    float: left;
    margin: 15px 0  0 15px;
  }
  .header-container-right2-2 {
    width: 48px;
    height: 25px;
    line-height: 25px;
    border: #ccc 1px solid;
    /*background-color: greenyellow;*/
    border-radius: 30px;
    float: left;
    margin: 15px 0  0 10px;
  }

/*  内容3*/
  .header-3 {
    margin-top: 10px;
    border-bottom: #F8F8F8 1.5px solid;
    height: 68px;
  }
  .header-container-left3 {
    float: left;
    /*border: red 2px solid;*/
    height: 65px;
    width: 125px;
  }
  .header-container-right3 {
    float: right;
    /*border: red 2px solid;*/
    width: 160px;
    height: 65px;
  }

/*  内容4*/
  .header-4 {
    border: white 2px solid;
    height: 210px;
    margin-bottom: 5px;
  }

  .container-photo {
    height: 230px;
    margin-top: 35px;
  }

  /*内容5*/
  .header-5 {
    /*border: #4EBDFB 2px solid;*/
    height: 150px;
  }
  .footer-1 {
    padding: 5px;
    font-size: 14px;
    margin-top: 5px;
    border: #ccc 1.5px solid;
    border-radius: 5px;
    float: left;
    width: 48%;
    height: 45px;
  }
  .footer-2 {
    padding: 5px;
    font-size: 14px;
    margin-top: 5px;
    border: #ccc 1.5px solid;
    border-radius: 5px;
    float: right;
    width: 48%;
    height: 45px;
  }
  .footer-3 {
    padding: 5px;
    font-size: 14px;
    margin-top: 5px;
    border: #ccc 1.5px solid;
    border-radius: 5px;
    width: 48%;
    float: left;
    height: 45px;
  }
  .footer-4 {
    padding: 5px;
    font-size: 14px;
    margin-top: 5px;
    border: #ccc 1.5px solid;
    border-radius: 5px;
    width: 48%;
    float: right;
    height: 45px;
  }

</style>
