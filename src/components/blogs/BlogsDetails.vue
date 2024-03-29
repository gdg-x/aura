<template>
  <v-container fluid class="py-0 my-0 mt-0">
    <v-row class="py-0 my-0">
      <v-col md="12" sm="12" cols="12" class="py-0 my-0">
        <v-row class>
          <v-col>
            <p class="google-font mb-0">
              Here are the top 10 blogs/articles written by us. You can find
              more blogs/articles on
              <a class="aura-text" :href="blogURL" style="text-decoration: none" target="_blank"
                >Medium</a
              >
            </p>
            <!-- {{blogsData.feed.link}} -->
          </v-col>
        </v-row>

        <!--  Loader -->
        <v-row class="mb-5" v-if="loader">
          <v-col
          md="4"
            lg="3"
            sm="6"
            cols="12"
            class="pa-2 text-center"
            v-for="(item, i) in 3"
            :key="i"
          >
            <v-skeleton-loader
              ref="skeleton"
              type="article"
              class="mx-auto elevation-0"
            ></v-skeleton-loader>
          </v-col>
        </v-row>
        <!--  Loader -->

        <!-- No Data Found -->
        <v-row
          v-if="blogsData.length <= 0 && !loader"
          justify="center"
          align="center"
          class="py-3"
        >
          <v-col md="12" lg="12" sm="12" cols="12">
            <p class="google-font">Blogs Not Found</p>
          </v-col>
        </v-row>
        <!-- No Data Found -->

        <v-row class="mb-5" v-else>
          <v-col
            md="4"
            lg="3"
            sm="6"
            cols="12"
            class="pa-2"
            v-for="(item, i) in blogsData.items"
            :key="i"
          >
            <BlogCard :data="{ data: item }" />
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
    BlogCard: () => import("@/components/blogs/BlogCard"),
  },
  data() {
    return {
      blogsData: [],
      loader: true,
      blogURL: "",
    };
  },
  computed: {
    ...mapState(["config"]),
  },
  mounted() {
    this.getMediumBlogs();
  },
  methods: {
    getMediumBlogs() {
      this.loader = true;
      service
        .getAllMediumBlogs(this.config.generalConfig.blogs.medium)
        .then((res) => {
          if (res.success) {
            this.loader = false;
            this.blogsData = res.data;
            this.blogURL = this.blogsData.feed.link;
            // this.blogsData =[]
          } else {
            this.loader = false;
          }
        })
        .catch((e) => {
          this.loader = false;
        });
    },
  },
};
</script>