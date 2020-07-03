<template>
  <v-content>
    <v-container fluid class="py-0 my-0 mt-0">
      <v-row class="py-0 my-0" justify="center" align="center">
        <v-col md="12" sm="12" cols="12" class="py-0 my-0 mb-5 mt-5">
          <v-row class="pa-0" align="center">
            <v-col cols="12" md="12" lg="12" sm="12" class="pa-1">
              <h2 :class="this.$vuetify.theme.dark?'white--text':'grey--text text--darken-3'" class="google-font mb-5 mt-5">Our Partners</h2>
              <p class="google-font mt-1 mb-0" style="font-size:110%">
                A very big thank you to all our partners for their continued
                partnership.
              </p>
            </v-col>
          </v-row>
          <v-row justify="center" align="center" class="py-5" v-if="isLoading">
            <v-col cols="12" md="12" class="text-center">
              <v-progress-circular
                :width="5"
                :size="50"
                color="indigo"
                indeterminate
              ></v-progress-circular>
            </v-col>
          </v-row>
          <v-row
            class="pa-0 mt-3"
            align="center"
            v-else-if="checkExistance(eventDetails.partners, 0)"
          >
            <v-col
              cols="6"
              md="2"
              lg="2"
              sm="4"
              class="pa-1"
              v-for="(item, i) in pData"
              :key="i"
            >
              <div
                class="ma-1 px-2"
                style="background-color:white;border:1px solid #e0e0e0;border-radius:5px;"
              >
                <a :href="item.socialLinks.web" target="_blank">
                  <v-tooltip bottom>
                    <template v-slot:activator="{ on }">
                      <v-img
                        :src="getImgUrl(item.image, 'noimage.jpg')"
                        :lazy-src="getImgUrl(item.image, 'noimage.jpg')"
                        width="100%"
                        contain
                        style="border-radius:5px"
                        height="80px"
                        v-on="on"
                      >
                        <template v-slot:placeholder>
                          <v-row
                            class="fill-height ma-0"
                            align="center"
                            justify="center"
                          >
                            <v-progress-circular
                              indeterminate
                              color="grey lighten-5"
                            ></v-progress-circular>
                          </v-row>
                        </template>
                      </v-img>
                    </template>
                    <span class="google-font">{{ item.name }}</span>
                  </v-tooltip>
                </a>
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
import service from "@/services/appservices";
import { mapState } from "vuex";
export default {
  props: ["eventDetails"],
   data: () => ({
    partnersData: [],
    pData: [],
    isLoading: false
  }),
  computed: {
    ...mapState(["config"])
  },
  mounted() {
    this.getAllPartners();
  },
  methods: {
    getAllPartners() {
      this.isLoading = true;
      this.pData = [];
      service
        .getAllPartners()
        .then(res => {
          if (res.success) {
            this.partnersData = res.data;
            this.eventDetails.partners.map(p => {
              this.partnersData.map(obj => {
                if (obj.id == p) {
                  this.pData.push(obj);
                }
              });
            });
          }
          this.isLoading = false;
        })
        .catch(e => {
          console.log(e);
          this.isLoading = false;
        });
    }
  }
};
</script>

<style></style>
