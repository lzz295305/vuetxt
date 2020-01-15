<template>
  <div>
    <me-navbar class="header" v-show="visible">
      <i class="iconfont icon-fanhui" slot="left" @click="back"></i>
      <span slot="title">{{title}}</span>
    </me-navbar>
    <me-scroll style="height: 100vh">
      <ul>
        <li>
          <van-sticky class="header-container1">
            <div class="header-container1-son">
              <div class="header-container1-2">
                <p style="color: white">来秀秀技能交易的那些事</p>
                <p style="color: white">182个帖子</p>
              </div>
              <div class="header-container1-3" @click="ToIssue">
                <a>发起讨论</a>
              </div>
            </div>
          </van-sticky>
          <div class="container2">
            <div class="container2-1">
              <span>5</span>
            </div>
            <div class="container2-2">
              <span>12月13日技能推荐TOP10</span>
            </div>
            <div class="container2-3">
              <div>
                <img src="https://cdn.xgl6.top/img/71b5665646cd43eb8d398d3fa2cad79.jpg" class="container2-3-img1">
                <span style="float: left;margin: 7px 10px 0 0;font-size: 13px;">猎人_243185</span>
                <span style="float: left;margin-top: 7px">2019-12</span>
              </div>
              <div class="container2-3-right">
                <img src="https://cdn.xgl6.top/img/9.9.png" class="container2-3-img2">
              </div>
            </div>
          </div>
        </li>
      </ul>
    </me-scroll>
  </div>
</template>

<script>
  import MeScroll from 'base/scroll/index.vue';
  import MeNavbar from 'base/navbar';
  export default {
    name: 'discussion',
    data() {
      return {
        visible: true,
        title: ''
      };
    },
    components: {
      MeScroll,
      MeNavbar
    },
    mounted() {
      // 事件监听滚动条
      window.addEventListener('scroll', this.watchScroll);
      this.init();
    },
    methods: {
      init() {
        // let id = this.$route.query.id;
        this.title = this.$route.query.title;
      },
      ToIssue() {
        this.$router.push({
          path: '/IssuePost',
          query: {
            id: this.title
          }
        });
      },
      show() {
        this.visible = true;
      },
      hide() {
        this.visible = false;
      },
      back() {
        this.$router.go(-1);
      },
      watchScroll() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        //  当滚动超过 50 时，实现吸顶效果
        if (scrollTop > 49) {
          this.navBarFixed = true;
        } else {
          this.navBarFixed = false;
        }
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import "~assets/scss/mixins";

  .header {
    &.mine-navbar {
       background-color: rgba(0, 0, 0, 0);
     }
    .iconfont {
      color: black;
    }
  }
  /*  头部*/
  .header-container1 {
    height: 190px;
    margin: -50px 0 0 0;
    text-align: center;
    /*border: red 2px solid;*/
    background-image: url("https://cdn.xgl6.top/img/7.jpg");
    background-size: 100%;
    background-repeat: no-repeat;
  }
  .header-container1-son {
    height: 170px;
    padding-top: 75px;
    /*border: #4EBDFB 2px solid;*/
  }
  .header-container1-2 {
    height: 40px;
    line-height: 17px;
    /*border: red 2px solid;*/
  }
  .header-container1-3 {
    margin: 23px auto;
    color: black;
    background-color: #FDE344;
    width: 100px;
    height: 30px;
    line-height: 30px;
    border-radius: 30px;
  }

  /*  内容*/
  .container2 {
    margin: 16px auto;
    width: 92%;
    text-align: center;
    border: #F8F8F8 2px solid;
    border-radius: 8px;
    height: 80px;
  }
  .container2-1 {
    height:18px;
    margin-top: 20px;
    padding: 3px;
    border-radius: 8px 0 0 8px;
    color: black;
    background-color: #D2d2d2;
    width: 30px;
    float: left;
    /*border: #5d656b 2px solid;*/
  }
  .container2-2 {
    margin: 21px 0 0 5px;
    float: left;
    color: black;
    font-size: 15px;
  }
  .container2-3 {
    width:60% ;
    /*border: #4EBDFB 2px solid;*/
    height: 30px;
    margin: 42px 0 0 35px;
  }
  .container2-3-img1{
    float: left;
    margin:2px 8px 0 0;
    width: 12%;
    border-radius: 50%;
  }
  .container2-3-img2 {
    float: right;
    height: 45px;
    width: 20%;
    margin: -26px -85px 0 0;
    border-radius: 5px;
  }
</style>
