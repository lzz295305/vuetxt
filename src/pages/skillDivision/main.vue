<template>
    <div class="main">
      <span>你想要的优质靠谱技能都在这里</span>
      <ul class="tab-data">
        <li @click="goSkillDetail">
          <div class="content-title">
            <img src="./img/nav-item-1.png" alt="" class="title-img">
            <span>奈黑酱</span>
          </div>
          <div class="content-matter">
            <img src="./img/nav-item-1.png" alt="" class="content-img">
            <div class="content-txt">
              <span>陪聊（可盐可甜）</span>
              <p class="content-info">
                <span>8.80元</span>
                <span>
                  <i class="iconfont icon-xiaoxi">5.0</i>
                  <i class="iconfont icon-xiaoxi"></i>
                </span>
              </p>
              <div class="info-label">
                <span>官方认证</span>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="content-title">
            <img src="./img/nav-item-1.png" alt="" class="title-img">
            <span>奈黑酱</span>
          </div>
          <div class="content-matter">
            <img src="./img/nav-item-1.png" alt="" class="content-img">
            <div class="content-txt">
              <span>陪聊（可盐可甜）</span>
              <p class="content-info">
                <span>8.80元</span>
                <span>
                  <i class="iconfont icon-xiaoxi">5.0</i>
                  <i class="iconfont icon-xiaoxi"></i>
                </span>
              </p>
              <div class="info-label">
                <span>官方认证</span>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="content-title">
            <img src="./img/nav-item-1.png" alt="" class="title-img">
            <span>奈黑酱</span>
          </div>
          <div class="content-matter">
            <img src="./img/nav-item-1.png" alt="" class="content-img">
            <div class="content-txt">
              <span>陪聊（可盐可甜）</span>
              <p class="content-info">
                <span>8.80元</span>
                <span>
                  <i class="iconfont icon-xiaoxi">5.0</i>
                  <i class="iconfont icon-xiaoxi"></i>
                </span>
              </p>
              <div class="info-label">
                <span>官方认证</span>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="content-title">
            <img src="./img/nav-item-1.png" alt="" class="title-img">
            <span>奈黑酱</span>
          </div>
          <div class="content-matter">
            <img src="./img/nav-item-1.png" alt="" class="content-img">
            <div class="content-txt">
              <span>陪聊（可盐可甜）</span>
              <p class="content-info">
                <span>8.80元</span>
                <span>
                  <i class="iconfont icon-xiaoxi">5.0</i>
                  <i class="iconfont icon-xiaoxi"></i>
                </span>
              </p>
              <div class="info-label">
                <span>官方认证</span>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="content-title">
            <img src="./img/nav-item-1.png" alt="" class="title-img">
            <span>奈黑酱</span>
          </div>
          <div class="content-matter">
            <img src="./img/nav-item-1.png" alt="" class="content-img">
            <div class="content-txt">
              <span>陪聊（可盐可甜）</span>
              <p class="content-info">
                <span>8.80元</span>
                <span>
                  <i class="iconfont icon-xiaoxi">5.0</i>
                  <i class="iconfont icon-xiaoxi"></i>
                </span>
              </p>
              <div class="info-label">
                <span>官方认证</span>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="content-title">
            <img src="./img/nav-item-1.png" alt="" class="title-img">
            <span>奈黑酱</span>
          </div>
          <div class="content-matter">
            <img src="./img/nav-item-1.png" alt="" class="content-img">
            <div class="content-txt">
              <span>陪聊（可盐可甜）</span>
              <p class="content-info">
                <span>8.80元</span>
                <span>
                  <i class="iconfont icon-xiaoxi">5.0</i>
                  <i class="iconfont icon-xiaoxi"></i>
                </span>
              </p>
              <div class="info-label">
                <span>官方认证</span>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
</template>

<script>
  export default {
    name: 'DivisionMain',
    methods: {
      goSkillDetail() {
        this.$router.push('/skillDetail');
      }
    }
  };
</script>

<style scoped>
  .main>ul {
    margin-top: 20px;
  }
  .main>ul>li {
    margin-top: 20px;
    margin-bottom: 20px;
    border-bottom: 1px solid #eee;
  }
  .title-img {
    width: 15px;
    height: 15px;
    border-radius: 50%;
  }

  .content-matter {
    width: 100%;
    margin-top: 10px;
    display: flex;
    justify-content: left;
  }

  .content-img {
    width: 15%;
    height: 15%;
    border-radius: 5px;
  }

  .content-txt {
    width: 100%;
    margin-left: 10px;
    align-items: center;
    margin-top: 5px;
    font-size: 15px;
  }

  .content-info {
    margin-top: 5px;
    display: flex;
    justify-content: space-between;
    margin-right: 10px;
  }
  .info-label {
    margin-bottom: 20px;
  }
</style>
