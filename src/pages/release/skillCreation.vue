<template>
    <div class="creation">
      <me-navbar class="header">
        <i class="iconfont icon-guanbi" slot="left" @click="showPopup"></i>
        <i class="iconfont" slot="title">{{title}}-创建技能(1/2)</i>
      </me-navbar>
      <div class="center">
        <div class="build">
          <div class="explain-first">
            <h3 class="first-title">
              技能标题
            </h3>
            <div class="first-center">
              <input class="explain-input" type="text" placeholder="请填写技能标题">
            </div>
          </div>
          <div class="explain-first">
            <h3 class="first-title">
              技能描述
            </h3>
            <div class="first-center">
              <textarea class="explain-input" type="text" placeholder="请描述你的技能，说明越详细被下单的可能性越高，排名更靠前"></textarea>
            </div>
          </div>
          <div class="build-footer">
            <div class="build-title">
              <span>点击+添加图片(9) /第一张图片为封面图片 / 长按为图片顺序</span>
            </div>
            <div class="footer-img">
              <uploader :after-read="afterRead" :max-count="9" multiple upload-text="封面图"/>
            </div>
          </div>
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
    </div>
</template>

<script>
  import MeNavbar from 'base/navbar';
  import { ActionSheet, Uploader } from 'vant';
  import { HappyScroll } from 'vue-happy-scroll';
  export default {
    name: 'SkillCreation',
    data() {
      return {
        title: '个人成长',
        show: false,
        actions: [
          {name: '确认'}
        ]
      };
    },
    components: {
      MeNavbar,
      ActionSheet,
      HappyScroll,
      Uploader
    },
    methods: {
      showPopup() {
        this.show = true;
      },
      onCancel() {
        this.show = false;
      },
      Select(item) {
        this.$router.push('/home');
      },
      ToBuild() {
        this.$router.push('/skill-build');
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
  .center {
    width: 100%;
    height: 100%;
  }
  .build {
    width: 100%;
  }
  .explain-first {
    width: 93%;
    margin: 20px 3% 20px 3%;
    border-bottom: 1px solid #eee;
  }
  .first-title {
    font-size: 16px;
    color: black;
    margin-bottom: 15px;
  }
  .first-center {
    width: 100%;
    font-size: 13px;
    line-height: 14px;
    letter-spacing: 1px;
    margin-bottom: 15px;
  }
  .first-center>input {
    width: 100%;
    font-size: 15px;
  }
  .explain-input::-webkit-input-placeholder {
    color: #ccc;
    line-height: 17px;
  }
  .first-center>textarea {
    width: 100%;
    font-size: 15px;
  }
  .build-title {
    width: 100%;
    height: 30px;
    border: 1px solid #eee;
    background-color: #eee;
  }
  .build-title>span {
    line-height: 30px;
    margin-left: 3%;
  }
  .footer-img {
    margin: 20px 5% 20px 5%;
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
