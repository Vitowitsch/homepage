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
      <p></p>Based on a dataset of 52 hours of air-traffic communication we trained four neural networks from scratch.
      <br />Some features were extracted directly from speech.
      For other features we used automatic transcription of the audio first and applied Natural Language Processing (NLP) on the text.
      <p></p>The difficulties we had to face were the background noice and the very specific vocabulary.
      Microsoft's Cortana gave us a 40 percent accuracy in that special setup.
      After two nights of Transfer Learning with DeepSpeech2 on the ATC data, our results surpassed Microsofts Speech Recognition with an accuracy of 80 percent.
      <p></p>Apple's Siri and Google's Speech to text can not be improved through Transfer Learning on the existent model.
      <p></p>We were able to classify the speaker between pilot and control center both based on voice and on text data.
      We extracted other features such as aircraft identification and landing approval by either NLP or Voice-Recognition.
      <p></p>For the speech recognition, the transcript, the NLP and the UI-prototype we were awarded with the prize for „Technical Excellence“.
      Further categories were „Best Pitch und Business-Value“ and „Innovation“ without differential ranking.
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
