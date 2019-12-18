<template>
    <v-container fluid class="py-0 my-0 mt-0">
        <v-row class="py-0 my-0">
            <!-- {{AllSpeakersData}} -->
            <v-col md="12" sm="12" cols="12" class="py-0 my-0">
                <v-row class="my-4">
                    <v-col cols="6" md="3" lg="2" sm="4" class="pa-1" v-for="(item,i) in speakersData" :key="i" >
                        <div v-for="(itemp,j) in AllSpeakersData" :key="j">
                            <div v-if="itemp.id == item">
                                <LayoutSpeaker :speakerData="itemp" />
                            </div>
                        </div>
                    </v-col>
                </v-row>
               
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import communityData from '@/assets/data/communityData.json'
import AllSpeakersData from '@/assets/data/Speakers/Speakers.json'
import { configData } from "@/config/config";
import LayoutSpeaker from '../SubLayout/SubComponents/LayoutSpeaker'
export default {
    components:{
        LayoutSpeaker
    },
    props:{
        speakersData:{}
    },
    data() {
        return {
            communityData: communityData,
            AllSpeakersData: AllSpeakersData,
            cd: configData
        }
    },
    
}
</script>