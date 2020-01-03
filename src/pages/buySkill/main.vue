<template>
    <div class="buy-main">
      <ul>
        <li>
          <div class="buy-info">
            <div class="info-img">
              <img src="./2.jpg" alt="">
            </div>
            <div class="info-introduce">
              <p class="info-first">(萌妹御姐)在线陪聊</p>
              <p class="info-second"> 闲着无聊就来根琦琦聊天把！</p>
              <p class="info-third">
                基础技能
                <span>￥</span>
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
             <stepper v-model="value"
                      integer
                      @plus="add(value)"
                      @minus="reduce(value)"
             />
             <div>￥{{price | numFilter}}</div>
           </div>
          </div>
          <div class="main-total">
            <div class="total-title">
              <span class="title-left">合计</span>
              <span class="title-right">￥{{price | numFilter}}</span>
            </div>
            <p>预计{{gettime}}前交付成品</p>
          </div>
          <div class="main-pay">
            <div class="pay-title">
              付款方式
            </div>
            <radio-group v-model="radio" checked-color="#FDE344">
              <cell-group>
                <cell title="微信支付" clickable @click="radio == '1'" class="iconfont icon-weixin">
                  <radio slot="right-icon" name="1" />
                </cell>
                <cell title="支付宝支付" clickable @click="radio == '2'" class="iconfont icon-zhifubao">
                  <radio slot="right-icon" name="2" />
                </cell>
                <cell title="猎人钱包" clickable @click="radio == '3'">
                  <radio slot="right-icon" name="3" disabled/>
                </cell>
              </cell-group>
            </radio-group>
          </div>
        </li>
      </ul>
    </div>
</template>

<script>
  import { Stepper, RadioGroup, Radio, Cell, CellGroup } from 'vant';
  export default {
    name: 'BuyMain',
    data() {
      return {
        value: 1,
        price: '',
        gettime: '',
        radio: ''
      };
    },
    components: {
      Stepper,
      RadioGroup,
      Radio,
      Cell,
      CellGroup
    },
    created() {
      this.add();
    },
    mounted() {
      this.getTime();
    },
    methods: {
      add(value) {
        if (this.value === 1) {
          this.price = 5.20;
        } else
          if (value > 1) {
            this.price = 5.20;
            let NewPrice = Number(this.price) * Number(value);
            this.price = NewPrice;
          }
      },
      reduce(value) {
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
    },
    getTime: function () {
      console.log(2);
      let yy = new Date().getFullYear();
      console.log(yy);
      let mm = new Date().getMonth() + 1;
      let dd = new Date().getDate();
      let hh = new Date().getHours();
      let mf = new Date().getMinutes() < 10 ? '0' + new Date().getMinutes() : new Date().getMinutes();
      this.gettime = yy + '年' + mm + '月' + dd + '日' + hh + ':' + mf;
    }
    // currentTime() {
    //   setInterval(this.getTime, 500);
    // }
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
    font-size: 15px;
  }
</style>
