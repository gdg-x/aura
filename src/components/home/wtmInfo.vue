<template>
    <v-container class="pa-0 my-0">
        <v-layout wrap align-center justify-center row fill-height class="mt-2" style="background-color:#FAFAFA">
            <v-flex xs12 sm4 md2 lg2 class="pa-4">
                <v-img
                    :src="require('@/assets/img/svg/WTM-women.svg')"
                    :lazy-src="require('@/assets/img/svg/WTM-women.svg')"
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
           <v-flex xs12 sm8 md10 lg10 class="pa-2 py-4 px-3" >
               <p class="google-font mb-0" style="font-size:150%">Women Techmakers program</p>
               <p class="google-font mt-1" style="font-size:120%">
                   WTM Program Provides visibility, community, and resources for women in technology. Get involved. Sign up to be connected to a global community and receive resources.
               </p>
               <v-btn :href="ChapterDetails.wtmWebsite" target="_blank" outline color="#4C4A78" class="ma-0 google-font" style="border-radius:7px;text-transform: capitalize;">See More About WTM Program</v-btn>             
            </v-flex> 
        </v-layout>

    </v-container>
</template>

<script>
import ChapterDetails from '@/assets/data/chapterDetails.json'
export default {
    data() {
        return {
            ChapterDetails:ChapterDetails
        }
    },
    created(){
        
    }
}
</script>
