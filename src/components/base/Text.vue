<template>
  <p class="base-text" :style="fontSiz">
    <slot/>
  </p>
</template>
<script>
export default {
  mounted() {
    console.log("breakpoint: " + JSON.stringify(this.$vuetify.breakpoint));
  },
  data: function() {
    return {
      fontSize: "font-size:50px;"
    };
  },
  methods: {},
  computed: {
    fontSiz() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return "12";
        default:
          return "font-size:16px;";
      }
    }
  }
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css?family=PT+Sans+Narrow");
@import url("https://fonts.googleapis.com/css?family=Oswald");
@import url("https://fonts.googleapis.com/css?family=PT+Sans:400,700");
.base-text {
  padding: 15px 0 5px 30px;
  /* border-left: 1px solid #e1e1e1; */
  margin-top: -10px;
  font-family: "PT Sans", sans-serif;
  font-weight: normal;
  font-style: normal;
  line-height: 2.1;
  color: black;
}
</style>