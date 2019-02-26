<template>
    <v-container class="pa-0">
        <v-layout wrap align-center justify-center row fill-height >
           <v-flex xs12 sm4 md3 lg3 class="text-xs-center pa-3">
                <v-img
                    :src="require('@/assets/img/gdg.jpg')"
                    :lazy-src="require('@/assets/img/gdg.jpg')"
                    width="100%">
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
            </v-flex> 
            <v-flex xs12 sm6  md8 lg8 class="">
                <p class="google-font mb-1" style="font-weight: 350;color: #3c4043;font-size:300%"><b>Make good things 
                    <span style="color: #1a73e8;">together</span>.</b>
                </p>
                <p class="google-font mt-0" style="font-size:180%">{{chapterDetails.ChapterName}}</p>
                <p class="google-font" style="font-size:110%">{{chapterDetails.ChapterShortDescription}}</p>
                <p class="google-font" style="font-size:110%">
                    <span v-for="(item,i) in chapterDetails.ChapterHashTags" :key="i">
                        #{{item}} &nbsp;
                    </span>
                </p>

                <v-btn :href="chapterDetails.ChapterMeetupLink" target="_blank" class="ma-0 google-font" color="blue" style="text-transform: capitalize;border-radius:8px;color:white">Become a Member</v-btn>

                &nbsp;

                <v-btn href="#" target="_blank" round color="pink" style="text-transform: capitalize;border-radius:8px" flat  class="ml-0" dark>Learn More</v-btn>

            </v-flex>
        </v-layout>

    </v-container>
</template>

<script>
import ChapterDetails from '@/assets/data/chapterDetails.json'
export default {
    data() {
        return {
            chapterDetails: ChapterDetails
        }
    },
}
</script>
