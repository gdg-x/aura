<template>
  <v-container fluid>
    <p class="google-font mb-0" style="font-size:150%;color: #1a73e8;">Upcoming Training Sessions</p>
    <p
      class="google-font mt-0 mb-0"
      style="font-size:95%"
    >Trainings are listed in chronological order by date.</p>
    <br />
    <v-row>
      <v-col
        md="12"
        lg="10"
        sm="12"
        class="pa-2"
        v-for="item in trainingData.upcomingTraining.introTraining"
        :key="item"
      >
        <v-dialog v-model="dialog">
          <template v-slot:activator="{ on }">
            <p class="google-font ma-0 mt-0" style="font-size:120%;">{{item.name}}</p>
          </template>
        </v-dialog>
      </v-col>
    </v-row>
    <br />
    <br>
    <p class="google-font mb-0" style="font-size:150%;color: #1a73e8;">Past Training Sessions</p>
    <p
      class="google-font mt-0 mb-0"
      style="font-size:95%"
    >Trainings are listed in chronological order by date.</p>
    <p class="google-font mt-0 mb-0" style="font-size:95%">
      <b>Note:</b> Video recordings of these trainings will be made available once they are edited for presentability.
    </p>
    <v-row justify="center" :class="color_mode" class="ma-2">
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
          <v-dialog v-model="dialog" :dialogData="item" width="700">
            <template v-slot:activator="{ on }">
              <div
                v-on="on"
                style="cursor: pointer;width: 275px; height: 150px; white-space: initial;"
                :class="$vuetify.theme.dark == true?'darkModeCard':'lightModeCard'"
                class="pa-2"
                @click="passItemData(item)"
              >
                <p class="google-font mt-1 mb-0 break-word" style="font-size:90%">{{ item.date }}</p>
                <p class="google-font ma-0 mt-0 break-word" style="font-size:120%;">{{ item.name }}</p>
                <p class="mb-0 mt-2 google-font" style="color:#1a73e8">See More</p>
              </div>
            </template>

            <v-card color v-show="dialog" :data="dialogData">
              <v-card-title
                class="px-5 py-5 google-font break-word"
                :class="{'x-small': $vuetify.breakpoint.mdAndDown}"
                style="background-position:right bottom;"
              >{{dialogData.name}}</v-card-title>

              <v-card-text class="pa-5">
                <p class="google-font mt-3 mb-0 break-word" style="font-size:110%">
                  <b>Name:</b>
                  {{dialogData.name}}
                </p>
                <p class="google-font mt-1 mb-0" style="font-size:110%">
                  <b>Date:</b>
                  {{dialogData.date}}
                </p>
                <v-spacer class="ma-2" />
                <a
                  v-if="dialogData.link != ''"
                  :href="dialogData.link"
                  target="_blank"
                >Link to Recording</a>
                <p v-else>
                  <b>Link to Recording --</b>
                  <span style="color:red">Video still being edited! Please check back later.</span>
                </p>
              </v-card-text>

              <v-divider></v-divider>
            </v-card>
          </v-dialog>
        </v-col>
      </v-slide-group>
    </v-row>
  </v-container>
</template>

<script>
import communityData from "@/assets/data/communityData.json";
import trainingData from "@/assets/data/trainingData.json";
import resources from "@/assets/data/resources.json";
export default {
  name: "App",
  data: () => ({
    communityData: communityData,
    trainingData: trainingData,
    resources: resources,
    dialog: false,
    dialogData: {
      name: "",
      date: "",
      link: ""
    }
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
  },
  methods: {
    make_linkable(str) {
      return str.replace(/\s+/g, "-").toLowerCase();
    },
    passItemData(item) {
      this.dialogData = item;
    }
  }
};
</script>