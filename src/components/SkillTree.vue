<template>
  <v-responsive :aspect-ratio="16/9" id="skills">
    <v-chart :options="options"/>
  </v-responsive>
</template>


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
          text: "",
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
<style>
.echarts {
  width: 100%;
  height: 100%;
}
</style>