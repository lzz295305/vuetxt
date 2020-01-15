<template>
  <div class="nav">
    <ul class="nav-max">
      <li class="nav-min" @click="toDiscussion(item.stNumber,item.stContent)" v-for="(item, index) in PostList" :key="index">
        <span class="min-title">{{item.stContent}}</span>
        <img class="min-img" :src="item.imageAddress" alt="">
      </li>
    </ul>
  </div>
</template>

<script>
  import axios from 'axios';
  export default {
    name: 'ComNav',
    data() {
      return {
        PostList: []
      };
    },
    created() {
      this.init();
    },
    methods: {
      toDiscussion(index, name) {
        this.$router.push({
          path: '/discussion',
          query: {
            id: index,
            title: name
          }
        });
      },
      init() {
        axios.get('http://api.qiandao.xgl6.top/pubSkill/getPostclassification').then(res => {
          this.PostList = res.data;
        }).catch(err => {
          console.log(err);
        });
      }
    }
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
    background-color: black;
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
