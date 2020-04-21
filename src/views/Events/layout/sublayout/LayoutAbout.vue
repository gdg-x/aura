<template>
    <v-container fluid class="py-0 my-0 mt-0">
        <v-row class="py-0 my-0">
            <v-col md="12" sm="12" cols="12" class="py-0 my-0">
                <v-row class="">
                    <v-col>
                        <h1 class="google-font">{{data.name}} Details</h1>
                        <p class="google-font mb-3">{{data.des}}</p>

                        <span v-for="(item,i) in data.hashtags" :key="i">
                            <v-chip class="mr-1" :href="'https://twitter.com/hashtag/'+item" target="_blank" label small>#{{item}}</v-chip>
                        </span>
                        
                        <p class="google-font mb-0 mt-3"><b>Date:</b> {{data.date}}</p>
                        <p class="google-font my-0"><b>Time: </b> {{data.time.starttime}} - {{data.time.endtime}}</p>
                        <p class="google-font my-0"><b>Venue: </b> <a target="_blank" style="text-decoration:none" :href="data.venue.googlemapsurl">{{data.venue.name}}</a></p>

                        <div class="mt-4 pb-5">
                            <p class="google-font mb-0"><b>Important Links</b></p>
                            <v-btn color="primary" dark target="_blank" v-if="data.links.registration" :href="data.links.registration" class="ma-1" label small>Registration</v-btn>          
                            <v-btn color="pink" dark target="_blank" v-if="data.links.meetup" :href="data.links.meetup" class="ma-1" label small>Meetup</v-btn>

                            <v-btn color="orange" dark target="_blank" v-if="data.links.callforspeaker" :href="data.links.callforspeaker" class="ma-1" label small>Call For Speakers</v-btn>

                            <v-btn color="indigo" dark target="_blank" v-if="data.links.facebook" :href="data.links.facebook" class="ma-1" label small>Facebook</v-btn>

                            <v-btn color="success" dark target="_blank" v-if="data.links.feedback" :href="data.links.feedback" class="ma-1" label small>Feedback</v-btn>
        
                            <v-btn color="red" dark target="_blank" v-if="data.links.youtube" :href="data.links.youtube" class="ma-1" label small>Youtube Live  </v-btn>          
                        </div>
                    
                    </v-col>
                </v-row>
               
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    components:{
        
    },
    props:['data'],
    data() {
        return {
        }
    },
    
}
</script>