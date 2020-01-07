<template>
    <div class="nav">
      <ul class="nav-container">
        <li>
          <div class="nav-link">
            <img src="./img/nav-item-1.png" class="nav-pic">
            <p>猎人助手</p>
          </div>
        </li>
        <li>
          <div class="nav-link">
            <img src="./img/nav-item-2.png" class="nav-pic">
            <p>猎人邮箱</p>
          </div>
        </li>
        <li>
          <div class="nav-link" @click="toCommunity">
            <img src="./img/nav-item-3.png" class="nav-pic">
            <p>猎人社区</p>
          </div>
        </li>
        <li>
          <div class="nav-link">
            <img src="./img/nav-item-4.png" class="nav-pic">
            <p>通讯录</p>
          </div>
        </li>
      </ul>
    </div>
</template>

<script>
  export default {
    name: 'NewsNav',
    methods: {
      toCommunity() {
        this.$router.push('/community');
      }
    }
  };
</script>

<style lang="scss" scoped>
  .nav {
    margin-left: 3%;
    margin-right: 3%;
  }
  .nav-container {
    border-radius: 15px;
    border: 1px solid #eee;
    display: flex;
    justify-content: space-between;
  }
  .nav-container>li {
    margin: 10px;
  }
  .nav-link {
    width: 100%;
    text-align: center;
  }
  .nav-pic {
    width: 50%;
    margin-bottom: 8px;
  }
</style>
