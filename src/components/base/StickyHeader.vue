<template>
  <div class="mapp">
    <div class="a-box" :style="myStyle">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: ["top", "scrollY"],
  data() {
    return {
      myStyle: {},
      originalTop: 0
    };
  },
  mounted() {
    this.originalTop = this.$el.getBoundingClientRect().top;
  },
  watch: {
    scrollY(newValue) {
      const rect = this.$el.getBoundingClientRect();
      const newTop = this.scrollY + +this.top - this.originalTop;
      console.log("scrolly " + this.scrollY);
      console.log("this top " + this.top);
      console.log("original top " + this.originalTop);
      console.log("new top " + newTop);
      if (newTop > 0) {
        this.$set(this.myStyle, "top", `${newTop}px`);
      } else {
        this.$delete(this.myStyle, "top");
      }
    }
  }
};
</script>

<style>
#mapp {
  height: 1200px;
}

.spacer {
  height: 80px;
}

.a-box {
  height: 5rem;
  width: 5rem;
  position: relative;
}
</style>
