<template>
    <v-container class="pa-0 my-0">
        <v-layout wrap align-start justify-start row fill-height class="my-0" >
     
            <v-flex xs12 md8 lg8 class="pa-2 my-0">
                <p class="google-font" style="font-size:180%;color:#0277bd">Code of conduct</p>

                <p class="google-font" style="font-size:110%">{{aboutPage.coc}}</p>
            </v-flex> 
           
            <v-flex xs12 md4 lg4 class="pa-2 hidden-sm-and-down">
                
            </v-flex>
        </v-layout>

    </v-container>
</template>

<script>
import ChapterDetails from '@/assets/data/chapterDetails.json'
import aboutPage from '@/assets/data/aboutPage.json'
export default {
    data() {
        return {
            chapterDetails: ChapterDetails,
            aboutPage:aboutPage
        }
    },
}
</script>
