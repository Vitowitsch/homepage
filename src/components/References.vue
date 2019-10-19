<template>
  <v-card text tile id="references">
    <v-window v-model="onboarding">
      <v-window-item v-for="r in refs" :key="r.text">
        <project-headline>
          <template v-slot:header>Personal</template>
          References
        </project-headline>
        <v-card light tile text>
          <v-layout align-center justify-center fill-height>
            <v-layout justify-space-around wrap>
              <v-flex xs12 md5>
                <reference-text>
                  <template v-slot:header>{{r.position}}</template>
                  {{r.who}}
                </reference-text>
              </v-flex>
              <v-flex xs12 md5>
                <div :class="`text--darken-1`" style="border: 1px dotted black; padding: 20px;">
                  <i>{{r.text}}</i>
                </div>
              </v-flex>
            </v-layout>
          </v-layout>
        </v-card>
      </v-window-item>
    </v-window>
    <v-card-actions class="justify-space-between">
      <v-btn text @click="prev">
        <v-icon x-large color="black darken-5">mdi-chevron-left</v-icon>
      </v-btn>
      <v-item-group v-model="onboarding" class="text-xs-center" mandatory>
        <!-- <v-item v-for="n in refs.length" :key="`btn-${n}`">
          <v-btn slot-scope="{ active, toggle }" :input-value="active" icon @click="toggle">
            <v-icon small>mdi-record</v-icon>
          </v-btn>
        </v-item>-->
      </v-item-group>
      <v-btn text @click="next">
        <v-icon x-large color="black">mdi-chevron-right</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    onboarding: 0,
    refs: [
      {
        text:
          "''I mentored Veit at University Würzburg. We worked together on a range of computer science and mathematics topics, including number theory, sensor nodes and embedded programming. Veit is a quick learner with a good grasp of theory. Working with him is fun and efficient, and even long sessions were enjoyable. He is also a good companion to have during hikes in the Scottish Highlands, and he plays a pretty good game of blind chess. I can recommend him as a team player and as a very skilled software creator.''",
        who: "Johannes Schindelin",
        position: "Maintainer of Git for Windows"
      },
      {
        text:
          "''I had the opportunity to work with Veit on a project by Siemens Mobility developing software for High-speed and Intercity trains. The software we produced was highly valued. What stands out most in Veit's personality is his entrepreneurship and social competence. It was a pleasure working with him and I am looking forward to the next joint project.''",
        who: "Joao Teixeira Soares",
        position: "Executive Director at EULA IT GmbH"
      },
      {
        text:
          "''I worked together with Veit as Software Architect in a team of 8 colleagues and from the first day he impressed me with his curiosity and interest in new ways to solve problems while at the same time finishing things on time. In this sense he finds a good balance between quality and speed. I came to know Veit as a helping, reflective and open personality and I would like to work with him again but unfortunately our professional paths diverged. I thank Veit for having been such a good fellow and I am sure anybody working with him will experience the like.''",
        who: "Thomas Bertz",
        position: "IT Consultant, Software Developer and Trainer"
      },
      {
        text:
          "''We only worked together during a 48-hour lasting Hackathon, therefore non-stop and under high pressure. I experienced Veit as an outstanding visionary mind, excelling in product ownership, development and team management. Due to his high technical expertise & enterpreneurial spirit, working with him is fun and efficient. Veit embodies the Vision, intellect & social skills which will be a great addition to every team that has the chance to work with him.''",
        who: "Julia Gottfriedsen",
        position: "ML Enthusiast | Environmental Engineer | Siemens AI Lab"
      },
      {
        text:
          "''I had very positive experience with Veit Wehner. He showed great amount of self-organization and integrity. \
          We value him for his broad experience with software development, his deep technical understanding, \
          remarkable efficiency, extraordinary team spirit and targeted communication. \
          He is the kind of employee you could wish for. I can recommend him very strongly.''",
        who: "Alexander Eck-Zimmer",
        position: "Head of Software Development, Siemens Graz"
      },
      {
        text:
          "''I have been working with Veit during an intense 48-hour hackathon. Thanks to his enthusiasm, his devotion to quickly learn new technologies and his collaborative team play, we were able to develop an innovative prototype and win the hackathon. Ever since the event we have been in touch and Veit continues to develop the idea both on a technical level as well as finding potential partners. I can highly recommend working with Veit.''",
        who: "Johannes Oberreuter",
        position: "Physicist-turned-Data-Scientist"
      },
      {
        text:
          "''Veit is one of the keen learners I have worked with. His understanding of Software Architect concepts and implementation of the same is commendable. He is technology savvy and he can pick up new technologies on the fly. We worked briefly on one of the IOT projects and I was impressed with his ability to understand the new concepts of Machine Learning and quickly implement them. Veit has great attitude and keen intellectual appetite. I highly recommend him in the field of software and data science and machine learning.''",
        who: "Avinash Kumar",
        position: "Data Scientist at Siemens"
      }
    ],
    projects: ["ai-hack1.jpg", "intrapreneurs.jpg", "futureland.png", "neo.png"]
  }),
  methods: {
    next() {
      this.onboarding =
        this.onboarding + 1 === this.refs.length ? 0 : this.onboarding + 1;
    },
    prev() {
      this.onboarding =
        this.onboarding - 1 < 0 ? this.refs.length - 1 : this.onboarding - 1;
    }
  }
};
</script>