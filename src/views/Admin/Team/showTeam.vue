<template>
  <v-content :class="$vuetify.theme.dark == true?'blank':'grey lighten-5'">
    <v-container fluid class="text-center ">
        <v-snackbar
        :timeout="5000"
        v-model="snackbarSuccess"
        bottom right
        >
            Team Member Edited Successfully
            <v-btn
                color="pink"
                text
                @click="snackbarSuccess = false"
            >
                Close
            </v-btn>
        </v-snackbar>
    
      <v-row justify="center" align="center">
          <v-col cols="12" md="11">
                
                <v-toolbar class="elevation-1">
                    
                    <router-link
                    to="/admin/dashboard/team/"
                    :color="$vuetify.theme.dark == true?'white':'black'"
                    class="ma-0 google-font mb-0"
                    style="border-radius:5px;text-transform: capitalize;text-decoration:none;"
                >
                <v-icon left>mdi-arrow-left-thick</v-icon>
                Team</router-link>
                &nbsp;
                <!-- <v-toolbar-title>Team Details: </v-toolbar-title> -->
                    <div class="flex-grow-1"></div>
                    <editTeam :teamData="teamData" v-on:editedSuccess="editedSuccessFun" class="mr-2" v-if="showTeamData"/>
                    &nbsp;
                    <removeTeam class="mr-1" v-if="showTeamData" :teamData="{id:$route.params.id,name:teamData.name}" />

                    <v-tooltip bottom v-if="showTeamData">
                        <template v-slot:activator="{ on }">
                            <v-btn icon v-on="on" target="_blank" v-on:click="showPublicURL($route.params.id)">
                            <v-icon color="indigo">mdi-eye</v-icon>
                            </v-btn>
                        </template>
                        <span>Show Public URL</span>
                    </v-tooltip>
                </v-toolbar>
              <!-- {{$route.params.id }} -->
          </v-col> 
      </v-row>
      <v-row justify="center" align="center" class="" v-if="showLoader">
        <v-col cols="12" md="11" class="">
            <v-progress-circular
                :width="4"
                :size="70"
                color="indigo"
                indeterminate
            ></v-progress-circular>
        </v-col>
      </v-row>

      <v-row justify="center" align="center" class="" v-if="showTeamData">
        <v-col cols="12" md="11" class="">
          <v-container fluid>
            <v-row>
              <v-col col="12" md="3" class="pa-1 elevation-1 py-5" :class="$vuetify.theme.dark == true?'grey darken-4':'white'">
                <v-avatar size="120">
                    <img 
                    :src="getImgUrl(teamData.image)"
                    :lazy-src="getImgUrl(teamData.image)" alt=""
                    >
                </v-avatar>
                
                <p class="mt-3 mb-0 google-font mb-0" style="font-size:120%">{{teamData.name}}</p>
                <p class="mt-1 mb-0 google-font mt-0" style="font-size:100%">{{teamData.designation}}</p>

                <v-chip class="mt-2" small>{{teamData.role}}</v-chip>

                <br><br>
                <v-chip class="ma-1" v-if="teamData.visible" dark label color="green" small>Visible</v-chip>
                <v-chip class="ma-1" v-else label dark color="red" small>Not Visible</v-chip>

                <v-chip class="ma-1" v-if="teamData.active" dark label color="green" small>Active</v-chip>
                <v-chip class="ma-1" v-else label dark color="red" small>Not Active</v-chip>
                
                <br><br>
                
                <br>
                
              </v-col>

              <v-col col="12" md="9" class="elevation-1 py-5 text-left pa-5" :class="$vuetify.theme.dark == true?'grey darken-4':'white'">
                <p class="mb-0"><b>Bio</b></p>
                <p class="mt-1 mb-0 google-font mt-0" style="font-size:110%">{{teamData.bio}}</p>

                <p class="mb-0 mt-3"><b>Email</b></p>
                <p class="mt-0 mb-0 google-font mt-0" style="font-size:110%">{{teamData.email}}</p>

                <p class="mb-0 mt-3"><b>Mobile</b></p>
                <p class="mt-0 mb-0 google-font mt-0" style="font-size:110%">{{teamData.mbnumber}}</p>

                <p class="mb-0 mt-3"><b>User ID</b></p>
                <p class="mt-0 mb-0 google-font mt-0" style="font-size:110%">{{teamData.id}}</p>

                <p class="mb-0 mt-3"><b>Social Links</b></p>
                <p class="mt-1 mb-0 google-font mt-0" style="font-size:110%">
                    <span style="cursor: pointer;" v-for="(slink,i) in teamData.socialLinks" :key="i" class="mr-1">
                        <a v-if="slink" :href="slink" target="_blank" style="text-decoration:none;">
                            <v-chip small style="text-transform: uppercase;">{{i}}</v-chip>
                        </a>
                    </span>
                </p>
                
                
              </v-col>
            </v-row>
          </v-container>
        </v-col>
        
      </v-row>

    <v-row justify="center" align="center" class="" v-if="userNotFound">
        <v-col cols="12" md="11" >
            <v-container fluid>
                <v-row class="elevation-1 pa-3 white">
                    <v-col>
                        <h1>User Not Found</h1>
                    </v-col>
                </v-row>
            </v-container>
        </v-col>
    </v-row>
      
    </v-container>
  </v-content>
</template>

<script>
import firebase from 'firebase/app'
import { firestore } from 'firebase';
import { configData } from "@/config/config";
import removeTeam from '../../../components/Admin/Team/removeTeam'
import editTeam from '../../../components/Admin/Team/editTeam'
export default {
    components:{
        removeTeam,
        editTeam
    },
    name:"admin-dashboard",
    data:()=>({
        snackbarSuccess:false,
        userNotFound:false,
        showTeamData: false,
        showLoader: true,
        teamLoader:true,
        search:'',
        loading:true,
       
        teamData:[],
        snackbarSuccess:false
    }),
    created(){
        if(this.$route.params.id){
            this.getTeamData()
        }
    },
    mounted(){
        // firebase.auth().currentUser
        if(firebase.auth().currentUser){
            // this.userEmail = firebase.auth.currentUser.email
            // this.showData()
        }else{
            this.$router.replace('login')
        }
    },
    methods:{ 
      showPublicURL(uid){
        let routeData = this.$router.resolve({path: `/team/${uid}`});
        window.open(routeData.href, '_blank');
      },
      editedSuccessFun(){
        console.log('calls')
        this.snackbarSuccess = true
        this.getTeamData()
      },
      getTeamData(){
          this.showLoader = true
          this.showTeamData = false
          this.userNotFound = false
          firebase.firestore().collection('team').doc(this.$route.params.id).get().then(doc=>{
            console.log(doc.data())
            if(doc.data() == undefined){
                this.showLoader = false
                this.showTeamData = false
                this.userNotFound = true
            }
            else if(doc.data()){
                this.showTeamData = true
                this.showLoader = false
                this.teamData = doc.data()
            }
            else{
                this.showTeamData = false
                this.showLoader = false
                this.userNotFound = true
            }
          })
      },
      showTeam(id){
        this.$router.replace('/admin/dashboard/team/'+id)
      },
      getImgUrl(pic) {
          if(pic.length>0){
              return pic
            //   return require('@/assets/img/team/'+pic)
          }else{
              return require('@/assets/img/common/avatar.png')
          }
      },
   
    }
}
</script>
