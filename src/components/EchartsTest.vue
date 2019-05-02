<template>
  <v-layout wrap>
    <v-flex xs12 md6 dark>
      <base-heading>Technical Skills</base-heading>
      <base-text class="mb-5"></base-text>
      <v-chart :options="options"/>
    </v-flex>
  </v-layout>
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
          text: "ECsadfdskjghdlgjkhdfgjkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkharts",
          show: true
        },
        series: [
          {
            name: "option",
            type: "treemap",
            visibleMin: 100,
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