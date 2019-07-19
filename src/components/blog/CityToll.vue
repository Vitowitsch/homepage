<template>
  <article v-if="allReady" class="post">
    <section>
      <project-headline id="citytoll">
        <template v-slot:header>My Project</template>
        Pollution is in the air
      </project-headline>
      <base-text>
        <center>
          <div class="title">A smart city toll system (Cito) made second prizes.</div>
        </center>
        <p></p>The estimated number of premature deaths due to traffic related air pollution is estimated by 60 thousand per year in Germany.
        Even if this number is controversial, 65 German cities surpassed the pollution levels in 2017.
        If they all were fined by the EU, this would add up to millions of Euros.
        Traffic related pollution was one of the topics at the 2018’s
        <a
          style="color:black;font-style: italic;display: inline-block;"
          href="https://www.bmu.de/service/veranstaltungen/wettbewerbe/code4green"
        >Code4Green</a> - Hackathon at the ministry of environment.
        <p></p>It took place in the ministry itself that had been perfectly equipped with beds and all the stuff you need for a 24h hackathon. Even Minister Svenja Schulze herself showed up.
        <p></p>I was part of a team of seven. The idea for the final project only emerged the night before the hackathon:
        We built a smart system that calculates dynamic price for entering - or parking - in the city, based on the real time NOx level.
        It should also include a 24h hours forecast.
        <p>
          There were two options for billing: Either an IOT device on the car that would
          automatically deduct the payment from a prepaid account when it entered a city zone, or smart parking ticket vending machines.
        </p>Our hackathon IoT-prototype retrieves real time and forecast pollution data from our cloud service. The city toll is deducted from a prepaid account, based on GPS and NOx level. Users can see their account balance, a 24 hour pollution forecast with corresponding prices on their mobile phones.
        <p></p>We hope that this is a first step towards fewer cars and better air in cities. Cito can enforce legal pollution thresholds and bans on diesel cars - without tracking any personal GPS data.
        Let us turn the grey sky blue again!
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/rVUP4-I9TJ4"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <p></p>
        <v-img :src="require('@/assets/pics/code4green-device.jpg')"/>
      </base-text>
    </section>

    <footer class="post__footer">
      <vue-disqus
        v-if="commentsReady"
        shortname="vue-blog-demo"
        :key="post"
        :identifier="post"
        :url="`https://vue-blog-demo.netlify.com/read/${post}`"
      />
    </footer>
  </article>
</template>

 <script>
import VueDisqus from "vue-disqus/VueDisqus";
import { scrollTo, kebabify, prettyDate } from "@/utils/helpers";
export default {
  resource: "BlogPost",
  components: { VueDisqus },
  props: { post: String },
  data() {
    return {
      title: "City-Toll-System",
      author: "Veit Wehner",
      content: "",
      published: "2019-06-17T18:31:01Z",
      description: "",
      commentsReady: false,
      ready: true
    };
  },
  computed: {
    allReady() {
      return this.ready && "citytoll" === this.post;
    }
  },
  methods: {
    kebabify,
    prettyDate
  },
  mounted() {
    if (!this.post) {
      this.ready = true;
      return;
    }
    this.$getResource("post", this.post)
      .then(this.showComments)
      .then(() => {
        this.ready = true;
      });
  }
};
</script>

