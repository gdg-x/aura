<template>
    <v-container class="pa-0">
        <v-layout wrap align-center justify-center row fill-height class="mt-0 mb-0" >
           <v-flex xs12 md12 lg12 class="pa-2 mb-0">
               <p class="google-font mb-0" style="font-size:170%">Directory of past events</p>
               <p class="google-font mt-0 mb-0" style="font-size:120%">
                   Events are listed in reverse chronological order by date.
               </p>     
            </v-flex> 
        </v-layout>

        

        <v-layout wrap align-center justify-center row fill-height >
            <v-flex xs12 v-if="showLoader">
                <v-progress-circular
                    :size="50"
                    color="blue"
                    indeterminate
                ></v-progress-circular>
            </v-flex>

            <v-flex xs12>
                <v-slide-y-reverse-transition>
                    <v-list two-line subheader v-show="showData">
                        <v-list-tile
                            v-for="(item,i) in eventsData" :key="i"
                            avatar
                            style="border-color:#e0e0e0;border-width: 1px;border-style: solid;border-top:0; border-left:0; border-right:0; border-bottom:1"
                        >
                            <v-list-tile-avatar>
                                <v-icon>view_compact</v-icon>
                            </v-list-tile-avatar>

                            <v-list-tile-content>
                                <v-list-tile-title class="google-font">{{ item.name }}</v-list-tile-title>
                                <v-list-tile-sub-title class="google-font">{{ item.local_date }} | {{ item.local_time }}</v-list-tile-sub-title>
                            </v-list-tile-content>

                            <v-list-tile-action>
                                <v-btn icon ripple :href="item.link"
                                target="_blank">
                                    <v-icon color="grey lighten-1">arrow_forward</v-icon>
                                </v-btn>
                            </v-list-tile-action>
                            
                        </v-list-tile>
                        

                    </v-list>
                </v-slide-y-reverse-transition>
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
            showLoader: true,
            showData:false,
        }
    },
    mounted(){
        fetch('https://cors.io/?https://api.meetup.com/'+MeetupAPI.urlname+'/events?desc=true&photo-host=public&page=8&status=past&key='+MeetupAPI.apiKey).then(data=>data.json()).then(res=>{
            console.log(res)
            this.showLoader = false
            this.showData = true
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
