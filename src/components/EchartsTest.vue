<template>
  <section id="about" class="hide-overflow">
    <v-layout white>
      <v-flex xs12 md6 pa-5>
        <base-heading class="info--text">About Me</base-heading>

        <base-text class="mb-5">
          Experienced Software Architect with a demonstrated history of working in software development.
          <br>Skilled in AI, Blockchain, Big Data, Agile Methods, Clean Code, Java, C++ and others.
          <br>Strong engineering professional with a M.Sc. focused in Computer Science and Mathematics from The Julius Maximilians University of Würzburg.
        </base-text>
        <v-chart :options="polar"/>
      </v-flex>
    </v-layout>
  </section>
</template>

<style>
/**
 * The default size is 600px×400px, for responsive charts
 * you may need to set percentage values as follows (also
 * don't forget to provide a size for the container).
 */
.echarts {
  width: 100%;
  height: 100%;
}
</style>

<script>
import ECharts from "vue-echarts";
import "echarts/lib/chart/line";
import "echarts/lib/component/polar";

export default {
  components: {
    "v-chart": ECharts
  },
  data() {
    let data = [];

    for (let i = 0; i <= 360; i++) {
      let t = (i / 180) * Math.PI;
      let r = Math.sin(2 * t) * Math.cos(2 * t);
      data.push([r, i]);
    }

    return {
      polar: {
        title: {
          text: "极坐标双数值轴"
        },
        legend: {
          data: ["line"]
        },
        polar: {
          center: ["50%", "54%"]
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross"
          }
        },
        angleAxis: {
          type: "value",
          startAngle: 0
        },
        radiusAxis: {
          min: 0
        },
        series: [
          {
            coordinateSystem: "polar",
            name: "line",
            type: "line",
            showSymbol: false,
            data: data
          }
        ],
        animationDuration: 2000
      }
    };
  }
};
</script>