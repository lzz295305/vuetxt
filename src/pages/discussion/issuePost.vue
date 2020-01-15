<template>
<!--  你要发的帖子-->
    <div class="issuePost">
      <me-navbar class="header" v-show="visible">
        <i class="iconfont icon-fanhui" slot="left" @click="back"></i>
        <span slot="title">你要发的帖子</span>
        <span class="iconfont" slot="right" @click="init">发布</span>
      </me-navbar>
      <div class="post-container">
        <div class="limit-first">
          <input class="explain-input" type="text" placeholder="标题" v-model="NewNumber">
        </div>
        <div class="limit-first">
          <textarea class="explain-input" type="text" placeholder="内容" v-model="NewText" id="center">
          </textarea>
        </div>
        <uploader :after-read="afterRead" :max-count="4" multiple upload-text="添加图片" v-model="fileList"/>
      </div>
      <div class="post-rule">
        <div class="post-box">
          <h3>规范提示</h3>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </ul>
        </div>
      </div>
    </div>
</template>

<script>
  import MeNavbar from 'base/navbar';
  import {Uploader} from 'vant';
  import axios from 'axios';
  export default {
    name: 'issuePost',
    data() {
      return {
        visible: true,
        NewText: '',
        NewNumber: '',
        fileList: [
          {}
        ]
      };
    },
    components: {
      MeNavbar,
      Uploader
    },
    mounted() {
      // 事件监听滚动条
      window.addEventListener('scroll', this.watchScroll);
    },
    methods: {
      init() {
        let data = {};
        data.piType = this.$route.query.id;
        let user = localStorage.getItem('UserInfo');
        data.piUsernumber = JSON.parse(user).number;
        data.piTitle = this.NewNumber;
        data.piContent = this.NewText;
        data.piImg = this.fileList;
        axios.post('http://api.qiandao.xgl6.top/pubSkill/pubPost', data).then(res => {
          alert(res.data);
        }).catch(err => {
          console.log(err);
        });
      },
      show() {
        this.visible = true;
      },
      hide() {
        this.visible = false;
      },
      back() {
        this.$router.go(-1);
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import "~assets/scss/mixins";
  .issuePost {
  }
  .header {
    &.mine-navbar {
       background-color: rgba(0, 0, 0, 0);
     }
    .iconfont {
      color: black;
    }
  }
  .limit-first {
    margin-bottom: 20px;
    border-bottom: 1px solid #eee;
  }
  .explain-input {
    margin-bottom: 10px;
  }
  .explain-input::-webkit-input-placeholder {
    color: #ccc;
  }
  .post-container {
    margin: 20px 3% 10px 3%;
  }
  #center {
    height: 240px;
  }
  .post-rule {
    background-color: #eee;
    height: 300px;
  }
  .post-box {
    margin: 10px 3% 10px 3%;
  }
</style>
