<template>
    <v-container fluid class="py-0 my-0 mt-0">
        <v-row class="py-0 my-0">
            <v-col md="12" sm="12" cols="12" class="py-0 my-0">
                <v-row class="">
                    <v-col>
                        <p class="google-font mb-0"><b>About</b></p>
                        <p class="google-font mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto asperiores non aliquid consequuntur sapiente nobis, iste aperiam aut nemo, ex a, tenetur ducimus quis labore quibusdam alias! Nobis, officia saepe. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto asperiores non aliquid consequuntur sapiente nobis, iste aperiam aut nemo, ex a, tenetur ducimus quis labore quibusdam alias! Nobis, officia saepe. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto asperiores non aliquid consequuntur sapiente nobis, iste aperiam aut nemo, ex a, tenetur ducimus quis labore quibusdam alias! Nobis, officia saepe.</p>
                        

                        <p class="google-font mb-0 mt-3"><b>Date:</b> 29th Nov 2019</p>
                        <p class="google-font mb-0 mb-0"><b>Time:</b> 9 am to 5 pm</p>
                        <p class="google-font mb-0 mb-0"><b>Venue:</b> Your Venue Name</p>
                        <br>
                        <v-btn class="ml-0 ma-2" outlined color="indigo">Registration</v-btn>
                        <v-btn class="ma-2" outlined color="indigo">Meetup</v-btn>
                        <v-btn class="ma-2" outlined color="indigo">Facebook</v-btn>
                        <v-btn class="ma-2" outlined color="indigo">Feedback</v-btn>
                        
                    </v-col>
                </v-row>
               
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import communitydata from '@/assets/data/communitydata.json'
import { configData } from "@/config/config";
export default {
    components:{
        
    },
    data() {
        return {
            communitydata: communitydata,
            cd: configData
        }
    },
    
}
</script>