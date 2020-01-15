<template>
<!--  技能认证上传图片-->
    <div class="approve">
      <me-navbar class="header">
        <i class="iconfont icon-guanbi" slot="left" @click="showPopup"></i>
        <i class="iconfont" slot="title">{{title}}-技能认证</i>
      </me-navbar>
      <div class="approve-container">
        <h4 class="approve-title">上传技能认证图片</h4>
        <div class="approve-img">
          <uploader :after-read="afterRead" :max-count="9" multiple upload-text="封面图" class="uploading"/>
        </div>
        <div class="approve-example">
          <h4 class="approve-title">示例图片</h4>
          <img :src="imglist" height="249px"/>
        </div>
      </div>
      <div class="footer" @click="ToBuild">
        <span>下一步</span>
      </div>
      <action-sheet
        v-model="show"
        :actions="actions"
        cancel-text="取消"
        @cancel="onCancel"
        @select="Select"
        description="关闭后将丢失当前页面编辑内容"
      />
      <action-sheet
        v-model="show1"
        :actions="actions1"
        cancel-text="取消"
        @cancel="Cancel"
        @select="onSelect"
      />
    </div>
</template>

<script>
  import MeNavbar from 'base/navbar';
  import { ActionSheet, Uploader } from 'vant';
  import axios from 'axios';
  export default {
    name: 'skillApprove',
    data() {
      return {
        title: '',
        show: false,
        actions: [
          {name: '确认'}
        ],
        show1: false,
        actions1: [
          {name: '拍照', index: 1},
          {name: '我的相册', index: 2}
        ],
        imglist: ''
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
        this.title = this.$route.query.name;
        let imgId = this.$route.query.id + 1;
        axios.get('http://api.qiandao.xgl6.top/getImage/getImage/' + imgId).then(res => {
          this.imglist = res.data;
        }).catch(err => {
          console.log(err);
        });
      },
      // 返回
      showPopup() {
        this.show = true;
      },
      onCancel() {
        this.show = false;
      },
      Select(item) {
        this.$router.push('/home');
      },
      // 弹出相机上传
      photo() {
        this.show1 = true;
      },
      Cancel() {
        this.show = false;
      },
      onSelect(item) {
        if (item.index === 1) {
          alert('拍照');
        } else {
          alert('我的相机');
        }
      },
      // 点击下一步
      ToBuild() {
        let title = this.title;
        let number = this.$route.query.number;
        this.$router.push({
          path: '/skill-creation',
          query: {
            type: 1,
            name: title,
            oneself: number
          }
        });
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import "~assets/scss/mixins";
  .approve {
  }
  .header {
    border-bottom: 1px solid #eee;
    &.mine-navbar {
       background-color: transparent;
     }
    .iconfont {
      color: black;
    }
  }
  .approve-container {
    margin-left: 3%;
    margin-right: 3%;
  }
  .approve-title {
    font-size: 15px;
    color: black;
    margin-top: 20px;
    margin-bottom: 5px;
  }
  .approve-example {
    width: 100%;
  }
  .approve-img {
    border: 1px solid #eee;
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  .uploading {
    height: 200px;
  }
  .approve-example>img {
    border: 1px solid #eee;
    width: 100%;
    height: 30%;
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
</style>
