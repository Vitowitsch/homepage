<template>
  <div>
    <v-btn @click="start(0)" color="teal" dark depressed>Start Streaming</v-btn>
    <div ref="waveform" id="waveform"></div>
    <div ref="timeline" id="timeline"></div>
    <!-- <RollingTimeline/> -->
  </div>  

</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import WaveSurfer from 'wavesurfer.js';
import TimelinePlugin from 'wavesurfer.js/dist/plugins/timeline.esm.js';
import MinimapPlugin from 'wavesurfer.js/dist/plugins/minimap.esm.js';
import testaudio from '@/assets/audio/testaudio.wav';
// import RollingTimeline from './RollingTimeline.vue';

const waveform = ref(null);
const timeline = ref(null);
let wavesurfer = null;
const containerkey = ref(0);
const wavesurfers = ref([]);

onMounted(() => {
  wavesurfer = WaveSurfer.create({
    container: waveform.value,
    waveColor: 'violet',
    progressColor: 'purple',
    plugins: [
      TimelinePlugin.create({
        container: timeline.value,
      }),
      MinimapPlugin.create(),
    ],
  });

  wavesurfer.load(testaudio);
  wavesurfers.value.push(wavesurfer);
});

onBeforeUnmount(() => {
  if (wavesurfer) {
    wavesurfer.destroy();
  }
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
