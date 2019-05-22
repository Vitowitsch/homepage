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
      fontSize: ""
    };
  },
  methods: {},
  computed: {
    fontSiz() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return "12";
        default:
          return "font-size:14px;";
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
  /* border-left: 1px solid #e1e1e1; */
  font-family: "PT Sans", sans-serif;
  font-weight: normal;
  font-style: normal;
  line-height: 1.5;
  color: black;
  text-align: left;
}
</style>