<template>
  <v-btn icon small @click="navBack">
    <v-icon dark>mdi-arrow-left</v-icon>
  </v-btn>
</template>

<script>
export default {
  name: "blog-footer",
  methods: {
    navBack() {
      this.$router.go(-1);
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../../sass/app";
</style>
