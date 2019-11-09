<template>
    <v-container fluid>
        <v-snackbar v-model="errorAlert" bottom left>
            {{ errorMsg }}
            <v-btn color="pink" text @click="errorAlert = false">Close</v-btn>
        </v-snackbar>
        <v-row align="center" justify="center" class="mb-5">
            <v-col cols="12" md="12" lg="12" sm="12" class="">
                <p class="google-font mb-0" style="font-size:150%;color: #1a73e8;">Directory of past events</p>
                <p class="google-font mt-0 mb-0" style="font-size:95%">Events are listed in reverse chronological order by date.</p>
                <p class="google-font mt-0" style="font-size:95%">Here are the recent 10 meetups. To know more about the past meetups  <a :href="communitydata.CommunityMeetupLink" target="_blank" style="text-decoration:none;color:#0277bd">Click here</a></p>

                <v-row v-if="showLoader">
                    <v-col md="4" lg="4" sm="6" cols="12" class="pa-0" v-for="i in 6" :key="i">
                        <pastEventCardLoader/>
                    </v-col>
                </v-row>

                <v-row v-else>
                    <v-col md="4" lg="4" sm="6" cols="12" class="pa-0" v-for="(item,i) in eventsData" :key="i">
                        <v-slide-y-reverse-transition>
                            <pastEventCard v-show="showData" :data="{data:item}"/>
                        </v-slide-y-reverse-transition>
                    </v-col>
                </v-row>
                
                <v-row v-if="notFoundUpcomingEventFlag" class="pa-2">
                    <v-col md="3" lg="3" sm="6" cols="6" class="pa-3" :class="$vuetify.theme.dark == true?'darkModeCard':'lightModeCard'" >
                        <p class="google-font px-2 mb-0" style="font-size:140%">
                            <v-icon>mdi-calendar-blank</v-icon>
                            <br>
                            No Past Events!
                        </p>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import communitydata from '@/assets/data/communitydata.json'
    import { configData } from "@/config/config";
    import pastEventCard from '@/components/common/card/pastEvent/pastEventCard'
    import pastEventCardLoader from '@/components/common/card/pastEvent/pastEventCardLoader'
    export default {
        name: 'App',
        components:{
            pastEventCard,
            pastEventCardLoader
        },
        data: () => ({
            communitydata: communitydata,
            eventsData:[],
            showData: false,
            showLoader: true,
            notFoundUpcomingEventFlag: false,
            errorAlert: false,
            errorMsg: ''
        }),
         created() {
            fetch(
            'https://cors-anywhere.herokuapp.com/https://api.meetup.com/'+configData.MeetupURLName+'/events?desc=true&photo-host=public&page=8&status=past&sign=true')
            .then(data => data.json())
            .then(res => {
                if (res.length > 0) {
                    this.showLoader = false;
                    this.showData = true;
                    this.eventsData = res;
                } else {
                    this.showLoader = false;
                    this.notFoundUpcomingEventFlag = true;
                }
            })
            .catch(e => {
                this.showLoader = false;
                this.errorMsg = "Issue found with " + e;
                this.errorAlert = true;
                this.notFoundUpcomingEventFlag = true;
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
            getCharString(data){
                var splitArr = data.split(" ")
                if(splitArr.length>1){
                    return (splitArr[0].substring(0,1)+''+splitArr[1].substring(0,1)).toUpperCase()
                }
                else{
                    return (splitArr[0].substring(0,1)).toUpperCase()
                }
            },
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
    };
</script>