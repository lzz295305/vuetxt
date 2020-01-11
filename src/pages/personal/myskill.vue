<template>
  <div class="myskill-container">
    <div class="myskill-container1">
      <div class="container-center">
        <ul>
          <li v-for="(item, index) in skillList" :key="index">
            <div class="container-center-left">
              <img src="https://cdn.xgl6.top/img/7.jpg" alt="">
            </div>
            <div>
              <span class="container-span1">{{item.siTitle}}</span>
              <span style="float: right;font-size: 15px;color: red;margin-top: 3px">{{item.siMoney}}.00元/小时</span>
            </div>
            <div class="container-right">
              <div>
                <span style="float: left;margin-top: 2px">成单量：{{item.singularization}}</span>
              </div>
              <div class="container-icon">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-star"></use>
                </svg>
                <span style="padding-bottom: 15px">{{item.morningstarRating}}.0</span>
              </div>
              <div class="myskill-container2">
                <span class="myskill-container2-span1">接单中</span>
                <div class="myskill-container2-1">
                  <span class="myskill-container2-span2">暂停接单</span>
                  <span class="myskill-container2-span2">编辑技能</span>
                  <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-gengduo"></use>
                  </svg>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<!--我的技能-->
<script>
  import Axios from 'axios';
  export default {
    name: 'myskill',
    data() {
      return {
        skillList: []
      };
    },
    created() {
      this.skill();
    },
    methods: {
      skill() {
        Axios.get('http://192.168.0.5:8080/skills/selByUserid/yh10003').then(result => {
          this.skillList = result.data;
        });
      }
    }
  };
</script>

<style scoped>
  ul {
    height: 100%;
  }
  li{
    height: 100px;
    margin-bottom: 20px;
    border-bottom: #f8f8f8 2px solid;
  }
  .myskill-container {
    /*border: #4EBDFB 2px solid;*/
    margin: 0 auto;
    text-align: center;
  }
  .icon {
    /*height: 130px;*/
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
    text-align: center;
    margin-right: 5px;
    /*margin: 30% auto;*/
  }

/*  内容*/
  .myskill-container {
    margin-top: 30px;

  }

  .myskill-container1 {
    height: 71px;
    /*border: #4EBDFB 2px solid;*/
  }
  .container img {
    width: 7%;
    margin-left: 5px;
  }
  .container-icon {
    float: right;
    /*border: #4EBDFB 1px solid;*/
  }
  .icon {
    /*margin-top: 2px;*/
    width: 1.4em;
    height: 1.4em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
  .container-center {
    margin-top: 5px;
    height: 50px;
    padding: 3px;
  }
  .container-center-left img{
    float: left;
    width: 12%;
    border-radius: 6px;
  }
  .container-span1 {
    float: left;
    font-size: 16px;
    /*border: #4EBDFB 1px solid;*/
    margin-left:10px ;
    color: black;
    margin-bottom:8px;
  }
  .container-right {
    /*margin: 21px -79px 0 0;*/
    float: right;
    width: 85%;
    /*border: #5d656b 1px solid;*/
  }

  .myskill-container2 {
    float: left;
    margin: 15px 0 0 -53px;
    height: 40px;
    width: 119%;
    /*border: #FDE344 2px solid;*/
  }
  .myskill-container2-span1 {
    float: left;
    font-size: 13px;
    margin: 3px 55px 0 0;
    border-radius: 3px;
    color: white;
    padding: 3px;
    background-color:limegreen;
  }
  .myskill-container2-span2 {
    margin-right: 5px;
    padding: 4px 8px 4px 8px ;
    border-radius: 17px;
    font-size: 13px;
    border: #5d656b 0.5px solid;
  }
  .myskill-container2-1 {
    float: right;
  }
</style>
