<template>
    <v-container class="pa-0 my-0">
        <v-layout wrap align-start justify-start row fill-height class="my-0" >
            <v-flex xs12 sm5 md4 lg4 class="pa-2">
                <v-img
                    :src="require('@/assets/img/gdg.png')"
                    :lazy-src="require('@/assets/img/gdg.png')"
                    class=""
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
            <v-flex xs12 sm7 md8 lg8 class="pa-2 my-0">
                <p class="google-font" style="font-size:120%;">{{chapterDetails.ChapterLongDec}}</p>

                <p class="google-font grey--text mt-3" style="font-size:120%">{{chapterDetails.aboutGDGProgram}}</p>

                <v-btn :href="chapterDetails.ChapterMeetupLink" target="_blank" class="ma-0 google-font elevation-1" color="#1a73e8" style="text-transform: capitalize;border-radius:5px;color:white">Become a Member</v-btn> 
                &nbsp;

                <v-btn href="https://developers.google.com/groups" target="_blank" outline color="cyan" style="text-transform: capitalize;border-radius:5px"  class="ml-0" dark>Learn More</v-btn>
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
