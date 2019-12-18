<template>
  <v-container fluid class="py-0 my-0 mt-0">
    <v-row class="py-0 my-0">
      <v-col md="12" sm="12" cols="12" class="py-0 my-0">
        <v-row class>
          <v-col>
            <p class="google-font mb-0">
              Here are the top 10 blogs/articles written by me. You can find more blogs/articles on
              <a
                :href="'https://medium.com/'+cd.MediumBlogPublicationUsername"
                style="text-decoration:none"
                target="_blank"
              >Medium</a>
            </p>
            <!-- {{blogsData.feed.link}} -->
          </v-col>
        </v-row>

        <!-- Desktop Loader -->
        <v-row class="mb-5 hidden-sm-and-down" v-if="loader">
          <v-col
            md="3"
            lg="3"
            sm="4"
            cols="12"
            class="pa-2 text-center"
            v-for="(item,i) in 8"
            :key="i"
          >
            <v-sheet :color="`grey ${theme.isDark ? 'darken-2' : 'lighten-4'}`" class>
              <v-skeleton-loader class="mx-auto" max-width="100%" type="card"></v-skeleton-loader>
            </v-sheet>
          </v-col>
        </v-row>

        <v-row class="mb-5 d-md-none d-lg-none" v-if="loader">
          <v-col
            md="3"
            lg="3"
            sm="4"
            cols="12"
            class="pa-2 text-center"
            v-for="(item,i) in 3"
            :key="i"
          >
            <!-- Mobile Loader -->
            <v-skeleton-loader ref="skeleton" type="article" class="mx-auto elevation-1"></v-skeleton-loader>
            <!-- Mobile Loader -->
          </v-col>
        </v-row>

        <v-row class="mb-5" v-else>
          <v-col
            md="3"
            lg="3"
            sm="6"
            cols="12"
            class="pa-2"
            v-for="(item,i) in blogsData.items"
            :key="i"
          >
            <BlogCard :data="{data:item}" />
          </v-col>
          <br />
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import communityData from "@/assets/data/communityData.json";
import BlogCard from "@/components/Blogs/BlogCard";
import { configData } from "@/config/config";
export default {
  inject: ["theme"],
  components: {
    BlogCard
  },
  data() {
    return {
      communityData: communityData,
      blogsData: [],
      cd: configData,
      loader: true
    };
  },
  created() {
    fetch(
      "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/" +
        configData.MediumBlogPublicationUsername
    )
      .then(res => res.json())
      .then(data => {
        this.blogsData = data;
        this.loader = false;
      })
      .catch(e => {
        // console.log(e)
        this.loader = false;
      });
  }
};
</script>