<template>
  <p class="base-text" :style="fontSiz">
    <slot />
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
      console.log("font size: " + this.$vuetify.breakpoint.name);
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return "font-size:18px;";
        default:
          return "font-size:14px;";
      }
    }
  }
};
</script>
