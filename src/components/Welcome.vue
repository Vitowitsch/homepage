<template>
  <section id="welcome" class="hide-overflow">
    <v-layout>
      <v-flex hidden-sm-and-down md6>
        <!-- <v-img :src="require('@/assets/welcome.png')" height="100vh"/> -->
      </v-flex>

      <v-flex
        xs12
        md6
        align-content-space-between
        layout
        :pa-5="$vuetify.breakpoint.smAndDown"
        wrap
      >
        <v-layout align-center justify-center>
          <v-flex xs10 md6>
            <base-heading>Welcome!</base-heading>
            <base-text>Welcome to my page where I want to outline ...</base-text>
            <base-btn class="mt-4">Learn More!</base-btn>
          </v-flex>
        </v-layout>

      </v-flex>
    </v-layout>
  </section>
</template>
<script>
</script>

