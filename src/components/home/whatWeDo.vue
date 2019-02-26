<template>
    <v-container class="pa-0">
        <v-layout wrap align-center justify-center row fill-height >
           <v-flex xs12 md3 lg3 class="pa-2">
               <p class="google-font" style="font-size:180%">What we do?</p>
               <p class="google-font" style="font-size:110%">Google Developer Groups (GDGs) are for developers who are interested in Google's developer technology.</p>

               <p class="google-font" style="font-size:110%">About different Google technologies</p>
               <img src="@/assets/img/svg/angular.svg" width="30vh" alt="" srcset=""> &nbsp;&nbsp;&nbsp;
                <img src="@/assets/img/svg/gcp.svg" width="30vh" alt="" srcset="">&nbsp;&nbsp;&nbsp;
                <img src="@/assets/img/svg/android.svg" width="30vh" alt="" srcset="">&nbsp;&nbsp;&nbsp;
                <img src="@/assets/img/svg/aog.png" width="30vh" alt="" srcset="">&nbsp;&nbsp;&nbsp;
                <img src="@/assets/img/svg/firebase.svg" width="30vh" alt="" srcset="">&nbsp;&nbsp;&nbsp;
                <img src="@/assets/img/svg/tf.svg" width="30vh" alt="" srcset="">
                <br><br>
                <v-btn flat color="blue" class="ma-0">See More</v-btn>
            </v-flex> 
            <v-flex xs12 md9 lg9 class="">
                <v-layout row wrap>

                    <v-flex xs6 sm3 md3 lg3 class="text-xs-center pa-2">
                        <v-icon large style="font-size:500%">chat_bubble</v-icon>
                        <p class="google-font" style="font-size:160%">Talks</p>
                        <p class="google-font" style="font-size:120%">Get updated with the latest news and announcements</p>
                    </v-flex>

                    <v-flex xs6 sm3 md3 lg3 class="text-xs-center pa-2">
                        <v-icon large style="font-size:500%">code</v-icon>
                        <p class="google-font" style="font-size:160%">Codelabs</p>
                        <p class="google-font" style="font-size:120%">Get hands-on experience and guidance from the community members</p>
                    </v-flex>

                    <v-flex xs6 sm3 md3 lg3 class="text-xs-center pa-2">
                        <v-icon large style="font-size:500%">school</v-icon>
                        <p class="google-font" style="font-size:160%">Campus Roadshows</p>
                        <p class="google-font" style="font-size:120%">Share knowledge in different Companies, colleges and universities</p>
                    </v-flex>

                    <v-flex xs6 sm3 md3 lg3 class="text-xs-center pa-2">
                        <v-icon large style="font-size:500%">airplay</v-icon>
                        <p class="google-font" style="font-size:160%">Live Viewing Parties</p>
                        <p class="google-font" style="font-size:120%">Share knowledge in different Companies, colleges and universities</p>
                    </v-flex>

                </v-layout>
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
