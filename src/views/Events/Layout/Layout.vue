<template>
    <v-container fluid class="py-0 my-0 mt-0">
        <v-row class="py-0 my-0">
            <v-col md="12" sm="12" cols="12" class="py-0 my-0">
                <v-row class="py-0">
                    <v-col cols="12" md="9" sm="7" lg="9" class="red py-0">
                        <v-row class="yellow py-0">
                            <v-col cols="12" md="12" class="pa-0" >
                                <v-img
                                    src="https://images.unsplash.com/photo-1442033025416-c6a7da752d71?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1959&q=80"
                                    lazy-src="https://images.unsplash.com/photo-1442033025416-c6a7da752d71?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1959&q=80"
                                    width="100%"
                                    cover
                                    style="border-radius:5px"
                                    gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
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
                                        class="fill-height align-end google-font pb-5 text-white"
                                    >
                                        Event Name
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
                            <v-col cols="12" md="12" class="pa-0">
                                <v-tabs
                                    v-model="tab"
                                    grow
                                    background-color="white"
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
                                            <v-icon v-if="icons">mdi-phone</v-icon>
                                        </v-tab>

                                        <v-tabs-items v-model="tab">
                                            <v-tab-item class="px-5">
                                                <v-card flat color="basil">
                                                    <LayoutAbout/>
                                                </v-card>
                                            </v-tab-item>

                                            <v-tab-item class="px-5">
                                                <v-card flat color="basil">
                                                    <LayoutSpeakers />
                                                </v-card>
                                            </v-tab-item>

                                            <v-tab-item class="px-5">
                                                <v-card flat color="basil">
                                                    <LayoutAgenda />
                                                </v-card>
                                            </v-tab-item>

                                            <v-tab-item class="px-5">
                                                <v-card flat color="basil">
                                                    <LayoutPartners />
                                                </v-card>
                                            </v-tab-item>
                                        </v-tabs-items>
                                    </v-tabs>
                            </v-col>
                        </v-row>
                    </v-col>
                    <v-col cols="12" md="3" sm="5" lg="3" class="green">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis vero officiis exercitationem eligendi possimus fugiat totam illum illo laboriosam eos, dolorum doloremque distinctio placeat commodi enim reprehenderit! At, in eaque?</p>
                    </v-col>
                </v-row>
               
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import communitydata from '@/assets/data/communitydata.json'
import LayoutAbout from '../Layout/SubLayout/LayoutAbout'
import LayoutSpeakers from '../Layout/SubLayout/LayoutSpeakers'
import LayoutAgenda from '../Layout/SubLayout/LayoutAgenda'
import LayoutPartners from '../Layout/SubLayout/LayoutPartner'
import { configData } from "@/config/config";
export default {
    components:{
        LayoutAbout,
        LayoutSpeakers,
        LayoutAgenda,
        LayoutPartners
    },
    data() {
        return {
            communitydata: communitydata,
            blogsData: [],
            cd: configData,
            tab: null,
            items: [
            'About', 'Speakers', 'Agenda','Partners',
            ],
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
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
    created(){
        fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/'+configData.MediumBlogPublicationUsername).then(res=>res.json()).then(data=>{
            console.log(data)
            this.blogsData = data
            console.log(this.blogsData)
        }).catch(e=>{
            console.log(e)
        })
    }
}
</script>