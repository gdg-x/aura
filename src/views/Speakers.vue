<template>
  <v-content class="px-0 mx-1">
    <v-container fluid class="pa-0">
      <v-row justify="center" align="center" class="pt-3">
        <v-col md="12" lg="10" sm="11" xs="12" class="pt-3">
          <SpeakerHeader />
        </v-col>
      </v-row>
    </v-container>

    <v-container fluid class="pa-0">
      <v-row
        justify="center"
        align="center"
        class="pb-3"
        :class="this.$vuetify.theme.dark == true?'black':''"
      >
        <v-col md="12" lg="10" sm="11" xs="12" class="pt-0" v-if="SpeakersData.length>0">
          <v-container fluid class="py-0 my-0">
            <v-row align="center" justify="center" class="py-0 my-0">
              <v-col cols="12" md="12" lg="12" sm="12" class="py-0 my-0">
                <v-row class="py-0 my-0">
                  <v-col
                    md="2"
                    lg="2"
                    sm="3"
                    cols="6"
                    style="text-align:center"
                    class="px-2"
                    v-for="(item,i) in SpeakersData"
                    :key="i"
                  >
                    <div
                      class="py-5"
                      :class="$vuetify.theme.dark == true?'darkModeCard':'whiteTheme'"
                    >
                      <SpeakerView :da="item" />
                    </div>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
        <v-col v-else-if="loader ==false && SpeakersData.length == 0" md="12" lg="12" sm="12" cols="12" class="text-center">
          <v-img
            :src="require('@/assets/img/svg/DataNotFound.svg')"
            :lazy-src="require('@/assets/img/svg/DataNotFound.svg')"
            width="15%"
            style="border-radius:8px;margin-left:auto;margin-right:auto"
          >
            <template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
              </v-row>
            </template>
          </v-img>
          <h2 class="google-font">Speakers Not Found</h2>
          </v-col>
        <v-col v-if="loader" md="12" lg="10" xs="12" class="pt-3">
          <v-container fluid class>
            <v-row>
              <v-col md="2" lg="2" sm="3" cols="6" v-for="i in 6" :key="i">
                <v-sheet :color="`grey ${theme.isDark ? 'darken-2' : 'lighten-4'}`" class>
                  <v-skeleton-loader class="mx-auto" max-width="300" type="card"></v-skeleton-loader>
                </v-sheet>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
import service from "@/services/appservices";
export default {
  name: "Speaker",
  inject: ["theme"],
  components: {
    SpeakerHeader: () => import("@/components/speakers/SpeakerHeader"),
    SpeakerView: () => import("@/components/speakers/Speakerview")
  },
  data: () => ({
    loader: true,
    SpeakersData: [],
    ErrorMsg: "",
    noData: false
  }),
  mounted() {
    this.getAllSpeakers();
  },
  methods: {
    getAllSpeakers() {
      this.loader = true;
      service
        .getAllSpeakers()
        .then(res => {
          if (res.success == true) {
            this.SpeakersData = res.data.filter(res => res.visible);
            this.loader = false;
            this.noData = false;
          } else {
            this.noData = true;
            this.loader = false;
          }
        })
        .catch(e => {
          this.loader = false;
          this.noData = true;
          this.ErrorMsg = e;
        });
    }
  }
};
</script>

<style scoped>
.darkbg {
  /* background: #1F1A24 */
}
@media screen and (min-width: 600px) {
  .card-top-margin {
    margin-top: -110px;
  }
  .bottom-space {
    margin-bottom: 80px;
    margin-top: 20px;
  }
}
@media screen and (max-width: 600px) {
  .card-top-margin {
    margin-top: -100px;
  }
  .bottom-space {
    margin-bottom: 50px;
  }
}
</style>