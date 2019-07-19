<template>
    <v-layout justify-center>
      <v-flex xs12>
        <v-card xs12 id="cv">
          <project-headline>
            <template v-slot:header>CV</template>
            Curriculum Vitae
          </project-headline>
          <v-timeline dense>
            <v-slide-x-reverse-transition group hide-on-leave>
              <v-timeline-item v-for="(item, i) in items" :key="i" color="blue-grey" small>
                <div class="py-3">
                  <span :class="`headline font-weight-bold black--text`" v-text="item.year"></span>
                  <h2 :class="`headline font-weight-light mb-3 teal--text`">{{item.title}}</h2>
                  <div>{{item.text}}</div>
                </div>
              </v-timeline-item>
            </v-slide-x-reverse-transition>
          </v-timeline>
        </v-card>
      </v-flex>
    </v-layout>
</template>

<script>
const COLORS = ["#ced3db"];
export default {
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
          "Ein Siemens-Förderprojekt"
      },
      {
        color: "#b6b7ba",
        year: "2017 - today",
        title: "Software-Architect at Siemens - Machine-Learning and Cloud",
        text:
          "Integration of Matlab-Algorithms for Predictive-Maintenance as Docker-Container into Amazon-AWS."
      }
    ],
    stages: [],
    interval: null,
    slidingIdx: 0
  })
};
</script>
