<template>
  <v-content class="px-0 mx-0 pt-5">
    <v-container fluid class="px-0 pt-5 mt-5">
      <v-row justify="center" align="center">
        <v-col md="12" lg="10" xs="12" class="pt-3 ">
          <teamHeader />
        </v-col>
      </v-row>
    </v-container>

    <v-container fluid class="pa-0 py-0 my-0" >
      <v-row justify="center" align="center">
        <v-col md="12" lg="10" xs="12" class="py-0">
          <CoreTeam />
        </v-col>
      </v-row>
    </v-container>
<!-- :class="this.$vuetify.theme.dark == true?'grey darken-4':'grey lighten-4'" class="py-5" -->
    <v-container fluid class="pa-0 py-2 mt-5" >
      <v-row justify="center" align="center" >
        <v-col md="12" lg="10" xs="12" class="py-0">
          <organizingTeam />
        </v-col>
      </v-row>
    </v-container>

  </v-content>
</template>

<script>
import teamHeader from '../components/Team/TeamHeader';
import CoreTeam from '@/components/Team/CoreTeam'
import organizingTeam from '@/components/Team/organizingTeam'


export default {
  components: {
    teamHeader,
    CoreTeam,
    organizingTeam
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


