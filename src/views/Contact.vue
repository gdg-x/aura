<template>
  <v-content class="pa-0">

    <v-container fluid class="mt-4 mb-0">
      <v-layout wrap align-center justify-center row fill-height class="my-0">
        <v-flex xs12 md10 class="mb-0">
            <p class="google-font mb-0 mt-0" style="font-size:200%">Contact {{ChapterDetails.ChapterName}}</p>
            <v-divider></v-divider>


        </v-flex>
      </v-layout>
    </v-container>

    <v-container fluid class="">
      <v-layout wrap align-center justify-center row fill-height>
        <v-flex xs12 md10 class="">
          <aboutGDGChapter/>
        </v-flex>
      </v-layout>
    </v-container>



  </v-content>
  
</template>

<script>
import ChapterDetails from '@/assets/data/chapterDetails.json'
import aboutGDGChapter from '@/components/about/aboutGDGChapter'

  export default {
    components: {
      aboutGDGChapter,
    },
    data() {
      return {
        ChapterDetails: ChapterDetails
      }
    },
  }
</script>
