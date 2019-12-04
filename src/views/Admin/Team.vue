<template>
  <v-content class="grey lighten-5">
    <v-snackbar
      :timeout="5000"
      v-model="snackbarSuccess"
      >
          Team Member Added Successfully
          <v-btn
              color="pink"
              text
              @click="snackbarSuccess = false"
          >
              Close
          </v-btn>
    </v-snackbar>
    <v-container fluid class="text-center ">
      <v-row justify="center" align="center">
          <v-col cols="12" md="11">
              <v-toolbar class="elevation-1">
                <v-toolbar-title>Team Details: </v-toolbar-title>
                <div class="flex-grow-1"></div>
                <v-text-field
                    flat
                    v-model="search"
                    solo-inverted
                    hide-details
                    prepend-inner-icon="mdi-search-web"
                    label="Search"
                    single-line
                    class="hidden-sm-and-down"
                ></v-text-field>
                <AddTeam @showSuccess="showData" class="ml-2"/>
                <!-- <v-btn text v-on:click="dataLoad" icon color="indigo" class="ml-2">
                    <v-icon>mdi-reload</v-icon>
                </v-btn> -->
            </v-toolbar>
          </v-col> 
      </v-row>

      <v-row justify="center" align="center" class="">
        <v-col cols="12" md="11" class="">
          <v-container fluid>
            <v-row justify="center" align="center" v-if="teamLoader">
              <v-col col="12" md="2" class="text-center">
                <v-progress-circular
                  :width="4"
                  :size="70"
                  color="indigo"
                  indeterminate
                ></v-progress-circular>
              </v-col>
            </v-row>
            <v-row v-else>
              <v-col col="12" md="2" v-for="(item,i) in teamData" :key="i" class="pa-1">
                <Team :teamData="item" />
              </v-col>
            </v-row>
          </v-container>
        </v-col>
        
      </v-row>
      <!-- <v-row justify="center" align="center"> 
          <v-col cols="12" md="11">
            <v-data-table
            :headers="headers"
            :items="eventsData"
            :items-per-page="10"
            :search="search"
            class="elevation-1"
            :loading="loading" 
            loading-text="Loading... Please wait"
            >
                <template v-slot:item.status="{ item }">
                    <v-chip v-if="item.status == true" class="green" small dark>Upcoming</v-chip>
                    <v-chip v-else class="red" small dark>Past</v-chip>
                </template>

                <template v-slot:item.link="{ item }">
                    <a :href="item.link" target="_blank" style="text-decoration:none">See More</a>
                </template>
            </v-data-table>
          </v-col>
      </v-row>
       -->
    </v-container>
  </v-content>
</template>

<script>
import firebase from 'firebase/app'
import { firestore } from 'firebase';
import { configData } from "@/config/config";
import AddTeam from '../../components/Admin/Team/addTeam'
import Team from '../../components/Admin/Team/viewTeam'
export default {
    components:{
      AddTeam,
      Team
    },
    name:"admin-dashboard",
    data:()=>({
        teamLoader:true,
        search:'',
        loading:true,
        headers: [
          {
            text: 'Name',
            align: 'left',
            sortable: false,
            value: 'name',
          },
          { text: 'Date', value: 'local_date' },
          { text: 'Status', value: 'status' },
          { text: 'Venue', value: 'venue.name' },
          { text: 'RSVP Yes', value: 'yes_rsvp_count' },
          { text: 'See More', value: 'link' },
        ],
        teamData:[],
        snackbarSuccess:false
    }),
    mounted(){
        // firebase.auth().currentUser
        if(firebase.auth().currentUser){
            // this.userEmail = firebase.auth.currentUser.email
            this.showData()
        }else{
            this.$router.replace('login')
        }
    },
    methods:{
      showData(){
          this.teamLoader = true
          // this.dataLoadingStatus = true
          this.teamData = []
          console.log('Calling Show Data')
          firebase.firestore().collection('team').get()
          .then((snapshot) => {
              snapshot.forEach((doc) => {
                  this.id = doc.id
                  console.log(doc.data())
                  this.teamData.push(doc.data())
                  console.log(this.teamData)
                  
              });
              this.teamLoader = false
          })
          .catch((err) => {
              console.log('Error getting documents', err);
          });
          // this.snackbarSuccess = true
          // this.dataLoadingStatus = false
      }
    }
}
</script>
