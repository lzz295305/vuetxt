<template>
  <div>
    <div class="header-return">
      <div class="header-container">
        <router-link to="/editdata">
          <svg class="header-img-right" aria-hidden="true">
            <use xlink:href="#icon-guanbi"></use>
          </svg>
        </router-link>
        <span class="header-container-sapn">修改个性签名</span>
        <span class="header-right">完成</span>
      </div>
    </div>
    <div class="container">
      <textarea class="input" maxlength="40" v-model="desc"></textarea>
      <div class="input-span">
        <span>{{txtVal = desc.length}}/40</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SignaTure',
    data() {
      return {
        txtVal: 0,
        desc: ''
      };
    },
    created() {
    },
    mounted() {
    },
    methods: {
      descInput() {
        this.txtVal = this.desc.length;
      }
    }
  };
</script>

<style scoped>
  .header-return {
    padding-top: 21px;
    padding-left: 8px;
    height: 55px;
    text-align: center;
    /*border-bottom: #F8F8F8 2px solid;*/
  }
  .header-img-right {
    margin-left: 5px;
    font-weight: bold;
    color: black;
    float: left;
    width: 1.6em;
    height: 1.6em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
  .header-container {
    text-align: center;
    /*border: red 2px solid;*/
    height: 30px;
  }
  .header-container-sapn {
    font-size: 16px;
    color: black;
  }
  .header-right {
    float: right;
    color: #5d656b;
    margin: 3px 13px 0 0 ;
  }
  .container {
    margin: 0 auto;
    width: 90%;
    height: 110px;
    /*border: #5d656b 2px solid;*/
  }
  .input {
    font-size: 16px;
    height: 50px;
    line-height: 23px;
    padding-left: 3px;
    margin: 23px 0 0 2px;
    width: 99%;
    border-bottom: #F8F8F8 1px solid;
    word-break: break-all;
    word-wrap: break-word;
  }
  .input-span {
    margin: 8px;
    float: right;
  }
</style>
