<template>
    <v-container class="pa-0">
        <v-layout wrap align-center justify-center row fill-height class="mt-5" >
           <v-flex xs12 md9 lg9 class="pa-2 text-xs-center">
               <p class="google-font" style="font-size:170%">Our Events & Meetups</p>
               <p class="google-font" style="font-size:120%">
                   At sessions that span from the technical to the visionary, let’s celebrate and discover what the technologies can enable: how product innovation, open source, and ML and AI can propel enterprises forward and solve the big problems that impact all of us.
               </p>
               <v-btn flat color="#4C4A78" class="ma-0 google-font" style="border-radius:7px;text-transform: capitalize;">See More</v-btn>             
            </v-flex> 
        </v-layout>

        <v-layout wrap align-center justify-center row fill-height>
            <v-flex xs12 class="text-xs-center" v-if="showLoader">
                <v-progress-circular
                    :size="50"
                    color="blue"
                    indeterminate
                ></v-progress-circular>
            </v-flex>
            <v-flex xs12 sm6 md3 lg3 v-for="(item,i) in eventsData" :key="i">
                <v-card 
                    flat
                    class="ma-1 pa-1 my-0" 
                    style="border: 1px solid #e0e0e0;min-height:160px;border-radius:7px">

                    <v-card-title class="mb-0">
                        <div>
                            <p class="google-font mb-0" style="font-size:130%">{{ item.name | summery(25) }}</p>
                            <p class="google-font mt-1 mb-0" style="font-size:110%">
                                {{item.local_date}}
                            </p>
                            <p class="google-font mt-0 mb-0" style="font-size:110%">
                                {{item.local_time}}
                            </p>
                            <p class="google-font mt-0 mb-0" style="font-size:110%">
                                <v-icon>map</v-icon>
                                {{item.venue.name | summery(30)}}
                            </p>
                        </div>
                    </v-card-title>

                   
                     <v-card-actions class="mt-0">
                        <v-spacer></v-spacer>
                        <v-btn flat color="#4C4A78" :href="item.link" target="_blank" class="mb-0 ml-0 mt-0 google-font" style="border-radius:7px;text-transform: capitalize;">See More</v-btn> 
                    </v-card-actions>
                    
                </v-card>
            </v-flex>
        </v-layout>

    </v-container>
</template>

<script>
import ChapterDetails from '@/assets/data/chapterDetails.json'
import { MeetupAPI } from '@/config/key'
export default {
    data() {
        return {
            chapterDetails: ChapterDetails,
            eventsData:[],
            showLoader: true
        }
    },
    created(){
        fetch('https://cors.io/?https://api.meetup.com/'+MeetupAPI.urlname+'/events?desc=true&photo-host=public&page=4&status=past&key='+MeetupAPI.apiKey).then(data=>data.json()).then(res=>{
            console.log(res)
            this.showLoader = false
            this.eventsData = res
        })
    },
    filters:{
        summery: (val,num)=>{
            return val.substring(0,num)+".."
        }
    }
}
</script>
