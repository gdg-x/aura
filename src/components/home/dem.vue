<template>
  <v-container fluid class="pa-0">
    <v-row align="start" justify="start">
      <v-col cols="12" md="8" lg="8" sm="4" class="pa-0">
        <div class="ma-1" style="border:1px solid #e0e0e0;border-radius:8px">
          <!-- <v-img 
                        src="https://developers.google.com/community/gdg/images/gdg_overview_720.jpg"
                        lazy-src="https://developers.google.com/community/gdg/images/gdg_overview_720.jpg"
                        class="grey lighten-2"
                        width="100%"
                        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                        height="300px"
                        style="border-top-right-radius:8px;border-top-left-radius:8px;"
                    >
                        <v-card-title class="align-end google-font fill-height" style="color:white">About MITRE SAF</v-card-title>
                        <template v-slot:placeholder>
                            <v-row
                            class="fill-height ma-0"
                            align="center"
                            justify="center"
                            >
                            <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                            </v-row>
                        </template>
          </v-img>-->
          <div class="pa-5">
            <p class="google-font mb-0" style="font-size:150%">About MITRE SAF</p>
            <p
              class="google-font mt-0"
              style="font-size:95%"
            >Google Developer Group Jalandhar is inspired by GTUG/GDG Family . We started our journey in Feb 2011. We try to engage student developers, fresh graduates and professionals through our hack events & meetups. The motive is to create a local ecosystem of programmers & hackers in and around Jalandhar. The technology awareness is main goal for first few years of the group.</p>

            <v-btn
              href="#"
              target="_blank"
              outlined
              color
              class="ma-0 google-font"
              style="border-radius:5px;text-transform: capitalize;"
            >Meetup Page</v-btn>&nbsp;
            <v-btn
              href="#"
              target="_blank"
              outlined
              color
              class="ma-0 google-font"
              style="border-radius:5px;text-transform: capitalize;"
            >Facebook Page</v-btn>
            <br />
            <br />
            <router-link
              to="/about"
              class="google-font"
              style="text-decoration:none;color:"
            >See More about GDG</router-link>
          </div>
        </div>
      </v-col>

      <v-col cols="12" md="4" lg="4" sm="8" class="pa-0 float-right">
        <div class="ma-1 pa-3" style="border:1px solid #e0e0e0;border-radius:8px">
          <!-- <p class="google-font mb-0" style="font-size:150%">About MITRE SAF</p> -->
          <p
            class="google-font mt-0"
            style="font-size:95%"
          >Google Developer Group Jalandhar is inspired by GTUG/GDG Family . We started our journey in Feb 2011. We try to engage student developers, fresh graduates and professionals through our hack events & meetups. The motive is to create a local ecosystem of programmers & hackers in and around Jalandhar. The technology awareness is main goal for first few years of the group.</p>

          <v-btn
            href="#"
            target="_blank"
            outlined
            color
            class="ma-0 google-font"
            style="border-radius:5px;text-transform: capitalize;"
          >Meetup Page</v-btn>&nbsp;
          <v-btn
            href="#"
            target="_blank"
            outlined
            color
            class="ma-0 google-font"
            style="border-radius:5px;text-transform: capitalize;"
          >Facebook Page</v-btn>
          <br />
          <br />
          <router-link
            to="/about"
            class="google-font"
            style="text-decoration:none;color:"
          >See More about GDG</router-link>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import whatWeDoData from "@/assets/data/whatWeDo.json";
export default {
  name: "App",
  data: () => ({
    whatWeDoData: whatWeDoData
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