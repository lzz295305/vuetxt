<template>
<div>
  <div class="header">
    <div class="header-return">
      <router-link to="/personaldata">
        <svg class="header-img-right" aria-hidden="true">
          <use xlink:href="#icon-fanhui"></use>
        </svg>
      </router-link>
    </div>
    <div class="header-container">
      <a href="https://cdn.xgl6.top/img/9ef126f301f12078f30713097fc4c1e.png">
        <img src="https://cdn.xgl6.top/img/9ef126f301f12078f30713097fc4c1e.png" alt="">
      </a>
      <div class="editdata-bianji">
        <van-cell is-link @click="showPopup">
          <svg class="editdata-img-bianji" aria-hidden="true">
            <use xlink:href="#icon-bianji"></use>
          </svg>
        </van-cell>
      </div>
    </div>
    <van-cell is-link @click="showPopup">
<!--      <router-link to="/666">-->
      <div class="editdata-container-span1" aria-hidden="true">
          <span>设置背景</span>
      </div>
    </van-cell>
<!--      </router-link>-->
  </div>
  <div class="editdata-container">
    <router-link to="/rename"><div class="editdata-container-4">
      <span class="editdata-container-left">昵称</span>
      <span class="editdata-container-right">
        <span>猎人1659098</span>
        <svg class="editdata-container-iconyou" aria-hidden="true">
          <use xlink:href="#icon-you"></use>
        </svg>
      </span>
    </div></router-link>
    <router-link to="/signature">
      <div class="editdata-container-4" style="border-bottom: 1.5px #FBFBFB solid">
      <span class="editdata-container-left">个性签名</span>
      <span class="editdata-container-right">
        <span>未填写</span>
        <svg class="editdata-container-iconyou" aria-hidden="true">
          <use xlink:href="#icon-you"></use>
        </svg>
      </span>
    </div>
    </router-link>
    <router-link to="/basic-information">
      <div class="editdata-container-4" >
        <span class="editdata-container-left">基本信息</span>
        <span  class="editdata-container-right">
          <svg class="editdata-container-iconyou" aria-hidden="true">
          <use xlink:href="#icon-you"></use>
          </svg>
        </span>
      </div>
    </router-link>
    <router-link to="/contact-way">
      <div class="editdata-container-4">
        <span class="editdata-container-left">联系方式</span>
        <span class="editdata-container-right">
          <svg class="editdata-container-iconyou" aria-hidden="true">
          <use xlink:href="#icon-you"></use>
          </svg>
        </span>
      </div>
    </router-link>
    <router-link to="/work-experience">
      <div class="editdata-container-4">
        <span class="editdata-container-left">教育/工作经历</span>
        <span class="editdata-container-right">
          <svg class="editdata-container-iconyou" aria-hidden="true">
            <use xlink:href="#icon-you"></use>
          </svg>
        </span>
        </div>
    </router-link>
  </div>
  <van-popup v-model="show" round position="bottom" :style="{ height: '20%' }">
    <div>
      <div class="header-span1">
        <span @click="getCompetence()">拍照</span>
      </div>
      <div class="header-span2">
        <span type="file">我的相册</span>
      </div>
      <div class="header-span3">
        <span>取消</span>
      </div>
    </div>
  </van-popup>
</div>
</template>

<script>
  export default {
    name: 'editdata',
    data() {
      return {
        show: false
      };
    },
    methods: {
      showPopup() {
        this.show = true;
      },
      getCompetence() {
        let _this = this;
        this.thisCancas = document.getElementById('canvasCamera');
        this.thisContext = this.thisCancas.getContext('2d');
        this.thisVideo = document.getElementById('videoCamera');
        // 旧版本浏览器可能根本不支持mediaDevices，我们首先设置一个空对象
        if (navigator.mediaDevices === undefined) {
          navigator.mediaDevices = {};
        }
        if (navigator.mediaDevices.getUserMedia === undefined) {
          navigator.mediaDevices.getUserMedia = function (constraints) {
            // 首先获取现存的getUserMedia(如果存在)
            let getUserMedia = navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.getUserMedia;
            if (!getUserMedia) {
              return Promise.reject(new Error('getUserMedia is not implemented in this browser'));
            }
            return new Promise(function (resolve, reject) {
              getUserMedia.call(navigator, constraints, resolve, reject);
            });
          };
        }
        let constraints = { audio: false, video: { width: this.videoWidth, height: this.videoHeight, transform: 'scaleX(-1)' } };
        navigator.mediaDevices.getUserMedia(constraints).then(function (stream) {
          // 旧的浏览器可能没有srcObject
          if ('srcObject' in _this.thisVideo) {
            _this.thisVideo.srcObject = stream;
          } else {
            // 避免在新的浏览器中使用它，因为它正在被弃用。
            _this.thisVideo.src = window.URL.createObjectURL(stream);
          }
          _this.thisVideo.onloadedmetadata = function (e) {
            _this.thisVideo.play();
          };
        }).catch(err => {
          console.log(err);
        });
      }
    }
  };
</script>

<style scoped>

  /*头部*/
  .header {
    background-image: linear-gradient(#35302C,#121011);
    height: 350px;
  }
  .header-return {
    padding-top: 21px;
    padding-left: 8px;
    height: 55px;
  }
  .header-container {
    margin: 0 auto;
    text-align: center;
  }
  .header-container img {
    width: 75px;
  }
  .header-img-right {
    font-weight: bold;
    color: white;
    float: left;
    width: 2.1em;
    height: 2.1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
  .editdata-img-bianji {
    background-color: #333;
    border-radius: 50%;
    margin: -25px 0 12px 48px ;
    width: 1.8em;
    height: 1.8em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
  .editdata-container-span1 {
    color: white;
    padding: 8px;
    border: 1.5px white solid;
    width: 100px;
    margin: 83px auto;
    text-align: center;
    border-radius: 30px;
  }
  .editdata-container-span1 span {
    font-size: 15px;
    color: white;
  }

/*  内容*/
  .editdata-container {
    width: 100%;
    height: 300px;
    /*border: yellow 2px solid;*/
  }
  .editdata-container-4 {
    height: 30px;
    margin: 13px 10px 10px 10px;
    color: black;
    /*border: 1px red solid;*/
  }
  .editdata-container-left {
    float: left;
    font-size: 15px;
  }
  .editdata-container-right {
    float: right;
    /*margin-left: 150px;*/
    font-size: 14px;
  }

  .editdata-container-iconyou {
    color: black;
    float: right;
    width: 1.0em;
    height: 1.0em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }

  /*  弹出层*/
  .header-span1 {
    height: 35px;
    font-size: 15px;
    color: black;
    margin: 16px auto;
    text-align: center;
    border-bottom: #F8F8F8 2px solid;
  }
  .header-span2 {
    height: 40px;
    font-size: 15px;
    color: black;
    margin: 11px auto;
    text-align: center;
    border-bottom: 4px #ccc solid;
  }
  .header-span3 {
    /*height: 40px;*/
    font-size: 15px;
    color: black;
    margin: 15px auto;
    text-align: center;
  }
</style>
