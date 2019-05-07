<template>
  <article>
    <v-container fluid>
      <center>
        <div class="display-3" style="text-decoration: underline;">Macathon Speech - Cognac</div>
      </center>
      <v-layout justify-space-around wrap mb-5 mt-5>
        <v-flex xs12 md11>
          <AtcStream/>
        </v-flex>
      </v-layout>
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
            - trained [DeepSpeech2](https://github.com/SeanNaren/deepspeech.pytorch) on ATC data
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
    </v-container>
  </article>
</template>
<script>
import AtcStream from "./AtcStream";
export default {
  components: {
    AtcStream
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
