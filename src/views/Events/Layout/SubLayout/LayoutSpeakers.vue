<template>
    <v-container fluid class="py-0 my-0 mt-0">
        <v-row class="py-0 my-0">
            <v-col md="12" sm="12" cols="12" class="py-0 my-0">
                <v-row class="my-4">
                    <v-col cols="6" md="3" lg="2" sm="4" class="pa-1" v-for="(item,i) in 12" :key="i">
                        <LayoutSpeaker />
                    </v-col>
                </v-row>
               
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import communitydata from '@/assets/data/communitydata.json'
import { configData } from "@/config/config";
import LayoutSpeaker from '../SubLayout/SubComponents/LayoutSpeaker'
export default {
    components:{
        LayoutSpeaker
    },
    data() {
        return {
            communitydata: communitydata,
            cd: configData
        }
    },
    
}
</script>