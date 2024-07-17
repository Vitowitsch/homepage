<template>
  <div>
    <v-btn @click="start(0)" color="teal" dark depressed>Start Streaming</v-btn>
    <div v-for="(item, index) in transscript" :key="index">
      <div :id="'wave' + index" ref="waveforms"></div>
      <div class="transcript">
        <p v-if="displayTranscripts[index] >= 3"><strong>Speaker ID:</strong> {{ item.speaker_id }}</p>
        <p v-if="displayTranscripts[index] >= 1"><strong>Script:</strong> {{ item.annotation }}</p>
        <p v-if="displayTranscripts[index] >= 2"><strong>Call Sign:</strong> {{ item.call_sign }}</p>
      </div>
    </div>
    <div ref="timeline" id="timeline"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import WaveSurfer from 'wavesurfer.js';
import MinimapPlugin from 'wavesurfer.js/dist/plugins/minimap.esm.js';
import dca_lc_1_464 from "@/assets/audio/dca_lc_1_464.wav";
import transscript from "@/assets/short-transscript.json";
import emitter from '@/api/event-bus.js';

const waveforms = ref([]);
const timeline = ref(null);
const wavesurfers = ref([]);
const containerkey = ref(0);
const displayTranscripts = ref(Array(transscript.length).fill(0));

const audioFiles = [
  dca_lc_1_464,
];

onMounted(() => {
  transscript.forEach((item, index) => {
    const waveformContainer = document.querySelector(`#wave${index}`);
    if (waveformContainer) {
      const wavesurfer = WaveSurfer.create({
        container: waveformContainer,
        plugins: [
          MinimapPlugin.create(),
        ],
      });
      wavesurfer.load(audioFiles[index]);
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
  emitter.emit("play-features" + index);
  showTranscriptsWithDelay(index);
}

function showTranscriptsWithDelay(index) {
  const delays = [1000, 2000, 4000]; 
  delays.forEach((delay, partIndex) => {
    setTimeout(() => {
      displayTranscripts.value[index] = partIndex + 1;
    }, delay);
  });
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

.transcript {
  margin-top: 10px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: #f9f9f9;
  color: #333; /* Darker text color for readability */
}

.transcript p {
  margin: 0;
  padding: 5px 0;
}
</style>
