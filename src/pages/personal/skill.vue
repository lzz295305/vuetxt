<template>
  <div>
    <svg class="icon" aria-hidden="true">
      <use xlink:href="#icon-star"></use>
    </svg>
    <div style="text-align: center;margin-top: -5px">
      <p style="font-size: 13px;color: black;margin-top: 15px">还等什么，快去发布一个技能吧！ ~</p>
      <div class="skill">
        <span>发布技能</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'skill'
  };
</script>

<style scoped>
  .icon {
    height: 130px;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
    text-align: center;
    margin: 0px 30px;
  }
  .skill {
    font-size: 14px;
    color: black;
    height: 30px;
    width: 220px;
    margin: 28px auto;
    line-height: 30px;
    border-radius: 30px;
    border: #FDE344 1px solid;
    background-color: #FDE344;
  }
</style>
