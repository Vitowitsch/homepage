<template>
  <v-card class="mx-auto">
    <v-card-text class="py-0">
      <v-timeline dense>
        <v-slide-x-reverse-transition group hide-on-leave>
          <v-timeline-item
            v-for="(item,index) in items"
            :key="item.id"
            :color="item.color"
            small
            fill-dot
          >
            <v-alert :value="true" :color="item.color">
              <v-icon x-large>{{getIcon()}}</v-icon>
              {{text[index]}}
            </v-alert>
          </v-timeline-item>
        </v-slide-x-reverse-transition>
      </v-timeline>
    </v-card-text>
  </v-card>
</template>

<script>
import { EventBus } from "@/api/event-bus.js";
const COLORS = ["#607d8b", "#5c6bc0", "#26a69a"];
const ICONS = {
  info: "mdi-information",
  warning: "mdi-alert",
  error: "mdi-alert-circle",
  success: "mdi-check-circle"
};
export default {
  props: ["index", "annotation", "speakerid", "callsign"],
  mounted() {
    var myThis = this;
    EventBus.$on("play-features" + myThis.index, function() {
      if (myThis.interval == null) {
        myThis.start();
      } else {
        myThis.stop();
      }
    });
    this.text.push("SCRIPT: " + this.annotation);
    this.text.push("SPEAKER: " + this.speakerid);
    this.text.push("CALL-SIGN: " + this.callsign);
  },
  data: () => ({
    interval: null,
    items: [-1],
    text: [],
    nonce: 3,
    contentAdded: 0
  }),
  display(index) {
    console.log("index: " + index);
    return this.nonnce >= index;
  },
  beforeDestroy() {
    this.stop();
  },
  methods: {
    getText() {
      if (this.contentAdded === 0) {
        return this.annotation;
      } else if (this.contentAdded === 1) {
        return this.speakerid;
      } else if (this.contentAdded === 2) {
        return this.callsign;
      }
    },
    getIcon() {
      if (this.speakerid === "ATC") {
        return "home";
      } else {
        return "flight_land";
      }
    },
    addEvent() {
      if (this.contentAdded++ >= 3) {
        return;
      }
      let { color, icon } = this.genAlert();
      const previousColor = this.items[0].color;
      while (previousColor === color) {
        color = this.genColor();
      }
      this.items.unshift({
        id: this.nonce++,
        color,
        icon
      });
      if (this.nonce > 8) {
        this.items.pop();
      }
    },
    genAlert() {
      const color = this.genColor();
      return {
        color,
        icon: this.genIcon(color)
      };
    },
    genColor() {
      var col = COLORS[Math.floor(Math.random() * 3)];
      console.log("color: " + col);
      return col;
    },
    genIcon(color) {
      return ICONS[color];
    },
    start() {
      this.interval = setInterval(this.addEvent, 1000);
    },
    stop() {
      clearInterval(this.interval);
      this.interval = null;
    }
  }
};
</script>