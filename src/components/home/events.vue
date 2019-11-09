<template>
    <v-container fluid>
        <v-row align="center" justify="center">
            <v-col cols="12" md="10" lg="10" sm="12" class="text-center mb-0" >
                <p class="google-font mb-1" style="font-weight: 350;font-size:180%">
                    <b>
                        Our
                        <span style="color: #1a73e8;">Events</span> 
                        &
                        <span style="color: #1a73e8;">Meetups</span> 
                    </b> 
                </p>
                
                <!-- <p class="google-font mb-0" style="font-size:180%">Our Events & Meetups</p> -->
                <p class="google-font mt-0" style="font-size:95%">At sessions that span from the technical to the visionary, let’s celebrate and discover what the technologies can enable: how product innovation, open source, and ML and AI can propel enterprises forward and solve the big problems that impact all of us.</p>
                <router-link
                    to="/events"
                    text
                    color="#4C4A78"
                    class="ma-0 google-font mb-0"
                    style="border-radius:5px;text-transform: capitalize;text-decoration:none;color:#4C4A78"
                >See More</router-link>
            </v-col>
            <v-col cols="12" md="12" lg="12" sm="12" class="mt-0">
               <v-container fluid>
                   <v-row v-if="showLoader">
                       <v-col v-for="i in 4" :key="i" md="3" lg="3" sm="6" cols="6" class="pa-2">
                            <eventCardLoader/>
                       </v-col>
                   </v-row>
                   <v-row v-else>
                       <v-col md="3" lg="3" sm="6" cols="6" class="pa-2" v-for="(item,i) in eventsData" :key="i">
                            <eventCard :data="{data:item}" />
                       </v-col>
                   </v-row>

                   <v-row v-if="notFoundEventFlag">
                       <v-col md="12" lg="12" sm="12" cols="12" class="pa-2 text-center">
                            <v-icon>mdi-close-octagon-outline</v-icon>
                            <p>Events Not Found!</p>
                       </v-col>
                   </v-row>

               </v-container>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import eventCard from '@/components/common/card/home/eventcard'
    import eventCardLoader from '@/components/common/card/home/eventcardloader'
    import { configData } from "@/config/config";
    export default {
        name: 'App',
        components:{
            eventCard,
            eventCardLoader
        },
        data: () => ({
            eventsData: [],
            showLoader: true,
            notFoundEventFlag: false
        }),
        mounted(){
            fetch("https://cors-anywhere.herokuapp.com/https://api.meetup.com/" +
                configData.MeetupURLName +
                "/events?desc=true&photo-host=public&sign=true&page=4&status=past"
        )
            .then(data => data.json())
            .then(res => {
                if (res.length > 0) {
                    this.showLoader = false;
                    // this.showData = true;
                    this.eventsData = res;
                    // console.log(this.eventsData)
                } else {
                this.notFoundEventFlag = true;
                this.showLoader = false;
                }
            })
            .catch(e => {
                this.showLoader = false;
                this.errorMsg = "Issue found with " + e;
                // this.errorAlert = true;
                // this.notFoundEventFlag = true;
            });
        },
        methods:{
            getImgUrl(url) {
                if(url.length>0){
                    return require('@/assets/img/what-we-do/'+url)
                }else{
                    return require('@/assets/img/what-we-do/notFound.png')
                }
            },
        }
};
</script>