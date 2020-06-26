<template>
  <div
      :class="this.$vuetify.theme.dark == true?'black':'grey lighten-5'"
      style="height:100% !important"
  >
    <EventToolBar :eventName="EventData.name"/>
    <EventDrawer/>
    <v-content class="" v-if="loader">
      <v-container class="fill-height">
        <v-row justify="center" align="center" class>
          <v-col cols="12" md="12" class="text-center">
            <v-progress-circular :width="5" :size="50" color="indigo" indeterminate></v-progress-circular>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
    <v-container
      fluid
      :class="this.$vuetify.theme.dark == true?'black':'grey lighten-5'"
      class="pa-0 ma-0"
      style="height:100% !important"
      v-else
    >
      <v-row align="center" justify="center">
        <v-col cols="12" sm="11" md="10" lg="10" xl="10" class="my-0 py-0">
          <v-slide-y-reverse-transition>
            <router-view :eventDetails="EventData" v-show="show"/>
          </v-slide-y-reverse-transition>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import service from '@/services/appservices'
import { mapState } from 'vuex'
export default {
  name: "ccc",
  components: {
    EventToolBar: () => import("@/components/NewEvents/EventToolbar"),
    EventDrawer: () => import("@/components/NewEvents/EventDrawer")
  },
  data: () => ({
    show: false,
    notFound:0,
        EventData: {},
        loader:true
  }),
  mounted(){
    this.getEventInfo();
  },
  computed:{
    ...mapState(['config'])
  },
  methods:{
    getEventInfo(){
      this.loader = true
      this.EventData = {}
      service.getEvent(this.$route.params.id).then(res=>{
          if(res.success){
            if(res.data.visible){
              this.EventData=res.data
              console.log(this.EventData);
              this.loader = false 
              document.title = this.EventData.name +" | " +this.config.generalConfig.name
            }else{
              this.$router.push({ path: '/events' })
              this.loader = false
            }
          }else{
            this.$router.push({ path: '/events' })
            this.loader = false
          }
      }).catch(e=>{
        this.loader = false
        console.log(e)
      })
    }
  },
  created() {
    this.show = true;
  }
  // methods:{
  //     show(){
  // console.log(this.$route);
  //     }
  // }
};
</script>

<style>
</style>