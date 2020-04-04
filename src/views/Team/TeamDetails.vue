<template>
    <v-content class="px-0 mx-3">
        <v-container fluid class="pa-0" :class="this.$vuetify.theme.dark == true?'black':'white'">
             <v-row justify="center" align="center" class="py-3"  >
                <v-col md="12" lg="10" sm="11" xs="12" class="pt-3"  >
                    <v-toolbar class="elevation-1" :class="$vuetify.theme.dark == true?'darkModeCard':'whiteTheme'" >
                        <v-btn
                            text
                            @click="goToTeam"
                            class="ma-0 google-font mb-0"
                            style="border-radius:5px;text-transform: capitalize;text-decoration:none;"
                        >
                            <v-icon left style="font-size:150%">mdi-arrow-left-thick</v-icon>
                            <span style="font-size:120%">Team</span>
                        </v-btn>
                        <v-spacer></v-spacer>            
                    </v-toolbar>
                </v-col>
             </v-row>

             <v-row justify="center" align="center" class="py-3 px-4" v-if="loader==false && notFound == false">
                <v-col md="12" lg="10" sm="11" xs="12" class="pt-3" :class="$vuetify.theme.dark == true?'darkModeCard':'whiteTheme'" >
                   <v-container fluid>
                       <v-row>
                            <v-col md="3" lg="3" sm="4" cols="12" class="text-center">
                                <v-avatar size="150">
                                        <img 
                                            :src="MemberDetails.image"
                                            :lazy-src="MemberDetails.image" alt=""
                                        >
                                    </v-avatar>
                                    <p class="google-font mt-3" style="font-size:120%">{{MemberDetails.name}}</p>
                                    <p class="mt-1 mb-0 google-font mt-0" style="font-size:100%">{{MemberDetails.designation}}</p>
                                    <v-chip class="mt-2" small>{{MemberDetails.role}}</v-chip>

                                    <br><br>
                                    <v-chip class="ma-1" v-if="MemberDetails.active" dark label color="green" small>Active</v-chip>
                                    <v-chip class="ma-1" v-else label dark color="red" small>Not Active</v-chip>
                            </v-col>
                            <v-col md="9" lg="9" sm="8" cols="12">
                                    <p class="mb-0"><b>Bio</b></p>
                                    <p class="mt-1 mb-0 google-font mt-0" style="font-size:110%">{{MemberDetails.bio}}</p>

                                    <p class="mb-0 mt-3"><b>Social Links</b></p>
                                    <p class="mt-1 mb-0 google-font mt-0" style="font-size:110%">
                                        <span style="cursor: pointer;" v-for="(slink,i) in MemberDetails.socialLinks" :key="i" class="mr-1">
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

             <v-row justify="center" align="center" class="py-3 px-4" v-id="notFound==true">
                <v-col md="12" lg="10" sm="11" xs="12" class="pt-3" :class="$vuetify.theme.dark == true?'darkModeCard':'whiteTheme'" >
                   <v-container fluid>
                       <v-row>
                            <v-col md="12" lg="12" sm="12" cols="12" class="text-center">
                               <h1>Not Found</h1>
                            </v-col>
                        </v-row>
                   </v-container>
                </v-col>
             </v-row>
             
        </v-container>
    </v-content>
</template>

<script>
import service from '@/services/appservices'
    export default {
        name:'TeamDetails',
        data:()=>({
            MemberDetails:{},
            notFound:false,
            loader:true
        }),
        mounted(){
            this.getTeamMembersDetails(this.$route.params.id)
        },
        methods:{
            goToTeam(){
                this.$router.replace("/team");
            },
            getTeamMembersDetails(id){
                this.loader = true
                this.notFound = false
                service.getTeamMember(id).then(res=>{
                    // console.log(res)
                    if(res.success == true){
                        this.loader = false
                        this.MemberDetails = res.data
                    }
                    else{
                        this.loader = false
                        this.notFound = true
                    }
                }).catch(e=>{
                    this.loader = false
                    console.log(e)
                })
            }
        } 
    }
    
</script>