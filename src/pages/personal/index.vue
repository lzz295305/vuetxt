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
    <div class="header-container">
      <div class="header-1">
        <div class="header-img" to="">
          <a href="#"><img src="https://cdn.xgl6.top/img/9ef126f301f12078f30713097fc4c1e.png" alt=""></a>
          <div class="header-Id">
            <span>猎人_165481</span>
            <a href="#"><span class="header-img-right">></span></a>
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
        <a href="#" class="button">个人资产</a>
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
        <li>
          <svg class="order-container-1" aria-hidden="true">
            <use xlink:href="#icon-jiedan"></use>
          </svg>
          <span>0个技能接单中</span>
        </li>
        <li>
          <svg class="order-container-2" aria-hidden="true">
            <use xlink:href="#icon-order-copy"></use>
          </svg>
          <span>接单</span>
        </li>
      </ul>
    </div>
    <div class="container-2">
      <span>我在做的任务</span>
      <ul>
        <li>
          <svg class="order-container-1" aria-hidden="true">
            <use xlink:href="#icon-jinhangzhong"></use>
          </svg>
          <span>进行中（0）</span>
        </li>
        <li>
          <svg class="order-container-2" aria-hidden="true">
            <use xlink:href="#icon-swticonyijieshu"></use>
          </svg>
          <span>已结束（1）</span>
        </li>
      </ul>
    </div>
    <div class="container-2">
      <span>我发布的任务</span>
      <ul>
        <li>
          <svg class="order-container-1" aria-hidden="true">
            <use xlink:href="#icon-daifukuan"></use>
          </svg>
          <span>代付款（0）</span>
        </li>
        <li>
          <svg class="order-container-2" aria-hidden="true">
            <use xlink:href="#icon-jinhangzhong"></use>
          </svg>
          <span>进行中（0）</span>
        </li>
        <li>
          <svg class="order-container-2" aria-hidden="true">
            <use xlink:href="#icon-jujue"></use>
          </svg>
          <span>已拒绝（0）</span>
        </li>
      </ul>
    </div>
    <div class="container-2">
      <span>我购买的技能</span>
      <ul>
        <li>
          <svg class="order-container-1" aria-hidden="true">
            <use xlink:href="#icon-order-copy"></use>
          </svg>
          <span>购买的技能订单</span>
        </li>
        <li>
          <svg class="order-container-2" aria-hidden="true">
            <use xlink:href="#icon-shoucang"></use>
          </svg>
          <span>收藏的技能</span>
        </li>
      </ul>
    </div>
    <div class="container-2">
      <span>我购买的技能</span>
      <ul>
        <li>
          <svg class="order-container-1" aria-hidden="true">
            <use xlink:href="#icon-order-copy"></use>
          </svg>
          <span>购买的技能订单</span>
        </li>
        <li>
          <svg class="order-container-2" aria-hidden="true">
            <use xlink:href="#icon-shoucang"></use>
          </svg>
          <span>收藏的技能</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Personal'
  };
</script>

<style scoped>
.header {
  height: 40px;
  width: 100%;
  background-color: #FDE344;
}
.header span {
  font-size: 22px;
  margin-left: 15px;
  line-height: 40px;
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
    float: right;
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
    /*border: #f23030 2px solid;*/
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
    margin: 45px 66px 0 50px;
  }
</style>
