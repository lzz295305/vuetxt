<template>
    <div class="buy-skill">
      <buy-header />
      <div class="buy-main">
        <ul>
          <li>
            <div class="buy-info">
              <div class="info-img">
                <img src="./2.jpg" alt="">
              </div>
              <div class="info-introduce">
                <p class="info-first">{{OldTitle}}</p>
                <p class="info-second">{{OldInfo}}</p>
                <p class="info-third">
                  基础技能
                  <span>￥{{OldMoney}}</span>
                </p>
              </div>
            </div>
            <div class="main-price">
              <div class="price-title">
             <span class="title-first">
               项目
             </span>
                <span class="title-second">
               数量
             </span>
                <span class="title-third">
               价格
             </span>
              </div>
              <div class="price-center">
                <div>基础技能</div>
                <stepper
                  v-model="value"
                  integer
                  input-width="40px"
                  @change="onchange"
                />
                <div>￥{{price | numFilter}}</div>
              </div>
            </div>
            <div class="main-total">
              <div class="total-title">
                <span class="title-left">合计</span>
                <span class="title-right">￥{{price | numFilter}}</span>
              </div>
              <p>预计前交付成品</p>
            </div>
            <div class="main-pay">
              <div class="pay-title">
                付款方式
              </div>
              <radio-group v-model="radio" checked-color="#FDE344">
                <cell-group>
                  <div class="pay-choose">
                    <i class="iconfont icon-weixin"></i>
                    <cell title="微信支付" clickable @click="radio == '1'">
                      <radio slot="right-icon" name="1" />
                    </cell>
                  </div>
                  <div class="pay-choose">
                    <i class="iconfont icon-zhifubao"></i>
                    <cell title="支付宝支付" clickable @click="radio == '2'">
                      <radio slot="right-icon" name="2" />
                    </cell>
                  </div>
                  <div class="pay-choose">
                    <i class="iconfont"></i>
                    <cell title="猎人钱包" clickable @click="radio == '3'">
                      <radio slot="right-icon" name="3" />
                    </cell>
                  </div>
                </cell-group>
              </radio-group>
            </div>
          </li>
        </ul>
      </div>
      <div class="task-footer">
        <div class="footer-item" @click="ToPay">
          <span>
            确认购买并支付
          </span>
        </div>
      </div>
      <div class="go-back" v-show="goBackState" @click="goBack">回去</div>
      <iframe v-show="iframeState" id="show-iframe"  frameborder=0 name="showHere" scrolling=auto src=""></iframe>
    </div>
</template>

