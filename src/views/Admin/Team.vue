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

    <v-snackbar
      :timeout="5000"
      v-model="removeSuccess"
      bottom right
      >
          Team Member Removed Successfully
          <v-btn
              color="pink"
              text
              @click="removeSuccess = false"
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
              <!-- {{teamData}} -->
              <v-col col="12" md="2" v-for="(item,i) in teamData" :key="i" class="pa-1">

                <div v-on:click="showTeam(item.id)" style="cursor: pointer;" class="text-center py-3 elevation-1 white">
     
                  <v-avatar size="100">
                      <img 
                      :src="getImgUrl(item.image)"
                      :lazy-src="getImgUrl(item.image)" alt=""
                      >
                  </v-avatar>
                  <p class="mt-3 mb-0 google-font mb-0" style="font-size:120%">{{item.name}}</p>
                  <p class="mt-0 mb-0 google-font mt-0" style="font-size:80%">{{item.designation}}</p>
                  <v-chip class="ma-1" x-small>{{item.role}}</v-chip>
                  <!-- <v-chip class="ma-1" x-small>{{teamData.visible}}</v-chip>
                  <v-chip class="ma-1" x-small>{{teamData.active}}</v-chip> -->
                      <!-- <socialMediaDetails :data="{data:teamData.socialLinks}"/> -->
                </div>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
        
      </v-row>
      <!-- <v-row justify="center" align="center"> 
          <v-col cols="12" md="11">
            <v-data-table
            :headers="headers"
            :items="teamData"
            :items-per-page="10"
            :search="search"
            class="elevation-1"
            :loading="loading" 
            loading-text="Loading... Please wait"
            >
               
            </v-data-table>
          </v-col>
      </v-row> -->
      
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
        removeSuccess:false,
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
          { text: 'Designation', value: 'designation' },
          { text: 'Role', value: 'role' },
          { text: 'Visible', value: 'visible' },
          { text: 'Active', value: 'active' },
          { text: 'See More', value: '' },
        ],
        teamData:[],
        snackbarSuccess:false
    }),
    created(){
      if(this.$route.query.msg) {
        this.removeSuccess = true
        // this.alert  = this.$route.query.msg;
      }
    },
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
      showTeam(id){
        this.$router.replace('/admin/dashboard/team/'+id)
      },
      getImgUrl(pic) {
          if(pic.length>0){
              return require('@/assets/img/team/'+pic)
          }else{
              return require('@/assets/img/common/avatar.png')
          }
      },
      showData(){
          this.teamLoader = true
          // this.dataLoadingStatus = true
          this.teamData = []
          console.log('Calling Show Data')
          firebase.firestore().collection('team').get()
          .then((snapshot) => {
              snapshot.forEach((doc) => {
                  this.id = doc.id
                  // console.log(this.id)
                  // doc.data().docId = this.id
                  // Object.assign(doc.data(), {docID: doc.id});
                  // console.log(typeof(doc.data()))
                  this.teamData.push(doc.data())
                  // console.log(this.teamData)
                  
              });
              this.teamLoader = false
              this.loading = false
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
