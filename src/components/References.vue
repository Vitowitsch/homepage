<template>
<div id="references">
    <project-headline>
      <template v-slot:header>Personal</template>
      References
    </project-headline>

<v-container>
 <v-card
    elevation="24"
    class="mx-auto"
  >
  
    <v-carousel 
      progress-color="blue"
      :show-arrows="true"
      
         :cycle="cycle"
         height="auto"
    >
    <v-carousel-item 
        v-for="r in refs" :key="r.text" 
      >
        <v-sheet style="padding-top:10px;"
        height="100%" color="white"
      >
      <div class="text-center">
        <div class="black--text"><i>{{r.text}}</i></div>
        <br>
           <div style="padding-bottom:50px;" class="black--text subtitle-1">
            by {{r.who}} - {{r.position}}
          </div>
           </div>
       </v-sheet>
      </v-carousel-item>
    </v-carousel>

  </v-card>
  </v-container>
    </div> 
</template>

<script>
export default {
  data: () => ({
    cycle: false,
    refs: [
      {
        text:
          "''I mentored Veit at University Würzburg. We worked together on a range of computer science and mathematics topics, including number theory, sensor nodes and embedded programming. Veit is a quick learner with a good grasp of theory. Working with him is fun and efficient, and even long sessions were enjoyable. He is also a good companion to have during hikes in the Scottish Highlands, and he plays a pretty good game of blind chess. I can recommend him as a team player and as a very skilled software creator.''",
        who: "Johannes Schindelin",
        position: "Maintainer of Git for Windows",
        color: "indigo"
      },
      {
        text:
          "''I had the opportunity to work with Veit on a project by Siemens Mobility developing software for High-speed and Intercity trains. The software we produced was highly valued. What stands out most in Veit's personality is his entrepreneurship and social competence. It was a pleasure working with him and I am looking forward to the next joint project.''",
        who: "Joao Teixeira Soares",
        position: "Executive Director at EULA IT GmbH",
        color: "warning",
      },
      {
        text:
          "''I worked together with Veit as Software Architect in a team of 8 colleagues and from the first day he impressed me with his curiosity and interest in new ways to solve problems while at the same time finishing things on time. In this sense he finds a good balance between quality and speed. I came to know Veit as a helping, reflective and open personality and I would like to work with him again but unfortunately our professional paths diverged. I thank Veit for having been such a good fellow and I am sure anybody working with him will experience the like.''",
        who: "Thomas Bertz",
        position: "IT Consultant, Software Developer and Trainer",
        color: "indigo",
      },
      {
        text:
          "''We only worked together during a 48-hour lasting Hackathon, therefore non-stop and under high pressure. I experienced Veit as an outstanding visionary mind, excelling in product ownership, development and team management. Due to his high technical expertise & enterpreneurial spirit, working with him is fun and efficient. Veit embodies the Vision, intellect & social skills which will be a great addition to every team that has the chance to work with him.''",
        who: "Julia Gottfriedsen",
        position: "ML Enthusiast | Environmental Engineer | Siemens AI Lab",
        color: "warning",
      },
      {
        text:
          "''I had very positive experience with Veit Wehner. \
          The software he developed greatly exceeded my expectations. \
          We value him for his broad experience as a software architect, \
          high amount of self-organization, and remarkable efficiency. \
          He is the kind of employee you could wish for. We were really lucky to get him.''",
        who: "Alexander Eck-Zimmer",
        position: "Head of Software Development, Siemens Graz",
        color: "indigo",
      },
      {
        text:
          "''I have been working with Veit during an intense 48-hour hackathon. Thanks to his enthusiasm, his devotion to quickly learn new technologies and his collaborative team play, we were able to develop an innovative prototype and win the hackathon. Ever since the event we have been in touch and Veit continues to develop the idea both on a technical level as well as finding potential partners. I can highly recommend working with Veit.''",
        who: "Johannes Oberreuter",
        position: "Physicist-turned-Data-Scientist",
        color: "warning",
      },
      {
        text:
          "''Veit is one of the keen learners I have worked with. His understanding of Software Architect concepts and implementation of the same is commendable. He is technology savvy and he can pick up new technologies on the fly. We worked briefly on one of the IOT projects and I was impressed with his ability to understand the new concepts of Machine Learning and quickly implement them. Veit has great attitude and keen intellectual appetite. I highly recommend him in the field of software and data science and machine learning.''",
        who: "Avinash Kumar",
        position: "Data Scientist at Siemens",
        color: "indigo",
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