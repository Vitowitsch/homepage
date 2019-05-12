<template>
  <article id="cognac">
    <project-header>
      <template v-slot:header>My Project</template>
      Macathon Speech - Cognac
      <template
        v-slot:subheading
      >Analysis of Air-2-Ground Speech won the prize for "Technical Excellence" at the Siemens-Mindsphere-AI-Hackathon</template>
      <template v-slot:intro>
        <v-flex xs12 md12>
          <AtcStream/>
        </v-flex>
      </template>
      <template v-slot:article>
        <v-layout justify-space-around wrap mb-5 mt-5></v-layout>
        <center>
          <div
            class="display-1"
          >A suite of Machine learning models for aiding air traffic controllers.</div>
        </center>
        <v-layout justify-space-around wrap mt-5>
          <v-flex xs12 md5>
            <base-text>
              - Dataset
              - 52 hours of audio data obtained from Air Traffic Communications.
              - Speech to Text Transcription
              - trained [DeepSpeech2] on ATC data
              - Speaker Classification
              - to detect if the speaker is Pilot or ATC based on Speech data
              - Multilayer Perceptron with MFCC audio features
            </base-text>
          </v-flex>
          <v-flex xs12 md5>
            <base-text>
              - Text Classification
              - to detect if the speaker is Pilot or ATC based on rext Data
              - Random Forest Classifier trained on tf-idf features
              - Call Sign Detection
              - trained [BiLSTM-CNN](https://github.com/kamalkraj/Named-Entity-Recognition-with-Bidirectional-LSTM-CNNs) on ATC
              data using distant supervision
              - Clearance Detection
              - regular expression based information extraction based on ATC phraseology
            </base-text>
          </v-flex>
        </v-layout>
      </template>
    </project-header>
  </article>
</template>
<script>
export default {
  components: {
    AtcStream: () => import("./AtcStream")
  },
  data() {
    return {
      e1: 0
    };
  },
  methods: {
    getVideoId() {
      return getIdFromURL("https://youtu.be/rVUP4-I9TJ4");
    }
  }
};
</script>
<style>
article {
  display: block;
}
</style>
