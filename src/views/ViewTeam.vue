<template>
  <v-content class="px-0 mx-0 pt-1">
    <v-container fluid class="px-0 pt-5 mt-5" >
      <v-row justify="center" align="center" class="py-3" :class="this.$vuetify.theme.dark == true?'black':'grey lighten-4'" >
        <v-col md="12" lg="10" xs="12" class="pt-3 bottom-space"  >
          <h1>Team</h1>
          {{$route.params.id}}
        </v-col>
      </v-row>
    </v-container>


  </v-content>
</template>

<script>
export default {
  components: {
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

</style>


