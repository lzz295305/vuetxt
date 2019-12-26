<template>
    <div class="nav">
      <ul>
        <li class="nav-detail">
          <div class="task-info">
            <p class="info-first">(快手极速版) 秒赚4元</p>
            <p class="info-second">3.00</p>
            <p class="info-third">30经验 · 663人截止 · 30天后结束</p>
          </div>
        </li>
      </ul>
    </div>
</template>

<script>
  export default {
    name: 'taskNav'
  };
</script>

<style scoped>

  .nav-detail {
    margin-left: 5%;
    margin-right: 5%;
    color: white;
  }

  .task-info>p {
    padding-bottom: 20px;
  }

  .info-first {
    font-size: 15px;
  }

  .info-second {
    color: #FDE344;
    font-size: 25px;
  }
  .task-rule {
    background-color: #fff;
  }
</style>
