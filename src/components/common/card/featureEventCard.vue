<template>
    <v-dialog
      v-model="dialog"
      width="800"
    >
      <template v-slot:activator="{ on }">
          <div 
            v-on="on" 
            style="cursor: pointer;"
            :class="$vuetify.theme.dark == true?'darkModeCardFeatureEvent':'lightModeCardFeatureEvent'" 
            class="pa-3">
                <v-container fluid>
                    <v-row>
                        <v-col cols="12" md="12">
                            <p class="google-font mb-0" style="font-size:95%">
                                {{data.data.EventDate.Date}}/{{data.data.EventDate.Month}}/{{data.data.EventDate.Year}}
                            </p>
                            <p class="google-font mb-0" style="font-size:150%">{{data.data.FeatureEventName}}</p>
                            <p class="google-font mb-0" style="font-size:90%">{{data.data.EventVenue}}</p>
                            <!-- <p class="google-font">{{data.data.EventTime.StartTime}} - {{data.data.EventTime.EndTime}}</p> -->

                            <!-- <p class="google-font">{{data.data.EventDescription}}</p> -->

                            <p class="mb-0 mt-2 google-font" style="color:#1a73e8">See More</p>
                        </v-col>
                    </v-row>
                </v-container>
                

          </div>
      </template>
<!-- :style="{'background-image':'url('+require('@/assets/img/svg/footer.svg')+')'}" -->
      <v-card color="" v-if="dialog">
        <v-card-title
          class="px-5 py-5 google-font"
          style="background-position:right bottom;"
        >
          <p class="google-font mb-0" style="font-size:150%">{{data.data.FeatureEventName}}</p>
        </v-card-title>

        <v-card-text class="pb-5 pt-0">
          <p class="google-font mb-0" style="font-size:120%">
            {{data.data.EventDate.Date}}/{{data.data.EventDate.Month}}/{{data.data.EventDate.Year}}
          </p>
          <p class="google-font mb-0" style="font-size:110%">{{data.data.EventVenue}}</p>
          <p class="google-font">{{data.data.EventTime.StartTime}} - {{data.data.EventTime.EndTime}}</p>

          <p class="google-font mb-0" style="font-size:95%"><b>Description</b></p>
          <p class="google-font mt-0" style="font-size:110%">{{data.data.EventDescription}}</p>

          <v-btn color="#1a73e8" v-if="data.data.Links.RegistrationLink.length>0" :href="data.data.Links.RegistrationLink" target="_blank" class="ma-0 elevation-0 my-2 mr-3" dark style="text-transform: capitalize;"> 
              Registration Link
          </v-btn>

          <v-btn color="pink" v-if="data.data.Links.MeetupLink.length>0" :href="data.data.Links.MeetupLink" target="_blank" class="ma-0 elevation-0 my-2 mr-3" dark style="text-transform: capitalize;"> 
            Meetup Page
          </v-btn>

          <!-- Website Button -->
          <v-tooltip bottom  v-if="data.data.Links.EventWebsite.length>0">
            <template v-slot:activator="{ on }">
              <v-btn text icon v-on="on" :href="data.data.Links.EventWebsite" target="_blank" style="text-transform: capitalize;">
                <v-icon>mdi-web</v-icon>
              </v-btn>
            </template>
            <span>See More {{data.data.FeatureEventName}} Website</span>
          </v-tooltip>
          <!-- Website Button -->

          <!-- Facebook Button -->
          <v-tooltip bottom  v-if="data.data.Links.FBEventPageURL.length>0">
            <template v-slot:activator="{ on }">
              <v-btn text icon v-on="on" :href="data.data.Links.FBEventPageURL" target="_blank" style="text-transform: capitalize;">
                <v-icon>mdi-facebook</v-icon>
              </v-btn>
            </template>
            <span>See More {{data.data.FeatureEventName}} Website</span>
          </v-tooltip>
      
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="dialog = false"
          >
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>

<script>
  export default {
    props:{
      data:{
        data:{}
      }
    },
    data () {
      return {
        dialog: false,
      }
    },
    methods:{
      getCharString(data) {
      var splitArr = data.split(" ");
        if (splitArr.length > 1) {
          return (
            splitArr[0].substring(0, 1) +
            "" +
            splitArr[1].substring(0, 1)
          ).toUpperCase();
        } else {
          return splitArr[0].substring(0, 1).toUpperCase();
        }
      }
    },
    filters:{
        summary: (val,num)=>{
          if(val.length > num){
            return val.substring(0,num)+".."
          }else{
            return val
          }
        },
        dateFilter: value => {
            const date = new Date(value);
            return date.toLocaleString(["en-US"], {
                month: "short",
                day: "2-digit",
                year: "numeric"
            });
        }
    }
  }
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