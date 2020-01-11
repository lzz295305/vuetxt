<template>
  <div class="delete">
    <div class="slider">
      <div class="content" @touchstart='touchStart' @touchmove='touchMove' @touchend='touchEnd' :style="deleteSlider">
        <!-- 插槽中放具体项目中需要内容 -->
        <slot name="img"></slot>
        <slot name="title"></slot>
        <slot name="price"></slot>
        <!-- 默认插槽 -->
        <slot></slot>
      </div>
      <div class="remove" ref='remove' @click="deleteLine">
        删除
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'deleteslider',
    props: ['index'],
    data() {
      return {
        startX: 0,
        endX: 0,
        moveX: 0,
        disX: 0,
        deleteSlider: ''
      };
    },
    methods: {
      touchStart(ev) {
        ev = ev || event;
        if (ev.touches.length === 1) {
          this.startX = ev.touches[0].clientX;
        }
      },
      touchMove(ev) {
        ev = ev || event;
        let wd = this.$refs.remove.offsetWidth;
        if (ev.touches.length === 1) {
          this.moveX = ev.touches[0].clientX;
          this.disX = this.startX - this.moveX;
          if (this.disX < 0 || this.disX === 0) {
            this.deleteSlider = 'transform:translateX(0px)';
          } else if (this.disX > 0) {
            this.deleteSlider = 'transform:translateX(-' + this.disX * 5 + ' px)';
            // 最大也只能等于删除按钮宽度
            if (this.disX * 5 >= wd) {
              this.deleteSlider = 'transform:translateX (- ' + wd + 'px)';
            }
          }
        }
      },
      touchEnd(ev) {
        ev = ev || event;
        let wd = this.$refs.remove.offsetWidth;
        if (ev.changedTouches.length === 1) {
          let endX = ev.changedTouches[0].clientX;
          this.disX = this.startX - endX;
          if ((this.disX * 5) < (wd / 2)) {
            this.deleteSlider = ' transform: translateX(0px) ';
          } else {
            this.deleteSlider = 'transform:translateX(-' + wd + 'px)';
          }
        }
      },
      deleteLine() {
        this.deleteSlider = 'transform:translateX(0px)';
        this.$emit('deleteLine');
      }
    }
  };
</script>

<style scoped>

</style>
