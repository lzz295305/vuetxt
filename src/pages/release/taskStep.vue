<template>
    <div class="step">
      <h3>任务步骤</h3>
      <div class="step-first">
        <span class="first-title">步骤/要求 :</span>
        <div class="first-center">
          <input class="explain-input" type="text" placeholder="描述猎人在这步骤应该做什么">
          <uploader :after-read="afterRead" :max-count="4" multiple upload-text="正确示例"/>
          <uploader :after-read="afterRead" :max-count="4" multiple upload-text="错误示例"/>
        </div>
      </div>
      <div class="step-first">
        <span class="first-title">相关连接 :</span>
        <input class="explain-input" type="text" placeholder="请填写http://或https://">
      </div>
      <div class="step-first">
        <span class="first-title">本步骤要求猎人提交 :</span>
        <radio-group v-model="radio" class="choose">
          <radio name="1" class="radio" checked-color="#FDE344">文字</radio>
          <radio name="2" class="radio" checked-color="#FDE344">图片</radio>
          <radio name="3" class="radio" checked-color="#FDE344">文件/视频</radio>
          <radio name="4" class="radio" checked-color="#FDE344">无</radio>
        </radio-group>
      </div>
    </div>
</template>

<script>
  import {Uploader, RadioGroup, Radio, ActionSheet} from 'vant';

  export default {
    name: 'TaskStep',
    data() {
      return {
        radio: '4',
        fileList: []
      };
    },
    components: {
      Uploader,
      RadioGroup,
      Radio,
      ActionSheet
    },
    methods: {
      afterRead(file) {
        // 此时可以自行将文件上传至服务器
        console.log(file);
      }
    }
  };
</script>

<style scoped>
  .step {
    margin: 5% 3% 20px 3%;
    border-bottom: 1px solid blue;
  }
  .step>h3 {
    font-size: 16px;
    color: black;
    margin-bottom: 15px;
  }
  .first-center {
    font-size: 13px;
    line-height: 14px;
    letter-spacing: 1px;
    margin-bottom: 15px;
  }
  .first-center>input {
    width: 100%;
    margin-bottom: 40px;
  }
  .explain-input::-webkit-input-placeholder {
    color: #ccc;
  }
  .first-title {
    font-size: 14px;
    color: black;
  }
  .explain-input {
    width: 98%;
    margin-top: 15px;
  }
  .step-first {
    margin-bottom: 20px;
  }
  .choose {
    margin-top: 10px;
  }
  .radio {
    margin-bottom: 10px;
  }
</style>
