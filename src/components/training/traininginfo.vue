<template>
  <v-container fluid>
    <v-col cols="12" md="12" lg="12" sm="12" class>
      <p
        class="google-font mb-0"
        style="font-size:150%;color: #1a73e8;"
      >Directory of Upcoming Trainings</p>
      <p
        class="google-font mt-0 mb-0"
        style="font-size:95%"
      >Trainings are listed in chronological order by date.</p>
    </v-col>

    <br />

    <v-container fluid>
      <v-row>
        <v-col
          md="12"
          lg="10"
          sm="6"
          cols="6"
          class="pa-2"
          v-for="item in trainingData.upcomingTraining.introTraining"
          :key="item"
        >
          <v-dialog v-model="dialog">
            <template v-slot:activator="{ on }">
              <p class="google-font ma-0 mt-0" style="font-size:120%;">{{item.name }}</p>
            </template>
          </v-dialog>
        </v-col>
      </v-row>
    </v-container>

    <br />

    <v-col cols="12" md="12" lg="12" sm="12" class>
      <p class="google-font mb-0" style="font-size:150%;color: #1a73e8;">Directory of Past Trainings</p>
      <p
        class="google-font mt-0 mb-0"
        style="font-size:95%"
      >Trainings are listed in chronological order by date.</p>
    </v-col>

    <v-container fluid>
      <v-row justify="center" :class="color_mode">
        <v-slide-group class="pa-2 ma-2" show-arrows>
          <v-col
            md="3"
            lg="3"
            sm="3"
            cols="3"
            class="pa-2"
            v-for="item in trainingData.pastTraining.introTraining"
            :key="item"
          >
            <v-dialog v-model="dialog" width="700">
              <template v-slot:activator="{ on }">
                <div
                  v-on="on"
                  style="cursor: pointer;width: 275px; height: 150px; white-space: initial;"
                  :class="$vuetify.theme.dark == true?'darkModeCard':'lightModeCard'"
                  class="pa-2"
                >
                  <p class="google-font mt-1 mb-0 break-word" style="font-size:90%">{{ item.date }}</p>
                  <p
                    class="google-font ma-0 mt-0 break-word"
                    style="font-size:120%;"
                  >{{ item.name }}</p>
                  <p class="mb-0 mt-2 google-font" style="color:#1a73e8">See More</p>
                </div>
              </template>

              <v-card color v-if="dialog">
                <v-card-title
                  class="px-5 py-5 google-font"
                  :class="{'x-small': $vuetify.breakpoint.mdAndDown}"
                  style="background-position:right bottom;"
                >{{item.name}}</v-card-title>

                <v-card-text class="pa-5">
                  <p class="google-font mt-3 mb-0" style="font-size:110%">
                    <b>Name:</b>
                    {{item.name}}
                  </p>
                  <p class="google-font mt-1 mb-0" style="font-size:110%">
                    <b>Date:</b>
                    {{item.date}}
                  </p>
                </v-card-text>

                <v-divider></v-divider>
              </v-card>
            </v-dialog>
          </v-col>
        </v-slide-group>
      </v-row>
    </v-container>
  </v-container>
</template>

        
<script>
import communityData from "@/assets/data/communityData.json";
import trainingData from "@/assets/data/trainingData.json";
export default {
  name: "App",
  data: () => ({
    communityData: communityData,
    trainingData: trainingData,
    dialog: false
  }),
  computed: {
    color_mode() {
      if (this.$vuetify.theme.dark) return "darkModeContainer";
      return "lightModeContainer";
    },
    moveForBottomNavStyle() {
      if (this.$vuetify.breakpoint.smAndDown) {
        return "z-index: 10; bottom: 60px";
      } else {
        return "";
      }
    }
  }
};
</script>