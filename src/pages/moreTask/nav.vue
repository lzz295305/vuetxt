<template>
    <div class="nav">
      <div id="1" @click="change(1)" :class="{'active': index === 1}" class="nav-title">
        最新发布
      </div>
      <div id="2" @click="change(2)" :class="{'active': index === 2}" class="nav-title">
        简单快速
      </div>
      <div id="3" @click="change(3)" :class="{'active': index === 3}" class="nav-title">
        任务单价
      </div>
    </div>
</template>

<script>
  export default {
    name: 'MoreTaskNav',
    data() {
      return {
        index: 1
      };
    },
    methods: {
      change(x) {
        this.index = x;
      }
    }
  };
</script>

<style scoped>
  .nav {
    margin-top: 10px;
    margin-bottom: 5px;
    display: flex;
    justify-content: space-between;
  }
  .nav-title {
    border-radius: 30px;
    background-color: #eee;
    padding: 2%;
  }
  .active {
    background-color: #FDE344;
    color: black;
  }
</style>
