<template>
    <v-container fluid class="pa-0">
        <v-row align="stretch" justify="space-between" class="" >
            <v-col cols="12" md="7" lg="7" sm="4" class="pa-0" :class="this.$vuetify.theme.dark == true?'darkModeContainer':'lightModeWhiteContainer'">
               
                <div class="ma-1" >
                    <div class="pa-5">
                        <p class="google-font mb-0" style="font-size:150%">About GDG Jalandhar</p>
                        <p class="google-font mt-0" style="font-size:95%">Google Developer Group Jalandhar is inspired by GTUG/GDG Family . We started our journey in Feb 2011. We try to engage student developers, fresh graduates and professionals through our hack events & meetups. The motive is to create a local ecosystem of programmers & hackers in and around Jalandhar. The technology awareness is main goal for first few years of the group.</p>

                        <v-btn href="#" target="_blank" outlined color="" class="ma-0 google-font" style="border-radius:5px;text-transform: capitalize;">Meetup Page</v-btn>
                        &nbsp;
                        <v-btn href="#" target="_blank" outlined color="" class="ma-0 google-font" style="border-radius:5px;text-transform: capitalize;">Facebook Page</v-btn>
                            <br><br>
                        <router-link to="/about" class="google-font" style="text-decoration:none;color:">See More about GDG</router-link>
                    </div>
                </div>
                
            </v-col>

            <v-col cols="12" md="5" lg="4" sm="8" class="pa-0 float-right " :class="this.$vuetify.theme.dark == true?'darkModeContainer':'lightModeWhiteContainer'"> 
                <!-- <div class="ma-1" > -->
                   <v-container fluid class="py-0">
                       <v-row align="stretch" justify="start">
                           <v-col cols="12" md="4" lg="4" sm="6" class="pa-0">
                               
                            <v-img
                            min-width="100%"
                            style="border-radius:8px;"
                            src="https://www.womentechmakers.com/static/images/iwd19carousel/iwd19-19.jpg"
                            lazy-src="https://www.womentechmakers.com/static/images/iwd19carousel/iwd19-19.jpg">
                                <v-layout
                                    slot="placeholder"
                                   
                                    align-center
                                    justify-center
                                    
                                    class="grey"
                                    ma-0
                                >
                                    <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                                </v-layout>
                            
                            </v-img>   
                           </v-col>

                           <v-col cols="12" md="8" lg="8" sm="6" class="red pa-3">
                               <p class="google-font mb-0" style="font-size:150%">About GDG Jalandhar</p>
                                <p class="google-font mt-0" style="font-size:95%">Google Developer Group Jalandhar is inspired by GTUG/GDG Family . We started our journey in Feb 2011. We try to engage student developers, fresh graduates and professionals through our hack events & meetups. The motive is to create a local ecosystem of programmers & hackers in and around Jalandhar. The technology awareness is main goal for first few years of the group.</p>
                           </v-col> 

                       </v-row>
                   </v-container>
                <!-- </div> -->

                
            </v-col>
           
           
        </v-row>
    </v-container>
</template>

<script>
    import whatWeDoData from '@/assets/data/whatWeDo.json'
    export default {
        name: 'App',
        data: () => ({
            whatWeDoData: whatWeDoData
        }),
        methods:{
            getImgUrl(url) {
                if(url.length>0){
                    return require('@/assets/img/what-we-do/'+url)
                }else{
                    return require('@/assets/img/what-we-do/notFound.png')
                }
            },
        }
};
</script>