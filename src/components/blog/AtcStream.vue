<template>
  <div>
    <v-btn @click="start(0)" color="teal" dark depressed>Start Streaming</v-btn>
    <div v-for="(item, index) in transscript" :key="index" :id="'wave' + index" ref="waveforms">
    </div>
    <div ref="timeline" id="timeline"></div>
    <!-- <RollingTimeline/> -->
  </div>  
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import WaveSurfer from 'wavesurfer.js';
import MinimapPlugin from 'wavesurfer.js/dist/plugins/minimap.esm.js';
import testaudio from "@/assets/audio/testaudio.wav";
import dca_lc_1_464 from "@/assets/audio/dca_lc_1_464.wav";
import dca_lc_2_1119 from "@/assets/audio/dca_lc_2_1119.wav";
import dca_lc_3_7 from "@/assets/audio/dca_lc_3_7.wav";
import dca_lc_4_426 from "@/assets/audio/dca_lc_4_426.wav";
import dca_lc_4_427 from "@/assets/audio/dca_lc_4_427.wav";
import dfw_le_2_488 from "@/assets/audio/dfw_le_2_488.wav";
import dfw_lw_2_370 from "@/assets/audio/dfw_lw_2_370.wav";
import dfw_lw_3_168 from "@/assets/audio/dfw_lw_3_168.wav";
import transscript from "@/assets/short-transscript.json";
// import RollingTimeline from './RollingTimeline.vue';

const waveforms = ref([]);
const timeline = ref(null);
const wavesurfers = ref([]);
const containerkey = ref(0);

onMounted(() => {
  transscript.forEach((item, index) => {
    const waveformContainer = document.querySelector(`#wave${index}`);
    if (waveformContainer) {
      const wavesurfer = WaveSurfer.create({
        container: waveformContainer,
        plugins: [
          // TimelinePlugin.create({
          //   container: "#wave-timeline" + index
          // })
          MinimapPlugin.create(),
        ],
      });
      wavesurfer.load(testaudio);
      wavesurfers.value.push(wavesurfer);
    } else {
      console.error(`Container #wave${index} not found`);
    }
  });
});

onBeforeUnmount(() => {
  wavesurfers.value.forEach(wavesurfer => wavesurfer.destroy());
});

function start(index) {
  containerkey.value++;
  console.log("playing " + index);
  wavesurfers.value[index].play();
  // Assuming EventBus is defined somewhere in your project
  EventBus.$emit("play-features" + index);
}
</script>

<style scoped>
#waveform {
  width: 100%;
  height: 128px;
}

#timeline {
  width: 100%;
  height: 30px;
}
</style>
