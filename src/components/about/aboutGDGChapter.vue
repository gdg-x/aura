<template>
    <v-container class="pa-0 my-0">
        <v-layout wrap align-start justify-start row fill-height class="my-0" >
            <v-flex xs12 md4 lg4 class="pa-2">
                <v-img
                    :src="require('@/assets/img/gdg.png')"
                    :lazy-src="require('@/assets/img/gdg.png')"
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
            <v-flex xs12 md8 lg8 class="pa-2 my-0">
                <p class="google-font" style="font-size:130%">{{chapterDetails.ChapterLongDec}}</p>

                <v-btn :href="chapterDetails.ChapterMeetupLink" target="_blank" class="ma-0 google-font" color="blue" style="text-transform: capitalize;border-radius:8px;color:white">Become a Member</v-btn>

                <p class="google-font grey--text mt-3" style="font-size:120%"><i>{{chapterDetails.aboutGDGProgram}}</i></p>
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
