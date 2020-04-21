<template>
  <v-container fluid class="py-0 my-0 mt-0">
    <v-row class="py-0 my-0">
      <v-col md="12" sm="12" cols="12" class="py-0 my-0">
        <v-row class>
          <v-col>
            <p class="google-font mb-0">
              Here are the top 10 blogs/articles written by us. You can find more blogs/articles on
              <a :href="blogURL" style="text-decoration:none" target="_blank">Medium</a>
            </p>
            <!-- {{blogsData.feed.link}} -->
          </v-col>
        </v-row>

        <!-- Desktop Loader -->
        <v-row class="mb-5 hidden-sm-and-down" v-if="loader">
          <v-col
            md="3"
            lg="2"
            sm="6"
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

        <!-- Mobile Loader -->
        <v-row class="mb-5 d-md-none d-lg-none" v-if="loader">
          <v-col
            md="3"
            lg="3"
            xl="3"
            sm="4"
            cols="12"
            class="pa-2 text-center"
            v-for="(item,i) in 3"
            :key="i"
          >
            <v-skeleton-loader ref="skeleton" type="article" class="mx-auto elevation-1"></v-skeleton-loader>
          </v-col>
        </v-row>
        <!-- Mobile Loader -->
        <v-row v-if="blogsData.length <=0 && !loader" justify="center" align="center" class="py-3" :class="this.$vuetify.theme.dark == true?'black':''">
          <v-col  md="12" lg="12" sm="12" cols="12" class="text-center">
          <v-img
            :src="require('@/assets/img/svg/DataNotFound.svg')"
            :lazy-src="require('@/assets/img/svg/DataNotFound.svg')"
            width="15%"
            style="border-radius:8px;margin-left:auto;margin-right:auto"
          >
            <template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
              </v-row>
            </template>
          </v-img>
          <h2 class="google-font">Blogs Not Found</h2>
        </v-col>
        </v-row>

        <v-row class="mb-5" v-else>
          <v-col
            md="3"
            lg="2"
            sm="6"
            cols="12"
            class="pa-2"
            v-for="(item,i) in blogsData.items"
            :key="i"
          >
            <BlogCard :data="{data:item}" />
            <!-- {{item}} -->
          </v-col>
          <br />
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from "vuex";
import service from "@/services/appservices";
export default {
  inject: ["theme"],
  components: {
    BlogCard: () => import("@/components/blogs/BlogCard")
  },
  data() {
    return {
      blogsData: [],
      loader: true,
      blogURL: ""
    };
  },
  computed: {
    ...mapState(["config"])
  },
  mounted() {
    this.getMediumBlogs();
  },
  methods: {
    getMediumBlogs() {
      this.loader = true;
      service
        .getAllMediumBlogs(this.config.generalConfig.blogs.medium)
        .then(res => {
          if (res.success) {
            this.loader = false;
            this.blogsData = res.data;
            this.blogURL = this.blogsData.feed.link;
          } else {
            this.loader = false;
          }
        })
        .catch(e => {
          this.loader = false;
        });
    }
  }
};
</script>