<template>
    <div class="label">
      <me-navbar class="header">
        <i class="iconfont icon-guanbi" slot="left" @click="showPopup"></i>
        <i class="iconfont" slot="title">{{title}}</i>
      </me-navbar>
      <div class="container">
        <h3 class="container-title">选择{{title}}</h3>
        <span class="container-info">最多选择1个标签，将展示在技能列表和详情页面</span>
        <ul>
          <li @click="LabelStyle(index, item.stContent)" :class="{'active': current}" v-for="(item, index) in labelList" :key="index">
            <div class="label-choose">
              {{item.stContent}}
            </div>
          </li>
        </ul>
      </div>
      <div class="footer" @click="ToBuild">
        <span>确定</span>
      </div>
    </div>
</template>

<script>
  import MeNavbar from 'base/navbar';
  import { ActionSheet, Uploader } from 'vant';
  import axios from 'axios';
  export default {
    name: 'playLabel',
    data() {
      return {
        title: '个人风格',
        show: false,
        current: '',
        labelList: [],
        data: []
      };
    },
    components: {
      MeNavbar,
      ActionSheet,
      Uploader
    },
    created() {
      this.init();
    },
    methods: {
      init() {
        let PlayId = this.$route.query.id;
        axios.get('http://api.qiandao.xgl6.top/pubSkill/getPersonStyle/' + PlayId).then(res => {
          this.labelList = res.data;
        }).catch(err => {
          console.log(err);
        });
      },
      showPopup() {
        this.$router.go(-1);
      },
      ToBuild() {
        let data = this.data;
        this.$router.push({
          path: '/skill-creation',
          query: {
            data: data
          }
        });
      },
      LabelStyle(index, list) {
        this.current = (index + 1);
        this.data = list;
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import "~assets/scss/mixins";
  .header {
    border-bottom: 1px solid #eee;
    &.mine-navbar {
       background-color: transparent;
     }
    .iconfont {
      color: black;
    }
  }
  .container {
    margin: 5px 3% 30px 3%;
  }
  .container-title {
    font-size: 18px;
    color: black;
  }
  .container-info {
    font-size: 14px;
    color: black;
    margin-top: 10px;
  }
  ul {
    margin-top: 10px;
    display: flex;
    flex-wrap: wrap;
  }
  ul>li {
    border: 1px solid #eee;
    background-color: #eee;
    border-radius: 5%;
    margin: 8px 8px 8px 0;
  }
  .label-choose {
    width: 100%;
    margin: 10px;
  }
  .footer {
    width: 25%;
    height: 38px;
    position: fixed;
    right: 15px;
    bottom: 25px;
    border-radius: 20px;
    background-color: #FDE344;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .footer>span {
    font-size: 15px;
    color: black;
    margin: auto;
  }
  .active {
    background-color: #FDE344;
  }
</style>
