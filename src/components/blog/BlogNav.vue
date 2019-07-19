<template>
  <div>
    
    <li v-for="label in labels" class="nav__item" :key="label" @click="navBack">
      <v-btn depressed small color="error" >close</v-btn>
      <i class="nav__item--icon"></i>
    </li>
  </div>
</template>

<script>
export default {
  name: "blog-nav",
  props: {
    navs: Number,
    content: Object,
    filters: {
      type: Object,
      default: () => {}
    }
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
