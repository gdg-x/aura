<template>
    <v-container fluid class="py-0 my-0 mt-0">
        <v-row class="py-0 my-0" justify="center" align="center">
            <v-col md="12" sm="12" cols="12" class="py-0 my-0 mb-5 mt-5">
                <v-row class="pa-0" align="center" >
                    <v-col cols="6" md="2" lg="2" sm="4" class="pa-1" v-for="(item,i) in 15" :key="i" >
                        <div class="ma-1 px-2" style="border:1px solid #e0e0e0;border-radius:5px">
                            <v-img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/220px-Google_2015_logo.svg.png"
                                lazy-src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/220px-Google_2015_logo.svg.png"
                                width="100%"
                                contain
                                style="border-radius:5px"
                                height="80px"
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
                            </v-img>
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
    data() {
        return {
            communitydata: communitydata,
            cd: configData
        }
    },
    
}
</script>