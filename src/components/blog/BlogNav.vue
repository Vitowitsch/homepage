<template>
  <div>
    <!-- <sticky-header :scroll-y="scrollY" top="50"> -->
    <!-- <transition-group tag="menu" name="nav__item" class="nav__menu"> -->
    <v-btn v-for="label in labels" :key="label" icon small @click="navBack">
      <v-icon dark>navigate_before</v-icon>
    </v-btn>
    <!-- <li v-for="label in labels" class="nav__item" :key="label" @click="navBack">
          <i class="nav__item--icon"></i>
          <span class="nav__item--label">{{ label }}</span>
    </li>-->
    <!-- </transition-group> -->
    <!-- </sticky-header> -->
  </div>
</template>

<script>
import StickyHeader from "@/components/base/StickyHeader";
export default {
  name: "blog-nav",
  components: { StickyHeader },
  props: {
    navs: Number,
    content: Object,
    filters: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      scrollY: null
    };
  },
  mounted() {
    window.addEventListener("scroll", event => {
      console.log("scrolling");
      this.scrollY = Math.round(window.scrollY);
    });
  },
  computed: {
    labels() {
      return Object.keys(this.filters).map(
        filter => this.content.labels[filter]
      );
    }
  },
  methods: {
    navBack() {
      if (this.navs && !this.filters.author) this.$router.go(-1);
      else this.$router.push("/");
    }
  }
};
</script>
<style lang="scss">
@import "../../sass/app";
</style>
