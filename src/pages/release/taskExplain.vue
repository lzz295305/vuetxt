<template>
    <div class="explain">
      <div class="explain-first">
        <h2 class="first-title">
          {{title}}任务说明 :
        </h2>
        <div class="first-center" v-if="index == 1">
          为了防止提交任务的猎人超出所需，一旦接受的人数达到要求，任务将无法接受，如果猎人没有按时提交作品，则任务释放，其他人可以领取。另外您需要在一定时间内审核，否则将自动视为完成，发放奖励。
        </div>
        <div class="first-center" v-if="index == 2">
          APP试玩任务聚焦于互联网产品的完整体验及评测。为了防止提交任务的猎人超出所需，一旦接受的人数达到要求，任务将无法接受，如果猎人没有按时提交作品，则任务释放，其他人可以领取。另外您需要在一定时间内审核，否则将自动视为完成，发放奖励。
        </div>
        <div class="first-center" v-if="index == 3">
          众包任务为夜神通过商务活动从其他商家或企业引入的精选任务
        </div>
      </div>
      <div class="explain-second">
        <h3 class="second-title">
          任务标题
        </h3>
        <div class="second-center">
          <input class="explain-input" type="text" placeholder="标题需要清晰明确，不要模棱两可" v-model="TaskData.taskTitle">
        </div>
      </div>
      <div class="explain-third">
        <h3 class="third-title">
          任务描述
        </h3>
        <div class="third-center">
          <input class="explain-input" type="text" placeholder="简单介绍任务内容，最多添加4张图片" v-model="TaskData.taskText">
          <uploader :after-read="afterRead" :max-count="4" multiple v-model="TaskData.tiMsimg"/>
        </div>
      </div>
    </div>
</template>

<script>
  import { Uploader } from 'vant';
  export default {
    name: 'TaskExplain',
    data() {
      return {
        fileList: [],
        title: '',
        index: '',
        TaskData: {
          taskTitle: '',
          taskText: '',
          tiMsimg: [
            {}
          ]
        }
      };
    },
    components: {
      Uploader
    },
    created() {
      this.getTitle();
      this.getId();
    },
    methods: {
      explain1() {
        sessionStorage.setItem('TaskInfo', JSON.stringify(this.TaskData));
      },
      afterRead(file) {
        // 此时可以自行将文件上传至服务器
        console.log(file);
      },
      getTitle() {
        this.title = this.$route.query.content;
      },
      getId() {
        if (this.$route.query.content === '社区互助') {
          this.index = 1;
        } else if (this.$route.query.content === 'APP试玩') {
          this.index = 2;
        } else if (this.$route.query.content === '众包任务') {
          this.index = 3;
        }
      }
    }
  };
</script>

<style scoped>
  .explain {
    margin-left: 3%;
    margin-right: 3%;
  }
  .explain-first {
    margin-bottom: 20px;
    border-bottom: 1px solid #eee;
  }
  .first-title {
    font-size: 20px;
    margin-bottom: 15px;
  }
  .first-center {
    width: 96%;
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
    width: 96%;
  }
  .third-center>input {
    width: 96%;
    margin-bottom: 40px;
  }
  .explain-input::-webkit-input-placeholder {
    color: #ccc;
  }
  .explain-third {
    border-bottom: 1px solid blue;
  }
</style>
