<template>
    <v-container class="pa-0 my-0">
        <v-layout wrap align-start justify-start row fill-height class="my-0" >
     
            <v-flex xs12 md8 lg8 class="pa-2 my-0">
                <p class="google-font" style="font-size:180%;color:#0277bd">Community Guidelines</p>

                <v-expansion-panel >
                    <v-expansion-panel-content
                    v-for="(item,i) in aboutPage.communityGuideline"
                    :key="i"
                    >
                        <div slot="header" class="google-font" style="font-size:120%">{{item.name}}</div>
                        <v-card>
                            <v-card-text class="google-font grey lighten-3" style="font-size:110%">{{item.des}}</v-card-text>
                        </v-card>
                    </v-expansion-panel-content>
                </v-expansion-panel>
            </v-flex> 
           
            <v-flex xs12 md4 lg4 class="pa-2 hidden-sm-and-down">
                <v-img
                    :src="require('@/assets/img/svg/bg.svg')"
                    :lazy-src="require('@/assets/img/svg/bg.svg')"
                    width="70%"
                    style="float:right"
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
