<template>
  <v-main>
    <v-container fluid class="px-0 py-0">
      <v-row
        justify="center"
        align="center"
      >
        <v-col md="11" lg="11" sm="11" xs="12" >
          <!-- Blog -->
          <v-container fluid class="py-0 my-0 mt-2">
            <v-row align="center" class="py-0 my-0">
              <v-col md="12" sm="12" cols="12" class="py-0 my-0">
                <p
                  class=" google-font mb-0 "
                  style="font-weight: 350; font-size: 200%"
                >
                  <b class="aura-text"> Blogs</b>
                </p>
              </v-col>
            </v-row>
          </v-container>
          <!-- Blog -->
        </v-col>
      </v-row>
    </v-container>

    <v-container fluid class="px-0 py-0 mb-10">
      <v-row justify="center" align="center">
        <v-col md="11" lg="11" sm="11" xs="12" class="card-top-margin">
          <BlogsDetails />
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
export default {
  name: "BlogPage",
  components: {
    BlogsDetails: () => import("@/components/blogs/BlogsDetails"),
  },
};
</script>