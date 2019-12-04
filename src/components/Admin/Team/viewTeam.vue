<template>
    <v-dialog
      v-model="dialog"
      width="1000"
    >
      <template v-slot:activator="{ on }">
          <div v-on="on" style="cursor: pointer;" class="text-center py-3 elevation-1 white">
            <!-- {{teamData}} -->
            <v-avatar size="100">
                <img 
                :src="getImgUrl(teamData.image)"
                :lazy-src="getImgUrl(teamData.image)" alt=""
                >
            </v-avatar>
            <p class="mt-3 mb-0 google-font mb-0" style="font-size:120%">{{teamData.name}}</p>
            <p class="mt-0 mb-0 google-font mt-0" style="font-size:80%">{{teamData.designation}}</p>
            <v-chip class="ma-1" x-small>{{teamData.role}}</v-chip>
            <!-- <v-chip class="ma-1" x-small>{{teamData.visible}}</v-chip>
            <v-chip class="ma-1" x-small>{{teamData.active}}</v-chip> -->
                <!-- <socialMediaDetails :data="{data:teamData.socialLinks}"/> -->
          </div>
          
      </template>

      <v-card color="">
        <v-card-title
          class="px-5 google-font"
          primary-title
        >
         {{teamData.name}} 
        </v-card-title>

        <v-card-text class="pa-5 py-0">
            <v-container fluid>
                <v-row>
                    <v-col cols="12" md="3" class="text-center">
                        <v-avatar size="100">
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

                        <br>
                        
                    </v-col>

                    <v-col cols="12" md="9" >
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
                        <p class="mb-1 mt-4"><b>Action Links</b></p>
                        <removeTeam style="margin-left:0.9px" @removeSuccess="RemoveSuceess" :teamData="{id:teamData.id,name:teamData.name}" />

                    </v-col>
                </v-row>
            </v-container>
            
            <!-- <p class="google-font">{{teamData.designation}}</p>
            <p class="google-font">{{teamData.bio}}</p> -->
            <!-- {{teamData}} -->

            <!-- <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis dolorem numquam modi libero. Quae itaque eligendi asperiores esse neque placeat recusandae ipsum, veritatis quasi corporis omnis? Tempora minima esse exercitationem.</p> -->

            
            <!-- <socialMediaDetails  class="pl-0 ml-0" :data="{data:teamData.socialLinks}"/> -->
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="dialog = false"
          >
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>

<script>
import removeTeam from '../../../components/Admin/Team/removeTeam'
    export default {
        components:{
            removeTeam
        },
        props:{
            teamData:{}
        },
        data() {
            return {
                dialog:false    
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
            RemoveSuceess(){
                // console.log('hola')
                this.dialog = false
                this.$emit('showSuccess')
            }
        }
    }
</script>