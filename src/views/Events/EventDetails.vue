
  
<template>
  <v-content class="px-0 mx-0 pt-3">

    <v-container fluid class="px-0 pt-5 mt-3 py-0">
      <v-row justify="center" align="center" class="py-3 pb-5" :class="this.$vuetify.theme.dark == true?'grey darken-4':'grey lighten-4'" >
        <v-col md="12" lg="10" xs="12" class="pt-3 bottom-space">
        </v-col>
      </v-row>
    </v-container>

    <v-container fluid class="px-0 pt-5 mt-3 py-0">
      <v-row justify="center" align="center" class="py-3 pb-5" >
        <v-col v-if="loader" md="12" class="card-top-margin elevation-0 pa-0 text-center">
            <v-progress-circular
              :size="50"
              color="primary"
              indeterminate
            ></v-progress-circular>
        </v-col>
        <v-col v-else md="12" lg="9" sm="11" xs="12" class="card-top-margin elevation-2 pa-0">
          <layout :data="EventData" />
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
import service from '@/services/appservices'
import { mapState } from 'vuex'
export default {
  components: {
    layout:()=>import('@/views/Events/layout/layout')
  },
  data(){
      return{
        notFound:0,
        EventData: {},
        loader:true
      }
  },
  computed:{
    ...mapState(['config'])
  },
  mounted(){
    this.getEventInfo();
  },
  methods:{
    getEventInfo(){
      this.loader = true
      this.EventData = {}
      service.getEvent(this.$route.params.id).then(res=>{
          if(res.success){
            if(res.data.visible){
              this.EventData=res.data
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