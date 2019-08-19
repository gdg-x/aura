<template>
  <v-container class="pa-0">
    <v-snackbar v-model="errorAlert" bottom left>
      {{ errorMsg }}
      <v-btn color="pink" flat @click="errorAlert = false">Close</v-btn>
    </v-snackbar>

    <v-layout wrap align-center justify-center row fill-height class="mt-0 mb-0">
      <v-flex xs12 md12 lg12 class="pa-2 mb-0">
        <p class="google-font mb-0" style="font-size:170%;color:#0277bd">Upcoming Events</p>
        <p
          class="google-font mt-0 mb-0"
          style="font-size:120%"
        >Our events are open to newbies, developers, managers, and organizations who are interested in Google's technologies or use them as part of their projects.</p>
      </v-flex>
    </v-layout>

    <v-layout
      wrap
      align-start
      justify-start
      row
      fill-height
      class="hidden-sm-and-down my-3"
      :style="{'background-image':'url('+require('@/assets/img/svg/bg.svg')+')'}"
      style="background-position:right"
    >
      <v-flex xs12 sm6 md4 lg4 v-for="n in 3" :key="`4${n}`">
        <v-card
          flat
          v-if="showLoader"
          class="ma-1 pa-1 my-0 elevation-0"
          style="border-radius:7px;"
        >
          <v-card-title class="mb-0">
            <div>
              <p
                class="google-font mb-2 animate-shimmer"
                style="color:#424242;width:200px;height:20px;"
              ></p>
              <p
                class="google-font mt-2 mb-1 animate-shimmer"
                style="color:#424242;width:150%;height:80px;"
              ></p>
              <p
                class="google-font mt-1 mb-0 animate-shimmer"
                style="color:#424242;width:100px;height:20px;"
              ></p>
              <p
                class="google-font mt-1 mb-0 animate-shimmer"
                style="color:#424242;width:100px;height:20px;"
              ></p>
              <p
                class="google-font mt-1 mb-0 animate-shimmer"
                style="color:#424242;width:100px;height:20px;"
              ></p>
            </div>
          </v-card-title>

          <v-card-actions class="mt-0">
            <v-spacer></v-spacer>
            <span class="animate-shimmer" style="color:#424242;width:60px;height:25px;"></span>
          </v-card-actions>
        </v-card>
      </v-flex>

      <v-flex xs12 sm6 md4 lg4 v-for="(item,i) in eventsData" :key="i">
        <v-card
          flat
          class="ma-1 pa-1 my-0 elevation-0"
          style="border-radius:7px;border:1px #ddd solid"
        >
          <v-card-title class="mb-0">
            <div>
              <p class="google-font mb-2" style="font-size:140%;color:#0277bd">{{ item.name }}</p>
              <p class="google-font mt-2 mb-1">
                <span
                  v-html="$options.filters.summery(item.description,180)"
                  style="font-size:110%"
                ></span>
              </p>
              <p class="google-font mt-1 mb-0" style="font-size:110%">
                <v-icon>insert_invitation</v-icon>
                {{item.local_date}}
              </p>
              <p class="google-font mt-1 mb-0" style="font-size:110%">
                <v-icon>watch_later</v-icon>
                {{item.local_time}}
              </p>
              <p class="google-font mt-1 mb-0" style="font-size:110%">
                <v-icon>map</v-icon>
                {{item.venue.name | summery(30)}}
              </p>
            </div>
          </v-card-title>

          <v-card-actions class="mt-0">
            <v-spacer></v-spacer>
            <v-btn
              flat
              color="#4C4A78"
              :href="item.link"
              target="_blank"
              class="mb-0 ml-0 mt-0 google-font"
              style="border-radius:7px;text-transform: capitalize;"
            >See More</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>

      <v-flex xs12 v-if="notFoundUpcomingEventFlag==true">
        <p class="google-font px-2" style="font-size:140%">
          <v-icon>highlight_off</v-icon>Upcoming Events Not Found!
        </p>
      </v-flex>
    </v-layout>

    <!-- Mobile Screen -->
    <v-layout wrap align-center justify-center row fill-height class="hidden-md-and-up">
      <v-flex xs12 v-if="showLoader">
        <v-layout row wrap>
          <v-flex xs12 sm6 md4 lg4 v-for="n in 2" :key="`4${n}`">
            <v-list two-line subheader class="pa-2 grey lighten-5">
              <v-list-tile avatar>
                <v-list-tile-avatar>
                  <v-avatar color="animate-shimmer">
                    <span class="google-font" style="width:100vh;"></span>
                  </v-avatar>
                </v-list-tile-avatar>

                <v-list-tile-content>
                  <v-list-tile-title
                    class="google-font animate-shimmer"
                    style="color:#424242;width:200px;height:20px;"
                  ></v-list-tile-title>
                  <v-list-tile-sub-title
                    class="google-font mt-1 animate-shimmer"
                    style="color:#424242;width:100px;height:20px;"
                  ></v-list-tile-sub-title>
                </v-list-tile-content>

                <v-list-tile-action>
                  <v-icon color="grey lighten-3">info</v-icon>
                </v-list-tile-action>
              </v-list-tile>
            </v-list>
          </v-flex>
        </v-layout>
      </v-flex>

      <v-flex xs12>
        <v-slide-y-reverse-transition>
          <v-list two-line subheader v-show="showData" class="grey lighten-5">
            <v-list-tile
              v-for="(item,i) in eventsData"
              :key="i"
              avatar
              style="border-color:#e0e0e0;border-width: 1px;border-style: solid;border-top:0; border-left:0; border-right:0; border-bottom:1"
            >
              <v-list-tile-avatar>
                <v-avatar color="grey lighten-2">
                  <span class="google-font" style="width:100vh">{{getCharString(item.name)}}</span>
                </v-avatar>
              </v-list-tile-avatar>

              <v-list-tile-content>
                <v-list-tile-title class="google-font">{{ item.name }}</v-list-tile-title>
                <v-list-tile-sub-title
                  class="google-font"
                >{{ item.local_date }} | {{ item.local_time }}</v-list-tile-sub-title>
              </v-list-tile-content>

              <v-list-tile-action>
                <v-tooltip bottom>
                  <v-btn icon ripple :href="item.link" target="_blank" slot="activator">
                    <v-icon color="grey darken-1">info</v-icon>
                  </v-btn>

                  <span>See More about {{item.name}}</span>
                </v-tooltip>
              </v-list-tile-action>
            </v-list-tile>
          </v-list>
        </v-slide-y-reverse-transition>
      </v-flex>

      <v-flex xs12 v-if="notFoundUpcomingEventFlag==true">
        <p class="google-font px-2" style="font-size:140%">
          <v-icon>highlight_off</v-icon>Upcoming Events Not Found!
        </p>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import ChapterDetails from "@/assets/data/chapterDetails.json";
