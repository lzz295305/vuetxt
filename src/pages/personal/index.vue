<template>
  <div>
    <div class="header">
      <span>我的</span>
      <router-link class="icon" to="/settingup">
        <span class="iconfont icon-shezhi"></span>
      </router-link>
      <router-link to="/messages">
        <svg class="header-icon-1" aria-hidden="true">
          <use xlink:href="#icon-message"></use>
        </svg>
      </router-link>
    </div>
    <me-scroll style="height: 100vh">
      <div class="header-container">
        <div class="header-1">
          <div class="header-img">
            <router-link to="/personaldata">
              <a href="#">
              <img src="https://cdn.xgl6.top/img/9ef126f301f12078f30713097fc4c1e.png" alt="">
              </a>
            </router-link>
            <div class="header-Id">
              <span>{{username}}</span>
              <router-link to="/personaldata">
                <svg class="header-img-right" aria-hidden="true">
                  <use xlink:href="#icon-you"></use>
                </svg>
              </router-link>
              <div class="grade" v-show="login">
                <a href="#">ID:{{number}}</a>
                <span>lv.{{grade}}</span>
              </div>
              <div class="icon-z" v-show="!login" @click="tologin">
                登录
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
          <router-link to="/personalassets"><a href="#" class="button">个人资产</a></router-link>
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
<!--              <span class="backlog-2">已完成全部事项</span>-->
              <van-swipe indicator-color="transparent" style="height: 30px;
              margin: 11px 30px 0 0;padding-top: 10px;transform: translateZ(0)" vertical
                         class="swiper-bottom" autoplay="2000">
                <van-swipe-item>待完成任务1</van-swipe-item>
                <van-swipe-item>待完成任务2</van-swipe-item>
                <van-swipe-item>待完成任务3</van-swipe-item>
                <van-swipe-item>待完成任务4</van-swipe-item>
              </van-swipe>
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
          <router-link to="/task-in-progress">
            <li>
              <svg class="order-container-3" aria-hidden="true">
                <use xlink:href="#icon-jinhangzhong"></use>
              </svg>
              <span class="order-container-3-word">进行中（0）</span>
            </li>
          </router-link>
          <router-link to="/finished">
            <li>
              <svg class="order-container-4" aria-hidden="true">
                <use xlink:href="#icon-swticonyijieshu"></use>
              </svg>
              <span class="order-container-4-word">已结束（0）</span>
            </li>
          </router-link>
        </ul>
      </div>
      <div class="container-4">
        <span>我发布的任务</span>
        <ul>
          <router-link to="/published-tasks">
            <li>
              <svg class="order-container-5" aria-hidden="true">
                <use xlink:href="#icon-daifukuan"></use>
              </svg>
                <a class="order-container-5-word">代付款（0）</a>
            </li>
          </router-link>
          <router-link to="/published-tasks">
          <li>
            <svg class="order-container-6" aria-hidden="true">
              <use xlink:href="#icon-jinhangzhong"></use>
            </svg>
            <a class="order-container-6-word">进行中（0）</a>
          </li>
          </router-link>
          <router-link to="/published-tasks">
          <li>
            <svg class="order-container-7" aria-hidden="true">
              <use xlink:href="#icon-jujue"></use>
            </svg>
            <a class="order-container-7-word">已拒绝（0）</a>
          </li>
          </router-link>
        </ul>
      </div>
      <div class="container-5">
        <span>我购买的技能</span>
        <ul>
          <router-link to="/buy-skills">
            <li>
              <svg class="order-container-8" aria-hidden="true">
                <use xlink:href="#icon-order-copy"></use>
              </svg>
                <a class="order-container-8-word">购买的技能订单</a>
            </li>
          </router-link>
          <router-link to="/buy-skills/collected-skills">
            <li>
              <svg class="order-container-9" aria-hidden="true">
                <use xlink:href="#icon-shoucang"></use>
              </svg>
                <a class="order-container-9-word">收藏的技能</a>
            </li>
          </router-link>
        </ul>
      </div>
      <div class="container-6">
        <div>
        <span class="container-6-span-1">猎人成长体系</span>
        <router-link to="/experience-level">
          <span class="container-6-span-2">经验等级说明</span>
        </router-link>
        </div>
        <ul>
          <li>
            <svg class="order-container-10" aria-hidden="true">
              <use xlink:href="#icon-dengji"></use>
            </svg>
            <a class="order-container-10-word"  @click="init">一级见习</a>
          </li>
