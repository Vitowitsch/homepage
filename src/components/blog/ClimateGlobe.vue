<template>
  <figure>
    <v-chart :options="options" :init-options="initOptions" autoresize />
  </figure>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import VChart from 'vue-echarts';

// Import ECharts modules
import { use } from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import { MapChart } from 'echarts/charts';
import { TitleComponent, TooltipComponent, GeoComponent, VisualMapComponent } from 'echarts/components';

// Import the world map from ECharts
import 'echarts/map/js/world';

// Register the necessary components
use([CanvasRenderer, MapChart, TitleComponent, TooltipComponent, GeoComponent, VisualMapComponent]);

const initOptions = ref({
  renderer: 'canvas',
});

const options = ref({
  title: {
    text: 'CO₂ tons per head',
    left: 'center',
    top: 'top',
  },
  tooltip: {
    trigger: 'item',
    formatter: function (params) {
      var value = (params.value + '').split('.');
      value =
        value[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, '$1,') +
        '.' +
        value[1];
      return params.seriesName + '<br/>' + params.name + ' : ' + value;
    },
  },
  toolbox: {
    show: true,
    orient: 'vertical',
    left: 'right',
    top: 'center',
  },
  visualMap: {
    min: 0,
    max: 20,
    text: ['High', 'Low'],
    realtime: false,
    calculable: true,
    inRange: {
      color: ['lightskyblue', 'yellow', 'orangered'],
    },
  },
  series: [
    {
      type: 'map',
      map: 'world',
      roam: false,
      itemStyle: {
        emphasis: { label: { show: true } },
      },
      data: [
        { name: 'Aruba', value: 8.408362638 },
        { name: 'Afghanistan', value: 0.299444991 },
        { name: 'Angola', value: 1.291328315 },
        // Add more data here...
      ],
    },
  ],
});
</script>

<style scoped lang="stylus">
figure {
  .echarts {
    height: 500px;
    width: 95%;
  }
}
</style>
