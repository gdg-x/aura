<template>
  <v-content>
    <v-container fluid class="py-0 my-0 mt-0">
      <v-row justify="center" align="center" class="py-5" v-if="isLoading">
        <v-col cols="12" md="12" class="text-center">
          <v-progress-circular :width="5" :size="50" color="indigo" indeterminate></v-progress-circular>
        </v-col>
      </v-row>
      <v-row justify="center" align="center" class="py-5" v-else-if="sData.length<=0 && !isLoading">
        <v-col cols="12" md="12">
          <h2 :class="this.$vuetify.theme.dark?'white--text':'grey--text text--darken-3'" class="google-font mb-0">No Speaker Found.</h2>
          <!-- <p class="google-font" style="font-size:120%">No Speaker Found.</p> -->
        </v-col>
      </v-row>
      <v-row class="py-0 my-0" v-else>
        <v-col md="12" sm="12" cols="12" class="py-0 my-0">
          <v-row class="mt-5">
            <v-col class="">
              <h2 :class="this.$vuetify.theme.dark?'white--text':'grey--text text--darken-3'" class="google-font mb-0">Our Team</h2>
            </v-col>
          </v-row>
          <v-row class="" v-if="checkExistance(eventDetails.team,0)">
            <v-col cols="6" md="4" lg="3" xl="2" sm="3" class="pa-1" v-for="(item,i) in sData" :key="i">
              <TeamMemberCard :data="item" />
            </v-col>
          </v-row>
          <!-- <v-row class="mt-5">
            <v-col>
              {{eventDetails}}
            </v-col>
          </v-row> -->
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
import service from "@/services/appservices";
export default {
  name:"teamEvents",
  components:{
    TeamMemberCard: ()=>import('../../components/team/CoreTeamMemberCard')
  },
  props:['eventDetails'],
  data:()=>({
    ErrorMsg: "",
    TeamData: [],
    sData: [],
    isLoading: false
  }),
  created() {
    this.getAllTeam();
  },
  methods: {
    getAllTeam() {
      this.isLoading = true;
      this.sData = [];
      service
        .getTeam()
        .then(res => {
          if (res.success == true) {
            this.TeamData = res.data;
            this.eventDetails.team.map(s => {
              this.TeamData.map(obj => {
                if (obj.id == s) {
                  // console.log(obj);
                  this.sData.push(obj);
                }
              });
            });
          }
          this.isLoading = false;
        })
        .catch(e => {
          this.ErrorMsg = e;
          this.isLoading = false;
        });
    }
  }
}
</script>

<style>

</style>