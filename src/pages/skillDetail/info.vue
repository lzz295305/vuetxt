<template>
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
</template>

<script>
  export default {
    name: 'info'
  };
</script>

<style scoped>
  .information {
    margin-left: 5%;
    margin-right: 5%;
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
