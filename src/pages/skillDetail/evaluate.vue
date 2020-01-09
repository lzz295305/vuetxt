<template>
    <div class="evaluate">
      <div class="evaluate-title">
        <span class="title-left">评价</span>
        <a class="title-right" @click="toComment">
          全部
          <i class="iconfont icon-chaye"></i>
        </a>
      </div>
      <ul>
        <li v-for="(item, index) in userList" :key="index">
          <div class="evaluate-left">
            <img src="https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1324531464,3169885786&fm=26&gp=0.jpg" alt="" class="main-img">
          </div>
          <div class="evaluate-content">
            <div class="evaluate-right">
              <div class="right-name">{{item.scUsernumber}}</div>
              <div class="right-star">
                <i class="iconfont icon-chaye"></i>
                <i class="iconfont icon-chaye"></i>
                <i class="iconfont icon-chaye"></i>
                <i class="iconfont icon-chaye"></i>
                <i class="iconfont icon-chaye"></i>
              </div>
            </div>
            <div class="right-data">{{item.scDate}}</div>
            <div class="right-info">{{item.scContent}}</div>
          </div>
        </li>
      </ul>
      <div class="evaluate-bottom">
        <i class="iconfont icon-chaye"> 技能交易诚信保障</i>
      </div>
    </div>
</template>

<script>
  import axios from 'axios';

  export default {
    name: 'evaluate',
    data() {
      return {
        userList: []
      };
    },
    created() {
      this.init();
    },
    methods: {
      toComment() {
        this.$router.push('/comment');
      },
      init() {
        let skillId = this.$route.query.id;
        axios.get('http://192.168.0.5:8080/skills/sel/' + skillId).then(result => {
          this.userList = result.data.skillcomments;
        }).catch(err => {
          console.log(err);
        });
      }
    }
  };
</script>

<style scoped>
  .evaluate {
    margin-left: 5%;
    margin-right: 5%;
    margin-top: 20px;
    border-bottom: 1px solid #eee;
  }
  .evaluate-title {
    display: flex;
    justify-content: space-between;
  }
  .title-left {
    font-size: 15px;
  }
  .main-img {
    width: 45px;
    height: 45px;
    border-radius: 50%;
  }
  .evaluate>ul>li {
    margin-top: 10px;
    display: flex;
  }
  .evaluate-content {
    margin-left: 20px;
  }
  .evaluate-right {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  .right-name {
    font-size: 15px;
    color: #080808;
  }
  .right-star {

  }
  .right-data {
    margin-top: 10px;
  }
  .right-info {
    margin-top: 20px;
    margin-bottom: 10px;
    font-size: 15px;
  }
  .evaluate-bottom {
    margin-top: 20px;
    margin-bottom: 20px;
    text-align: center;
    color: #080808;
  }
</style>
