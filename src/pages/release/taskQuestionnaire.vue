<template>
    <div class="questionnaire">
      <div class="explain-first">
        <h2 class="first-title-h2">
          {{title}}任务说明 :
        </h2>
        <div class="first-center">
          该类型的问卷任务均由个人发布，不限问卷平台。如有地域，年龄等特殊要求，请在任务要求位置填写
        </div>
      </div>
      <div class="explain-second">
        <h3 class="second-title">
          问卷标题
        </h3>
        <div class="second-center">
          <input class="explain-input" type="text" placeholder="标题需要清晰明确，不要模棱两可">
        </div>
      </div>
      <div class="explain-second" v-show="budget">
        <h3 class="second-title">
          问卷渠道
        </h3>
        <div class="first-data" @click="ShowTime">
          <input class="explain-input" type="text" v-model="NewDitch">
          <i class="iconfont icon-you"></i>
        </div>
      </div>
      <div class="explain-third" v-show="!budget">
        <h3 class="third-title">
          问卷描述
        </h3>
        <div class="third-center">
          <input class="explain-input" type="text" placeholder="简单介绍任务内容，最多添加4张图片">
          <uploader :after-read="afterRead" :max-count="4" multiple/>
        </div>
      </div>
      <div class="explain-third">
        <h3 class="third-title">
          问卷要求
        </h3>
        <div class="third-center">
          <input class="explain-input" type="text" placeholder="请列出您需要猎人提交的文字/截图">
          <input class="explain-input" type="text" placeholder="步骤1: 步骤2: 步骤3:">
          <input class="explain-input" type="text" placeholder="最多添加4张图片">
          <uploader :after-read="afterRead" :max-count="4" multiple/>
        </div>
      </div>
      <div class="limit-first">
        <p class="first-title">问卷连接 :</p>
        <input class="explain-input" type="text" placeholder="请填写http://或https://">
      </div>
      <div class="limit-first">
        <p class="first-title">每位猎人可完成次数</p>
        <input class="explain-input" type="text" placeholder="不填默认位1次" v-model="NewNumber">
      </div>
      <div class="limit-first" v-show="!budget">
        <p class="first-title">奖励发放需要雇主审核</p>
        <p class="explain-input">是</p>
      </div>
      <div class="limit-first">
        <p class="first-title">总预算(人名币 元)</p>
        <input class="explain-input" type="text" placeholder="请填写总预算">
      </div>
      <div class="limit-first">
        <p class="first-title">任务奖励单价(人民币 元)</p>
        <input class="explain-input" type="text" placeholder="请填写任务单价">
      </div>
      <div class="limit-first">
        <p class="first-title">持续时间</p>
        <div class="first-data">
          <input class="explain-input" type="text" v-model="NewDay">
          <span>天</span>
        </div>
      </div>
      <p class="first-warn">
        持续时间到，不会有新猎人再接受任务，已接受任务的猎人们仍可以提交作品
      </p>
      <popup
        v-model="show"
        round
        position="bottom"
      >
        <picker
          :columns="columns"
          :default-index="3"
          show-toolbar
          title="雇主审核时间限制(超时奖励自动发放)"
          @cancel="onCancel"
          @confirm="onConfirm"
        />
      </popup>
    </div>
</template>

<script>
  import { Uploader, Popup, Picker } from 'vant';
  export default {
    name: 'TaskQuestionnaire',
    data() {
      return {
        fileList: [],
        title: '',
        index: '',
        NewDay: 30,
        show: false,
        columns: [
          '乐调查',
          '调研邦',
          '天天爱查',
          'ABC调查',
          '51调查网',
          '天天调查',
          '卓思维',
          '问卷网'
        ],
        budget: false,
        NewDitch: '乐调查'
      };
    },
    components: {
      Uploader,
      Popup,
      Picker
    },
    created() {
      this.getTitle();
      this.init();
    },
    methods: {
      afterRead(file) {
        // 此时可以自行将文件上传至服务器
        console.log(file);
      },
      getTitle() {
        this.title = this.$route.query.content;
      },
      onCancel() {
        this.show = false;
      },
      onConfirm(value) {
        this.NewDitch = value;
        this.show = false;
      },
      init() {
        if (this.$route.query.content === '联盟问卷') {
          this.budget = true;
        }
      },
      ShowTime() {
        this.show = true;
      }
    }
  };
</script>

<style scoped>
  .questionnaire {
    margin-left: 3%;
    margin-right: 8%;
  }
  .explain-first {
    margin-bottom: 20px;
    border-bottom: 1px solid #eee;
  }
  .first-title-h2 {
    font-size: 20px;
    margin-bottom: 15px;
  }
  .first-center {
    font-size: 15px;
    line-height: 20px;
    letter-spacing: 1px;
    margin-bottom: 15px;
  }
  .explain-third,
  .explain-second {
    margin-bottom: 20px;
    border-bottom: 1px solid #eee;
  }
  .third-title,
  .second-title {
    font-size: 16px;
    color: black;
    margin-bottom: 15px;
  }
  .third-center,
  .second-center {
    font-size: 13px;
    line-height: 14px;
    letter-spacing: 1px;
    margin-bottom: 15px;
  }
  .second-center>input {
    width: 90%;
  }
  .third-center>input {
    width: 90%;
    margin-bottom: 40px;
  }
  .explain-input::-webkit-input-placeholder {
    color: #ccc;
  }
  .limit-first {
    margin-bottom: 20px;
    border-bottom: 1px solid #eee;
  }
  .first-title {
    font-size: 15px;
    color: black;
    margin-bottom: 10px;
  }
  .explain-input {
    margin-bottom: 10px;
  }
  .first-data {
    display: flex;
    justify-content: space-between;
  }
  .first-warn {
    margin-bottom: 50px;
    color: #ccc;
  }
</style>
