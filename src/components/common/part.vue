<template>
    <v-container fluid >
        <v-row align="center" justify="center" class="mb-0">
            <v-col cols="12" md="12" lg="12" sm="12" class="mb-0">
                <p class="google-font mb-1" style="font-weight: 350;font-size:200%"><b>Our
                    <span style="color: #1a73e8;">Partners</span> </b> 
                </p>
                <p class="google-font mt-1 mb-0" style="font-size:120%">A very big thank you to all our partners for their continued partnership.</p>
                <p class="google-font mt-0 mb-0" style="font-size:120%">If you’re interested in being showcased throughout , contact <a style="color:#1565C0;text-decoration: none;" :href="`mailto:${chapterDetails.ChapterEmail}`">{{chapterDetails.ChapterEmail}}</a> to discuss sponsorship opportunities.</p>
            </v-col>
        </v-row>

        <v-row align="center" justify="start" class="mt-0" v-for="(itemp,i) in partnerData" :key="i">
            <v-col cols="12" md="12" lg="12" sm="12" class="mx-1 mt-5" v-if="itemp.length>0">
                <p class="google-font mb-0" style="font-size:130%">{{i}}</p>
            </v-col>
            <v-col cols="4" md="6" lg="2" sm="4" v-for="(item,j) in itemp" :key="j" class="client-logo mx-3 mb-5">
                <a v-bind:href="item.link" target="_blank" v-if="itemp.length>0"  >
                    <v-tooltip bottom>
                    <template v-slot:activator="{ on }">
                        <v-img
                        :src="getImgUrl(item.img)"
                        :lazy-src="getImgUrl(item.img)"
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
                    <span class="google-font">{{item.name}}</span>
                    </v-tooltip>
                </a>
            </v-col>
        </v-row>
     
    </v-container>
</template>

<script>
import datap from '@/assets/data/partners.json'
import chapterDetails from '@/assets/data/ChapterDetails.json'
export default {
    data() {
        return {
            partnerData: datap,
            chapterDetails: chapterDetails
        }
    },
    methods:{
        getImgUrl(pic) {
            return require('@/assets/img/partners/'+pic)
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