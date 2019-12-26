<template>
    <div class="main-container">
      <ul>
        <li>
          <div class="main-top">
            <div class="left-price">
              <span class="price">￥5.20</span>
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
            <span>陪玩</span>
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
        </li>
      </ul>
    </div>
</template>

<script>
  export default {
    name: 'SkillDetailMain',
    components: {
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
</style>
