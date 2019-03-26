<template>
    <v-container class="pa-0">
        <v-layout wrap align-center justify-center row fill-height class="my-3 " >
           <v-flex xs12 md9 lg9 class="pa-2 text-xs-center">
               <p class="google-font" style="font-size:170%">Our Events & Meetups</p>
               <p class="google-font" style="font-size:120%">
                   At sessions that span from the technical to the visionary, let’s celebrate and discover what the technologies can enable: how product innovation, open source, and ML and AI can propel enterprises forward and solve the big problems that impact all of us.
               </p>
               <router-link to="/events" flat color="#4C4A78" class="ma-0 google-font" style="border-radius:5px;text-transform: capitalize;text-decoration:none;color:#4C4A78">See More</router-link>             
            </v-flex> 
        </v-layout>

        <v-layout wrap align-start justify-center row fill-height class="hidden-sm-and-down mb-4">
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
                                <v-icon small>insert_invitation</v-icon>
                                {{item.local_date | dateFilter}}
                            </p>
                            <p class="google-font mt-0 mb-0" style="font-size:110%">
                                <v-icon small>watch_later</v-icon>
                                {{item.local_time}}
                            </p>
                            <p class="google-font mt-0 mb-0" style="font-size:110%">
                                <v-icon small>map</v-icon>
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

        <v-layout wrap align-center justify-center row fill-height class="hidden-md-and-up mb-3">
            <v-flex xs12 class="text-xs-center" v-if="showLoader">
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
                                <v-list-tile-sub-title class="google-font">{{ item.local_date |dateFilter }} | {{ item.local_time }}</v-list-tile-sub-title>
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
    created(){
        fetch('https://cors.io/?https://api.meetup.com/'+MeetupAPI.urlname+'/events?desc=true&photo-host=public&page=4&status=past&key='+MeetupAPI.apiKey).then(data=>data.json()).then(res=>{
            this.showLoader = false
            this.showData = true
            this.eventsData = res
        })
    },
    filters:{
        summery: (val,num)=>{
            return val.substring(0,num)+".."
        },
        dateFilter: (value)=>{
            const date = new Date(value)
            return date.toLocaleString(['en-US'], {month: 'short', day: '2-digit', year: 'numeric'})
        }
    }
}
</script>
