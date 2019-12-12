<template>
  <v-dialog v-model="dialog" width="700">
    <template v-slot:activator="{ on }">
      <div
        v-on="on"
        style="cursor: pointer;"
        :class="$vuetify.theme.dark == true?'darkModeCard':'lightModeCard'"
        class="pa-3"
      >
        <p class="google-font mt-1 mb-0" style="font-size:90%">{{item.date}}</p>
        <p class="google-font ma-0 mt-0" style="font-size:120%;">{{item.name}}</p>
        <v-btn v-on="on" >See More</v-btn>            
      </div>   
     </template>

      <v-card>
        <v-card-title
          class="px-5 py-5 google-font"
          style="background-position:right bottom;"
        >{{item.name}}</v-card-title>

        <v-card-text class="pa-5">
          <p class="google-font mt-3 mb-0" style="font-size:110%">
            <b>Venue:</b>
            {{item.venue}}
          </p>
          <p class="google-font mt-1 mb-0" style="font-size:110%">
            <b>Date:</b>
            {{item.date}}
          </p>
          <p class="google-font mt-0 mb-0" style="font-size:110%;">
            <b>Video Day 1:</b>
            {{item.D1link}}
          </p>
          <p class="google-font mt-0 mb-0" style="font-size:110%;">
            <b>Video Day 2:</b>
            {{item.D2link}}
          </p>
          <p class="google-font mt-3 mb-0" style="font-size:110%">
            <b>Description:</b>
            {{item.description}}
          </p>
        </v-card-text>

      
        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="dialog = false" >Close</v-btn>
        </v-card-actions>

      </v-card>
    </v-dialog>
  </template>

<script>
export default {
  name: "App",
  components: {
    pasteventCard,
    pastEventCardLoader
  },
  data: () => ({
    communitydata: communitydata,
    pasttrainingdata: pasttrainingdata,
    dialog: false
  })
};
</script>
    
