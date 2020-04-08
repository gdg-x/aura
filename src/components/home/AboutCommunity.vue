<template>
    <v-container fluid class="pa-0">
        <v-row align="center" class="" >
            <v-col cols="12" md="12" lg="12" sm="12" class="pa-0" style="color:white" >
                <div class="ma-1" >
                    <div class="pa-5">
                        <p class="google-font mb-0" style="font-size:150%">About {{genralData.name}}</p>
                        <p class="google-font mt-0" style="font-size:95%">{{genralData.longDescription}}</p>

                        <v-btn :href="genralData.meetuplink" target="_blank" outlined color="" class="ma-0 google-font" style="border-radius:5px;text-transform: capitalize;color:white">Meetup Page</v-btn>
                        &nbsp;
                        <!-- <v-btn href="#" target="_blank" outlined color="" class="ma-0 google-font" style="border-radius:5px;text-transform: capitalize;color:white">Facebook Page</v-btn> -->
                        <br><br>
                    <router-link to="/about" class="google-font" style="text-decoration:none;color:white">See More about {{genralData.name}}</router-link>
                    </div>
                </div>
                
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import service from '@/services/appservices'
    export default {
        name: 'App',
        data: () => ({
            genralData:{}
        }),
        mounted(){
            this.getGenralData()
        },
        methods:{
            getGenralData(){
                service.getGeneralConfig().then(res=>{
                    if(res.success){
                        this.genralData = res.data
                    }
                })
            }
        }
};
</script>