<template>
  <div>
    <div class="header-return">
      <div class="header-container">
        <router-link to="/personalassets">
          <svg class="header-img-right" aria-hidden="true">
            <use xlink:href="#icon-fanhui" @click="back"></use>
          </svg>
        </router-link>
        <div class="issueskill-header-2">
          <span>提现为什么要实名认证？</span>
        </div>
        <div class="container">
          <span class="container-span">提现为什么要实名认证？</span>
          <p class="container-p">按照国家政策要求，提现要进行实名认证。给你带来不便敬请谅解。</p>
          <p class="container-p">1、依据法律法规及监管规定履行反洗钱义务及进行实名制管理</p>
          <p class="container-p1">（1）&nbsp;在您注册夜神猎人账户或使用夜神猎人提现服务费时，您需提供手机号码作为账户登录名。您需按照《非银行支付机构网络
            支付业务管理办法》的要求提供您的身份基本信息，包括姓名、国际、性别、职业、住址、联系方式以及有效身份证件的种类、号码和有限期限。如您不提供前述信息，可能
          无法注册夜神猎人账户或无法使用夜神猎人提现服务。根据相关法律法规的规定，您需通过身份基本信息多重交叉验证后方可进行账户内资产提现交易。身份基本信息外部兼职渠道
          包括政府部门数据库、商业银行信息系统及商业化数据库（支付宝提供服务）。如您不提供前述信息，可能无法使用需要通过多重交叉验证后方可使用的部分服务，但不影响您使用我们
          提供的其他服务；</p>
          <p class="container-p2">（2）我们需根据《支付机构反洗钱和反恐怖融资管理办法》等反洗钱相关法律法规及监管要求，提现您适时提供有效身份证件的彩色影件或照片
          以供我们核对并留存；如您不提供前述彩色影印件、照片或不同意我们留存，可能无法使用与监管要求相关的部分服务，但不影响您使用我们提供的其他服务。</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'real-name'
  };
</script>

<style scoped>
  .header {
    height: 100%;
    margin: 0 auto;
    width: 90%;
    /*border: 1px #4EBDFB solid;*/
  }
  .header-return {
    padding-top: 21px;
    padding-left: 8px;
    height: 50px;
    /*border: 2px red solid;*/
  }
  .header-img-right {
    margin: 2px auto;
    font-weight: bold;
    color: black;
    float: left;
    width: 1.35em;
    height: 1.35em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
  .issueskill-header-2 {
    color: black;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    padding-bottom: 15px;
    border-bottom: #F8F8F8 3px solid;
  }
  /*  内容*/
  .container {
    /*border: #5d656b 2px solid;*/
    margin: 30px 10px 0 10px;
  }
  .container-span {
    color: black;
    font-size: 16px;
    font-weight: bold;
  }
  .container-p {
    color: black;
    padding-top: 15px;
  }

  .container-p1 {
    color: black;
    padding-top: 15px;
    /*border: #5d656b 2px solid;*/
    line-height: 23px;
  }
  .container-p2 {
    color: black;
    padding-top: 15px;
    /*border: #5d656b 2px solid;*/
    line-height: 23px;
  }
</style>
