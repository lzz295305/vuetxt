<template>
    <div class="division">
      <header class="g-header-container">
        <division-header />
      </header>
      <div class="g-content-container">
        <img src="./2.jpg" height="200px" width="100%"/>
        <span>专区</span>
      </div>
      <div class="g-main-container">
        <div class="g-content-main">
          <division-main />
        </div>
      </div>
    </div>
</template>

<script>
  import DivisionHeader from './header';
  import DivisionMain from './main';
  export default {
    name: 'SkillDivision',
    components: {
      DivisionHeader,
      DivisionMain
    }
  };
</script>

<style scoped>
  .division {

  }
  .g-content-container {
    padding-top: 0px;
    width: 100%;
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
  }
  .g-content-container>span {
    position: absolute;
    font-size: 30px;
    color: white;
  }
  .g-main-container {
    position: absolute;
    top: 180px;
    background-color: white;
    border-radius: 20px 20px 0 0;
    width: 100%;
    height: 75%;
    z-index: 3;
    overflow-y: scroll;
  }
  .g-content-main {
    margin: 20px 5% 20px 5%;
  }
</style>
