<template>
    <v-container class="pa-0 my-0">
        <v-flex xs12 v-if="showLoader">
            <v-progress-circular
                :size="50"
                color="blue"
                indeterminate
            ></v-progress-circular>
        </v-flex>

        <v-flex xs12 v-show="showData">
            <v-layout wrap align-center justify-center row fill-height class="mt-2 elevation-2 white" style="border:1px solid #e0e0e0;border-radius:5px" v-for="(item, i) in eventsData" :key="i">
                <v-flex xs12 sm8 md9 lg9 class="pa-2 py-4 px-3" >
                    <a class="google-font mb-0" style="font-size:150%;color:rgb(2, 119, 189)" v-bind:href="item.link">{{item.name}}</a><br>
                    <span class="google-font mt-1 mb-0 grey--text"  style="font-size:105%">
                        <span>
                            <v-icon small>insert_invitation</v-icon>
                            {{item.local_date}}
                        </span>
                        <span>
                            <v-icon small>watch_later</v-icon>
                            {{item.local_time}}
                        </span>
                        <span v-if="item.venue != null">
                            <v-icon small>map</v-icon>
                            {{item.venue.name | summery(50)}}
                        </span>
                    </span>    
                    <p class="google-font mt-2 mb-1" style="font-size:115%;color:#757575">
                        {{item.description | removeHtmlTags()}}
                    </p>

                </v-flex> 
            </v-layout>
        </v-flex>

    </v-container>
</template>

<script>
import { MeetupAPI } from '@/config/key'

export default {
    components:{
    },
    data() {
        return {
            eventsData: [],
            showLoader: true,
            showData: false
        }
    },
    created(){
        fetch('https://cors.io/?https://api.meetup.com/'+MeetupAPI.urlname+'/events?has_ended=false').then(data=>data.json()).then(res=>{
            this.showLoader = false
            this.showData = true
            this.eventsData = res
        })
    },
    methods:{
        getImgUrl(pic) {
            if (pic.length > 0) {
                return pic
            }else{
                return require('@/assets/img/featureEvent/imagenotfound.png')
            }
        },
    },
    filters:{
        summery: (val,num)=>{
            return val.substring(0,num)+"..."
        },
        dateFilter: (value)=>{
            const date = new Date(value)
            return date.toLocaleString(['en-US'], {month: 'short', day: '2-digit', year: 'numeric'})
        },
        removeHtmlTags: (val) => {
            return val.replace(/<("[^"]*"|'[^']*'|[^'">])*>/g,'')
        }
    }
}
</script>
