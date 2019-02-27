<template>
  <v-footer
    color="white"
    height="auto"
  >
    <v-container fluid>

      <v-layout wrap align-center justify-center row fill-height>
        <v-flex xs12 md10 sm10 lg10>
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
              <p class="google-font mb-0" style="font-size: 150%;font-weight: 300;"><b>About</b></p>  
              <div v-for="(item,i) in FooterData.AboutSession" :key="i" class="mt-1">
                <a :href="item.Link" class="google-font" target="_blank" style="color: #3E4551;text-decoration: none;font-size:120%">{{item.LinkName}}</a><br>
              </div>
            </v-flex>

            <v-flex xs12 md3 sm4 lg3 class="py-2">
              <p class="google-font mb-0" style="font-size: 150%;font-weight: 300;"><b>Resources</b></p>  
              <div v-for="(item,i) in FooterData.ChapterResourcesSession" :key="i" class="mt-1">
                <a :href="item.Link" class="google-font" target="_blank" style="color: #3E4551;text-decoration: none;font-size:120%">{{item.LinkName}}</a><br>
              </div>
            </v-flex>

            <v-flex xs12 md3 sm4 lg3 class="py-2">
              <p class="google-font mb-0" style="font-size: 150%;font-weight: 300;"><b>Developer Console</b></p>  
              <div v-for="(item,i) in FooterData.DevConsole" :key="i" class="mt-1">
                <a :href="item.Link" target="_blank" class="google-font" style="color: #3E4551;text-decoration: none;font-size:120%">{{item.LinkName}}</a><br>
              </div>
            </v-flex>
           </v-layout>
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