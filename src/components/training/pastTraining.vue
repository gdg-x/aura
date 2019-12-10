<template>
  <v-container fluid>
    <v-col cols="12" md="12" lg="12" sm="12" class>
        <p class="google-font mb-0" style="font-size:150%;color: #1a73e8;">Directory of Past Trainings</p>
        <p class="google-font mt-0 mb-0" style="font-size:95%" >Trainings are listed in chronological order by date.</p>
      </v-col>
      
      <v-container>
      <v-row justify="space-between" v-for="(itemp,i) in trainingdata" :key="i">
        <v-col cols="12" md="12" lg="12" sm="12" class="mx-1 mt-5" v-if="itemp.length>0">
          <p class="google-font mb-0" style="font-size:130%">{{i}}</p>
        </v-col>
        <!-- <v-sheet class="mx-auto" elevation="1" height="300" max-width="900"> -->
        <v-slide-group class="pa-2" show-arrows>
          <v-col v-for="(item,j) in itemp" :key="j" class>
           <v-list-item three-line> 
              <v-list-item-avatar
                tile
                size="30"
                color="#327cdb"
              ></v-list-item-avatar>
              
              <v-list-item-content>
                <v-list-item-title class="headline mb-1">{{item.name}}</v-list-item-title>
                <v-list-item-subtitle>{{item.date}}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-col>
        </v-slide-group>
        <!-- </v-sheet> -->
      </v-row>
    </v-container>
    
    <v-col cols="12" md="12" lg="12" sm="12" class>
        <p class="google-font mb-0" style="font-size:150%;color: #1a73e8;">Directory of Upcoming Trainings</p>
        <p class="google-font mt-0 mb-0" style="font-size:95%" >Trainings are listed in chronological order by date.</p>
      </v-col>
      
      <!-- <v-row v-if="showLoader">
          <v-col md="4" lg="4" sm="6" cols="12" class="pa-0" v-for="i in 6" :key="i">
            <pastEventCardLoader />
          </v-col>
        </v-row>

        <v-row v-else>
          <v-col
            md="4"
            lg="4"
            sm="6"
            cols="12"
            class="pa-0"
            v-for="(item,i) in eventsData"
            :key="i"
          >
            <v-slide-y-reverse-transition>
              <pastEventCard v-show="showData" :data="{data:item}" />
            </v-slide-y-reverse-transition>
          </v-col>
        </v-row>

        <v-row v-if="notFoundUpcomingEventFlag" class="pa-2">
          <v-col
            md="3"
            lg="3"
            sm="6"
            cols="6"
            class="pa-3"
            :class="$vuetify.theme.dark == true?'darkModeCard':'lightModeCard'">
            <p class="google-font px-2 mb-0" style="font-size:140%">
              <v-icon>mdi-calendar-blank</v-icon>
              <br />No Past Trainings!
            </p>
          </v-col>
        </v-row> -->
  </v-container>
</template>

<script>
import communitydata from "@/assets/data/communitydata.json";
import trainingdata from "@/assets/data/trainingdata.json";
import { configData } from "@/config/config";
import pastEventCard from "@/components/common/card/pastEvent/pastEventCard";
import pastEventCardLoader from "@/components/common/card/pastEvent/pastEventCardLoader";
export default {
  name: "App",
  components: {
    pastEventCard,
    pastEventCardLoader
  },
  data: () => ({
    communitydata: communitydata,
    trainingdata: trainingdata,
    eventsData: [],
    showData: false,
    showLoader: true,
    notFoundUpcomingEventFlag: false,
    errorAlert: false,
    errorMsg: ""
  }),
  created() {
    fetch(
      "https://cors-anywhere.herokuapp.com/https://api.meetup.com/" +
        configData.MeetupURLName +
        "/events?desc=true&photo-host=public&page=8&status=past&sign=true"
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
    getImgUrl(url) {
      if (url.length > 0) {
        return require("@/assets/img/what-we-do/" + url);
      } else {
        return require("@/assets/img/what-we-do/notFound.png");
      }
    },
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
      return val.substring(0, num) + "..";
    },
    dateFilter: value => {
      const date = new Date(value);
      return date.toLocaleString(["en-US"], {
        month: "short",
        day: "2-digit",
        year: "numeric"
      });
    }
  }
};
</script>