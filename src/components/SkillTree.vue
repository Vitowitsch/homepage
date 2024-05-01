<template>
  <div id="skills">
    <v-container>
      <v-row>
        <v-col cols="12">
          <project-headline>
            <template v-slot:header>Skills</template>
            Experience
          </project-headline>
          <v-chart
            :options="options"
            :init-options="initOptions"
            autoresize
            theme="light"
          />
        </v-col>
      </v-row>
    </v-container>
  </div>
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
        name: path,
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
      value: source.$count,
    });
  }
}

export default {
  components: {
    "v-chart": ECharts,
  },
  data: function () {
    var data = [];
    convert(treemap, data, "");
    return {
      initOptions: {
        renderer: "canvas",
      },
      minimized: true,
      options: {
        theme: "vintage",
        title: {
          text: "",
          show: true,
        },
        series: [
          {
            roam: false,
            name: "option",
            type: "treemap",
            visibleMin: 100,
            data: data.children,
            leafDepth: 1,
            levels: [
              {
                colorSaturation: [0.1, 0.4],
                itemStyle: {
                  normal: {
                    borderColor: "#555",
                    borderWidth: 4,
                    gapWidth: 4,
                  },
                },
              },
              {
                colorSaturation: [0.1, 0.4],
                itemStyle: {
                  normal: {
                    borderColorSaturation: 0.7,
                    gapWidth: 2,
                    borderWidth: 2,
                  },
                },
              },
              {
                colorSaturation: [0.1, 0.4],
                itemStyle: {
                  normal: {
                    borderColorSaturation: 0.6,
                    gapWidth: 1,
                  },
                },
              },
              {
                colorSaturation: [0.3, 0.5],
              },
            ],
          },
        ],
      },
    };
  },
};
</script>

<style lang="stylus" scoped>
.echarts {
  min-height: 300px;
  min-width: 200px;
  width: 100%;
  height: 100%;
}
</style>