<script>
  import BuyHeader from './header';
  import { Stepper, RadioGroup, Radio, Cell, CellGroup } from 'vant';
  import axios from 'axios';
  export default {
    name: 'BuySkill',
    data() {
      return {
        value: 1,
        radio: '1',
        OldMoney: '',
        OldTitle: '',
        OldInfo: '',
        price: '',
        skillId: '',
        skillUserId: '',
        number: '',
        iframeState: '',
        goBackState: ''
      };
    },
    components: {
      Stepper,
      RadioGroup,
      Radio,
      Cell,
      CellGroup,
      BuyHeader
    },
    created() {
      this.init();
    },
    mounted() {
      const oIframe = document.getElementById('show-iframe');
      const deviceWidth = document.documentElement.clientWidth;
      const deviceHeight = document.documentElement.clientHeight;
      oIframe.style.width = deviceWidth + 'px';
      oIframe.style.height = deviceHeight + 'px';
    },
    methods: {
      goBack() {
        console.log('回到主页');
        this.goBackState = false;
        this.iframeState = false;
      },
      showIframe() {
        console.log('显示iframe');
        this.goBackState = true;
        this.iframeState = true;
      },
      onchange(value) {
        this.price = this.OldMoney * value;
        // 技能数量
        this.number = value;
      },
      init() {
        let skillId = this.$route.query.id;
        axios.get('http://192.168.0.5:8080/skills/sel/' + skillId).then(result => {
          // 技能ID
          this.skillId = result.data.skillsinfo.siSerialnumber;
          // 技能发布者ID
          this.skillUserId = result.data.skillsinfo.u.number;
          this.OldTitle = result.data.skillsinfo.siTitle;
          // 技能价格
          this.OldMoney = result.data.skillsinfo.siMoney;
          this.price = result.data.skillsinfo.siMoney;
          this.OldInfo = result.data.skillsinfo.siDescribe;
        }).catch(err => {
          console.log(err);
        });
      },
      ToPay1() {
        this.$router.push('/paySuccess');
      },
      ToPay() {
        const data = {};
        data.soSkillnumber = this.skillId;
        data.soSkilluser = this.skillUserId;
        // 用户登录
        let User = localStorage.getItem('UserInfo');
        let user = JSON.parse(User);
        data.soBuyusernumber = user.number;
        data.soQuantity = this.number;
        // 状态码
        data.radio = this.radio;
        data.soMoney = this.price;
        axios.post('http://api.qiandao.xgl6.top/skillorder/Order', data).then(result => {
          console.log(result.data);
          let skillorderid = result.data;
          let title = this.OldTitle;
          let money = this.price;
          axios.get('http://api.qiandao.xgl6.top/aliPay/wapPay/' + title + '/' + skillorderid + '/' + money).then(result => {
            let form = result.data;
            let iframe = document.getElementById('show-iframe');
            const div = document.createElement('div');
            div.innerHTML = form;
            iframe.appendChild(div);
            document.forms[0].submit();
            setInterval(() => {
              axios.get('http://api.qiandao.xgl6.top/aliPay/queryPay/' + skillorderid).then(res => {
                let i = res.data;
                if (i === 1) {
                  alert(1);
                  // 付款成功
                  // clearInterval(taskId);
                  // ly.store.del("CY_PAY");
                  // // 跳转到付款成功页
                  // location.href = "/paysuccess.html?orderId=" + this.orderId;
                } else if (i === 2) {
                  alert(2);
                  // // 付款失败
                  // clearInterval(taskId);
                  // // 跳转到付款失败页
                  // location.href = "/payfail.html";
                }
              });
            }, 3000);
          }).catch(err => {
            console.log(err);
          });
        }).catch(err => {
          console.log(err);
        });
      }
    },
    filters: {
      numFilter(value) {
        let realVal = '';
        if (value) {
          // 截取当前数据到小数点后两位
          realVal = parseFloat(value).toFixed(2);
        } else {
          realVal = '--';
        }
        return realVal;
      }
    }
  };
</script>

<style scoped>
  .buy-main {
    margin: 20px 5% 15px 5%;
  }
  .buy-info {
    display: flex;
    border-bottom: 1px solid #eee;
  }
  .info-img {
    width: 20%;
    height: 20%;
    margin-right: 10px;
  }
  .info-img>img {
    width: 100%;
    height: 100%;
  }
  .info-introduce {
    font-size: 13px;
  }
  .info-introduce>p {
    margin-bottom: 8px;
  }
  .info-first {
    font-size: 15px;
    color: black;
  }
  .main-price{
    margin-top: 20px;
    border-bottom: 1px solid #eee;
  }
  .price-center,
  .price-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .price-center {
    margin-top: 20px;
    margin-bottom: 20px;
  }
  .title-second {
    margin-left: 15px;
  }
  .main-total {
    margin-top: 20px;
    border-bottom: 1px solid #eee;
  }
  .total-title {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }
  .title-left {
    font-size: 15px;
    color: black;
  }
  .title-right {
    font-size: 15px;
    color: red;
  }
  .main-total>p {
    margin-bottom: 20px;
  }
  .main-pay {
    margin-top: 20px;
  }
  .pay-title {
    font-size: 15px;
    color: black;
  }
  .iconfont {
    font-size: 30px;
  }
  .pay-choose {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .task-footer {
    z-index: 3;
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 8%;
    background-color: #FDE344;
    text-align: center;
    margin-top: 20px;
  }
  .footer-item>span {
    font-size: 15px;
    color: black;
    line-height: 55px;
  }
</style>
