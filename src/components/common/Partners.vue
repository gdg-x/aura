<template>
    <v-container fluid >
        <v-row align="center" justify="center" class="mb-0">
            <v-col cols="12" md="12" lg="12" sm="12" class="mb-0">
                <p class="google-font mb-1" style="font-weight: 350;font-size:200%"><b>Our
                    <span style="color: #1a73e8;">Partners</span> </b> 
                </p>
                <p class="google-font mt-1 mb-0" style="font-size:100%">A very big thank you to all our partners for their continued partnership.</p>
                <p class="google-font mt-0 mb-0" style="font-size:100%">If you’re interested in being showcased throughout , contact <a style="color:#1565C0;text-decoration: none;" :href="`mailto:${config.generalConfig.email}`">{{config.generalConfig.email}}</a> to discuss sponsorship opportunities.</p>
            </v-col>
        </v-row>

        <v-row align="center" v-if="checkExistance(partnersData,0)" justify="start" class="mt-0 pt-0">
            <v-col cols="12" md="12" lg="12" sm="12" class="mx-0 mt-0">
                <p class="google-font mb-0" style="font-size:130%">General Partners</p>
            </v-col>
            <v-col cols="6" md="3" xl="2" lg="2" sm="4"  v-for="(itemp,i) in partnersData" :key="i">
                <div class="client-logo ma-0">
                <a v-bind:href="itemp.socialLinks.linkedin" target="_blank">
                    <v-tooltip bottom>
                    <template v-slot:activator="{ on }">
                        <v-img
                        :src="getImgUrl(itemp.image)"
                        :lazy-src="getImgUrl(itemp.image)"
                        class="white"
                        contain
                        style="height:4em"
                        v-on="on"
                        >
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
                    </template>
                    <span class="google-font">{{itemp.name}}</span>
                    </v-tooltip>
                </a>
                </div>
            </v-col>
        </v-row>

        <v-row align="center" justify="start" class="mt-0">
            <v-col cols="12" md="12" lg="12" sm="12" class="mx-1 mt-5">
                <p class="google-font mb-0" style="font-size:130%">Template Creator</p>
            </v-col>
            <v-col cols="6" md="3" lg="2" xl="2" sm="4">
                <div class="client-logo ma-0">
                <a href="https://gdgjalandhar.com" target="_blank">
                    <v-tooltip bottom>
                    <template v-slot:activator="{ on }">
                        <v-img
                        :src="require('@/assets/img/dontremove/gdgjalandhar.webp')"
                        :lazy-src="require('@/assets/img/dontremove/gdgjalandhar.webp')"
                        class="white"
                        contain
                        style="height:4em"
                        v-on="on"
                        >
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
                    </template>
                    <span class="google-font">GDG Jalandhar</span>
                    </v-tooltip>
                </a>
                </div>
            </v-col>
        </v-row>
     
    </v-container>
</template>

<script>
import service from '@/services/appservices'
import { mapState } from "vuex";
export default {
    data:()=>({
        partnersData:[]
    }),
    computed:{
        ...mapState(["config"])
    },
    mounted(){
        this.getPartner()
    },
    methods:{
        getPartner(){
            service.getAllPartners().then(res=>{
                if(res.success){
                    this.partnersData = res.data.filter(data=>data.visible)
                }
            })
        },
    }
}
</script>

<style scoped>
.client-logo{
    height: 90px;
    padding: 12px 12px;
    border-radius: 7px;
    background: white;
    border: 1px solid #ebebeb;
    text-align: center;
}
</style>