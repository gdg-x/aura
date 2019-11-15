<template>
  <v-content class="px-0 mx-0 pt-3">

    <v-container fluid class="px-0 pt-5 mt-3 py-0">
      <v-row justify="center" align="center" class="py-3 pb-5" :class="this.$vuetify.theme.dark == true?'grey darken-4':'grey lighten-4'" >
        <v-col md="12" lg="10" xs="12" class="pt-3 bottom-space">
            <!-- {{$route.params.id  }} -->
            <!-- {{EventData}} -->
        </v-col>
      </v-row>
    </v-container>

    <v-container fluid class="px-0 pt-5 mt-3 py-0">
      <v-row justify="center" align="center" class="py-3 pb-5" >
        <v-col md="12" lg="9" xs="12" class="card-top-margin elevation-2 pa-0">
          <layout :eventdata="EventData" />
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
import layout from '../Events/Layout/Layout'
import EventsData from '../../assets/data/Events/eventsData'
export default {
  components: {
    layout
  },
  data(){
      return{
        notFound:0,
        EventData: {}
      }
  },
  mounted(){
    this.EventData = {}
    EventsData.map(res=>{
        if(res.id == this.$route.params.id){
            this.notFound = 1;
            this.EventData = res
        }
    })
    if(this.notFound != 1)
      this.$router.push({ path: '/events' })

  },
  created(){
    let metaThemeColor = document.querySelector("meta[name=theme-color]");
    if(this.$vuetify.theme.dark){
      metaThemeColor.setAttribute("content", '#212121');
    }else{
        metaThemeColor.setAttribute("content", '#0277bd');
    }
  }
};
</script>

<style scoped>

  @media screen and (min-width: 600px) {
    .card-top-margin {
      margin-top:-180px
    }
    .bottom-space{
      margin-bottom: 150px;
      margin-top: 8px
    }
  }

  @media screen and (max-width: 600px) {
    .card-top-margin {
      margin-top:-150px;
    }
    .bottom-space{
      margin-bottom: 0px
    }
  }
</style>


