<template>
  <v-content class="px-0 mx-0 pt-3">

    <v-container fluid class="px-0 pt-5 mt-3 py-0">
      <v-row justify="center" align="center" class="py-3 pb-5" :class="this.$vuetify.theme.dark == true?'grey darken-4':'grey lighten-4'" >
        <v-col md="11" lg="10" sm="11" xs="12" class="pt-3 bottom-space">
          <BlogsHeader />
        </v-col>
      </v-row>
    </v-container>

    <v-container fluid class="px-0 py-0">
      <v-row justify="center" align="center">
        <v-col md="11" lg="10" sm="11" xs="12" class="card-top-margin">
          <BlogsDetails />
        </v-col>
      </v-row>
    </v-container>


  </v-content>
</template>

<script>

export default {
  components: {
    BlogsHeader:()=>import('@/components/blogs/BlogsHeader'),
    BlogsDetails:()=>import('@/components/blogs/BlogsDetails'),
  },
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
    }
    .bottom-space{
      margin-bottom: 100px
    }
  }
</style>