<template>
    <v-container fluid class="py-0 my-0 mt-0">
        <v-row class="py-0 my-0">
            <v-col md="12" sm="12" cols="12" class="py-0 my-0">
                <v-row class="">
                    <v-col>
                        <p class="google-font mb-0">Here are the top 10 blogs/articles written by me. You can find more blogs/articles on <a :href="'https://medium.com/'+cd.MediumBlogPublicationUsername" style="text-decoration:none" target="_blank">Medium</a></p>
                        <!-- {{blogsData.feed.link}} -->
                    </v-col>
                </v-row>

                <v-row class="mb-5" align="center" justify="center">
                    <v-col md="3" lg="3" sm="4" cols="12" class="pa-2" >
                            <v-progress-circular
                            :size="70"
                            :width="7"
                            color="indigo"
                            indeterminate
                            ></v-progress-circular>

                            <template>
  <v-sheet
    :color="`grey ${theme.isDark ? 'darken-2' : 'lighten-4'}`"
    class="px-3 pt-3 pb-3"
  >
    <v-skeleton-loader
      class="mx-auto"
      max-width="300"
      type="card"
    ></v-skeleton-loader>
  </v-sheet>
</template>
                    </v-col>
                </v-row>

                <v-row class="mb-5">
                    <v-col md="3" lg="3" sm="4" cols="12" class="pa-2" v-for="(item,i) in blogsData.items" :key="i">
                        <BlogCard :data="{data:item}" />
                    </v-col>
                    <br>
                </v-row>

                
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import communitydata from '@/assets/data/communitydata.json'
import BlogCard from '@/components/Blogs/BlogCard'
import { configData } from "@/config/config";
export default {
    inject: ['theme'],
    components:{
        BlogCard
    },
    data() {
        return {
            communitydata: communitydata,
            blogsData: [],
            cd: configData
        }
    },
    created(){
        fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/'+configData.MediumBlogPublicationUsername).then(res=>res.json()).then(data=>{
            console.log(data)
            this.blogsData = data
            console.log(this.blogsData)
        }).catch(e=>{
            console.log(e)
        })
    }
}
</script>