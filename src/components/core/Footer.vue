<template>
  <v-footer
    height="auto"
    fixedfir
    class="hidden-sm-and-down ma-0"
    :class="this.$vuetify.theme.dark == true?'grey darken-4':'white'"
  >
  <!-- style="border-color:#e0e0e0;border-width: 1px;border-style: solid;border-bottom: 0;border-left:0;border-right:0" -->
    <v-container fluid >
      <v-row align="center" justify="center" class="my-0 py-0">
        <v-col cols="12" md="10" lg="10" sm="11" class="py-0 my-0">
          <v-divider v-if="!this.$vuetify.theme.dark"></v-divider>
          <!-- {{socialLinks}} -->
          <CommunitySocialInfo :config="config"/>
          <v-divider></v-divider>
        </v-col>
      </v-row>

      <v-row align="center" justify="center" class="mt-3">
        <v-col cols="12" md="10" lg="10" sm="11" class="my-0 py-0">
          <v-container fluid class="pa-0 my-0">
            <!-- Links Section -->

            <v-row justify="start" class="">
              <v-col cols="12" md="3" lg="3" sm="3" class="py-2" >
                  <p class="google-font mb-0" style="font-size: 140%;font-weight: 300;"><b>About</b></p>
                  <div v-for="(item,i) in config.footerConfig['About']" :key="i">
                        <a :href="item.link" rel="noreferrer" :class="$vuetify.theme.dark?'darkThemeTextLink':'lightThemeTextLink'" class="google-font my-3" target="_blank" style="text-decoration: none;font-size:110%">{{item.linkname}}</a><br>
                  </div>
              </v-col>

              <v-col cols="12" md="3" lg="3" sm="3" class="py-2" >
                  <p class="google-font mb-0" style="font-size: 140%;font-weight: 300;"><b>Resources</b></p>
                  <div v-for="(item,i) in config.footerConfig['Resources']" :key="i">
                        <a :href="item.link" rel="noreferrer" :class="$vuetify.theme.dark?'darkThemeTextLink':'lightThemeTextLink'" class="google-font my-3" target="_blank" style="text-decoration: none;font-size:110%">{{item.linkname}}</a><br>
                  </div>
              </v-col>

              <v-col cols="12" md="3" lg="3" sm="3" class="py-2" >
                  <p class="google-font mb-0" style="font-size: 140%;font-weight: 300;"><b>Developer Console</b></p>
                  <div v-for="(item,i) in config.footerConfig['Developer Console']" :key="i">
                        <a :href="item.link" rel="noreferrer" :class="$vuetify.theme.dark?'darkThemeTextLink':'lightThemeTextLink'" class="google-font my-3" target="_blank" style="text-decoration: none;font-size:110%">{{item.linkname}}</a><br>
                  </div>
              </v-col>
            </v-row>

            <!-- Links Section -->
          </v-container>
        </v-col>
      </v-row>

      <v-row align="center" justify="center" class="mb-0">
        <v-col cols="12" md="10" lg="10" sm="11" class="px-0 mx-0"> 
          <v-divider></v-divider>
          <v-toolbar text class="pa-0 px-0 mt-3 mx-0 elevation-0" style="padding:0 !important" :class="this.$vuetify.theme.dark == true?'grey darken-4':'white'">
            <v-toolbar-title class="google-font pl-0 ml-0 mr-3" style="font-size:200%">{{config.generalConfig.shortName || config.generalConfig.name || ''}}</v-toolbar-title>
            <v-btn
                v-for="(item,i) in config.footerConfig['Footer End Session Link']" 
                :key="i"
                rel="noreferrer"
                :href="item.link" target="_blank" 
                class="ml-0 google-font hidden-sm-and-down"
                style="text-transform: capitalize;font-size:110%" 
                text
                aria-label="Footer Bottom Button"
              >
                {{ item.linkname }}
            </v-btn>
            <v-spacer></v-spacer>
           <span class="subtitle-2 google-font"> Based on Project 
          <a
            href="https://github.com/gdg-x/aura/"
            target="_blank"
            rel="noreferrer"
            style="text-decoration:none"
          > Aura</a></span>
          </v-toolbar>
        </v-col>
      </v-row>

    </v-container>
  </v-footer>
</template>

<script>
import { mapState } from 'vuex'
  export default {
    components:{
      CommunitySocialInfo : ()=>import('@/components/common/CommunitySocialInfo'),
    },
    data:()=>({
    }),
    computed:{
      ...mapState(['config'])
    },
  }
</script>

<style scoped>
  .darkThemeTextLink{
    color: #FAFAFA
  }
  .lightThemeTextLink{
    color: #3E4551
  }
</style>