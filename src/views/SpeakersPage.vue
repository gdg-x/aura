<template>
  <v-main>
    <v-container fluid class="pa-0">
      <v-row justify="center" align="center">
        <v-col md="12" lg="11" sm="11" xs="12">
          <!-- Header -->
          <v-container fluid class="py-0 my-0">
            <v-row align="center" class="py-0 my-0">
              <v-col md="7" sm="7" cols="12" class="py-0 my-0">
                <p
                  class="google-font mb-0"
                  style="font-weight: 350; font-size: 200%"
                >
                  <b> Our<span class="aura-text"> Speakers</span> </b>
                </p>
                <p class="google-font" style="font-size: 100%">
                  A collection of experienced speakers for an awesome event
                </p>
              </v-col>
              <v-col md="5" sm="5" cols="12" class="">
                <v-img :src="require('@/assets/img/common/speakers.png')"></v-img>
              </v-col>
            </v-row>
          </v-container>
          <!-- Header -->

          <!-- Speakers Data -->
          <v-container fluid class="mb-10">
            <!-- Speakers Data -->
            <v-row
              justify="start"
              align="start"
              class="pb-3"
              v-if="!loader && SpeakersData.length"
            >
              <v-col
                md="2"
                lg="2"
                sm="3"
                cols="6"
                style="text-align: center"
                class="px-2"
                v-for="(item, i) in SpeakersData"
                :key="i"
              >
                <div
                  class="py-5"
                  :class="
                    $vuetify.theme.dark == true ? 'aura-card-dark' : 'aura-card-light'
                  "
                >
                  <SpeakerView :data="item" />
                </div>
              </v-col>
            </v-row>
            <!-- No Data Found -->
            <v-row v-if="!loader && SpeakersData.length == 0">
              <v-col md="12" lg="12" sm="12" cols="12">
                <p class="google-font">Not Data Found</p>
              </v-col>
            </v-row>
            <!-- No Data Found -->

            <!-- Speaker Loader -->
            <v-row v-if="loader">
              <v-col md="2" lg="2" sm="3" cols="6" v-for="i in 6" :key="i">
                <v-sheet
                  :color="`grey ${theme.isDark ? 'darken-2' : 'lighten-4'}`"
                  class
                >
                  <v-skeleton-loader
                    class="mx-auto"
                    max-width="300"
                    type="card"
                  ></v-skeleton-loader>
                </v-sheet>
              </v-col>
            </v-row>
            <!-- Speaker Loader -->
          </v-container>
          <!-- Speakers Data -->
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import service from "@/services/appservices";
export default {
  name: "SpeakerPage",
  inject: ["theme"],
  components: {
    SpeakerView: () => import("@/components/speakers/Speakerview"),
  },
  data: () => ({
    loader: true,
    SpeakersData: [],
    ErrorMsg: "",
    noData: false,
  }),
  mounted() {
    this.getAllSpeakers();
  },
  methods: {
    getAllSpeakers() {
      this.loader = true;
      service
        .getAllSpeakers()
        .then((res) => {
          if (res.success == true) {
            this.SpeakersData = res.data.filter((res) => res.visible);
            // this.SpeakersData =[]
            this.loader = false;
            this.noData = false;
          } else {
            this.noData = true;
            this.loader = false;
          }
        })
        .catch((e) => {
          this.loader = false;
          this.noData = true;
          this.ErrorMsg = e;
        });
    },
  },
};
</script>