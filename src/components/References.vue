<template>
  <v-container fluid id="references">
    <project-headline>
      <template v-slot:header>Personal</template>
      References
    </project-headline>
    <v-data-iterator
      :items="items"
      :items-per-page.sync="itemsPerPage"
      :page="page"
      hide-default-footer
      content-class="layout row wrap"
    >
      <template v-slot:default="props">
        <v-row>
          <v-col
            v-for="item in props.items"
            :key="item.name"
            cols="12"
            sm="6"
            md="4"
            lg="3"
          >
            <v-card>
              <v-card-title>{{ item.who }}</v-card-title>
              <v-card-subtitle>{{ item.pos }}</v-card-subtitle>
              <v-divider></v-divider>
              <v-card-text>{{ item.text }}</v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </template>

      <template v-slot:footer>
        <v-row class="mt-2" align="center" justify="center">
          <span class="mr-4 grey--text"
            >Page {{ page }} of {{ numberOfPages }}</span
          >
          <v-btn fab dark color="teal" class="mr-1" @click="formerPage">
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
          <v-btn fab dark color="teal" class="ml-1" @click="nextPage">
            <v-icon>mdi-chevron-right</v-icon>
          </v-btn>
        </v-row>
      </template>
    </v-data-iterator>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      page: 1,
      items: [
        {
          text: "''I had very positive experience with Veit Wehner. \
          The software he developed with much dedication greatly exceeded my expectations. \
          We value him for his broad experience as a software architect, \
          high amount of self-organization, and remarkable efficiency. \
          He is the kind of employee you could wish for. We were really lucky to get him.''",
          who: "Alexander Eck-Zimmer",
          pos: "Group Leader Software Development, Siemens Graz",
          color: "indigo",
        },
        {
          text: "''Now, this is going to be a list of praise and buzz words, since all of them are true. Veit is never satisfied to build a solution with just the technologies he has already mastered. But is constantly looking for the best set of tools and services to solve a problem. I am always taken aback by how fast he picks up new skills. At the same time he makes no compromise in quality. All components and modules he has built are implemented with an exceptional high grade of technical expertise.''",
          who: "Roman Zangl",
          pos: "Software Architect at Siemens",
          color: "indigo",
        },
        {
          text: "''Ich durfte mit Veit > 1 Jahr in seiner Rolle als Softwarearchitekt und Softwareentwickler zusammenarbeiten und kann bestätigen, dass Veit die Person mit den umfänglichsten Kenntnissen in der Kombination Frontend / Backend / SW Architektur / Cloud Anwendungen und Applikationsentwicklung ist, mit der ich bis jetzt zusammenarbeiten durfte. Speziell wenn man ein Produkt oder eine neue Applikation samt aller Hintergrundprozesse neu designen und entwickeln will, ist Veit der Richtige!''",
          who: "Thomas Moder",
          pos: "Data Scientist at Siemens",
          color: "indigo",
        },
        {
          text: "''Veit is an outstanding software architect choosimg the best tools for solving any problem in the field of software development. We worked together in the field of health monitoring and diagnosis over more then one year.''",
          who: "Johannes Simon",
          pos: "Team Leader Analytics at Siemens Mobility",
          color: "indigo",
        },
        {
          text: "''I mentored Veit at University Würzburg. We worked together on a range of computer science and mathematics topics, including number theory, sensor nodes and embedded programming. Veit is a quick learner with a good grasp of theory. Working with him is fun and efficient, and even long sessions were enjoyable. He is also a good companion to have during hikes in the Scottish Highlands, and he plays a pretty good game of blind chess. I can recommend him as a team player and as a very skilled software creator.''",
          who: "Johannes Schindelin",
          pos: "Maintainer of Git for Windows",
          color: "indigo",
        },
        {
          text: "''Veits Kombination aus Erfahrung und Neugierde sind ein Erfolgsrezept. Egal ob Data Science, Data Engineering, Database Design oder Softwarearchitektur, er hat für alle Probleme das richtige Werkzeug. Gemeinsam haben wir nachhaltige und effiziente Softwarelösungen designed, implementiert und betrieben. Unsere Wege haben sich bei einem Projekt bei Siemens Mobility zum Thema präventive Instandhaltung gekreuzt. Seine Vielseitigkeit konnte Veit dort sowohl bei Cloud und On-Premises Applikationen, als auch bei einer Frontendkomponente ausspielen. Nicht zuletzt wegen seiner Offenheit und Ehrlichkeit habe ich ihn als Kollegen stets sehr geschätzt. Während unserer mehrjährigen Zusammenarbeit durfte ich auch einiges von ihm lernen und kann stolz auf unsere Produkte zurückblicken.''",
          who: "David Reiter",
          pos: "Data Scientist at Siemens",
          color: "indigo",
        },
        {
          text: "''I had the pleasure of working with Veit for a brief period, but even in that short time, he made a lasting impression with his deep expertise in software architecture and development. Veit possesses a remarkable ability to define and solve complex problems, consistently finding the optimal balance between quality and speed. His approach to work is not only efficient and with his personality he is making collaboration seamless and enjoyable. I highly recommend Veit for any endeavors in his field of expertise as he is truly a valuable asset to any team.''",
          who: "Sasho Ristovski",
          pos: "DevOps Consultant",
          color: "indigo",
        },
        {
          text: "''Herr Wehner war Technical Lead für diverse Applikation [...]. Dank seiner hohen analytischen Fähigkeiten und der schnellen Auffassungsgabe kann er sich sehr schnell einfinden. Wir hatten eine rundum ausgezeichnete Zusammenarbeit, da er flexibel und engagiert ist, ausgesprochen sozialkompetent auftritt und fachlich hervorragende Leistungen erbracht hat. Er zeigt keine Angst vor Herausforderungen und ist bereit, bei schwierigen Aufgaben für Entspannung zu sorgen. [...] Wenn ich wieder einen Softwarearchitekten oder Lead Developer benötige, ist Veit meine erste Anlaufstelle.''",
          who: "Sven Trippner",
          pos: "Business Unit Manager",
          color: "indigo",
        },
        {
          text: "''Veit is one of the keen learners I have worked with. His understanding of Software Architect concepts and implementation of the same is commendable. He is technology savvy and he can pick up new technologies on the fly. We worked briefly on one of the IOT projects and I was impressed with his ability to understand the new concepts of Machine Learning and quickly implement them. Veit has great attitude and keen intellectual appetite. I highly recommend him in the field of software and data science and machine learning.''",
          who: "Avinash Kumar",
          pos: "Data Scientist at Siemens",
          color: "indigo",
        },
        {
          text: "''I worked together with Veit as Software Architect in a team of 8 colleagues and from the first day he impressed me with his curiosity and interest in new ways to solve problems while at the same time finishing things on time. In this sense he finds a good balance between quality and speed. I came to know Veit as a helping, reflective and open personality and I would like to work with him again but unfortunately our professional paths diverged. I thank Veit for having been such a good fellow and I am sure anybody working with him will experience the like.''",
          who: "Thomas Bertz",
          pos: "IT Consultant, Software Developer and Trainer",
          color: "indigo",
        },
        {
          text: "''We only worked together during a 48-hour lasting Hackathon, therefore non-stop and under high pressure. I experienced Veit as an outstanding visionary mind, excelling in product ownership, development and team management. Due to his high technical expertise & enterpreneurial spirit, working with him is fun and efficient. Veit embodies the Vision, intellect & social skills which will be a great addition to every team that has the chance to work with him.''",
          who: "Julia Gottfriedsen",
          pos: "Environmental Data Scientist",
          color: "warning",
        },
        {
          text: "''I have been working with Veit during an intense 48-hour hackathon. Thanks to his enthusiasm, his devotion to quickly learn new technologies and his collaborative team play, we were able to develop an innovative prototype and win the hackathon. Ever since the event we have been in touch and Veit continues to develop the idea both on a technical level as well as finding potential partners. I can highly recommend working with Veit.''",
          who: "Johannes Oberreuter",
          pos: "Physicist-turned-Data-Scientist",
          color: "warning",
        },
        {
          text: "''I had the opportunity to work with Veit on a project by Siemens Mobility developing software for High-speed and Intercity trains. The software we produced was highly valued. What stands out most in Veit's personality is his entrepreneurship and social competence. It was a pleasure working with him and I am looking forward to the next joint project.''",
          who: "Joao Teixeira Soares",
          pos: "Executive Director at EULA IT GmbH",
          color: "warning",
        },
        {
          text: "''Veit is curious, respectful with his teammates' opinions, and a pleasure to work with. During our brief collaboration, not only he proved to be knowledgeable and well organized, but also to be a proactive developer who enjoys to get hands on a product, solving problems and optimizing processes from day 1!''",
          who: "Alessandro Perico",
          pos: "Blockchain / DLT Governance | Consensus Architect",
          color: "indigo",
        },
      ],
    };
  },
  computed: {
    numberOfPages() {
      return Math.ceil(this.items.length / this.itemsPerPage);
    },
    itemsPerPage: {
      get: function () {
        switch (this.$vuetify.breakpoint.name) {
          case "xs":
            return 1;
          default:
            return 8;
        }
      },
      set: function (newValue) {
        // not needed  , but fixes a warning
      },
    },
  },
  methods: {
    nextPage() {
      if (this.page + 1 <= this.numberOfPages) this.page += 1;
    },
    formerPage() {
      if (this.page - 1 >= 1) this.page -= 1;
    },
  },
};
</script>
