<template>
  <section id="skillmap">
    <v-layout white>
      <v-flex xs3>
        <base-heading class="info--text">About Me</base-heading>
        <base-text class="mb-5">
          Experienced Software Architect with a demonstrated history of working in software development.
          <br>Skilled in AI, Blockchain, Big Data, Agile Methods, Clean Code, Java, C++ and others.
          <br>Strong engineering professional with a M.Sc. focused in Computer Science and Mathematics from The Julius Maximilians University of Würzburg.
        </base-text>
        <v-chart :options="options"/>
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
import treemap from "@/assets/treemap.json";
import "echarts/lib/chart/treemap";

function convert(source, target, basePath) {
  for (var key in source) {
    var path = basePath ? basePath + "." + key : key;
    if (key.match(/^\$/)) {
    } else {
      target.children = target.children || [];
      var idx = path.lastIndexOf(".") + 1;
      if (-1 != idx) {
        path = path.substring(idx);
      }
      var child = {
        name: path
      };

      console.log(child.name);
      target.children.push(child);
      convert(source[key], child, path);
    }
  }

  if (!target.children) {
    target.value = source.$count || 1;
  } else {
    target.children.push({
      name: basePath,
      value: source.$count
    });
  }
}

export default {
  components: {
    "v-chart": ECharts
  },
  data: function() {
    var data = [];
    convert(treemap, data, "");

    return {
      options: {
        title: {
          text: "ECharts 配置项查询分布",
          subtext: "2016/04",
          left: "leafDepth"
        },
        tooltip: {},
        series: [
          {
            name: "option",
            type: "treemap",
            visibleMin: 300,
            data: data.children,
            leafDepth: 1,
            levels: [
              {
                itemStyle: {
                  normal: {
                    borderColor: "#555",
                    borderWidth: 4,
                    gapWidth: 4
                  }
                }
              },
              {
                colorSaturation: [0.3, 0.6],
                itemStyle: {
                  normal: {
                    borderColorSaturation: 0.7,
                    gapWidth: 2,
                    borderWidth: 2
                  }
                }
              },
              {
                colorSaturation: [0.3, 0.5],
                itemStyle: {
                  normal: {
                    borderColorSaturation: 0.6,
                    gapWidth: 1
                  }
                }
              },
              {
                colorSaturation: [0.3, 0.5]
              }
            ]
          }
        ]
      }
    };
  }
};
</script>