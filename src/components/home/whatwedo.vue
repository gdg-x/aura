<template>
  <v-container fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" md="3" lg="3" sm="12" class="text-center pa-2">
        <p class="google-font mb-0" style="font-size:150%">What we do?</p>
        <p
          class="google-font mt-0"
          style="font-size:95%"
        >The MITRE SAF works to bring the needed technologies, methodologies and patterns together to help bridge the needs of Security with the methods of todays developers and operators.</p>
        <p class="google-font" style="font-size:95%">About the SAF tool chain and libraries: </p>

        <span v-for="(item,i) in communitydata.WhatWeDoTech" :key="i">
          <v-tooltip bottom >
            <template v-slot:activator="{ on }">
              <a :href="item.link" target="_blank" class="ma-0">
                <v-btn
                  href="#"
                  outlined
                  target="_blank"
                  rounded
                  small
                  style="text-transform: capitalize;border-radius:5px;text-transform: capitalize;"
                  class="ml-0 mt-3 google-font hidden-md-and-down"

                 >{{item.TechName}}</v-btn>
              </a>
              &nbsp;&nbsp;&nbsp;
            </template>
            <span>{{item.TechName}}</span>
          </v-tooltip>
        </span>

        <br />

        <!-- <v-btn
          href="#"
          outlined
          target="_blank"
          rounded
          small
          style="text-transform: capitalize;border-radius:5px;text-transform: capitalize;"
          class="ml-0 mt-3 google-font hidden-md-and-down"
        >Learn More</v-btn> -->
      </v-col>
      <v-col cols="12" md="9" lg="9" sm="12">
        <v-container fluid>
          <v-row>
            <v-col
              v-for="item in whatwedodata"
              :key="item.name"
              md="3"
              lg="3"
              sm="6"
              cols="6"
              class="text-center pa-2"
            >
              <v-icon large style="font-size:300%">{{ item.icon }}</v-icon>
              <p class="google-font mt-2" style="font-size:130%">{{ item.name }}</p>
              <p class="google-font" style="font-size:95%">{{ item.desc }}</p>
              <!-- <v-btn
                v-bind:href="item.more_link"
                outlined
                target="_blank"
                rounded
                small
                style="text-transform: capitalize;border-radius:5px;text-transform: capitalize;"
                class="ml-0 mt-3 google-font"
              >Learn More</v-btn> -->
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import communitydata from "@/assets/data/communitydata.json";
import whatwedodata from "@/assets/data/whatWeDo.json";
export default {
  name: "App",
  data: () => ({
    communitydata: communitydata,
    whatwedodata: whatwedodata
  }),
  methods: {
    getImgUrl(url) {
      if (url.length > 0) {
        return require("@/assets/img/what-we-do/" + url);
      } else {
        return require("@/assets/img/what-we-do/notFound.png");
      }
    }
  }
};
</script>