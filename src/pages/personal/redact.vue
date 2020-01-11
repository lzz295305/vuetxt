<template>
<div>
    <div class="header-return">
      <div class="header-container">
        <router-link to="/personal">
          <svg class="header-img-right" aria-hidden="true">
            <use xlink:href="#icon-fanhui"></use>
          </svg>
        </router-link>
        <span class="header-container-sapn">编辑小组件</span>
        <span class="header-right">完成</span>
      </div>
    </div>
<!--    <me-scroll style="height: 100vh">-->
      <div class="container">
        <van-swipe-cell :before-close="beforeClose" id="container-swipercell">
          <template slot="left">
            <van-button square type="primary" text="选择" />
          </template>
          <div class="container-word">
            <span>我发布的技能</span>
            <svg class="icon-right" aria-hidden="true">
              <use xlink:href="#icon-menu-fill"></use>
            </svg>
          </div>
          <template slot="right">
            <van-button square type="danger" text="删除" @click="del" />
          </template>
        </van-swipe-cell>
        <van-swipe-cell :before-close="beforeClose" id="container-swipercell">
          <template slot="left">
            <van-button square type="primary" text="选择" />
          </template>
          <div class="container-word">
            <span>我在做的任务</span>
            <svg class="icon-right" aria-hidden="true">
              <use xlink:href="#icon-menu-fill"></use>
            </svg>
          </div>
          <template slot="right">
            <van-button square type="danger" text="删除" />
          </template>
        </van-swipe-cell>
        <van-swipe-cell :before-close="beforeClose" id="container-swipercell">
          <template slot="left">
            <van-button square type="primary" text="选择" />
          </template>
          <div style="font-size: 16px;color: black;line-height: 43px;padding-left: 15px;">
            <span>我发布的任务</span>
            <svg class="icon-right" aria-hidden="true">
              <use xlink:href="#icon-menu-fill"></use>
            </svg>
          </div>
          <template slot="right">
            <van-button square type="danger" text="删除" />
          </template>
        </van-swipe-cell>
        <van-swipe-cell :before-close="beforeClose" id="container-swipercell">
          <template slot="left">
            <van-button square type="primary" text="选择" />
          </template>
          <div class="container-word">
            <span>我购买的技能</span>
            <svg class="icon-right" aria-hidden="true">
              <use xlink:href="#icon-menu-fill"></use>
            </svg>
          </div>
          <template slot="right">
            <van-button square type="danger" text="删除" />
          </template>
        </van-swipe-cell>
        <van-swipe-cell :before-close="beforeClose" id="container-swipercell">
          <template slot="left">
            <van-button square type="primary" text="选择" />
          </template>
          <div class="container-word">
            <span>猎人成长体系</span>
            <svg class="icon-right" aria-hidden="true">
              <use xlink:href="#icon-menu-fill"></use>
            </svg>
          </div>
          <template slot="right">
            <van-button square type="danger" text="删除" />
          </template>
        </van-swipe-cell>
        <van-swipe-cell :before-close="beforeClose" style="">
          <template slot="left">
            <van-button square type="primary" text="选择" />
          </template>
          <div class="container-word">
            <span>猎人信用积分</span>
            <svg class="icon-right" aria-hidden="true">
              <use xlink:href="#icon-menu-fill"></use>
            </svg>
          </div>
          <template slot="right">
            <van-button square type="danger" text="删除" />
          </template>
        </van-swipe-cell>
        <van-swipe-cell :before-close="beforeClose" id="container-swipercell">
          <template slot="left">
            <van-button square type="primary" text="选择" />
          </template>
          <div class="container-word">
            <span>其他功能</span>
            <svg class="icon-right" aria-hidden="true">
              <use xlink:href="#icon-menu-fill"></use>
            </svg>
          </div>
          <template slot="right">
            <van-button square type="danger" text="删除" />
          </template>
        </van-swipe-cell>
      </div>
<!--    </me-scroll>-->
</div>
</template>

<script>
  import MeScroll from 'base/scroll/index.vue';
  import DeleteSlider from '../personal/deleteslider';
  import {Dialog} from 'vant';
  export default {
    name: 'redact',
    components: {
      DeleteSlider,
      MeScroll
    },
    methods: {
      // position 为关闭时点击的位置
      // instance 为对应的 SwipeCell 实例
      beforeClose({position, instance}) {
        switch (position) {
        case 'left':
        case 'cell':
        case 'outside':
          instance.close();
          break;
        case 'right':
          Dialog.confirm({
            message: '确定删除吗？'
          }).then(() => {
            instance.close();
          });
          break;
        }
      }
    }
  };
</script>

<style scoped>

  .header-return {
    margin: 10px auto;
    padding-top: 21px;
    padding-left: 8px;
    height: 55px;
    text-align: center;
    border-bottom: #F8F8F8 2px solid;
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
    font-size: 16.5px;
    color: black;
  }
  .header-right {
    float: right;
    color: #5d656b;
    margin: 3px 13px 0 0 ;
  }
/*  内容*/
  .container {
    /*border: #4EBDFB 2px solid;*/
    height: 305px;
  }

  #container-swipercell {
    height: 43px;
    border-bottom:#f8f8f8 2px solid;
  }
  .icon-right {
    margin:8px;
    font-weight: bold;
    /*line-height: 43px;*/
    color: #5d656b;
    float: right;
    width: 1.7em;
    height: 1.7em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
  .container-word {
    font-size: 16px;
    color: black;
    line-height: 43px;
    padding-left: 17px;
  }
</style>
