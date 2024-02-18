<template>
  <v-main
    class="hidden-sm-and-down pt-0 mt-0 google-font"
    :class="this.$vuetify.theme.dark == true ? 'card-dark' : 'card-light'"
    v-if="Object.keys(config).length"
    style="position: relative"
  >
    <v-row align="center" justify="center" class="my-4" >
      <v-col cols="12" md="11" lg="11" sm="11" class="my-0 py-0">
        <v-container fluid class="pa-0 my-0">
          <v-row justify="center" align="center">
            <v-col md="3" >
              <p style="font-size: 130%" class="mb-0">
                {{
                  config.generalConfig.shortName ||
                  config.generalConfig.name ||
                  ""
                }}
              </p>
            </v-col>
            <v-col md="6" class="text-center">
              <a
                v-for="(item, i) in config.footerConfig[
                  'Footer End Session Link'
                ]"
                :key="i"
                rel="noreferrer"
                :href="item.link"
                target="_blank"
                class="mx-2 google-font hidden-sm-and-down"
                style="
                  text-transform: capitalize;
                  font-size: 90%;
                  text-decoration: none;
                "
                text
                aria-label="Footer Bottom Button"
              >
                {{ item.linkname }}
              </a>
            </v-col>
            <v-col md="3" class="text-right">
              <p class="google-font mb-0" style="font-size: 120%">
                Based on
                <span class="aura-text">
                  
                  <a
                    href="https://github.com/gdg-x/aura/"
                    target="_blank"
                    rel="noreferrer"
                    style="text-decoration: none"
                    class="aura-text"
                  >
                  Project Aura</a
                  >
                </span>
              </p>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-main>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "AppFooter",
  components: {
    // CommunitySocialInfo: () =>
    //   import("@/components/common/CommunitySocialInfo"),
  },
  data: () => ({}),
  computed: {
    ...mapState(["config"]),
  },
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