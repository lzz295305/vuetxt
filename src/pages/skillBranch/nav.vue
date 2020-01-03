<template>
  <div class="branch-nav">
    <dropdown-menu class="nav-bar">
      <dropdown-item v-model="value1" :options="option1"/>
      <dropdown-item v-model="value1" :options="option2" title="心理咨询" @click="showPopup"/>
      <div class="bar-left" @click="showPopup">筛选</div>
    </dropdown-menu>
    <popup v-model="show" position="right" :style="{width: '80%', height: '100%'}">
      <div class="nav-popup">
        <div class="popup-title">
          <p>价格</p>
          <div class="popup-center">
            <span>50以下</span>
            <span>50-100</span>
            <span>100以上</span>
          </div>
        </div>
        <div class="popup-title">
          <p>资格认证</p>
          <div class="popup-center">
            <span>官方认证</span>
          </div>
        </div>
      </div>
      <div class="popup-footer">
        <div class="footer-left">
          重置
        </div>
        <div class="footer-right">
          完成
        </div>
      </div>
    </popup>
    <tabs v-model="active">
      <tab title="标签 1">
        <state />
      </tab>
      <tab title="标签 2">内容 2</tab>
      <tab title="标签 3">内容 3</tab>
      <tab title="标签 4">内容 4</tab>
      <tab title="标签 4">内容 5</tab>
      <tab title="标签 4">内容 6</tab>
      <tab title="标签 4">内容 7</tab>
    </tabs>
  </div>
</template>

<script>
  import {DropdownMenu, DropdownItem, Popup, Tab, Tabs} from 'vant';
  import State from './state';

  export default {
    name: 'BranchNav',
    components: {
      DropdownMenu,
      DropdownItem,
      Popup,
      Tab,
      Tabs,
      State
    },
    data() {
      return {
        value1: 0,
        value2: 'a',
        option1: [
          { text: '综合排序', value: 0 },
          { text: '评价排序', value: 1 },
          { text: '价格排序', value: 2 }
        ],
        option2: [
          { text: '全部', value: 0 },
          { text: '个人成长', value: 1 },
          { text: '爱情婚姻', value: 2 },
          { text: '子女教育', value: 3 },
          { text: '职场心理', value: 4 },
          { text: '综合治愈', value: 5 },
          { text: '其他', value: 6 }
        ],
        show: false,
        active: 2
      };
    },
    methods: {
      showPopup() {
        this.show = true;
      }
    }
  };
</script>

<style scoped>
  .nav-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .bar-left {
    width: 30%;
    text-align: center;
    font-size: 15px;
    color: black;
  }
  .nav-popup {
    margin: 15% 5% 10% 5%;
  }
  .popup-footer {
    position: fixed;
    bottom: 0;
    height: 8%;
    width: 100%;
    font-size: 20px;
    display: flex;
  }
  .footer-left {
    width: 50%;
    height: 100%;
    background-color: black;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .footer-right {
    width: 50%;
    height: 100%;
    background-color: #FDE344;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .popup-title {
    margin-bottom: 12%;
  }
  .popup-title>p {
    color: black;
    font-size: 18px;
    margin-bottom: 18px;
    margin-top: 15px;
  }
  .popup-center>span {
    background-color: #eee;
    margin: 5px;
    padding: 8px;
    border-radius: 5%;
  }
</style>
