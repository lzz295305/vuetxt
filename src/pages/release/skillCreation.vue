<template>
<!--  创建技能一页面-->
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
              <input class="explain-input" type="text" placeholder="请填写技能标题" v-model="SkillData.siTitle">
            </div>
          </div>
          <div class="explain-first" v-show="!play">
            <h3 class="first-title">
              技能描述
            </h3>
            <div class="first-center">
              <textarea class="explain-input" type="text" placeholder="请描述你的技能，说明越详细被下单的可能性越高，排名更靠前" v-model="SkillData.siDescribe">
              </textarea>
            </div>
          </div>
          <ul v-show="play">
            <li class="play-info" @click="ToPlayChoose" v-for="(item, index) in choose" :key="index">
              <span class="info-title">
                {{item}}
              </span>
              <div>
                {{context}}
                <i class="iconfont icon-you"></i>
              </div>
            </li>
          </ul>
          <div class="explain-first" v-show="play">
            <h3 class="first-title">
              技能描述
            </h3>
            <div class="first-center">
              <textarea class="explain-input" type="text" placeholder="请用几句话介绍你的陪玩优势或特殊的能力，以便招揽订单"></textarea>
            </div>
          </div>
          <div class="build-footer">
            <div class="build-title">
              <span>点击+添加图片(9) /第一张图片为封面图片 / 长按为图片顺序</span>
            </div>
            <div class="footer-img">
              <uploader :after-read="afterRead" :max-count="9" multiple upload-text="封面图" v-model="SkillData.siImg"/>
            </div>
<!--            <div @click="afterRead">上传</div>-->
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
  import axios from 'axios';
  export default {
    name: 'SkillCreation',
    data() {
      return {
        title: '',
        show: false,
        actions: [
          {name: '确认'}
        ],
        play: false,
        choose: [
          '个人风格',
          '段位/等级',
          '技能类型',
          '游戏区服',
          '是否保证上分',
          '性别'
        ],
        context: '请选择',
        SkillData: {
          siTitle: '',
          siDescribe: '',
          siImg: [
            {}
          ]
        }
      };
    },
    components: {
      MeNavbar,
      ActionSheet,
      HappyScroll,
      Uploader
    },
    created() {
      this.init();
    },
    methods: {
      init() {
        this.context = this.$route.query.data;
        let type = this.$route.query.type;
        this.title = this.$route.query.name;
        if (this.$route.query.id > 65) {
          this.play = false;
        } else if (type) {
          this.play = true;
        } else {
          this.play = false;
        }
      },
      afterRead(file) {
        console.log(file);
        // let data = file;
        // axios.post('http://api.qiandao.xgl6.top//getImage/upload', data).then(res => {
        //   alert(res.data);
        // }).catch(err => {
        //   console.log(err);
        // });
      },
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
        alert(this.SkillData.siImg);
        sessionStorage.setItem('SkillData', JSON.stringify(this.SkillData));
        let title = this.title;
        this.$router.push({
          path: '/skill-build',
          query: {
            name: title
          }
        });
      },
      ToPlayChoose() {
        let index = this.$route.query.oneself;
        this.$router.push({
          path: '/playLabel',
          query: {
            id: index
          }
        });
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
  .play-info,
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
  .play-info {
    margin: 20px 3% 30px 3%;
    display: flex;
    justify-content: space-between;
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
