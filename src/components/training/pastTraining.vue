<template>
  <v-container fluid>
    
    <v-col cols="12" md="12" lg="12" sm="12" class>
        <p class="google-font mb-0" style="font-size:150%;color: #1a73e8;">Directory of Upcoming Trainings</p>
        <p class="google-font mt-0 mb-0" style="font-size:95%" >Trainings are listed in chronological order by date.</p>
      </v-col>
      
    <br>

    <v-col cols="12" md="12" lg="12" sm="12" class>
        <p class="google-font mb-0" style="font-size:150%;color: #1a73e8;">Directory of Past Trainings</p>
        <p class="google-font mt-0 mb-0" style="font-size:95%" >Trainings are listed in chronological order by date.</p>
      </v-col>
      
    <v-container>
      <v-row v-for="(itemp,i) in pasttrainingdata" :key="i">
        <v-col md="3" lg="3" sm="6" cols="6" class="pa-2" v-for="(item,j) in itemp" :key="j" >
            <v-dialog v-model="dialog" width="700">
              <template v-slot:activator="{ on }">
                <div
                  v-on="on"
                  style="cursor: pointer;"
                  :class="$vuetify.theme.dark == true?'darkModeCard':'lightModeCard'"
                  class="pa-3"
                >
                  <!-- <v-list-item>
                    <v-list-item-avatar color="#1a73e8"></v-list-item-avatar>
                  </v-list-item> -->
                  <p class="google-font mt-1 mb-0" style="font-size:90%">{{item.date}}</p>
                  <p class="google-font ma-0 mt-0" style="font-size:120%;">{{item.name}}</p>
                  <p class="mb-0 mt-2 google-font" style="color:#1a73e8">See More</p>                
                </div>
                
              </template>
              <v-card color v-if="dialog">
                <v-card-title
                  class="px-5 py-5 google-font"
                  style="background-position:right bottom;"
                >{{item.name}}</v-card-title>

                <v-card-text class="pa-5">
                  <p class="google-font mt-3 mb-0" style="font-size:110%">
                    <b>Venue:</b>
                    {{item.venue}}
                  </p>
                  <p class="google-font mt-1 mb-0" style="font-size:110%">
                    <b>Date:</b>
                    {{item.date}}
                  </p>
                  <p class="google-font mt-0 mb-0" style="font-size:110%;">
                    <b>Video Day 1:</b>
                    {{item.D1link}}
                  </p>
                  <p class="google-font mt-0 mb-0" style="font-size:110%;">
                    <b>Video Day 2:</b>
                    {{item.D2link}}
                  </p>
                  <p class="google-font mt-3 mb-0" style="font-size:110%">
                    <b>Description:</b>
                    {{item.description}}
                  </p>
                </v-card-text>

              <!--
                <v-divider></v-divider>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="primary" text @click="dialog = false">Close</v-btn>
                </v-card-actions> -->
              </v-card>
            </v-dialog>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
import communitydata from "@/assets/data/communitydata.json";
import pasttrainingdata from "@/assets/data/pasttrainingdata.json";
import pastEventCard from "@/components/common/card/pastEvent/pastEventCard";
import pastEventCardLoader from "@/components/common/card/pastEvent/pastEventCardLoader";
import { configData } from "@/config/config";

export default {
  name: "App",
   components: {
     pastEventCard,
     pastEventCardLoader
  },
  data: () => ({
    communitydata: communitydata,
    pasttrainingdata: pasttrainingdata,
    dialog: false
  })
};
</script>