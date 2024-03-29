<template>
  <v-container fluid class="pa-0 ma-0 google-font">
    <v-row class="py-0 my-0">
      <v-col md="7" sm="6" cols="12" class="pr-md-15">
        <p
          class=" mb-1"
          style="font-size:100%"
        >Our events are open to newbies, developers, managers, and organizations who are interested in Google's technologies or use them as part of their projects.</p>
        <p class="">{{data.shortDescription}}</p>
        <p class=" mt-5 ">Questions? Please contact <a :href="`mailto:${data.email}`" class="aura-text">{{data.email}}</a></p>
        <CommunitySocialInfo :config="config"  class="mb-2"/>
        <span v-for="(item,i) in data.hashtags" :key="i" >
          <v-chip
            class="mr-2 mb-2"
            :href="'https://twitter.com/hashtag/'+item"
            target="_blank"
            :color="$vuetify.theme.dark?'#292929':'#DEE5F1'"
          >#{{item}}</v-chip>
        </span>
      </v-col>
      <v-col md="5" sm="6" cols="12" class="">
        <img :src="require('@/assets/img/common/contact.png')" style="float:right" width="80%" alt />
      </v-col>
    </v-row>
  </v-container>
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
  props: ["data"],
};
</script>