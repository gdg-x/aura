<template>
    <v-container class="pa-0 white--text">
        <v-layout wrap align-center justify-center row fill-height class="my-3" >
           <v-flex xs12 md12 lg12 class="pa-2">
               <p class="google-font" style="font-size:150%">À propos de {{chapterDetails.ChapterName}}</p>
               <p class="google-font" style="font-size:110%">
                   {{chapterDetails.ChapterLongDec.join('\n')}}
               </p>
               <v-btn :href="chapterDetails.ChapterMeetupLink" target="_blank" outline color="white" class="ma-0 google-font" style="border-radius:5px;text-transform: capitalize;">Page Meetup</v-btn>
               &nbsp;
               <v-btn :href="chapterDetails.socialLinks[0].link" target="_blank" outline color="white" class="ma-0 google-font" style="border-radius:5px;text-transform: capitalize;">Page Facebook</v-btn>
                <br><br>
               <v-btn outline color="white" class="ma-0 google-font" style="border-radius:5px;text-transform: capitalize;">
                <router-link to="/about" class="google-font" style="text-decoration:none;color:white">En savoir plus sur {{chapterDetails.ChapterName}}</router-link>
               </v-btn>
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
