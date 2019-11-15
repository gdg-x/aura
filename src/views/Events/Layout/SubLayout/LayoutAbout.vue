<template>
    <v-container fluid class="py-0 my-0 mt-0">
        <v-row class="py-0 my-0">
            <v-col md="12" sm="12" cols="12" class="py-0 my-0">
                <v-row class="">
                    <v-col>
                        <p class="google-font mb-0"><b>About</b></p>
                        <p class="google-font mb-3">{{aboutData.EventDescription}}</p>
                        
                        <!-- {{aboutData}} -->

                        <p class="google-font mb-0 mt-3"><b>Date:</b> {{aboutData.EventDate.Date}}/{{aboutData.EventDate.Month}}/{{aboutData.EventDate.Year}}</p>
                        <p class="google-font mb-0 mb-0"><b>Time:</b> {{aboutData.EventTime.StartTime}} - {{aboutData.EventTime.EndTime}}</p>
                        <p class="google-font mb-0 mb-0"><b>Venue:</b> {{aboutData.EventVenue}}</p>
                        <p class="google-font mb-0 mb-0"><b>Contact Email:</b> {{communitydata.CommunityEmail}}</p>
                        
                        <div class="mt-3 mb-2">
                            <span v-for="(item,i) in aboutData.EventHashTags" :key="i">
                                <v-chip small class="mr-1">{{item}}</v-chip>
                            </span>
                            
                        </div>

                        <div class="mt-4">
                            <!-- <p class="google-font mb-0"><b>Registraton, RSVP & Feedback</b></p> -->
                            <v-btn v-if="aboutData.Links.RegistrationLink" class="ml-0 ma-2" dark  :href="aboutData.Links.RegistrationLink" target="_blank" color="indigo">Registration</v-btn>

                            <v-btn v-if="aboutData.Links.CallForSpeaker" class="ml-0 ma-2" dark  :href="aboutData.Links.CallForSpeaker" target="_blank" color="warning">Call For Speaker</v-btn>

                            <v-btn v-if="aboutData.Links.MeetupLink" :href="aboutData.Links.MeetupLink" target="_blank"  class="ml-0 ma-2" dark color="green">RSVP</v-btn>

                            <v-btn v-if="aboutData.Links.EventFeedbackURL" :href="aboutData.Links.EventFeedbackURL" target="_blank" class="ml-0 ma-2" dark color="cyan">Feeback</v-btn>
                        </div>

                        <div class="mt-3">
                            <p class="google-font mb-0"><b>Social Media Pages</b></p>
                            <v-btn class="ml-0 ma-2" dark color="indigo" v-if="aboutData.Links.EventFacebookPageURL" :href="aboutData.Links.EventFacebookPageURL" target="_blank">
                                <v-icon left>mdi-facebook</v-icon>Facebook
                            </v-btn>

                            <v-btn class="ml-0 ma-2" dark color="pink" v-if="aboutData.Links.MeetupLink" :href="aboutData.Links.MeetupLink" target="_blank">
                                <v-icon left>mdi-meetup</v-icon>Meetup
                            </v-btn>
                        </div>
                        
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
    props:{
        aboutData:{}
    },
    data() {
        return {
            communitydata: communitydata,
            cd: configData
        }
    },
    
}
</script>