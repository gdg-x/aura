<template>
    <v-dialog
      v-model="dialog"
      width="700"
    >
      <template v-slot:activator="{ on }">
          <div v-on="on" style="cursor: pointer;" class="text-center py-3 elevation-1 white" >
            <!-- {{teamData}} -->
            <v-avatar size="100">
                <img 
                :src="getImgUrl(teamData.image)"
                :lazy-src="getImgUrl(teamData.image)" alt=""
                >
            </v-avatar>
            <p class="mt-3 mb-0 google-font mb-0" style="font-size:120%">{{teamData.name}}</p>
            <p class="mt-1 mb-0 google-font mt-0" style="font-size:80%">{{teamData.designation}}</p>
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

        <v-card-text class="pa-5">
            
            <p class="google-font">{{teamData.designation}}</p>
            <p class="google-font">{{teamData.bio}}</p>
            {{teamData}}

            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis dolorem numquam modi libero. Quae itaque eligendi asperiores esse neque placeat recusandae ipsum, veritatis quasi corporis omnis? Tempora minima esse exercitationem.</p>

            <removeTeam @removeSuccess="RemoveSuceess" :teamData="{id:teamData.id,name:teamData.name}" />
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