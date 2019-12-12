<template>
  <v-content class="px-0 mx-0 pt-1" >
    <v-container fluid class="px-0 pt-5 mt-5" >
      <v-row justify="center" align="center" class="py-3" :class="this.$vuetify.theme.dark == true?'black':'grey lighten-5'" >
        <v-col md="12" lg="10" xs="12" class="pt-3 bottom-space"  >

            <v-container fluid class="pa-0">
                <v-row justify="center" align="center" v-if="showLoader">
                    <v-col cols="12" md="12" class="text-center">
                        <v-progress-circular
                            :width="4"
                            :size="70"
                            color="indigo"
                            indeterminate
                        ></v-progress-circular>
                    </v-col>
                </v-row>

                <v-row justify="center" align="center">
                    <v-col cols="12" md="12" class="pa-4">
                        <v-container fluid>
                            <v-row class="mb-3">
                                <v-col class="pa-5 elevation-1" v-if="showTeamData" :class="this.$vuetify.theme.dark == true?'indigo':'white'">
                                   {{teamData.name}} Deatils:
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="12" md="3" class="pa-5 elevation-1 text-center" v-if="showTeamData" :class="this.$vuetify.theme.dark == true?'grey darken-4':'white'">
                                    <v-avatar size="120">
                                        <img 
                                        :src="getImgUrl(search)"
                                        :lazy-src="getImgUrl(search)" alt=""
                                        >
                                    </v-avatar>
                                    
                                    <p class="mt-3 mb-0 google-font mb-0" style="font-size:120%">{{teamData.name}}</p>
                                    <p class="mt-1 mb-0 google-font mt-0" style="font-size:100%">{{teamData.designation}}</p>

                                    <v-chip class="mt-2" small>{{teamData.role}}</v-chip>

                                    <br><br>
                                    <v-chip class="ma-1" v-if="teamData.active" dark label color="green" small>Active</v-chip>
                                    <v-chip class="ma-1" v-else label dark color="red" small>Not Active</v-chip>
                                    
                                    <br><br>
                                    
                                    <br>
                                    
                                </v-col>

                                <v-col cols="12" md="9" class="elevation-1 py-5 text-left pa-5" v-if="showTeamData" :class="this.$vuetify.theme.dark == true?'grey darken-4':'white'">
                                    <p class="mb-0"><b>Bio</b></p>
                                    <p class="mt-1 mb-0 google-font mt-0" style="font-size:110%">{{teamData.bio}}</p>

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
                        <v-col cols="12" md="12" >
                            <v-container fluid>
                                <v-row class="elevation-1 pa-3 white">
                                    <v-col>
                                        <h1 class="google-font">User {{$route.params.id}} Not Found</h1>
                                    </v-col>
                                </v-row>
                            </v-container>
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
export default {
  components: {
  },
  data:()=>({
        snackbarSuccess:false,
        userNotFound:false,
        showTeamData: false,
        showLoader: true,
        teamLoader:true,
        teamData:[],
        search:''
    }),
  created(){
    let metaThemeColor = document.querySelector("meta[name=theme-color]");
    if(this.$vuetify.theme.dark){
      metaThemeColor.setAttribute("content", '#212121');
    }else{
        metaThemeColor.setAttribute("content", '#0277bd');
    }

    if(this.$route.params.id){
        this.getTeamData()
    }
  },
  methods:{
      getImgUrl(pic) {
          if(pic.length>0){
              return require('@/assets/img/team/'+pic)
          }else{
              return require('@/assets/img/common/avatar.png')
          }
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
  }
};
</script>

<style scoped>

</style>


