<template>
  <v-container fluid>
    <v-row align="center" justify="center" class="mb-0">
      <v-col cols="12" md="12" lg="12" sm="12" class="mb-0">
        <p class="google-font mb-1" style="font-weight: 350;font-size:200%">
          <b>
            The
            <span style="color: #1a73e8;">SAF</span>
            Community
          </b>
        </p>
        <p
          class="google-font mt-1 mb-0"
          style="font-size:120%"
        >A very big thank you to our community members for their continued partnership.</p>
        <p class="google-font mt-0 mb-0" style="font-size:120%">
          If you’re interested in being showcased here, please contact
          <a
            style="color:#1565C0;text-decoration: none;"
            :href="`mailto:${communityData.communityEmail}`"
          >{{communityData.communityEmail}}</a> to discuss opportunities.
        </p>
      </v-col>
    </v-row>

    <v-container fluid>
      <v-row justify="space-between" v-for="(itemp,i) in partnerData" :key="i" :class="color_mode">
        <v-col cols="12" md="12" lg="12" sm="12" class="mx-1 mt-5" v-if="itemp.length>0">
          <p class="google-font mb-0" style="font-size:130%">{{i}}</p>
        </v-col>
        <v-slide-group class="pa-2" show-arrows>
          <v-col v-for="(item,j) in itemp" :key="j" class>
            <v-card
              :color="active ? 'primary' : '#574B75'"
              class="ma-4"
              elevation="4"
              height="180"
              width="200"
              v-bind:href="[(itemp.length > 0 ) ? item.link : null]"
              target="_blank"
            >
              <v-tooltip bottom>
                <template v-slot:activator="{ on }">
                  <v-img
                    :src="getImgUrl(item.img)"
                    :lazy-src="getImgUrl(item.img)"
                    class="white"
                    height="100"
                    width="200"
                    contain
                  ></v-img>
                  <v-card-subtitle class="google-font mb-0" style="color:white">{{item.name}}</v-card-subtitle>
                </template>
              </v-tooltip>
            </v-card>
          </v-col>
        </v-slide-group>
      </v-row>
    </v-container>

    <br />

    <v-container fluid>
      <v-row
        justify="space-between"
        v-for="(itemp,i) in commercialpart"
        :key="i"
        :class="color_mode"
      >
        <v-col cols="12" md="12" lg="12" sm="12" class="mx-1 mt-5" v-if="itemp.length>0">
          <p class="google-font mb-0" style="font-size:130%">{{i}}</p>
        </v-col>
        <v-slide-group class="pa-2" show-arrows>
          <v-col v-for="(item,j) in itemp" :key="j" class>
            <v-card
              :color="active ? 'primary' : '#574B75'"
              class="ma-4"
              elevation="4"
              height="150"
              width="200"
              v-bind:href="[(itemp.length > 0 ) ? item.link : null]"
              target="_blank"
            >
              <v-tooltip bottom>
                <template v-slot:activator="{ on }">
                  <v-img
                    :src="getImgUrl(item.img)"
                    :lazy-src="getImgUrl(item.img)"
                    class="white fixed-ratio-resize"
                    height="150"
                    width="200"
                    contain
                  ></v-img>
                </template>
              </v-tooltip>
            </v-card>
          </v-col>
        </v-slide-group>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
import datap from "@/assets/data/partners.json";
import commercialpart from "@/assets/data/commercialpart.json";
import communityData from "@/assets/data/communityData.json";
export default {
  data() {
    return {
      partnerData: datap,
      commercialpart: commercialpart,
      communityData: communityData,
      showArrows: true
    };
  },
  methods: {
    getImgUrl(pic) {
      return require("@/assets/img/partners/" + pic);
    }
  },
  computed: {
    color_mode() {
      if (this.$vuetify.theme.dark) return "darkModeContainer";
      return "lightModeContainer";
    }
  }
};
</script>

<style scoped>
.client-logo {
  height: 90px;
  padding: 12px 12px;
  border-radius: 7px;
  background: white;
  border: 1px solid #ebebeb;
  text-align: center;
}

.fixed-ratio-resize {
  /* basic responsive img */
  max-width: 100%;
  height: auto;
  width: auto\9; /* IE8 */
}
</style>