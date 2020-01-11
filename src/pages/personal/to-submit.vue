<template>
<div>
  <div class="container">
    <!--      待提交-->
    <router-link to="/task-in-progress/to-submit">
      <span @click="change(1)" :class="{'active':index === 1}" class="to-submit-container-span1">待提交</span>
    </router-link>
    <!--待审核-->
    <router-link to="/task-in-progress/to-audit">
      <span @click="change(2)" :class="{'active':index === 2}" class="to-submit-container-span2">待审核</span>
    </router-link>
  </div>
  <div class="container-container">
    <svg class="header-img-right" aria-hidden="true">
      <use xlink:href="#icon-task" @click="back"></use>
    </svg>
    <div class="to-submit-task">
      <span style="font-size: 15px;">还等什么，快去接一个吧！~</span>
    </div>
    <div class="to-submit-button">
      <span>去接任务</span>
    </div>
  </div>
</div>
</template>

<script>
  export default {
    name: 'to-submit',
    data() {
      return {
        index: 1
      };
    },
    methods: {
      change(index) {
        this.index = index;
      }
    }
  };
</script>

<style scoped>
  .active {
    color: black;
    font-weight: bold;
    border-bottom: 3px solid black;
    padding-bottom: 10px;
    /*transform: scale(1.1);*/
    opacity: 0.8;
    transition: all 0.8s ease;
  }

  .container {
    margin: 0 auto;
    width: 55%;
    border: red 2px solid;
    font-size: 15px;
    height: 30px;

  }
  .container-container {
    width: 90%;
    margin: 75px auto;
    text-align: center;
    /*border: #3F9EFA 2px solid;*/
  }

  .to-submit-task {
    /*border: red 2px solid;*/
    padding: 10px;
  }
  .to-submit-button {
    border-radius: 30px;
    margin: 15px auto;
    font-size: 14px;
    color: black;
    width:220px;
    height: 30px;
    line-height: 30px;
    background-color: #FDE344;
  }

  .to-submit-container-span1 {
    float: left;
  }
  .to-submit-container-span2 {
    float: right;
  }
</style>
