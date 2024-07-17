<template>
  <v-card class="mx-auto">
    <v-timeline dense>
      <v-slide-x-reverse-transition group hide-on-leave>
        <v-timeline-item
          v-for="(item, index) in items"
          :key="item.id"
          :color="item.color"
          small
          fill-dot
        >
          <v-alert :value="true" :color="item.color">
            <v-icon x-large>{{ item.icon }}</v-icon>
            {{ item.text }}
          </v-alert>
        </v-timeline-item>
      </v-slide-x-reverse-transition>
    </v-timeline>
  </v-card>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import emitter from '@/api/event-bus.js';

const COLORS = ["#607d8b", "#5c6bc0", "#26a69a"];
const ICONS = {
  info: "mdi-information",
  warning: "mdi-alert",
  error: "mdi-alert-circle",
  success: "mdi-check-circle",
};

const props = defineProps({
  index: Number,
  annotation: String,
  speakerid: String,
  callsign: String,
});

const items = ref([]);
const text = ref([]);
const interval = ref(null);
const nonce = ref(3);
const contentAdded = ref(0);

onMounted(() => {
  emitter.on(`play-features${props.index}`, () => {
    if (interval.value === null) {
      start();
    } else {
      stop();
    }
  });
  text.value.push(`SCRIPT: ${props.annotation}`);
  text.value.push(`SPEAKER: ${props.speakerid}`);
  text.value.push(`CALL-SIGN: ${props.callsign}`);
});

onBeforeUnmount(() => {
  stop();
  emitter.off(`play-features${props.index}`);
});

function getIcon(color) {
  switch (color) {
    case "#607d8b":
      return ICONS.info;
    case "#5c6bc0":
      return ICONS.warning;
    case "#26a69a":
      return ICONS.success;
    default:
      return ICONS.error;
  }
}

function addEvent() {
  if (contentAdded.value >= 3) {
    return;
  }
  const alert = genAlert();
  items.value.unshift({
    id: nonce.value++,
    ...alert,
    text: getText(),
  });
  if (items.value.length > 8) {
    items.value.pop();
  }
  contentAdded.value++;
}

function genAlert() {
  const color = genColor();
  return {
    color,
    icon: getIcon(color),
  };
}

function genColor() {
  return COLORS[Math.floor(Math.random() * COLORS.length)];
}

function getText() {
  if (contentAdded.value === 0) {
    return props.annotation;
  } else if (contentAdded.value === 1) {
    return props.speakerid;
  } else if (contentAdded.value === 2) {
    return props.callsign;
  }
}

function start() {
  interval.value = setInterval(addEvent, 1000);
}

function stop() {
  clearInterval(interval.value);
  interval.value = null;
}
</script>

<style scoped>
.v-card {
  max-width: 100%;
}

.v-alert {
  overflow-wrap: break-word;
}

.v-icon {
  vertical-align: middle;
}
</style>
