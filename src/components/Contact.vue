<template>
  <v-layout justify-center>
    <v-flex xs12 md5 id="contact">
      <project-headline>
        <template v-slot:header>contact</template>
        Get in Touch
      </project-headline>
      <v-alert :value="true" color="black" icon="email" outline>veit.wehner@gmail.com</v-alert>
      <p></p>
      <iframe
        width="100%"
        height="100%"
        id="gmap_canvas"
        src="https://maps.google.com/maps?q=mozartstr%2C%20erlangen&t=&z=13&ie=UTF8&iwloc=&output=embed"
        frameborder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
      ></iframe>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: "Contact",
  components: {},
  mounted() {},
  data() {
    return {
      card_text:
        "Veit Wehner<br>\
        91052 Erlangen\
        Germany\
        E-Mail: veit.wehner@gmail.com\
"
    };
  }
};
</script>