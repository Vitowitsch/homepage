<template>
  <div id="skills">
    <project-headline>
      <template v-slot:header>Skills</template>
      Experience
    </project-headline>
    <v-layout>
      <figure style="border-style: dotted dashed solid double;">
        <v-chart :options="options" :init-options="initOptions" autoresize theme="light"/>
      </figure>
    </v-layout>
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
      initOptions: {
        renderer: "canvas"
      },
      minimized: true,
      options: {
        theme: "vintage",
        title: {
          text: "",
          show: true
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
                    gapWidth: 4
                  }
                }
              },
              {
                colorSaturation: [0.1, 0.4],
                itemStyle: {
                  normal: {
                    borderColorSaturation: 0.7,
                    gapWidth: 2,
                    borderWidth: 2
                  }
                }
              },
              {
                colorSaturation: [0.1, 0.4],
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
<style lang="stylus">
*, *::before, *::after {
  box-sizing: border-box;
}

figure {
  display: inline-block;
  position: relative;
  margin: 2em auto;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  box-shadow: 0 0 45px rgba(0, 0, 0, 0.2);
  padding: 1.5em 2em;
  min-width: calc(40vw + 4em);

  .echarts {
    // width 40vw
    width: 100%;
    min-width: 100vw;
    height: 600px;
  }
}

@media (min-width: 980px) {
  figure.half {
    padding: 1em 1.5em;
    min-width: calc(240px + 3em);

    .echarts {
      width: 28vw;
      min-width: 240px;
      height: 180px;
    }

    &:not(:last-child) {
      margin-right: 15px;
    }
  }
}

@media (max-width: 980px) {
  p {
    display: flex;
    justify-content: center;

    select {
      text-indent: calc(50% - 1em);
    }

    select, label {
      border: 1px solid #4fc08d;
      border-radius: 2em;
      background-color: #fff;
      color: #42b983;
      cursor: pointer;
      transition: opacity 0.3s;
    }

    button, input, select, label {
      flex: 1 0;
      margin: 0 0.5em;
      padding: 0;
      line-height: 2.4em;
      max-width: 40vw;
      border-radius: 2px;
      font-size: 0.8em;
    }

    select {
      -webkit-appearance: none;
    }

    input[type='checkbox'] {
      display: none;

      &:checked + label {
        background: #42b983;
        color: #fff;
      }
    }
  }

  figure {
    width: 100vw;
    margin: 1em auto;
    padding: 0 1em;
    border: none;
    border-radius: 0;
    box-shadow: none;

    .echarts {
      width: 100%;
      min-width: 0;
      height: 75vw;
    }
  }
}
</style>