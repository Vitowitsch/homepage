<template>
  <div :class="['ma-5', 'pa-5']">
    <v-btn
      color="primary"
      outlined
      class="mb-5"
      @click="$router.go(-1)"
    >
      <v-icon left>mdi-arrow-left</v-icon>
      Back
    </v-btn>
    <AtcStream class="ma-5" />
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-card>
            <v-card-title class="text-h5">
              Speech Recognition
            </v-card-title>
            <v-card-subtitle>
              by Veit Wehner (2019)
            </v-card-subtitle>
            <v-card-text>
              <blockquote class="post__subtitle">
                <div class="centered-text text-h5 mb-5">
                  “Alexa! Is the gangway free?”
                  <br />“Sorry I am having trouble understanding you right now”.
                </div>
              </blockquote>
              <article class="columns">
                Speech Recognition often fails to understand what was said - especially in
                a noisy environment. Therefore, there are many business cases not yet
                working.
                <p></p>
                At this year's Industry@AI, organized by the Siemens AI@Lab in Munich and
                Mindsphere© , we implemented a suite of Machine Learning models for a
                very noisy environment: Air-to-Ground communication (ATC) for planes. The
                objective was to identify ground station, aircraft, pilot, and the landing
                clearance from the audio stream with as little delay as possible.
                Automated extraction of ATC data can be used for statistical analysis but
                also to improve aviation security.
                <p></p>
                The main difficulties in this project were the background noise and the
                very specific vocabulary. Speech recognition services like Microsoft's
                Cortana, Apple’s Siri and Google’s Speech-to-Text gave us a maximum of
                only 40 percent accuracy in that special setup - and they cannot be
                improved through Transfer Learning. Therefore we had to train our own
                neural networks from scratch, based on a dataset of 52 hours of
                air-traffic communication. Some features were extracted directly from
                speech. For others we had to first extract the text from the audio before
                we applying Natural Language Processing (NLP) on the text.
                <iframe
                  class="ma-5"
                  width="100%"
                  height="315"
                  src="https://www.youtube.com/embed/iZQyoFR9wWI"
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
                After only two nights of Transfer Learning with DeepSpeech2 on the ATC
                data, our results surpassed Microsoft’s Speech Recognition, with an
                accuracy of 80 percent.
                <p>
                  We were able to identify the speaker based on voice and text data. We
                  could also extract the aircraft and landing clearance by either NLP or
                  Voice-Recognition with a delay of only 30 seconds.
                </p>

                Our solution was awarded with the prize for „Technical Excellence“.
                Further categories were „Best Pitch und Business-Value“ and „Innovation“
                without differential ranking.
                <p></p>
                For a fully functional system it might take a few more years of
                development and training. Within the few days many teams created useful
                prototypes. After the event, I was a bit exhausted but also pleased with
                what we had learned and achieved.
                <p></p>
                Thanks for making this possible to my team and the Siemens AI-Lab.
                <iframe
                  class="ma-5"
                  width="100%"
                  height="315"
                  src="https://www.youtube.com/embed/GcB6vkXox5k"
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </article>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import AtcStream from "@/components/blog/AtcStream";
export default {
  components: { AtcStream },
};
</script>

<style scoped>
.centered-text {
  text-align: center;
}
article {
  -webkit-columns: 2 200px;
  -moz-columns: 2 200px;
  columns: 2 200px;
  -webkit-column-gap: 4em;
  -moz-column-gap: 4em;
  column-gap: 4em;
  -webkit-column-rule: 1px dotted #ddd;
  -moz-column-rule: 1px dotted #ddd;
  column-rule: 1px dotted #ddd;
}
</style>
