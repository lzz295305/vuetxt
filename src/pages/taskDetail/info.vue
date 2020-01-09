<template>
    <div class="info">
      <ul>
        <li v-for="(item,index) in taskList" :key="index">
          <div class="info-describe">
            <h3>任务描述</h3>
            <ul>
              <li>
                <div class="describe-condition">
                  {{item.tiDescribe}}
                </div>
              </li>
            </ul>
            <div class="describe-explain">
              <div v-if="temp" class="describe-show">
                用你以前的快手号登录就行！自己每天观看小视屏还有钱拿！当天任务当天完成
              </div>
              <div class="describe-other" @click="show()">
                {{word}}
                <i class="iconfont icon-chaye"></i>
              </div>
            </div>
            <div class="describe-img">
              <ul>
                <li class="img-info">
                  <img src="http://lxy.xgl6.top/img/微信图片_20191218182257.png" alt="">
                </li>
                <li class="img-info">
                  <img src="http://lxy.xgl6.top/img/微信图片_20191218182257.png" alt="">
                </li>
              </ul>
            </div>
          </div>
          <div class="info-request">
            <h3>任务要求</h3>
            <p>{{item.tiRequire}}</p>
            <div class="describe-img">
              <ul>
                <li class="img-info">
                  <img src="http://lxy.xgl6.top/img/微信图片_20191218182257.png" alt="">
                </li>
                <li class="img-info">
                  <img src="http://lxy.xgl6.top/img/微信图片_20191218182257.png" alt="">
                </li>
              </ul>
            </div>
          </div>
          <div class="info-complete">
            <div class="complete-left">
              <ul>
                <li>
                  <img src="http://lxy.xgl6.top/img/微信图片_20191218182257.png" alt="">
                </li>
                <li>
                  <img src="http://lxy.xgl6.top/img/微信图片_20191218182257.png" alt="">
                </li>
              </ul>
            </div>
            <span class="complete-right">{{item.tiPageview}}位猎人完成</span>
          </div>
        </li>
      </ul>
    </div>
</template>

<script>
  import axios from 'axios';
  export default {
    name: 'TaskInfo',
    data() {
      return {
        temp: '',
        word: '展开',
        taskList: []
      };
    },
    created() {
      this.init();
    },
    methods: {
      show() {
        this.temp = !this.temp;
        this.word = this.temp ? '收起' : '展开';
      },
      init() {
        axios.get('http://192.168.0.57:8080/task/getTask/1').then(res => {
          this.taskList.push(res.data);
        }).catch(err => {
          console.log(err);
        });
      }
    }
  };
</script>

<style scoped>
   .info {
     margin-left: 5%;
     margin-bottom: 18%;
   }
   .info-describe {
     margin-bottom: 20px;
     font-size: 13px;
   }
   h3 {
     font-size: 15px;
     color: #080808;
     margin-bottom: 10px;
   }
   .describe-condition {
     line-height: 18px;
   }
  .describe-explain {
    margin-top: 10px;
  }
  .describe-show {
    line-height: 18px;
  }
  .describe-other {
    text-align: center;
    margin-top: 15px;
    color: #3F9EFA;
  }
  .describe-img>ul {
    margin-top: 15px;
    display: flex;
    flex-wrap: nowrap;
  }
  .img-info {
    margin-right: 10px;
  }
  .img-info>img {
    width: 50px;
    height: 60px;
    border: 1px solid red;
  }
  .info-request {
    line-height: 18px;
  }
  .info-complete {
    height: 60px;
    text-align: center;
    margin: 20px 5% 30% 5%;
    display: flex;
    justify-content: space-between;
  }
  .complete-left {
    line-height: 60px;
    border-radius: 50%;
  }
  .complete-left>ul {
    display: flex;
    align-items: center;
  }
  .complete-left>ul>li>img {
    width: 40px;
    height: 40px;
    line-height: 60px;
  }

  .complete-right {
    line-height: 60px;
  }
</style>
