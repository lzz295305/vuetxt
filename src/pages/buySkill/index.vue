<template>
    <div class="buy-skill">
      <buy-header />
      <buy-main />
      <div class="task-footer">
        <div class="footer-item">
          <span>
            <a href="http://192.168.0.5:8080/pay/goAlipay">确认购买并支付</a>
          </span>
        </div>
      </div>
    </div>
</template>

<script>
  import BuyHeader from './header';
  import BuyMain from './main';
  export default {
    name: 'BuySkill',
    components: {
      BuyHeader,
      BuyMain
    },
    methods: {
    }
  };
</script>

<style scoped>
  .task-footer {
    z-index: 3;
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 8%;
    background-color: #FDE344;
    text-align: center;
    margin-top: 20px;
  }
  .footer-item>span {
    font-size: 15px;
    color: black;
    line-height: 55px;
  }
</style>
