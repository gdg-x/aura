
<template>
  <v-content class="px-0 mx-0 pt-5">

    <v-container fluid class="px-0 pt-5 mt-5 py-0">
      <v-row justify="center" align="center">
        <v-col md="11" lg="10" sm="11" xs="12" class="pt-3 ">
          <aboutHeader />
        </v-col>
      </v-row>
    </v-container>

    <v-container fluid class="px-0 py-0">
      <v-row justify="center" align="center">
        <v-col md="11" lg="10" sm="11" xs="12" class="">
          <aboutCommunity :data="config.generalConfig" />
        </v-col>
      </v-row>
    </v-container>

    <v-container fluid class="pa-0 py-0 my-0" >
      <v-row justify="center" align="center" :class="this.$vuetify.theme.dark == true?'grey darken-4':'grey lighten-4'" class="py-5 ">
        <v-col md="11" lg="10" sm="11" xs="12" class="py-0">
          <communityGuidelines :data="communityGudielines" />
        </v-col>
      </v-row>
    </v-container>

    <v-container fluid class="pa-0 py-0 my-0" >
      <v-row justify="center" align="center"  class="py-5">
        <v-col md="11" lg="10" sm="11" xs="12" class="py-0 mb-5">
           <coc :data="coc" />
          <antiHarassmentPolicy :data="config.generalConfig.name" />
        </v-col>
      </v-row>
    </v-container>

  </v-content>
</template>

<script>
import service from '@/services/appservices'
import aboutHeader from '@/components/about/AboutHeader';
import aboutCommunity from '@/components/about/AboutCommunity';
import communityGuidelines from '@/components/about/CommunityGuidelines'
import coc from '@/components/about/COC'
import antiHarassmentPolicy from '@/components/about/AntiHar'

import { mapState } from 'vuex';

export default {
  components: {
    aboutCommunity,
    aboutHeader,
    communityGuidelines,
    coc,
    antiHarassmentPolicy
  },
  computed:{
    ...mapState(['config'])
  },
  data:()=>({
    loading: true,
    communityGudielines:[],
    coc:''
  }),
  mounted(){
    this.getCommunityGuidelinesData()
  },
  methods:{
    getCommunityGuidelinesData(){
      service.getCommunityGuidelines().then(res=>{
        if(res.success){
          // console.log(res.data)
          this.coc = res.data.codeOfConduct
          this.communityGudielines = res.data.communityGuidelines
        }
      })
    }
  }
};
</script>