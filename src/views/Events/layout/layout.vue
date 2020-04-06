<template>
    <v-container fluid class="py-0 my-0 mt-0">
        <v-row class="py-0 my-0" align="center">
            <v-col md="12" sm="12" cols="12" class="py-0 my-0">
                <v-row class="py-0">
                    <v-col cols="12" md="12" sm="12" lg="12" class="py-0">
                        <v-row class="py-0">
                            <v-col cols="12" md="12" class="pa-0" >
                                <v-img
                                    :src="data.image"
                                    :lazy-src="data.image"
                                    width="100%"
                                    cover
                                    style="border-top-left-radius:5px;"
                                    gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,1)"
                                    height="300px"
                                >
                                    <template v-slot:placeholder>
                                        <v-row
                                        class="fill-height ma-0"
                                        align="center"
                                        justify="center"
                                        >
                                        <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                                        </v-row>
                                    </template>
                                    <v-card-title
                                        class="fill-height align-end google-font pb-5 white--text"
                                    >
                                        <p>
                                            <span style="font-size:150%">
                                            {{data.name}} 
                                            </span>
                                        </p> 
                                    </v-card-title>
                                    <v-layout
                                        slot="placeholder"
                                        fill-height
                                        align-center
                                        justify-center
                                        ma-0
                                    > 
                                        <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                                    </v-layout>
                                </v-img>
                            </v-col>
                        </v-row>
                        <v-row class="blue">
                            {{data}}
                            <!-- <v-col cols="12" md="12" class="pa-0">
                                <v-tabs
                                    v-model="tab"
                                    grow
                                    :background-color="this.$vuetify.theme.dark == true?'grey darken-4':'primary'"
                                    dark
                                    class="elevation-0"
                                    :prev-icon="prevIcon ? 'mdi-arrow-left-bold-box-outline' : undefined"
                                    :next-icon="nextIcon ? 'mdi-arrow-right-bold-box-outline' : undefined"
                                    :icons-and-text="icons"
                                    >
                                    <v-tabs-slider></v-tabs-slider>

                                        <v-tab
                                            v-for="item in items"
                                            :key="item"
                                        >
                                            {{item}}
                                        </v-tab>

                                        <v-tabs-items v-model="tab">
                                            <v-tab-item class="px-5">
                                                <v-card flat color="basil">
                                                    <LayoutAbout :aboutData="eventdata"/>
                                                </v-card>
                                            </v-tab-item>

                                            <v-tab-item class="px-5">
                                                <v-card flat color="basil">
                                                    <LayoutSpeakers :speakersData="eventdata.Speakers" />
                                                </v-card>
                                            </v-tab-item>

                                            <v-tab-item class="px-5">
                                                <v-card flat color="basil">
                                                    <LayoutAgenda :agendaData="eventdata.Agenda" />
                                                </v-card>
                                            </v-tab-item>

                                            <v-tab-item class="px-5">
                                                <v-card flat color="basil">
                                                    <LayoutPartners :parntersData="eventdata.Partners" />
                                                </v-card>
                                            </v-tab-item>
                                        </v-tabs-items>
                                    </v-tabs>
                            </v-col> -->
                        </v-row>
                    </v-col>
                    <!-- <v-col cols="12" md="3" sm="5" lg="3" class="pa-0 hidden-sm-and-down" :class="this.$vuetify.theme.dark == true?'grey darken-4':'white'">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d207901.51231883702!2d77.04124558163848!3d30.670594295690147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390f92d96c158255%3A0x5e136f50f545b1fc!2sThe%20LaLiT%20Chandigarh!5e0!3m2!1sen!2sin!4v1573725228682!5m2!1sen!2sin" width="100%" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
                        <div class="pa-2">   
                            <h2 class="google-font">Community Guidelines</h2>
                            <p class="google-font">Participants asked to stop any harassing behavior are expected to comply immediately. Our zero-tolerance policy means that we will look into and review every allegation of violation of our Event Community Guidelines and Anti-Harassment Policy and respond appropriately. We empower and encourage you to report any behavior that makes you or others feel uncomfortable by finding a Google staff member wearing a STAFF shirt or by emailing {{communitydata.CommunityEmail}}</p>
                        </div>
                    </v-col> -->
                </v-row>
               
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
// import communitydata from '@/assets/data/communitydata.json'
// import LayoutAbout from '../Layout/SubLayout/LayoutAbout'
// import LayoutSpeakers from '../Layout/SubLayout/LayoutSpeakers'
// import LayoutAgenda from '../Layout/SubLayout/LayoutAgenda'
// import LayoutPartners from '../Layout/SubLayout/LayoutPartner'
// import { configData } from "@/config/config";
export default {
    components:{
        // LayoutAbout,
        // LayoutSpeakers,
        // LayoutAgenda,
        // LayoutPartners
    },
    props:['data'],
    data() {
        return {
            blogsData: [],
            tab: null,
            items: [
            'About', 'Speakers', 'Agenda','Partners',
            ],
            
            icons: false,
            centered: false,
            grow: false,
            vertical: false,
            prevIcon: false,
            nextIcon: false,
            right: false,
            tabs: 3,
        }
    },
    methods:{
    },
    created(){
        
    }
}
</script>