<template>
  <project-header id="cognac">
    <template v-slot:header>My Project</template>
    Speech Recognition
    <template
      v-slot:subheading
    >won Prize for Technical Excellence
    <AtcStream/></template>
    <template v-slot:intro></template>
    <template v-slot:article>
      <v-layout justify-space-around wrap mb-5 mt-5></v-layout>
      <center>
        <div
          class="display-1"
        >A suite of Machine Learning models for aiding air traffic controllers.</div>
      </center>
      <v-layout justify-space-around wrap mt-5>
        <v-flex xs12 md5>
          <base-text>
          Based on a dataset of 52 hours air-traffic voice we trained four neural networks from scratch. <br>Some features were extracted directly from speech. 
          For other features were transcribed the audio first and applied Natural Language Processing (NLP) on the text.<p></p>
          After two nights of Transfer Learning with DeepSpeech2 on the ATC data, the results surpassed Microsofts Speech Recognition. 
          The reason is that the vocabulary of ATC-speech is somewhat limited on the one hand and has extreme background noise on the other hand. 
          Microsoft's Cortana gave us a 40 percent accuracy in that special setup while the model we trained ourselves reached 80 percent. 
          </base-text>
        </v-flex>
        <v-flex xs12 md5>
          <base-text>
          Apple's Siri and Google's Speech to text can not be improved through Transfer Learning on the existent model. 
          <p></p>
          We were able to classify the speaker between pilot and control center both based on voice and on text data. 
          We extracted other features such as aircraft identification and landing approval by either NLP or Voice-Recognition.
          <p></p>
          For the speech recognition, the transcript, the NLP and the UI-prototype we were awarded with the prize for  „Technical Excellence“.
          Further categories were „Best Pitch und Business-Value“ and „Innovation“ without differential ranking. 
          </base-text>
        </v-flex>
      </v-layout>
    </template>
  </project-header>
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
<style scoped>
article {
  display: block;
}
</style>
