<template>
  <v-container>
    <project-headline id="carbon" theme="secondary">
      <template v-slot:header>My Project</template>
      Speech Recognition
    </project-headline>
      <blockquote class="post__subtitle">
        <center>
          <div class="title">
            “Alexa! Is the gangway free?”
            <br />“Sorry I am having trouble understanding you right now”.
          </div>
        </center>
      </blockquote>
      <v-row>
      <v-col cols="12" sm="6">
      <AtcStream />  
        </v-col>
      <v-col cols="12" sm="6">
      Speech Recognition often fails to understand what was said - especially in a noisy environment. Therefore, there are many business cases not yet working.
      <p></p>At this year's Industry@AI, organized by the Siemens AI@Lab in Munich and Mindsphere© , we implemented a suite of Machine Learning models for a very noisy environment: Air-to-Ground communication (ATC) for planes.
      The objective was to identify ground station, aircraft, pilot, and the landing clearance from the audio stream with as little delay as possible. Automated extraction of ATC data can be used for statistical analysis but also to improve aviation security.
      <p></p>The main difficulties in this project were the background noise and the very specific vocabulary. Speech recognition services like Microsoft's Cortana, Apple’s Siri and Google’s Speech-to-Text gave us a maximum of only 40 percent accuracy in that special setup - and they cannot be improved through Transfer Learning.
      Therefore we had to train our own neural networks from scratch, based on a dataset of 52 hours of air-traffic communication.
      </v-col>
      <v-col cols="12" sm="6">
      Some features were extracted directly from speech. For others we had to first extract the text from the audio before we applying Natural Language Processing (NLP) on the text.
      <p></p>After only two nights of Transfer Learning with DeepSpeech2 on the ATC data, our results surpassed Microsoft’s Speech Recognition, with an accuracy of 80 percent. 
      <p> We were able to identify the speaker based on voice and text data. We could also extract the aircraft and landing clearance by either NLP or Voice-Recognition with a delay of only 30 seconds.</p>
      </v-col>
      <v-col cols="12" sm="6">
         <iframe
        width="100%"
        height="315"
        src="https://www.youtube.com/embed/iZQyoFR9wWI"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
        </v-col>
          <v-col cols="12" sm="6">
      <iframe
        width="100%"
        height="315"
        src="https://www.youtube.com/embed/GcB6vkXox5k"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
       </v-col>
          <v-col cols="12" sm="6">
      Our solution was awarded with the prize for „Technical Excellence“. Further categories were „Best Pitch und Business-Value“ and „Innovation“ without differential ranking.
      <p></p>For a fully functional system it might take a few more years of development and training. Within the few days many teams created useful prototypes. After the event, I was a bit exhausted but also pleased with what we had learned and achieved.
      <p></p>Thanks for making this possible to my team and the Siemens AI-Lab.
     </v-col>
      
      </v-row>
  </v-container>
</template>

<script>
import AtcStream from "@/components/projects/AtcStream";
export default {
  components: { AtcStream },
  
};
</script>