<template>
  <div id="#cv">
    <project-headline>
      <template v-slot:header>CV</template>
      Curriculum Vitae
    </project-headline>
    <v-container align-content-start style="padding-left:0px;margin-left:px;">
      <!-- <v-row xs12 md10> -->
        <v-timeline :dense="$vuetify.breakpoint.xsOnly" >
          <v-timeline-item v-for="(item, i) in items" :key="i" color="blue-grey" small>
            <span :class="myYearStyle" v-text="item.year"></span>
            <h2 :class="myTitleStyle">{{item.title}}</h2>
            <div>{{item.text}}</div>
          </v-timeline-item>
        </v-timeline>
      <!-- </v-row> -->
    </v-container>
  </div>
</template>

<script>
const COLORS = ["#ced3db"];
export default {
  computed: {
    myYearStyle() {
      console.log("font size: " + this.$vuetify.breakpoint.name);
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 'subtitle-1 font-weight-bold black--text';
        default:
          return 'headline font-weight-bold black--text';
      }
    },
     myTitleStyle() {
      console.log("font size: " + this.$vuetify.breakpoint.name);
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 'subtitle-1 font-weight-light mb-3 teal--text';
        default:
          return 'headline font-weight-light mb-3 teal--text';
      }
    }
  },
  data: () => ({
    items: [
      {
        color: "#b6b7ba",
        year: "2007",
        text:
          "Master in Computer Science (major), Mathematics (minor) at University of Würzburg. Thesis about Remote-Control in Sensor-Networks.",
        title: "Master's Degree"
      },
      {
        color: "#b6b7ba",
        year: "2007 - 2009",
        title: "Software Developer at Siemens",
        text:
          'Distributed real-time service to annotate PDF documents - awarded as "Most-Popular-Feature with the Process-Optimization-Toolchain"'
      },
      {
        color: "#b6b7ba",
        year: "2009 - 2010",
        title: "Embedded-Developer at Siemens",
        text:
          "GPS based door opening recommendation system on an embedded Linux system."
      },
      {
        color: "#b6b7ba",
        year: "2011 - 2015",
        title:
          "Software Architect at Siemens: Embedded Systems, Connectivity, Web Applications",
        text:
          "Shore-side connectivity of a train-sided embedded linux system to analyze train data."
      },
      {
        color: "#b6b7ba",
        year: "2015 - 2017",
        title: "Software Architect at Siemens: Cloud and Big Data",
        text: "Migration of on-premise applications into Amazon Cloud."
      },
      {
        color: "#b6b7ba",
        year: "2017 - today",
        title: "Software Architect at Siemens: Blockchain",
        text: "Consulting on various Blockchain and ICO projects."
      },
      {
        color: "#b6b7ba",
        year: "2018 - today",
        title: "Intrapreneurs-Sponsorship at Siemens",
        text: "Foundation member of sponsorship project for Train-Safety"
      },
      {
        color: "#b6b7ba",
        year: "2017 - today",
        title:
          "Software-Architect at Siemens - Machine-Learning, Big Data and Cloud",
        text:
          "Integration of data-intense Matlab-Algorithms as Docker-Container into Amazon-AWS."
      }
    ],
    stages: [],
    interval: null,
    slidingIdx: 0
  })
};
</script>

