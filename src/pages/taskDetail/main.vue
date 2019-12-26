<template>
    <div class="main">
      <div class="main-top">
        <i class="iconfont icon-chaye"></i>
        <span>雇主资金已托管，猎人赚钱有保障</span>
      </div>
      <ul class="main-center">
        <li>
          <p>奖励24小时内审核</p>
        </li>
        <li>
          <p>每位猎人可以做4次</p>
        </li>
        <li>
          <p>猎人必须1小时内完成</p>
        </li>
      </ul>
      <div class="main-bottom">
        <div class="left">
          <img src="https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1324531464,3169885786&fm=26&gp=0.jpg" alt="" class="main-img">
        </div>
        <div class="right">
          <p>佛系 <i class="iconfont icon-chaye"></i> 在线秒审</p>
          <p class="right-id">ID: 1659807</p>
        </div>
        <div class="right-icon">
          <i class="iconfont icon-chaye"></i>
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'TaskMain'
  };
</script>

<style scoped>
  .main-top {
    height: 40px;
    background: cornflowerblue;
    text-align: center;
    line-height: 40px;
  }
  .main-top>span {
    color: white;
  }
  .main-center {
    margin-top: 20px;
    margin-left: 2%;
    display: flex;
    flex-wrap: nowrap;
  }
  .main-center>li {
    width: 100%;
    height: 20px;
    background-color: #dddddd;
    padding: 4px;
    margin-left: 10px;
    white-space: nowrap;
    border-radius: 5px;
    overflow: hidden;
  }
  .main-bottom {
    height: 50px;
    position: relative;
    margin-top: 30px;
    margin-left: 5%;
    margin-bottom: 30px;
    display: flex;
  }
  .main-img {
    width: 45px;
    height: 45px;
    border-radius: 50%;
  }
  .right {
    font-size: 15px;
    margin-left: 10px;
  }
  .right>p {
    padding: 5px;
  }
  .right-icon {
    position: absolute;
    right: 5%;
    line-height: 50px;
  }
  .right-id {
    font-size: 13px;
  }
</style>
