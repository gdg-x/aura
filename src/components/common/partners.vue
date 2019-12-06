<template>
  <v-container fluid>
    <v-row align="center" justify="center" class="mb-0">
      <v-col cols="12" md="12" lg="12" sm="12" class="mb-0">
        <p class="google-font mb-1" style="font-weight: 350;font-size:200%">
          <b>
            Our
            <span style="color: #1a73e8;">Community</span>
          </b>
        </p>
        <p
          class="google-font mt-1 mb-0"
          style="font-size:120%"
        >A very big thank you to our Community for their continued partnership.</p>
        <p class="google-font mt-0 mb-0" style="font-size:120%">
          If you’re interested in being showcased throughout , contact
          <a
            style="color:#1565C0;text-decoration: none;"
            :href="`mailto:${communitydata.CommunityEmail}`"
          >{{communitydata.CommunityEmail}}</a> to discuss opportunities.
        </p>
      </v-col>
    </v-row>
 
      <v-container>
        <v-row justify="space-between" v-for="(itemp,i) in partnerData" :key="i">
          <v-col cols="12" md="12" lg="12" sm="12" class="mx-1 mt-5" v-if="itemp.length>0" >
              <p class="google-font mb-0" style="font-size:130%">{{i}}</p>
          </v-col>
          <v-sheet
              class="mx-auto"
              elevation="0"
              height="300"
              max-width="1200">
              <v-slide-group
                v-model="model"
                class="pa-4"
                :multiple="multiple"
                :mandatory="mandatory"
                :show-arrows="showArrows">
                <v-col v-for="(item,j) in itemp" :key="j" class >
                  <a v-bind:href="item.link" target="_blank" v-if="itemp.length>0" >
                    <v-card
                      :color="active ? 'primary' : '#574B75'"
                      class="ma-4"
                      elevation="4"
                      height="180"
                      width="200"
                      @click="toggle">
                      <v-tooltip bottom>
                        <template v-slot:activator="{ on }">
                          <v-img
                            :src="getImgUrl(item.img)"
                            :lazy-src="getImgUrl(item.img)"
                            class="white"
                            height="100"
                            width="200"
                            contain
                            v-on="on">
                          </v-img>
                          <v-card-subtitle class="google-font mb-0" style="color:white"> {{item.name}} </v-card-subtitle>
                        </template>
                      </v-tooltip>
                    </v-card>
                   </a>
                 </v-col>
              </v-slide-group>
          </v-sheet>
        </v-row>
      </v-container>

    <!-- <v-row align="center" justify="start" class="mt-0" v-for="(itemp,i) in partnerData" :key="i">
      <v-col cols="12" md="12" lg="12" sm="12" class="mx-1 mt-5" v-if="itemp.length>0">
        <p class="google-font mb-0" style="font-size:130%">{{i}}</p>
      </v-col>
      <v-col cols="6" md="6" lg="2" sm="4" v-for="(item,j) in itemp" :key="j" class>
        <div class="client-logo ma-0">
          <a v-bind:href="item.link" target="_blank" v-if="itemp.length>0">
            <v-tooltip bottom>
              <template v-slot:activator="{ on }">
                <v-img
                  :src="getImgUrl(item.img)"
                  :lazy-src="getImgUrl(item.img)"
                  class="white"
                  contain
                  style="height:4em"
                  v-on="on"
                >
                  <v-layout slot="placeholder" fill-height align-center justify-center ma-0>
                    <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                  </v-layout>
                </v-img>
              </template>
              <span class="google-font">{{item.name}}</span>
            </v-tooltip>
          </a>
        </div>
      </v-col>
    </v-row>  -->
  </v-container>
</template>

<script>
import datap from "@/assets/data/partners.json";
import communitydata from "@/assets/data/communitydata.json";
export default {
  data() {
    return {
      partnerData: datap,
      communitydata: communitydata
    };
  },
  methods: {
    getImgUrl(pic) {
      return require("@/assets/img/partners/" + pic);
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
</style>