<template>
  <v-content class="px-0 mx-1">
    <v-container fluid class="pa-0">
      <v-row
        justify="center"
        align="center"
        class="py-3"
        :class="this.$vuetify.theme.dark == true?'grey darken-4':'grey lighten-4'"
      >
        <v-col md="12" lg="10" sm="11" xs="12" class="pt-3 bottom-space">
          <SpeakerHeader />
        </v-col>
      </v-row>
    </v-container>

    <v-container fluid class="pa-0">
      <v-row
        justify="center"
        align="center"
        class="py-3"
        :class="this.$vuetify.theme.dark == true?'black':''"
      >
        <v-col md="12" lg="10" sm="11" xs="12" class="pt-3" v-if="SpeakersData.length>0">
          <v-container fluid class="py-0 my-0">
            <v-row align="center" justify="center" class="py-0 my-0">
              <v-col cols="12" md="12" lg="12" sm="12" class="py-0 my-0">
                <v-row class="py-0 my-0">
                  <v-col
                    md="2"
                    lg="2"
                    sm="3"
                    cols="6"
                    class="pa-1 mb-0"
                    style="text-align:center"
                    v-for="(item,i) in SpeakersData"
                    :key="i"
                  >
                    <SpeakerView :da="item" />
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
        <v-col v-if="loader" md="12" lg="10" xs="12" class="pt-3">
          <v-container fluid class>
            <v-row>
              <v-col md="2" lg="2" sm="3" cols="6" v-for="i in 6" :key="i">
                <v-sheet :color="`grey ${theme.isDark ? 'darken-2' : 'lighten-4'}`" class>
                  <v-skeleton-loader class="mx-auto" max-width="300" type="avatar, text@2"></v-skeleton-loader>
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
import SpeakerHeader from "@/components/speakers/SpeakerHeader";
import SpeakerView from "@/components/speakers/Speakerview";
import service from "@/services/appservices";
export default {
  name: "Speaker",
  inject: ["theme"],
  components: {
    SpeakerHeader,
    SpeakerView
  },
  data: () => ({
    loader: true,
    SpeakersData: [],
    ErrorMsg: ""
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
          console.log(res);
          if (res.success == true) {
            this.SpeakersData = res.data.filter(res => res.visible);
            this.loader = false;
          }
        })
        .catch(e => {
          this.loader = false;
          this.ErrorMsg = e;
          // console.log(e)
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