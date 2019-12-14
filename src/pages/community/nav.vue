<template>
  <div class="nav">
    <ul class="nav-max">
      <li class="nav-min">
        <span class="min-title">技能讨论</span>
        <img class="min-img" src="./img/nav-item-3.png" alt="">
      </li>
      <li class="nav-min">
        <span class="min-title">校园生活</span>
        <img class="min-img" src="./img/nav-item-4.png" alt="">
      </li>
      <li class="nav-min">
        <span class="min-title">日常灌水</span>
        <img class="min-img" src="./img/nav-item-5.png" alt="">
      </li>
      <li class="nav-min">
        <span class="min-title">投资艺术</span>
        <img class="min-img" src="./img/nav-item-6.png" alt="">
      </li>
      <li class="nav-min">
        <span class="min-title">广而告之</span>
        <img class="min-img" src="./img/nav-item-7.png" alt="">
      </li>
      <li class="nav-min">
        <span class="min-title">吐槽反馈</span>
        <img class="min-img" src="./img/nav-item-8.png" alt="">
      </li>
      <li class="nav-min">
        <span class="min-title">任务心得</span>
        <img class="min-img" src="./img/nav-item-1.png" alt="">
      </li>
      <li class="nav-min">
        <span class="min-title">社会故事</span>
        <img class="min-img" src="./img/nav-item-2.png" alt="">
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'ComNav'
  };
</script>

<style scoped>
  .nav {
    margin: 0px 10px 10px 10px;
  }

  .nav-max {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    list-style: none;
  }

  .nav-min {
    width: 48.6%;
    height: 80px;
    background-color: #080808;
    color: white;
    border-radius: 5px;
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .min-title {
    font-size: 15px;
  }

  .min-img {
    padding: 10px;
    width: 70px;
    height: 70px;
  }
</style>
