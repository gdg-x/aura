<template>
  <v-dialog v-model="dialog" width="800">
    <template v-slot:activator="{ on }">
      <div
        v-on="on"
        v-ripple
        style="cursor: pointer;"
        :class="$vuetify.theme.dark == true?'darkModeCardFeatureEvent':'lightModeCardFeatureEvent'"
        class="pa-3 py-5 fill-height"
      >
        <p class="google-font mb-0" style="font-size:90%">{{data.date | dateFilter}}</p>
        <p class="google-font mb-0" style="font-size:120%">{{data.name | summary(15)}}</p>
        <p class="google-font mb-0" style="font-size:90%">{{data.venue.name | summary(20)}}</p>
        <v-spacer></v-spacer>
        <p class="mb-0 mt-2 google-font" style="color:#1a73e8">See More</p>
      </div>
    </template>
    <v-card
      color
      v-if="dialog"
      class
      style="border-radius:5px"
      :class="this.$vuetify.theme.dark == true?'grey darken-3':'white'"
    >
      <v-card-title class="px-5 py-5 google-font" style="background-position:right bottom;">
        <p class="google-font mb-0" style="font-size:150%">{{data.name}}</p>
        <v-spacer></v-spacer>
        <v-tooltip bottom>
      <template v-slot:activator="{ on }">
        <v-btn icon v-on="on" :href="'events/'+data.id" target="_blank">
          <v-icon>mdi-open-in-new</v-icon>
        </v-btn> 
      </template>
      <span>Open in New Tab</span>
    </v-tooltip>
        
      </v-card-title>

      <v-card-text class="pb-5 pt-0">
        <p class="google-font mb-0" style="font-size:120%">{{data.date}}</p>
        <p class="google-font mb-0" style="font-size:110%">{{data.venue.name}}</p>
        <p class="google-font">{{data.time.starttime}} - {{data.time.endtime}}</p>

        <p class="google-font mb-0" style="font-size:95%">
          <b>Description</b>
        </p>
        <p class="google-font mt-0" style="font-size:110%">{{data.des}}</p>

        <v-btn
          color="indigo"
          target="_blank"
          @click="goToEvent(data.id)"
          class="ma-0 elevation-0 my-2 mr-3"
          dark
          style="text-transform: capitalize;"
        >Event Page</v-btn>

        <v-btn
          color="#1a73e8"
          v-if="checkExistance(data.links.registration,0)"
          :href="data.links.registration"
          target="_blank"
          class="ma-0 elevation-0 my-2 mr-3"
          dark
          style="text-transform: capitalize;"
        >Registration Link</v-btn>
        <v-btn
          color="pink"
          v-if="checkExistance(data.links.meetup,0)"
          :href="data.links.meetup"
          target="_blank"
          class="ma-0 elevation-0 my-2 mr-3"
          dark
          style="text-transform: capitalize;"
        >Meetup Page</v-btn>
        <v-btn
          color="red"
          v-if="checkExistance(data.links.youtube,0)"
          :href="data.links.youtube"
          target="_blank"
          class="ma-0 elevation-0 my-2 mr-3"
          dark
          style="text-transform: capitalize;"
        >YouTube Live</v-btn>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions :class="this.$vuetify.theme.dark == true?'grey darken-3':'grey lighten-3'">
        <v-spacer></v-spacer>
        <v-btn color="primary" text @click="dialog = false">Close</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: ["data"],
  data() {
    return {
      dialog: false
    };
  },
  methods: {
    goToEvent(id) {
      this.$router.push("/events/" + id);
    }
  },
  filters: {
    summary: (val, num) => {
      if (val.length > num) {
        return val.substring(0, num) + "..";
      } else {
        return val;
      }
    },
    dateFilter: value => {
      const date = new Date(value);
      return date.toLocaleString(["en-US"], {
        month: "short",
        day: "2-digit",
        year: "numeric"
      });
    }
  }
};
</script>

<style scoped>
.lightModeCardFeatureEvent {
  background-color: #ffff;
  box-shadow: 0 0 36px rgba(0, 0, 0, 0.1);

  border-radius: 8px;
}
.darkModeCardFeatureEvent {
  background-color: #292929;
  box-shadow: 0 0 36px rgba(0, 0, 0, 0.1);
  /* border:1px solid #212121; */
  border: 1px solid #424242;
  border-radius: 5px;
}
</style>