<!--          <li class="progress">-->
<!--            <el-progress :percentage="20"></el-progress>-->
<!--          </li>-->
        </ul>
      </div>
      <div class="container-7">
        <span class="container-7-span-1">猎人信用积分</span>
        <router-link to="/credit-score">
          <span class="container-7-span-2">信用积分说明</span>
        </router-link>
        <span class="container-7-span-3">5.0</span>
<!--        <div class="block">-->
<!--&lt;!&ndash;          <span class="demonstration">默认不区分颜色</span>&ndash;&gt;-->
<!--          <el-rate-->
<!--            v-model="value"-->
<!--            show-text>-->
<!--          </el-rate>-->
<!--        </div>-->
          <a class="container-7-a-4" @click=init>完美声誉</a>
      </div>
      <div class="container-8">
        <span class="container-8-span-1">其他功能</span>
        <div class="containert-80">
          <router-link to="/my-relationship">
            <div>
              <svg class="order-container-11" aria-hidden="true">
                <use xlink:href="#icon-yaoqinghaoyou"></use>
              </svg>
              <a class="order-container-11-word">我的关系</a>
            </div>
          </router-link>
          <div>
            <!--              <van-cell is-link @click="showPopup">-->
            <!--                <svg class="order-container-12" aria-hidden="true">-->
            <!--                  <use xlink:href="#icon-yaoqinghaoyou1"></use>-->
            <!--                </svg>-->
            <!--              </van-cell>-->
            <span class="order-container-12-word" @click="invite">补填邀请码</span>
          </div>
        </div>
      </div>
      <div class="container-9">
        <router-link to="/redact"><span>编辑</span></router-link>
      </div>
      <div class="container-10">
      </div>
    </me-scroll>
    <popup v-model="show" round :style="{ height: '23%',width:'70%' }">
      <div class="Invitation-code">
        <div>
          <span>补填我收到的邀请码</span>
          <input type="text" maxlength="6" style="text-align: center;margin: 20px 0 ;width: 70%; font-size: 25px;
          border-bottom: #5d656b 0.5px solid;" v-model="context">
        </div>
        <div class="Invitation-header">
          <span class="Invitation-header-span1" @click="ToData">确定</span>
          <span class="Invitation-header-span2" @click="abolish">取消</span>
        </div>
      </div>
    </popup>
  </div>
</template>

<script>
  import MeScroll from 'base/scroll/index.vue';
  import { HappyScroll } from 'vue-happy-scroll';
  import {Popup} from 'vant';
  import axios from 'axios';
  export default {
    name: 'Personal',
    data() {
      return {
        show: false,
        value: 4.5,
        context: '',
        username: '',
        number: '',
        grade: '',
        login: false
      };
    },
    components: {
      MeScroll,
      Popup,
      HappyScroll
    },
    created() {
      this.getData();
    },
    methods: {
      getData() {
        let user = localStorage.getItem('UserInfo');
        if (user) {
          let users = JSON.parse(user);
          this.username = users.username;
          this.number = users.number;
          this.grade = users.grade;
          this.login = true;
        } else {
          this.username = '';
          this.number = '';
          this.grade = '';
        }
      },
      tologin() {
        this.$router.push('/login/login');
      },
      go() {
        this.$router.push('/issueskill');
      },
      back() {
        this.$router.go(-1);
      },
      init() {
        axios.get('http://192.168.0.5:8080/aliPay/wapPay/1/1/1').then(result => {
          let jieguo = result.data;
          const div = document.createElement('div');
          div.innerHTML = jieguo;
          document.body.appendChild(div);
          document.forms[0].submit();
        }).catch(err => {
          console.log(err);
        });
      },
      invite() {
        let user = localStorage.getItem('UserInfo');
        let userId = JSON.parse(user).number;
        axios.get('http://192.168.0.9:8080/user/codenull/' + userId).then(res => {
          console.log(res.data);
          if (res.data !== null) {
            this.show = true;
          } else {
            alert('你已有邀请码');
          }
        }).catch(err => {
          console.log(err);
        });
      },
      ToData() {
        let user = localStorage.getItem('UserInfo');
        let userId = JSON.parse(user).number;
        let code = this.context;
        axios.get('http://192.168.0.9:8080//user/writeicode/' + userId + '/' + code).then(res => {
          if (res.data === '存储成功') {
            this.show = false;
            alert('填写成功');
          } else {
            alert('填写失败，请重新填写');
          }
        }).catch(err => {
          console.log(err);
        });
      },
      abolish() {
        this.show = false;
      }
    }
  };
