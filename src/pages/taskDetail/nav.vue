<template>
    <div class="nav">
      <ul>
        <li class="nav-detail">
          <div class="task-info"  v-for="(item, index) in goodsList" :key="index">
            <p class="info-first">{{item.tiTitle}}</p>
            <p class="info-second">{{item.tiMoney}}</p>
            <p class="info-third">30经验 · 663人截止 · 30天后结束</p>
          </div>
        </li>
      </ul>
    </div>
</template>

<script>
  import axios from 'axios';

  export default {
    name: 'taskNav',
    data() {
      return {
        goodsList: []
      };
    },
    mounted() {
      this.init();
    },
    methods: {
      init() {
        axios.get('http://192.168.0.57:8080/task/getTask/1').then(result => {
          if (result.data !== null) {
            const goodsData = result.data;
            this.goodsList.push(goodsData);
          } else {
            console.log(1);
          }
        }).catch(err => {
          if (err) {
            console.log(err);
          }
        });
      }
    }
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
