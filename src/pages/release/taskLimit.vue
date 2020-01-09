<template>
    <div class="limit">
      <div class="limit-first">
        <p class="first-title">每位猎人可完成次数</p>
        <input class="explain-input" type="text" placeholder="不填默认位1次" v-model="NewNumber">
      </div>
      <div class="limit-first">
        <p class="first-title">奖励发放需要雇主审核</p>
        <p class="explain-input">是</p>
      </div>
      <div class="limit-first" v-show="!budget">
        <p class="first-title">任务预计奖励次数</p>
        <input class="explain-input" type="text" placeholder="最低20次">
      </div>
      <div class="limit-first" v-show="budget">
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
      <p class="first-warn" v-show="budget">
        持续时间到，不会有新猎人再接受任务，已接受任务的猎人们仍可以提交作品
      </p>
      <div class="limit-first" v-show="!budget">
        <p class="first-warn">持续时间到，不会有新猎人再接受任务，已接受任务的猎人们仍可以提交作品</p>
        <p class="first-title">猎人提交作品时间限制</p>
        <div class="first-data">
          <input class="explain-input" type="text" v-model="NewTime">
          <span>小时内需要提交</span>
        </div>
      </div>
      <div class="limit-first" v-show="!budget">
        <p class="first-warn">超出该时间未提交视为任务失败，可填1-180小时整数</p>
        <p class="first-title">雇主审核时间限制(超时奖励自动发放)</p>
        <div class="first-data" @click="ShowTime">
          <input class="explain-input" type="text" v-model="NewHour">
          <i class="iconfont icon-you"></i>
        </div>
      </div>
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
  import { ActionSheet, Popup, Picker } from 'vant';
  export default {
    name: 'taskLimit',
    data() {
      return {
        NewNumber: 1,
        NewDay: 30,
        NewTime: 6,
        NewHour: '24小时',
        show: false,
        columns: [
          '6小时',
          '12小时',
          '18小时',
          '24小时',
          '36小时',
          '48小时'
        ],
        budget: false
      };
    },
    components: {
      ActionSheet,
      Popup,
      Picker
    },
    created() {
      this.init();
    },
    methods: {
      init() {
        if (this.$route.query.content === '众包任务') {
          this.budget = true;
        }
      },
      ShowTime() {
        this.show = true;
      },
      onCancel() {
        this.show = false;
      },
      onConfirm(value) {
        this.NewHour = value;
        this.show = false;
      }
    }
  };
</script>

<style scoped>
  .limit {
    margin: 5% 3% 18% 3%;
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
  .explain-input::-webkit-input-placeholder {
    color: #ccc;
  }
  .first-data {
    display: flex;
    justify-content: space-between;
  }
  .first-warn {
    margin-bottom: 20px;
    color: #ccc;
  }
</style>
