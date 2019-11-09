<template>
  <v-content class="px-0 mx-0 pt-3">

    <v-container fluid class="px-0 pt-5 mt-3 py-0">
      <v-row justify="center" align="center" class="py-3 pb-5" :class="this.$vuetify.theme.dark == true?'grey darken-4':'grey lighten-4'" >
        <v-col md="12" lg="10" xs="12" class="pt-3 bottom-space">
          <BlogsHeader />
        </v-col>
      </v-row>
    </v-container>

    <v-container fluid class="px-0 py-0">
      <v-row justify="center" align="center">
        <v-col md="12" lg="10" xs="12" class="card-top-margin">
          <BlogsDetails />
        </v-col>
      </v-row>
    </v-container>


  </v-content>
</template>

<script>
import BlogsHeader from '../components/Blogs/BlogsHeader';
import BlogsDetails from '../components/Blogs/BlogsDetails';

export default {
  components: {
    BlogsDetails,
    BlogsHeader,
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
      margin-top:-150px
    }
    .bottom-space{
      margin-bottom: 130px;
      margin-top: 8px
    }
  }

  @media screen and (max-width: 600px) {
    .card-top-margin {
      margin-top:-150px;
      box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08);
    }
    .bottom-space{
      margin-bottom: 100px
    }
  }
</style>


