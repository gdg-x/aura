<template>
    <v-container fluid class="mb-1">
        <v-row align="center" justify="center">
            <v-col cols="12" md="12" lg="12" sm="12" class="mb-0" >
                <p class="google-font mb-0 mt-0" style="font-weight: 350;font-size:180%">
                    <b>
                        Our
                        <span style="color: #1a73e8;">Feature Event</span> 
                        &
                        <span style="color: #1a73e8;">Meetup</span> 
                    </b> 
                </p>
                <!-- <p class="google-font mb-0" style="font-size:180%">Our Feature Event & Meetup</p> -->
                <p class="google-font mt-0 mb-0" style="font-size:95%">Events are listed in reverse chronological order by date.</p>
                
            </v-col>
            <v-col cols="12" md="12" lg="12" sm="12" class="mt-0 pt-0 pa-0" >
               <v-container fluid class="py-0 my-0">
                   <v-row class="py-0 my-0" v-if="loading">
                       <v-col v-for="i in 4" :key="i" md="3" lg="3" sm="6" cols="12" class="pa-2" >
                           <v-sheet
                                :color="`grey ${theme.isDark ? 'darken-2' : 'lighten-4'}`"
                                class=""
                            >
                                <v-skeleton-loader
                                class="mx-auto"
                                type="article"
                                ></v-skeleton-loader>
                            </v-sheet>
                       </v-col>
                   </v-row>
                   <v-row v-else class="py-0 my-0">
                       <v-col v-for="(item,i) in FeaturesEventID" :key="i" md="3" lg="3" sm="6" cols="12" class="pa-2" >
                           <div v-for="(itemp,j) in AllCustomEvents" :key="j">
                               <div v-if="itemp.id == item">
                                   <!-- {{itemp}} -->
                                   <featureEventCard :data="itemp"/>
                               </div>
                           </div>
                       </v-col>
                   </v-row>

                   <v-row class="py-0 my-0" v-if="notFound || FeaturesEventID.length==0">
                       <v-col md="3" lg="3" sm="6" cols="12" :class="$vuetify.theme.dark == true?'darkModeCardFeatureEvent':'lightModeCardFeatureEvent'" class="pa-4 px-5 mx-3" >
                          <p class="google-font my-2">Not Found</p>
                       </v-col>
                   </v-row>
              
               </v-container>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import service from '@/services/appservices'
import featureEventCard from '@/components/home/FeatureEventCard'
    export default {
        name: 'App',
        inject: ['theme'],
        components:{
            featureEventCard
        },
        data: () => ({
            loading:true,
            notFound:false,
            FeaturesEventID:[],
            AllCustomEvents:[]
        }),
        mounted(){
            this.getFeaturesEventID()
            this.getAllCustomEvents()
        },
        methods:{
            getAllCustomEvents(){
                this.loading = true
                service.getAllCustomEvents().then(res=>{
                    if(res.success){
                        this.loading = false
                        this.AllCustomEvents = res.data
                    }
                })
            },
            getFeaturesEventID(){
                service.getFeaturesEvents().then(res=>{
                    if(res.success){
                        this.notFound = false
                        this.FeaturesEventID = res.data
                    }else{
                        this.notFound = true
                    }
                })
            }
        }
};
</script>

<style scoped>
  .lightModeCardFeatureEvent{
    background-color:#ffff;
    box-shadow: 0 0 36px rgba(0,0,0,0.1);
    
    border-radius:8px
}
  .darkModeCardFeatureEvent{
    background-color:#292929;
    box-shadow: 0 0 36px rgba(0,0,0,0.1);
    /* border:1px solid #212121; */
    border: 1px solid #424242;
    border-radius:8px
  }
</style>