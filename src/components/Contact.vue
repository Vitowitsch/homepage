<template>
  <v-layout id="contact" wrap fluid>
    <v-flex xs12 sm6 offset-sm3>
      <project-headline>
        <template v-slot:header>contact</template>
        Get in Touch
      </project-headline>
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
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">Veit Wehner</h3>
            <p></p>
            <div class="subheading">
                91052 Erlangen, Germany
                
              <br>E-Mail: veit.wehner@gmail.com
              <br> </div>
          </div>
        </v-card-title>
      </v-card>
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