<template>
    <v-container fluid class="py-0 my-0 mt-0">
        <v-row class="py-0 my-0">
            <v-col md="12" sm="12" cols="12" class="py-0 my-0">
                <v-row class="py-0">
                    <v-col cols="12" md="9" sm="7" lg="9" class="py-0">
                        <v-row class="py-0">
                            <v-col cols="12" md="12" class="pa-0" >
                                <v-img
                                    src="https://scontent.fdel1-2.fna.fbcdn.net/v/t1.0-9/69274786_2500025083374637_3726796238599749632_o.jpg?_nc_cat=107&_nc_oc=AQmIdUSs5JrL3yJYZemhw9-p_vLaCAETQdF2L4nmOLwCjF0XCWyjx2pdRJCpKMw9zdjWmrVrePm_P8hKhUFpKSIL&_nc_ht=scontent.fdel1-2.fna&oh=0241c4f1c5c4deacc2d547f28fba9f7e&oe=5E8C8A1E"
                                    lazy-src="https://scontent.fdel1-2.fna.fbcdn.net/v/t1.0-9/69274786_2500025083374637_3726796238599749632_o.jpg?_nc_cat=107&_nc_oc=AQmIdUSs5JrL3yJYZemhw9-p_vLaCAETQdF2L4nmOLwCjF0XCWyjx2pdRJCpKMw9zdjWmrVrePm_P8hKhUFpKSIL&_nc_ht=scontent.fdel1-2.fna&oh=0241c4f1c5c4deacc2d547f28fba9f7e&oe=5E8C8A1E"
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
                                            {{eventdata.data.EventName}} 
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
                            <v-col cols="12" md="12" class="pa-0">
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
                                                    <LayoutAbout :aboutData="eventdata.data"/>
                                                </v-card>
                                            </v-tab-item>

                                            <v-tab-item class="px-5">
                                                <v-card flat color="basil">
                                                    <LayoutSpeakers :speakersData="eventdata.data.Speakers" />
                                                </v-card>
                                            </v-tab-item>

                                            <v-tab-item class="px-5">
                                                <v-card flat color="basil">
                                                    <LayoutAgenda :agendaData="eventdata.data.Agenda" />
                                                </v-card>
                                            </v-tab-item>

                                            <v-tab-item class="px-5">
                                                <v-card flat color="basil">
                                                    <LayoutPartners :parntersData="eventdata.data.Partners" />
                                                </v-card>
                                            </v-tab-item>
                                        </v-tabs-items>
                                    </v-tabs>
                            </v-col>
                        </v-row>
                    </v-col>
                    <v-col cols="12" md="3" sm="5" lg="3" class=" hidden-sm-and-down green">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis vero officiis exercitationem eligendi possimus fugiat totam illum illo laboriosam eos, dolorum doloremque distinctio placeat commodi enim reprehenderit! At, in eaque?</p>
                        {{eventdata.data}}
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
    props:{
        eventdata:{}
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