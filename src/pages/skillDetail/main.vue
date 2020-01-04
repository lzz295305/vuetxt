<template>
    <div class="main-container">
      <ul>
        <li v-for="(item, index) in skillList" :key="index">
          <div class="main-top">
            <div class="left-price">
              <span class="price">￥{{item.siMoney}}</span>
              <span class="time">/半小时</span>
            </div>
            <div class="right-evaluate">
              <i class="iconfont icon-xiaoxi">5.0</i>
            </div>
          </div>
          <div class="grade">
            <i class="iconfont icon-chaye">英勇黄金</i>
          </div>
          <div class="introduce">
            <span>{{item.siTitle}}</span>
          </div>
          <div class="main-bottom">
            <div class="left">
              <img src="https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1324531464,3169885786&fm=26&gp=0.jpg" alt="" class="main-img">
            </div>
            <div class="right">
              <p>在线秒审</p>
              <p class="right-id">ID: 1659807</p>
            </div>
            <div class="right-icon">
              <i class="iconfont icon-chaye"></i>
            </div>
          </div>
          <div class="information">
            <div class="info-describe">
              <h3>技能描述</h3>
              <ul class="main-center">
                <li>
                  <p>服从指挥</p>
                </li>
                <li>
                  <p>医疗兵</p>
                </li>
                <li>
                  <p>伏地魔</p>
                </li>
                <li>
                  <p>陪玩</p>
                </li>
                <li>
                  <p>QQ区</p>
                </li>
              </ul>
              <div class="main-news">
                <span>老板说啥就是啥</span>
                <span>一切听从老板指挥</span>
                <span>做你的专属小跟班</span>
              </div>
            </div>
            <div class="info-detail">
              <h3>技能信息</h3>
              <ul>
                <li>
                  <span>技能单价</span>
                  <span>￥5.20</span>
                </li>
                <li>
                  <span>交付时间</span>
                  <span>1天</span>
                </li>
                <li>
                  <span>所属分类</span>
                  <span>游戏电玩-和平精英</span>
                </li>
                <li>
                  <span>偏好接单时间</span>
                  <span>16:00-24:00</span>
                </li>
              </ul>
            </div>
          </div>
        </li>
      </ul>
    </div>
</template>

<script>
  export default {
    name: 'SkillDetailMain',
    data() {
      return {
        skillList: []
      };
    },
    components: {
    },
    mounted() {
      this.init();
    },
    methods: {
      init() {
        let skillId = this.$route.query.id;
        this.$http.get('/skills/sel/' + skillId, result => {
          this.skillList.push(result);
        }, err => { console.log(err); });
      }
    }
  };
</script>

<style scoped>
  .main-container {
    margin: 40px 5% 20px 5%;
  }
  .main-top {
    display: flex;
    justify-content: space-between;
  }
  .left-price {
    color: #BA0403;
  }
  .price {
    font-size: 25px;
  }
  .time {
    font-size: 15px;
  }
  .grade {
    margin: 10px 5% 10px 0;
  }
  .grade>i {
    font-size: 13px;
  }
  .introduce {
    font-size: 18px;
    color: #080808;
  }
  .main-bottom {
    height: 50px;
    position: relative;
    margin-top: 30px;
    margin-bottom: 30px;
    display: flex;
    border-bottom: 1px solid #eee;
    border-top: 1px solid #eee;
  }
  .left {
    line-height: 60px;
    align-items: center;
  }
  .main-img {
    width: 45px;
    height: 45px;
    border-radius: 50%;
  }
  .right {
    font-size: 15px;
  }
  .right>p {
    padding: 5px;
  }
  .right-icon {
    position: absolute;
    right: 0;
    line-height: 60px;
  }
  .right-id {
    font-size: 13px;
  }
  .info-describe {
    border-bottom: 1px solid #eee;
  }
  .info-describe>h3 {
    font-size: 15px;
    color: #080808;
    margin-bottom: 10px;
  }
  .main-center {
    display: flex;
    flex-wrap: nowrap;
    margin-bottom: 10px;
  }
  .main-center>li {
    height: 20px;
    background-color: #dddddd;
    padding: 4px;
    white-space: nowrap;
    border-radius: 5px;
    overflow: hidden;
    margin-right: 5px;
  }
  .main-news {
    margin-bottom: 20px;
  }
  .info-detail {
    margin-top: 20px;
    border-bottom: 1px solid #eee;
  }
  .info-detail>h3 {
    font-size: 15px;
    color: #080808;
    margin-bottom: 10px;
  }
  .info-detail>ul>li {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
  }
</style>
