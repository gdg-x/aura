<template>
  <v-footer
    height="auto"
    class="hidden-sm-and-down ma-0"
    :class="this.$vuetify.theme.dark == true?'grey darken-4':'white'"
  >
    <!-- style="border-color:#e0e0e0;border-width: 1px;border-style: solid;border-bottom: 0;border-left:0;border-right:0" -->
    <v-container fluid>
      <v-row align="center" justify="center" class="my-0 py-0">
        <v-col cols="12" md="10" lg="10" sm="10" class="py-0 my-0">
          <!-- <v-divider v-if="!this.$vuetify.theme.dark"></v-divider> -->
          <!-- <p class="google-font mt-4 mb-3" style="font-size:130%">
            Follow Us:
            <span v-for="(item,i) in communityData.SocialLinks" :key="i">
              <v-tooltip top>
                <template v-slot:activator="{ on }">
                  <v-btn text icon :href="item.link" target="_blank" slot="activator">
                    <v-icon>{{item.icon}}</v-icon>
                  </v-btn>
                </template>
                <span>{{item.name}}</span>
              </v-tooltip>
            </span>
          </p> -->
          <!-- <v-divider></v-divider> -->
        </v-col>
      </v-row>

      <v-row align="center" justify="center">
        <v-col cols="12" md="10" lg="10" sm="10" class="my-0 py-0">
          <v-container fluid class="pa-0 my-0">
            <!-- Links Section -->
            <v-row align="center" justify="start" class>
              <v-col
                cols="12"
                md="3"
                lg="4"
                sm="3"
                class="py-2"
                v-for="(item,i) in FooterData.Links"
                :key="i"
              >
                <!-- <div v-for="(itemp,j) in item" :key="j" class="mt-1">
                  <p class="google-font mb-0" style="font-size: 140%;font-weight: 300;">
                    <b>{{j}}</b>
                  </p>
                  <div v-for="(linkdata,k) in itemp" :key="k">
                    <a
                      :href="linkdata.Link"
                      :class="$vuetify.theme.dark?'darkThemeTextLink':'lightThemeTextLink'"
                      class="google-font"
                      target="_blank"
                      style="text-decoration: none;font-size:110%"
                    >{{linkdata.LinkName}}</a>
                    <br />
                  </div>
                </div> -->
              </v-col>
            </v-row>
            <!-- Links Section -->
          </v-container>
        </v-col>
      </v-row>

      <v-row align="center" justify="center" class="mb-0">
        <v-col cols="12" md="10" lg="10" sm="10" class="px-0 mx-0">
          <v-divider></v-divider>
          <v-toolbar
            text
            class="pa-0 px-0 mt-3 mx-0 elevation-0"
            style="padding:0 !important"
            :class="this.$vuetify.theme.dark == true?'grey darken-4':'white'"
          >
            <v-toolbar-title class="google-font pl-0 ml-0 mr-3" style="font-size:200%">MITRE SAF</v-toolbar-title>

            <!-- <v-btn
              v-for="(item,i) in FooterData.FooterEndSession"
              :key="i"
              :href="item.Link"
              target="_blank"
              class="ml-0 google-font hidden-sm-and-down"
              style="text-transform: capitalize;font-size:110%"
              text
              aria-label="Footer Bottom Button"
            >{{ item.LinkName }}</v-btn> -->
          </v-toolbar>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
import communityData from "@/assets/data/communityData.json";
import FooterData from "@/assets/data/footer.json";
export default {
  data() {
    return {
      communityData: communityData,
      FooterData: FooterData
    };
  }
};
</script>

<style scoped>
.darkThemeTextLink {
  color: #fafafa;
}
.lightThemeTextLink {
  color: #3e4551;
}
</style>