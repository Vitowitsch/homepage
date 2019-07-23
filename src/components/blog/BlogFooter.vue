<template>
  <v-btn icon small @click="navBack">
    <v-icon dark>navigate_before</v-icon>
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
