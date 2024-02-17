
<template>
  <v-main>
    <v-container fluid class="px-0 py-0">
      <v-row justify="center" align="center">
        <v-col md="11" lg="11" sm="11" xs="12" class="">
          <!-- Header -->
          <v-container fluid class="py-0 my-0">
            <v-row align="center" class="py-0 my-0">
              <v-col md="7" sm="7" cols="12" class="py-0 my-0 pr-md-10">
                <p
                  class="google-font mb-0"
                  style="font-weight: 350; font-size: 200%"
                >
                  <b>
                    <span class="aura-text">About</span>
                    <!-- {{
                      config.generalConfig.shortName ||
                      config.generalConfig.name ||
                      ""
                    }} -->
                    </b
                  >
                </p>

                <p class="google-font mt-2" style="font-size: 110%">
                  {{ config.generalConfig.longDescription }}
                </p>
                <v-btn
                  v-if="checkExistance(config.generalConfig.becomemember, 0)"
                  :href="config.generalConfig.becomemember"
                  target="_blank"
                  depressed
                  class="ma-0 google-font aura-btn"
                  rounded
                  style="text-transform: capitalize; color: white"
                  >Become a Member</v-btn
                >
              </v-col>
              <v-col md="5" sm="5" cols="12" class="py-0 my-0">
                <v-img
                  width="90%"
                  style="margin: auto"
                  :src="require('@/assets/img/svg/about.svg')"
                ></v-img>
              </v-col>
            </v-row>
          </v-container>
          <!-- Header -->
        </v-col>
      </v-row>
    </v-container>

    <!-- <v-container fluid class="px-0 py-0">
      <v-row justify="center" align="center" class="my-0 py-0">
        <v-col md="11" lg="11" sm="11" xs="12" class="my-0 py-0">
          <aboutCommunity :data="config.generalConfig" />
        </v-col>
      </v-row>
    </v-container> -->

    <v-container fluid class="pa-0 py-0 my-0">
      <v-row justify="center" align="center" class="py-5">
        <v-col md="11" lg="11" sm="11" xs="12" class="py-0">
          <communityGuidelines :data="communityGudielines" />
        </v-col>
      </v-row>
    </v-container>

    <v-container fluid class="">
      <v-row justify="center" align="center" class="py-5">
        <v-col md="11" lg="11" sm="11" xs="12" class="py-0 mb-5">
          <v-container fluid>
            <v-row>
              <v-col
                class="pa-8 google-font"
                :class="$vuetify.theme.dark ? 'card-dark' : 'card-light'"
                md="12"
                sm="12"
                cols="12"
              >
                <h1 class="mb-2">Code of conduct</h1>
                <p>{{ coc }}</p>
                <antiHarassmentPolicy
                  :data="
                    config.generalConfig.shortName || config.generalConfig.name
                  "
              /></v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import service from "@/services/appservices";
import { mapState } from "vuex";

export default {
  name: "AboutPage",
  components: {
    // aboutCommunity: () => import("@/components/about/AboutCommunity"),
    communityGuidelines: () => import("@/components/about/CommunityGuidelines"),
    // coc: () => import("@/components/about/COC"),
    antiHarassmentPolicy: () => import("@/components/about/AntiHar"),
  },
  computed: {
    ...mapState(["config"]),
  },
  data: () => ({
    loading: true,
    communityGudielines: [],
    coc: "",
  }),
  mounted() {
    this.getCommunityGuidelinesData();
  },
  methods: {
    getCommunityGuidelinesData() {
      service.getCommunityGuidelines().then((res) => {
        if (res.success) {
          this.coc = res.data.codeOfConduct;
          this.communityGudielines = res.data.communityGuidelines;
        }
      });
    },
  },
};
</script>