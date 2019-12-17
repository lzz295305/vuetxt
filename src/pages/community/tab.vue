<template>
    <div class="tab">
      <ul class="tab-title">
        <li @click="show(true)" class="left" :class="{'active': isActive}">
          热门讨论
        </li>
        <li @click="show(false)" class="right" :class="{'active': !isActive}">
          我参与的
        </li>
      </ul>
      <div v-if="temp" class="content">
        <ul class="tab-data">
          <li>
            <div class="content-title">
              <span class="content-info"> 73 </span>
              <p class="content-main">大家一般做啥任务呢</p>
              <p class="content-foot">
                <span>来自</span>
                <span>任务心得</span>
                <span>11-11</span>
              </p>
            </div>
          </li>
          <li>
            <div class="content-title">
              <span class="content-info"> 73 </span>
              <p class="content-main">大家一般做啥任务呢</p>
              <p class="content-foot">
                <span>来自</span>
                <span>任务心得</span>
                <span>11-11</span>
              </p>
            </div>
          </li>
        </ul>
      </div>
      <div v-if="!temp">
        暂无数据
      </div>
    </div>
</template>

<script>
  export default {
    name: 'ComTab',
    data() {
      return {
        temp: true,
        isActive: true
      };
    },
    methods: {
      show(t) {
        this.isActive = t;
        this.temp = t;
      }
    }
  };
</script>

<style scoped>
  .tab {
    margin: 0px 10px 10px 10px;
  }
  .tab-title {
    display: flex;
    justify-content: center;
  }

  .tab-title>li {
    border: 1px solid rgba(187, 204, 30, 0.8);
    border-radius: 30px;
    line-height: 35px;
    height: 35px;
    width: 90px;
    text-align: center;
    font-size: 14px;
    font-weight: 700;
  }

  .tab-title .right {
    margin-left: 10px;
  }

  .active {
    background-color: #ac900a;
    color: whitesmoke;
  }

  .content {
    border-radius: 1px;
  }

  .tab-data>li {
    background-color: #fff;
    margin-top: 15px;
  }

  .content-info {
    width: 20px;
    height: 15px;
    background-color: yellow;
    padding-left: 5px;
    padding-right: 5px;
    border-radius: 50px 0 0 50px;
  }

  .content-main {
    margin: 20px 0 20px 10px;
    font-size: 18px;
    padding: 5px;
    border-left: 2px solid red;
  }

  .content-foot {
    padding: 10px;
  }
</style>
