<template>
  <v-footer
    color="white"
    height="auto"
    class="hidden-sm-and-down"
  >
    <v-container fluid style="border-color:#e0e0e0;border-width: 1px;border-style: solid;border-bottom: 0">
      <v-layout wrap align-center justify-center row fill-height class="my-0 py-0">
        <v-flex xs12 md10 sm10 lg10 class="py-0 my-0">
          <p class="google-font" style="font-size:130%" >Follow Us:
            <span v-for="(item,i) in ChapterDetails.socialLinks" :key="i">
              <v-tooltip top>
                  <v-btn flat icon :href="item.link" target="_blank" slot="activator">
                    <v-icon>{{item.icon}}</v-icon>
                  </v-btn>
                  <span>{{item.name}}</span>
              </v-tooltip>
            </span>
          </p>
          <v-divider></v-divider>
        </v-flex>
      </v-layout>

      <v-layout wrap justify-center row>
        <v-flex xs12 md10 lg10>
           <v-layout wrap align-start justify-start row class="my-2">
            <v-flex xs12 md3 sm4 lg3 class="py-2">
              <p class="google-font mb-0" style="font-size: 140%;font-weight: 300;"><b>About</b></p>  
              <div v-for="(item,i) in FooterData.AboutSession" :key="i" class="mt-1">
                <a :href="item.Link" class="google-font" target="_blank" style="color: #3E4551;text-decoration: none;font-size:110%">{{item.LinkName}}</a><br>
              </div>
            </v-flex>

            <v-flex xs12 md3 sm4 lg3 class="py-2">
              <p class="google-font mb-0" style="font-size: 140%;font-weight: 300;"><b>Resources</b></p>  
              <div v-for="(item,i) in FooterData.ChapterResourcesSession" :key="i" class="mt-1">
                <a :href="item.Link" class="google-font" target="_blank" style="color: #3E4551;text-decoration: none;font-size:110%">{{item.LinkName}}</a><br>
              </div>
            </v-flex>

            <v-flex xs12 md3 sm4 lg3 class="py-2">
              <p class="google-font mb-0" style="font-size: 140%;font-weight: 300;"><b>Developer Console</b></p>  
              <div v-for="(item,i) in FooterData.DevConsole" :key="i" class="mt-1">
                <a :href="item.Link" target="_blank" class="google-font" style="color: #3E4551;text-decoration: none;font-size:110%">{{item.LinkName}}</a><br>
              </div>
            </v-flex>
           </v-layout>
        </v-flex>

      </v-layout>

      <v-layout wrap justify-center row class="mb-0">
        <v-flex xs12 md10 lg10>
          <v-divider></v-divider>
           <v-toolbar flat color="white" class="pa-0 mx-0" style="padding:0 !important" >
              <v-toolbar-title class="google-font pl-0 ml-0 mr-3" style="font-size:200%">{{ChapterDetails.ChapterName}}</v-toolbar-title>

              <v-btn
                  v-for="(item,i) in FooterData.FooterEndSession" 
                  :key="i"
                  :href="item.Link" target="_blank" 
                  class="ml-0 google-font hidden-sm-and-down"
                  style="text-transform: capitalize;font-size:110%" 
                  flat
                >
                  {{ item.LinkName }}
              </v-btn>
            </v-toolbar>
        </v-flex>
      </v-layout>

    </v-container>
  </v-footer>
</template>

<script>
  import ChapterDetails from '@/assets/data/chapterDetails.json'
  import FooterData from '@/assets/data/footer.json'
  export default {
    data() {
      return {
        ChapterDetails:ChapterDetails,
        FooterData:FooterData
      }
    },
  }
</script>