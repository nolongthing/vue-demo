<template>
  <div class="container">
    <div ref="boxContent" class="items">
      <div v-for="(itemArr,index) in renderArr" :key="`itemArr${index}`" class="row">
        <span v-for="(item,i) in itemArr" :key="`item${i}`" :class="{box:true,isBlack: item===1 }"></span>
      </div>
    </div>
  </div>
</template>

<script>
let timer, speedTimer;
export default {
  data() {
    return {
      renderArr: [],
      curBottom: 100,
      speed: 50
    };
  },
  components: {},
  methods: {
    pageInt: function() {
      for (var i = 0; i <= 5; i++) {
        this.creatArr();
      }
    },
    /* 加速函数 */
    setSpeed: function() {
      speedTimer = setInterval(() => {
        if (this.speed >= 5) {
          this.speed = this.speed - 0.6;
        } else {
          clearInterval(speedTimer);
        }
      }, 1000);
    },
    /* dom运动 */
    creatSpeed: function() {
      timer = setInterval(() => {
        this.curBottom = this.curBottom - 0.5;
        if (this.$refs.boxContent) {
          this.$refs.boxContent.style.bottom = `${this.curBottom}%`;
        }
        this.repice();
      }, this.speed);
    },
    repice: function() {
      if (this.$refs.boxContent && this.$refs.boxContent.offsetTop >= 0) {
        clearInterval(timer);
        this.renderArr = this.renderArr.splice(0, this.renderArr.length - 1);
        this.$refs.boxContent.style.bottom = `0%`;
        this.curBottom = 0;
        this.creatArr();
        this.creatSpeed();
      }
    },
    creatArr: function() {
      const a = Math.floor(Math.random() * 4);
      const tempArr = new Array(4).fill(0);
      tempArr[a] = 1;

      this.renderArr.unshift(tempArr);
    }
  },
  mounted() {
    this.pageInt();
    this.creatSpeed();
    this.setSpeed();
  }
};
</script>

<style lang="less" scoped>
.container {
  height: 100%;
  width: 100%;
  overflow: hidden;
  position: relative;
  .items {
    position: absolute;
    height: 120%;
    width: 100%;
    bottom: 100%;
  }
  .row {
    width: 100%;
    height: 16.666666666667%;
    display: flex;
    .box {
      width: 25%;
      height: 100%;
      box-sizing: border-box;
      border: 1px solid #eee;
      &.isBlack {
        background-color: #333;
      }
    }
  }
}
</style>