</script>

<style scoped>
  .header-icon-1 {
    margin: 15px 0;
    color: black;
    float: right;
    width: 1.9em;
    height: 1.9em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
  .swiper-bottom {
    font-size: 15px;
    float: right;
    width: 150px;
  }
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
    color: black;
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
    margin: 0 13px 0 13px;
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
    margin: 5px 0 0 13px;
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
    margin: -30px 0;
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
    margin: 8px -8px 8px 0;
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
    margin: 13px 0 0 15px;
  }

  .order-container-3 {
    float: left;
    width: 2.5em;
    height: 2.5em;
    vertical-align: -0.2em;
    fill: currentColor;
    overflow: hidden;
    margin: 50px 0 50px -73px;
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
    margin: 50px 0 50px 40px;
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
    margin: 50px 0 50px -73px;
  }
  .order-container-5-word {
    float: left;
    margin: 87px 0 0 -83px;
  }

  .order-container-6 {
    float: left;
    width: 2.5em;
    height: 2.5em;
    vertical-align: -0.2em;
    fill: currentColor;
    overflow: hidden;
    margin: 50px 0 50px 43px;
  }
  .order-container-6-word {
    float: left;
    margin: 87px 0 0 -42px;
  }

  .order-container-7 {
    float: left;
    width: 2.5em;
    height: 2.5em;
    vertical-align: -0.2em;
    fill: currentColor;
    overflow: hidden;
    margin: 50px 0 50px 43px;
  }
  .order-container-7-word {
    float: left;
    margin: 87px 0 0 -42px;
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
    margin: 50px 0 50px -73px;
  }
  .order-container-8-word {
    float: left;
    margin: 87px 0 0 -95px;
  }

  .order-container-9 {
    float: left;
    width: 2.5em;
    height: 2.5em;
    vertical-align: -0.2em;
    fill: currentColor;
    overflow: hidden;
    margin: 50px 0 50px 43px;
  }
  .order-container-9-word {
    float: left;
    margin: 87px 0  0 -45px;
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
    margin: 50px 0 50px -73px;
  }
  .order-container-10-word {
    float: left;
    margin: 87px 0 0 -83px;
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
    font-size: 13px;
    color: blue;
    margin: 13px 13px 0 62px;
  }
  .container-7-span-3 {
    float: left;
    font-size: 25px;
    color: orange;
    margin: 50px 0 50px -76px;
  }
  .container-7-a-4 {
    float: left;
    margin: 86px 0 0 -81px;
  }
  .block {
    margin: 55px 0 0 170px;
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
    margin: 50px 0 0 -39px;
  }
  .order-container-11-word {
    float: left;
    margin: 87px 0 0 -47px;
  }
  .order-container-12 {
    float: left;
    width: 2.5em;
    height: 2.5em;
    vertical-align: -0.2em;
    fill: currentColor;
    overflow: hidden;
    margin: 50px 0 0 85px;
    }
  .order-container-12-word {
    float: left;
    margin-right: 20px;
    margin-top: 77px;
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

/*  邀请码弹出框*/
  .Invitation-code {
    padding: 10px;
    height: 110px;
    border-bottom: #F8F8F8 2px solid;
    font-size: 14px;
    color: black;
    text-align: center;
  }
  .Invitation-header {
    height: 43px;
    margin: 10px;
  }
  .Invitation-header-span1 {
    color: #4EBDFB;
    margin: 17px 0 0 0;
    height: 33px;
    font-size: 15px;
    float: left;
    width: 49%;
    border-right: #F8F8F8 2px solid;
  }
  .Invitation-header-span2 {
    margin: 17px 0 0 0;
    height: 33px;
    font-size: 15px;
    float: right;
    width: 49%;
  }
  .containert-80 {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .icon-z {
    font-size: 20px;
    color: black;
    margin-left: 20px;
  }
</style>
