<template>
  <article v-if="allReady" class="post">
    <header class="post__header">
      <h2 class="post__title">{{ title }}</h2>
      <h3 class="post__meta">
        <span class="post__sep"></span>
        <time>{{ prettyDate(published) }}</time>
      </h3>
      <project-headline id="carbon" theme="secondary">
        <template v-slot:header>My Project</template>
        Speech Recognition
      </project-headline>
    </header>
    <section class="post__body rte">
      <blockquote class="post__subtitle">
        <center>
          <div class="title">A suite of Machine Learning models for aiding air traffic controllers.</div>
        </center>
      </blockquote>
      <p></p>
      <AtcStream />
    “Alexa! Is the gangway free?”
-“Sorry I am having trouble understanding you right now”.
 <p></p>
Speech Recognition often fails to understand what was said - especially in a noisy environment. Therefore, there are many business cases not yet working.
 <p></p>
At this year's Industry@AI, organized by the Siemens AI@Lab in Munich and Mindsphere© , we implemented a suite of Machine Learning models for a very noisy environment: Air-to-Ground communication (ATC) for planes.
The objective was to identify ground station, aircraft, pilot, and the landing clearance from the audio stream with as little delay as possible. Automated extraction of ATC data can be used for statistical analysis but also to improve aviation security.
<p></p>
The main difficulties in this project were the background noise and the very specific vocabulary. Speech recognition services like Microsoft's Cortana, Apple’s Siri and Google’s Speech-to-Text gave us a maximum of only 40 percent accuracy in that special setup - and they cannot be improved through Transfer Learning.
 
Therefore we had to train our own neural networks from scratch, based on a dataset of 52 hours of air-traffic communication.
Some features were extracted directly from speech. For others we had to first extract the text from the audio before we applying Natural Language Processing (NLP) on the text.
<p></p>
After only two nights of Transfer Learning with DeepSpeech2 on the ATC data, our results surpassed Microsoft’s Speech Recognition, with an accuracy of 80 percent. We were able to identify the speaker based on voice and text data. We could also extract the aircraft and landing clearance by either NLP or Voice-Recognition with a delay of only 30 seconds.
 
Our solution was awarded with the prize for „Technical Excellence“. Further categories were „Best Pitch und Business-Value“ and „Innovation“ without differential ranking.
 <p></p>
For a fully functional system it might take a few more years of development and training. Within the few days many teams created useful prototypes. After the event, I was a bit exhausted but also pleased with what we had learned and achieved.
 <p></p>
Thanks for making this possible to my team, Siemens AI-Lab and Siemens Mindsphere©.

 <p />
  <iframe width="100%" height="315" src="https://www.youtube.com/embed/iZQyoFR9wWI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <p></p>

       <p />
<iframe width="100%" height="315" src="https://www.youtube.com/embed/GcB6vkXox5k" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <p></p>


    </section>
  </article>
</template>

 <script>
import VueDisqus from "vue-disqus/VueDisqus";
import { scrollTo, kebabify, prettyDate } from "@/utils/helpers";
import AtcStream from "@/components/projects/AtcStream";
export default {
  resource: "BlogPost",
  components: { VueDisqus, AtcStream },
  props: { post: String },
  data() {
    return {
      panel: [false],
      title: "",
      author: "Veit Wehner",
      content: "",
      published: "2019-06-17T18:31:01Z",
      description:
        "A suite of Machine Learning models for aiding air traffic controllers.",
      commentsReady: false,
      ready: true
    };
  },
  computed: {
    allReady() {
      return this.ready && "atc" === this.post;
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
