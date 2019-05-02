<template>
  <section id="cv" class="hide-overflow">
    <v-layout accent>
      <v-flex hidden-sm-and-down md6>
        <base-heading class="info--text">About Me</base-heading>
        <base-text class="mb-5">
        </base-text>
      </v-flex>
      <v-flex xs12 md6 primary text-xs-center pa-5 white--text>
        <base-heading>Curriculum Vitae</base-heading>
        <v-timeline>
          <v-slide-x-reverse-transition group hide-on-leave>
            <v-timeline-item v-for="(item, i) in stages" :key="i" :color="item.color" small>
              <template v-slot:opposite>
                <span :class="`headline font-weight-bold ${item.color}--text`" v-text="item.year"></span>
              </template>
              <div class="py-3">
                <h2 :class="`headline font-weight-light mb-3 ${item.color}--text`">{{item.title}}</h2>
                <div>{{item.text}}</div>
              </div>
            </v-timeline-item>
          </v-slide-x-reverse-transition>
        </v-timeline>
      </v-flex>
    </v-layout>
  </section>
</template>

<script>
const COLORS = ["#ced3db"];
export default {
  created() {
    this.start();
  },
  data: () => ({
    items: [],
    stages: [
      {
        color: "#b6b7ba",
        year: "2007",
        text:
          "Master in Computer Science (major), Mathematics (minor) at University of Würzburg. Thesis about Remote-Control in Sensor-Networks.",
        title: "Master of Computer-Science"
      },
      {
        color: "#b6b7ba",
        year: "2007 - 2009",
        text:
          'Distributed real-time service to annotate PDF documents - awarded as "Most-Popular-Feature with the Process-Optimization-Toolchain"',
        title: "Fullstack-Developer at Siemens"
      },
      {
        color: "#b6b7ba",
        year: "2009 - 2010",
        title: "Embedded-Developer at Siemens",
        text:
          "Automatic Selective Door Opening: GPS based door opening recommendation system on an embedded Linux system."
      },
      {
        color: "#b6b7ba",
        year: "2011 - 2015",
        title: "Embedded-Architect at Siemens",
        text:
          "Selective-Door-Opening. Requirement specification and system architecture of a train-to-shore connectivity. Shore-side connectivity of a train-sided embedded linux system to analyze train data. Design und implementation of a distributed web application."
      },
      {
        color: "#b6b7ba",
        year: "2015 - 2017",
        title: "Cloud-Architect at Siemens",
        text:
          "Migration of shore-side applications for the predictive maintenance into Amazon AWS."
      },
      {
        color: "#b6b7ba",
        year: "2017 - today",
        title: "Blockchain-Architect at Siemens",
        text: "Consulting on various Blockchain and ICO projects."
      },
      {
        color: "#b6b7ba",
        year: "2018 - today",
        title: "Intrapreneurs-Sponsorship at Siemens",
        text:
          "Foundation member of sponsorship project RailRadar at MO IT - a Train-Safety invention."
      },
      {
        color: "#b6b7ba",
        year: "2017 - today",
        title: "Software-Architect at Siemens - Machine-Learning and Cloud",
        text:
          "Integration of Matlab-Algorithms for Predictive-Maintenance as Docker-Container into Amazon-AWS."
      }
    ],
    interval: null,
    slidingIdx: 0
  }),
  methods: {
    addEvent() {
      if (this.slidingIdx < this.stages.length) {
        this.items.unshift(this.stages[this.slidingIdx++]);
      }
    },
    genAlert() {
      const color = this.genColor();
      return {
        color
      };
    },
    genColor() {
      return COLORS[Math.floor(Math.random() * 3)];
    },
    start() {
      this.interval = setInterval(this.addEvent, 2000);
    },
    stop() {
      clearInterval(this.interval);
      this.interval = null;
    }
  }
};
</script>
