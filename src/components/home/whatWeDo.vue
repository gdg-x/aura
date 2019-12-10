<template>
    <v-container class="pa-0">
        <v-layout wrap align-center justify-center row fill-height >
           <v-flex xs12 md3 lg3 class="pa-2">
               <p class="google-font" style="font-size:180%">Nos activités</p>
               <p class="google-font" style="font-size:110%">
                   Google Developers Group Foumban se concentre sur les technologies Google, mais sans s'y limiter, mais touche à d'autres technologies similaires. L'apprentissage est gratuit.
                </p>

               <p class="google-font" style="font-size:110%">Nous touchons:</p>

                <span v-for="(item,i) in whatWeDoData" :key="i">
                    <v-tooltip bottom>
                        <template v-slot:activator="{ on }" >
                            <a :href="item.link" target="_blank" flat class="ma-0">
                                <img :src="getImgUrl(item.image)" width="30vh" alt="" srcset="" dark v-on="on">
                            </a> 
                            &nbsp;&nbsp;&nbsp;
                        </template>
                        <span>{{item.TechName}}</span>
                    </v-tooltip>
                </span>
                
                <br><br>
                <!--
                <v-btn :href="chapterDetails.GDGProgramWebsite" outline target="_blank" round color="cyan" style="text-transform: capitalize;border-radius:5px;text-transform: capitalize;" flat  class="ml-0 google-font hidden-md-and-down" dark>Learn More</v-btn>
                -->
            </v-flex> 
            <v-flex xs12 md9 lg9 class="">
                <v-layout row wrap>

                    <v-flex xs6 sm6 md3 lg3 class="text-xs-center pa-2">
                        <v-icon large style="font-size:300%">chat_bubble</v-icon>
                        <p class="google-font" style="font-size:130%">Discussions</p>
                        <p class="google-font" style="font-size:110%">
                            Soyez à jour avec les dernières nouvelles et annonces
                        </p>
                    </v-flex>

                    <v-flex xs6 sm6 md3 lg3 class="text-xs-center pa-2">
                        <v-icon large style="font-size:300%">code</v-icon>
                        <p class="google-font" style="font-size:130%">Codelabs</p>
                        <p class="google-font" style="font-size:110%">
                            Obtenez une expérience pratique et des conseils des membres de la communauté
                        </p>
                    </v-flex>

                    <v-flex xs6 sm6 md3 lg3 class="text-xs-center pa-2">
                        <v-icon large style="font-size:300%">school</v-icon>
                        <p class="google-font" style="font-size:130%">Tournées campus</p>
                        <p class="google-font" style="font-size:110%">
                            Nous visitons les universités et les lycées pour étendre les connaissances des étudiants
                        </p>
                    </v-flex>

                    <v-flex xs6 sm6 md3 lg3 class="text-xs-center pa-2">
                        <v-icon large style="font-size:300%">airplay</v-icon>
                        <p class="google-font" style="font-size:130%">Conférences en direct</p>
                        <p class="google-font" style="font-size:110%">
                            Regardez les annonces de Google en direct.
                        </p>
                    </v-flex>

                </v-layout>
            </v-flex>
        </v-layout>

    </v-container>
</template>

<script>
import whatWeDoData from '@/assets/data/whatWeDoComponentData.json'
import ChapterDetails from '@/assets/data/chapterDetails.json'
export default {
    data() {
        return {
            chapterDetails: ChapterDetails,
            whatWeDoData: whatWeDoData
        }
    },
    methods:{
        getImgUrl(url) {
            if(url.length>0){
                return require('@/assets/img/what-we-do/'+url)
            }else{
                return require('@/assets/img/what-we-do/notFound.png')
            }
        },
    }
}
</script>