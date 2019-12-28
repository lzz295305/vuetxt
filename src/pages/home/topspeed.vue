<template>
    <div class="top-speed">
      <me-navbar class="header">
        <i class="iconfont icon-fanhui" slot="left" @click="back"></i>
        <i class="iconfont" slot="right" @click="ToMoreTask">更多任务</i>
        <spqn slot="title">超简单小任务</spqn>
      </me-navbar>
      <me-scroll>
        <div class="recommend">
          <div class="loading-container" v-if="!recommends.length">
            <me-loading inline/>
          </div>
          <ul class="recommend-list" v-else>
            <li
              class="recommend-item"
              v-for="(item, index) in recommends"
              :key="index"
            >
              <router-link
                class="recommend-link"
                :to="{name: 'home-taskDetail', params: {id: item.baseinfo.itemId}}"
              >
                <span class="recommend-pic"><img class="recommend-img" v-lazy="item.baseinfo.picUrlNew"></span>
                <span class="recommend-name">
                <p class="recommend-first-info">
                  (纯凯挑战)简单几秒钟赚钱
                </p>
                <p class="recommend-second-info">
                  ￥12.00元 · 120经验
                </p>
                <p class="recommend-third-info">
                  129人后截止 · 365天后结束
                </p>
              </span>
              </router-link>
            </li>
          </ul>
        </div>
      </me-scroll>
    </div>
</template>

<script>
  import MeNavbar from 'base/navbar';
  import {getHomeRecommend} from 'api/home';
  import MeLoading from 'base/loading';
  import MeScroll from 'base/scroll';
  export default {
    name: 'topSpeed',
    components: {
      MeNavbar,
      MeLoading,
      MeScroll
    },
    data() {
      return {
        visible: true,
        recommends: [],
        curPage: 1,
        totalPage: 1
      };
    },
    created() {
      // getHomeRecommend(1);
      this.getRecommend();
    },
    methods: {
      back() {
        this.$router.push('/home');
      },
      ToMoreTask() {
        this.$router.push('/moreTask');
      },
      goMoreTask() {
        this.$router.push('/moreTask');
      },
      // API
      update() {
        return this.getRecommend();
      },
      getRecommend() {
        if (this.curPage > this.totalPage) {
          return Promise.reject(new Error('没有更多了'));
        }
        return getHomeRecommend(this.curPage).then(data => {
          return new Promise(resolve => {
            if (data) {
              this.curPage++;
              this.totalPage = data.totalPage;
              this.recommends = this.recommends.concat(data.itemList);
              this.$emit('loaded', this.recommends);
              resolve();
            }
          });
        });
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import "~assets/scss/mixins";
  .top-speed {
  }
  .iconfont {
    font-size: 14px;
    color: #080808;
  }
  .recommend {
    margin-bottom: 8%;

    &-center {
       display: flex;
       justify-content: space-between;
       margin: 0 10px 10px 10px;
    }

    &-title {
      font-size: 20px;
    }
    a{
      color: #3F9EFA;
    }

    &-list {
     flex-wrap: wrap;
    }

    &-item {
     width: 100%;
     height: 100px;
     background-color: #fff;
     box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.12);
    }

    &-link {
      display: flex;
    }

    &-pic {
       position: relative;
       width: 30%;
       padding-top: 30%;
    }

    &-img {
       position: absolute;
       top: 20px;
       left: 20px;
       width: 50%;
       height: 50%;
       border-radius: 50%;
    }

    &-name {
       height: 100%;
       padding: 0 5px;
       margin-top: 20px;
       margin-bottom: 8px;
       line-height: 1.5;
       @include multiline-ellipsis();
    }

    &-first-info {
      font-size: 17px;
    }

    &-second-info{
      font-size: 15px;
    }
  }
</style>
