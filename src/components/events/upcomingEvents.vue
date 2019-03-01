<template>
    <v-container class="pa-0 ">
        <v-layout wrap align-center justify-center row fill-height class="mt-0 mb-0" >
           <v-flex xs12 md12 lg12 class="pa-2 mb-0">
               <p class="google-font mb-0" style="font-size:170%;color:#0277bd">Upcoming Events</p>
               <p class="google-font mt-0 mb-0" style="font-size:120%">
                   Our events are open to newbies, developers, managers, and organizations who are interested in Google's technologies or use them as part of their projects.
               </p>     
            </v-flex> 
        </v-layout>

        <v-layout wrap align-start justify-start row fill-height class="hidden-sm-and-down my-3" :style="{'background-image':'url('+require('@/assets/img/svg/bg.svg')+')'}" style="background-position:right">
            <v-flex xs12 v-if="showLoader">
                <v-progress-circular
                    :size="50"
                    color="blue"
                    indeterminate
                ></v-progress-circular>
            </v-flex>
            <v-flex xs12 sm6 md4 lg4 v-for="(item,i) in eventsData" :key="i">
                <v-card 
                    flat
                    class="ma-1 pa-1 my-0 elevation-1" 
                    style="">

                    <v-card-title class="mb-0">
                        <div>
                            <p class="google-font mb-2" style="font-size:140%;color:#0277bd">{{ item.name }}</p>
                            <p class="google-font mt-2 mb-1"><span v-html="$options.filters.summery(item.description,180)" style="font-size:110%"></span></p>
                            <p class="google-font mt-1 mb-0" style="font-size:110%">
                                <v-icon>insert_invitation</v-icon>
                                {{item.local_date}}
                            </p>
                            <p class="google-font mt-1 mb-0" style="font-size:110%">
                                <v-icon>watch_later</v-icon>
                                {{item.local_time}}
                            </p>
                            <p class="google-font mt-1 mb-0" style="font-size:110%">
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

        <v-layout wrap align-center justify-center row fill-height class="hidden-md-and-up">
            <v-flex xs12 v-if="showLoader">
                <v-progress-circular
                    :size="50"
                    color="blue"
                    indeterminate
                ></v-progress-circular>
            </v-flex>

            <v-flex xs12>
                <v-slide-y-reverse-transition>
                    <v-list two-line subheader v-show="showData" class="grey lighten-5">
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
            showData1:false
        }
    },
    created(){
        fetch('https://cors.io/?https://api.meetup.com/'+MeetupAPI.urlname+'/events?key='+MeetupAPI.apiKey).then(data=>data.json()).then(res=>{
            this.showLoader = false
            this.showData = true
            this.showData1 = true
            this.eventsData = res
        })
    },
    filters:{
        summery: (val,num)=>{
            return val.substring(0,num)+"..."
        }
    }
}
</script>
