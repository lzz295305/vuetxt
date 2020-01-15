<template>
<!--  创建技能二页面-->
    <div class="build">
      <me-navbar class="header">
        <i class="iconfont icon-guanbi" slot="left" @click="showPopup"></i>
        <i class="iconfont" slot="title">{{title}}-创建技能(2/2)</i>
      </me-navbar>
      <div class="build-container" @click="alter">
        <span class="container-title">可修改次数</span>
        <div>
          {{number}}
          <i class="iconfont icon-you"></i>
        </div>
      </div>
      <div class="build-container" @click="pay">
        <span class="container-title">交付时间</span>
        <div>
          {{NewDay}}天
          <i class="iconfont icon-you"></i>
        </div>
      </div>
      <div class="build-center">
        <p>报价 :</p>
        <input class="explain-input" type="text" placeholder="最低5" v-model="NewMoney">
      </div>
      <div class="build-center">
        <p>偏好接单时间 :</p>
        <div class="build-container" @click="order1">
          <span class="container-title">开始接单时间</span>
          <div>
            {{NewTime1}}
            <i class="iconfont icon-you"></i>
          </div>
        </div>
        <div class="build-container" @click="order2">
          <span class="container-title">结束接单时间</span>
          <div>
            {{NewTime2}}
            <i class="iconfont icon-you"></i>
          </div>
        </div>
      </div>
      <div class="footer-left" @click="ToBuild">
        <span>上一步</span>
      </div>
      <div class="footer-right" @click="ToComplete">
        <span>发布</span>
      </div>
      <action-sheet
        v-model="show"
        :actions="actions"
        cancel-text="取消"
        @cancel="onCancel"
        @select="Select"
        description="关闭后将丢失当前页面编辑内容"
      />
      <popup
        v-model="ShowAlter"
        round
        position="bottom"
      >
        <picker
          :columns="columns"
          :default-index="3"
          show-toolbar
          title="可修改次数"
          @cancel="upCancel"
          @confirm="onConfirm"
        />
      </popup>
      <popup
        v-model="ShowPay"
        round
        position="bottom"
      >
        <picker
          :columns="columns1"
          :default-index="1"
          show-toolbar
          title="交付时间"
          @cancel="upToCancel"
          @confirm="onToConfirm"
        />
      </popup>
      <popup
        v-model="ShowOrder1"
        round
        position="bottom"
      >
        <datetime-picker
          v-model="currentTime1"
          type="time"
          :min-hour="0"
          :max-hour="24"
          title="开始接单时间"
          @cancel="goCancel1"
          @confirm="goconfirm1"
        />
      </popup>
      <popup
        v-model="ShowOrder2"
        round
        position="bottom"
      >
        <datetime-picker
          v-model="currentTime2"
          type="time"
          :min-hour="0"
          :max-hour="24"
          title="结束接单时间"
          @cancel="goCancel2"
          @confirm="goconfirm2"
        />
      </popup>
    </div>
</template>

<script>
  import MeNavbar from 'base/navbar';
  import { ActionSheet, Popup, Picker, DatetimePicker } from 'vant';
  import axios from 'axios';
  export default {
    name: 'SkillBuild',
    data() {
      return {
        NewMoney: '',
        title: '个人成长',
        show: false,
        actions: [
          {name: '确认关闭'}
        ],
        number: '3',
        ShowAlter: false,
        columns: [
          '0',
          '1',
          '2',
          '3',
          '4',
          '5',
          '6',
          '7',
          '8',
          '9',
          '10'
        ],
        NewDay: '1',
        ShowPay: false,
        columns1: [
          '1',
          '2',
          '3',
          '4',
          '5',
          '6',
          '7'
        ],
        ShowOrder1: false,
        ShowOrder2: false,
        NewTime1: '00:00',
        NewTime2: '24:00',
        currentTime1: '00:00',
        currentTime2: '24:00'
      };
    },
    components: {
      MeNavbar,
      ActionSheet,
      Popup,
      Picker,
      DatetimePicker
    },
    created() {
      this.init();
    },
    methods: {
      init() {
        this.title = this.$route.query.name;
      },
      // 左上角叉号
      showPopup() {
        this.show = true;
      },
      onCancel() {
        this.show = false;
      },
      Select(item) {
        this.$router.push('/home');
      },
      // 左下角上一步
      ToBuild() {
        this.$router.push('/skill-creation');
      },
      // 右下角完成
      ToComplete() {
        let data = JSON.parse(sessionStorage.getItem('SkillData'));
        data.siModifynumber = this.number;
        data.siDuration = this.NewDay;
        data.siMoney = this.NewMoney;
        let times = this.NewTime1 + '-' + this.NewTime2;
        data.siDate = times;
        let user = JSON.parse(localStorage.getItem('UserInfo'));
        data.userId = user.number;
        data.siType = this.title;
        console.log(this.title);
        axios.post('http://api.qiandao.xgl6.top/pubSkill/insertSkill', data).then(res => {
          alert(res.data);
          this.$router.push('/home');
        }).catch(err => {
          console.log(err);
        });
      },
      // 可修改次数
      alter() {
        this.ShowAlter = true;
      },
      upCancel() {
        this.ShowAlter = false;
      },
      onConfirm(value) {
        this.number = value;
        this.ShowAlter = false;
      },
      // 交付时间
      pay() {
        this.ShowPay = true;
      },
      upToCancel() {
        this.ShowPay = false;
      },
      onToConfirm(value) {
        this.NewDay = value;
        this.ShowPay = false;
      },
      // 偏好接单时间
      order1() {
        this.ShowOrder1 = true;
      },
      order2() {
        this.ShowOrder2 = true;
      },
      goCancel1() {
        this.ShowOrder1 = false;
      },
      goconfirm1(value) {
        this.NewTime1 = value;
        this.ShowOrder1 = false;
      },
      goCancel2() {
        this.ShowOrder2 = false;
      },
      goconfirm2(value) {
        this.NewTime2 = value;
        this.ShowOrder2 = false;
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import "~assets/scss/mixins";
  .header {
    &.mine-navbar {
       background-color: transparent;
     }
    .iconfont {
      color: black;
    }
  }
  .build-container {
    margin: 20px 3% 20px 3%;
    display: flex;
    justify-content: space-between;
  }
  .container-title {
    font-size: 15px;
    color: black;
  }
  .build-center {
    margin: 20px 3% 20px 3%;
    color: black;
    border-bottom: 1px solid #eee;
  }
  .build-center>p {
    font-size: 15px;
    color: black;
    margin-bottom: 20px;
  }
  .explain-input {
    margin-bottom: 10px;
  }
  .explain-input::-webkit-input-placeholder {
    color: #ccc;
    font-size: 15px;
  }
  .footer-right {
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
  .footer-right>span {
    font-size: 15px;
    color: black;
    margin: auto;
  }
  .footer-left {
    width: 25%;
    height: 38px;
    position: fixed;
    left: 15px;
    bottom: 25px;
    border-radius: 20px;
    background-color: black;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .footer-left>span {
    font-size: 15px;
    color: white;
    margin: auto;
  }
</style>