import { MeetupAPI } from "@/config/key";

export default {
  data() {
    return {
      chapterDetails: ChapterDetails,
      eventsData: [],
      showLoader: true,
      showData: false,
      notFoundUpcomingEventFlag: false,
      errorMsg: "",
      errorAlert: false
    };
  },
  created() {
    fetch(
      "https://cors-anywhere.herokuapp.com/https://api.meetup.com/" +
        MeetupAPI.urlname +
        "/events?&sign=true"
    )
      .then(data => data.json())
      .then(res => {
        if (res.length > 0) {
          this.showLoader = false;
          this.showData = true;
          this.eventsData = res;
        } else {
          this.showLoader = false;
          this.notFoundUpcomingEventFlag = true;
        }
      })
      .catch(e => {
        this.showLoader = false;
        this.errorMsg = "Issue found with " + e;
        this.errorAlert = true;
        this.notFoundUpcomingEventFlag = true;
      });
  },
  methods: {
    getCharString(data) {
      var splitArr = data.split(" ");
      if (splitArr.length > 1) {
        return (
          splitArr[0].substring(0, 1) +
          "" +
          splitArr[1].substring(0, 1)
        ).toUpperCase();
      } else {
        return splitArr[0].substring(0, 1).toUpperCase();
      }
    }
  },
  filters: {
    summery: (val, num) => {
      return val.substring(0, num) + "...";
    }
  }
};
</script>

<style>
.animate-shimmer {
  background: linear-gradient(286deg, #ffffff, #ddd);
  background-size: 400% 400%;

  -webkit-animation: AnimationName 5s ease infinite;
  -moz-animation: AnimationName 5s ease infinite;
  animation: AnimationName 5s ease infinite;
}

@-webkit-keyframes AnimationName {
  0% {
    background-position: 0% 52%;
  }
  50% {
    background-position: 100% 49%;
  }
  100% {
    background-position: 0% 52%;
  }
}

@-moz-keyframes AnimationName {
  0% {
    background-position: 0% 52%;
  }
  50% {
    background-position: 100% 49%;
  }
  100% {
    background-position: 0% 52%;
  }
}

@keyframes AnimationName {
  0% {
    background-position: 0% 52%;
  }
  50% {
    background-position: 100% 49%;
  }
  100% {
    background-position: 0% 52%;
  }
}
</style>


