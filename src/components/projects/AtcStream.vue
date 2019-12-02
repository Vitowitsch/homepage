<template>
  <div fluid id="main">
    <v-btn @click="start(0)" color="teal" dark depressed>Start Streaming</v-btn>

    <div v-for="(data, index) in myTransscript" v-bind:key="index">
      <v-layout column>
        <v-flex xs12>
          <v-card>
            <v-card-text>
              <div :id="genWSTag(index)"></div>
              <div :id="genWSTLTag(index)"></div>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
      <v-layout wrap>
        <v-flex xs12>
          <RollingTimeline
            :annotation="data.annotation"
            :callsign="data.call_sign"
            :speakerid="data.speaker_id"
            :index="index"
          ></RollingTimeline>
        </v-flex>
      </v-layout>
    </div>
  </div>
</template>

<script>
import WaveSurfer from "wavesurfer.js";
import TimelinePlugin from "wavesurfer.js/dist/plugin/wavesurfer.timeline.min.js";
import MinimapPlugin from "wavesurfer.js/dist/plugin/wavesurfer.minimap.min.js";
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
import axios from "axios";
import _ from "lodash";
import { EventBus } from "@/api/event-bus.js";

const ICONS = {
  info: "mdi-information",
  warning: "mdi-alert",
  error: "mdi-alert-circle",
  success: "mdi-check-circle"
};

export default {
  name: "Player",
  components: {
    WaveSurfer,
    TimelinePlugin,
    MinimapPlugin,
    RollingTimeline: () => import("./RollingTimeline")
  },
  computed: {
    timeline() {
      return this.events.slice().reverse();
    }
  },
  data: function() {
    return {
      wavesurfers: [],
      myTransscript: transscript,
      interval: null,
      events: [],
      input: null,
      nonce: 0,
      nextIndex: 1,
      containerkey: 0
    };
  },
  created() {},
  mounted() {
    var myThis = this;
    var audio = [
      dca_lc_1_464,
      dca_lc_2_1119,
      dca_lc_3_7,
      dca_lc_4_426,
      dca_lc_4_427,
      dfw_le_2_488,
      dfw_lw_2_370,
      dfw_lw_3_168
    ];
    _.forEach(myThis.myTransscript, function(i, index) {
      var wavesurfer = WaveSurfer.create({
        container: "#wave" + index,
        plugins: [
          // TimelinePlugin.create({
          //   container: "#wave-timeline" + index
          // })
          MinimapPlugin.create()
        ]
      });
      // wavesurfer.load(i.data_lake_file_location);
      console.log("importing " + audio[index]);
      wavesurfer.load(audio[index]);
      wavesurfer.on("ready", function() {
        console.log("is ready ");
      });
      wavesurfer.on("finish", function() {
        console.log("audio finsished");
        myThis.playNext();
      });
      myThis.wavesurfers.push(wavesurfer);
    });
  },
  methods: {
    createWaveSurfer() {},
    genWSTag(index) {
      return "wave" + index;
    },
    genWSTLTag(index) {
      return "wave-timeline" + index;
    },
    start(index) {
      this.containerkey++;
      console.log("playing " + index);
      this.wavesurfers[index].play();
      EventBus.$emit("play-features" + index);
    },
    playNext() {
      this.nonce++;
      this.start(this.nextIndex++);
    },
    addNext() {
      this.events.push({
        id: this.nonce++
      });
      this.input = null;
    },
    fetch() {
      var that = this;
      axios
        .get("https://tae24storage.blob.core.windows.net/acdn/filename")
        .then(function(response) {
          that.myTransscript = response;
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>

<style></style>