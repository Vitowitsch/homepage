<template>
  <section>
    <line-chart :data="data"/>
  </section>
</template>
<script>
import Vue from "vue";
import VueChartkick from "vue-chartkick";
import Chart from "chart.js";
Vue.use(VueChartkick, { adapter: Chart });

export default {
  data: function() {
    return {
      data: [
        { name: "Workout", data: { "2017-01-01": 3, "2017-01-02": 4 } },
        { name: "Call parents", data: { "2017-01-01": 5, "2017-01-02": 3 } }
      ]
    };
  }
};
</script>

 