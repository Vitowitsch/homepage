  
<template>
  <v-card max-width="344" class="mx-auto">
    <v-list-item>
      <v-list-item-avatar color="grey"></v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title class="title"><slot name="title"></slot></v-list-item-title>
        <!-- <v-list-item-subtitle>by Veit Wehner</v-list-item-subtitle> -->
      </v-list-item-content>
    </v-list-item>

    <slot name="img"></slot>

    <v-card-text><slot name="subtitle"></slot></v-card-text>

    <v-card-actions>
      <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
        <template v-slot:activator="{ on }">
          <v-btn color="teal" dark v-on="on">read</v-btn>
        </template>
        <v-card>
          <v-toolbar dark color="teal">
            <v-btn icon dark @click="dialog = false">
              <v-icon>mdi-close</v-icon>
            </v-btn>
            <v-spacer></v-spacer>
          </v-toolbar>
          <slot></slot>
        </v-card>
      </v-dialog>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      dialog: false
    };
  }
};
</script>