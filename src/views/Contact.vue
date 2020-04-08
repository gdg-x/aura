<template>
  <v-content class="px-0 mx-0 pt-5">

    <v-container fluid class="px-0 pt-5 mt-5 py-0">
      <v-row justify="center" align="center">
        <v-col md="12" lg="10" sm="11" xs="12" class="pt-3 ">
          <v-lazy v-model="loading" transition="fade-transition" >
          <contactHeader :data="generalData" />
          </v-lazy>
        </v-col>
      </v-row>
    </v-container>

    <v-container fluid class="px-0 py-0">
      <v-row justify="center" align="center">
        <v-col md="12" lg="10" sm="11" xs="12" class="">
          <contactDetails :data="generalData" />
        </v-col>
      </v-row>
    </v-container>


  </v-content>
</template>

<script>
import service from '@/services/appservices'
import contactHeader from '@/components/contact/ContactHeader';
import contactDetails from '@/components/contact/ContactDetails';
export default {
  components: {
    contactDetails,
    contactHeader,
  },
  data:()=>({
    generalData:{},
    loading:false   
  }),
  mounted(){
    this.getGeneralConfig()
  },
  methods:{
    getGeneralConfig(){
        this.loading = false
        service.getGeneralConfig().then(res=>{
            if(res.success){
                this.loading = true
                this.generalData = res.data
                // con
            }
        })
    }
  }
  
};
</script>