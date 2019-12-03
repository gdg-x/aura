<template>
  <v-content>
    <v-container fluid class="text-center">
      <v-row justify="center" align="center">
          <v-col cols="12" md="11">
              <v-toolbar class="elevation-1">
                <v-toolbar-title>Events Details: </v-toolbar-title>
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
                <!-- <v-btn text v-on:click="dataLoad" icon color="indigo" class="ml-2">
                    <v-icon>mdi-reload</v-icon>
                </v-btn> -->
            </v-toolbar>
          </v-col> 
      </v-row>
      <v-row justify="center" align="center"> 
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
      
    </v-container>
  </v-content>
</template>

<script>
import firebase from '@/firebase';
import { configData } from "@/config/config";
export default {
    components:{
        
    },
    name:"admin-dashboard",
    data:()=>({
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
        userEmail:'',
        title:"",
        body:"",
        isLoading:false,
        isSuccessAlert:false,
        eventsData: [],
        showLoader: true,
        notFoundEventFlag: false
    }),
    mounted(){
        if(firebase.auth.currentUser){
            this.userEmail = firebase.auth.currentUser.email
            this.loading = true
            fetch("https://cors-anywhere.herokuapp.com/https://api.meetup.com/" +
                configData.MeetupURLName +
                "/events?desc=true&photo-host=public&sign=true&page=1000&status=past")
            .then(data => data.json())
            .then(res => {
                if (res.length > 0) {
                    this.showLoader = false;
                    // this.showData = true;
                    this.eventsData = res;
                    this.loading = false
                    // console.log(this.eventsData)
                } else {
                    this.notFoundEventFlag = true;
                    this.loading = false
                    this.showLoader = false;
                }
            })
            .catch(e => {
                this.showLoader = false;
                this.errorMsg = "Issue found with " + e;
                // this.errorAlert = true;
                // this.notFoundEventFlag = true;
            });
        }else{
            this.$router.replace('admin')
        }
    },
    methods:{
      
        logout(){
            firebase.auth.signOut().then(()=>{
                this.$router.replace('/admin')
            })
        }
    }
}
</script>
