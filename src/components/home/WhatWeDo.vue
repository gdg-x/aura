<template>
  <v-container fluid>
    <v-row align="center" justify="center">
      <v-col md="4">
        <p class="google-font mb-0" style="font-size: 150%">What we do?</p>
        <p class="google-font" style="font-size: 100%">
          {{ config.generalConfig.shortDescription }}
        </p>
        <!-- <p class="google-font" style="font-size: 90%">
          About different technologies
        </p>
        <span v-for="(item, i) in whatwedodata" :key="i">
          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <v-avatar
                size="30"
                :href="item.link"
                target="_blank"
                class="mr-3"
                rounded=""
                rel="noreferrer"
                style="cursor: pointer;"
              >
                <v-img width="10px"  srcset v-on="on" :src="getImgUrl(item.image)"></v-img>
              </v-avatar>
            </template>
            <span>{{ item.TechName }}</span>
          </v-tooltip>
        </span> -->
      </v-col>
      <v-col md="8" class="pa-0 ma-0">
        <v-container fluid class="pa-0 ma-0">
          <v-row>
            <v-col
              md="3"
              lg="3"
              sm="6"
              cols="6"
              v-for="(item, index) in whatWeDoContent"
              :key="index"
            >
              <div
                class="pa-4"
                :class="$vuetify.theme.dark ? 'card-dark' : 'card-light'"
              >
                <v-icon large style="font-size: 250%">{{ item.icon }}</v-icon>
                <p class="google-font mt-2" style="font-size: 120%">
                  {{ item.name }}
                </p>
                <p class="google-font" style="font-size: 85%">
                  {{ item.des }}
                </p>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from "vuex";
import whatwedodata from "@/assets/data/whatwedo.json";
export default {
  computed: {
    ...mapState(["config"]),
  },
  name: "App",
  data: () => ({
    whatwedodata: whatwedodata,
    whatWeDoContent: [
      {
        name: "Talks",
        icon: "mdi-comment",
        des: "Get updated with the latest news and announcements",
      },
      {
        name: "Codelabs",
        icon: "mdi-code-tags",
        des: "Get hands-on experience and guidance from the community",
      },
      {
        name: "Campus Roadshows",
        icon: "mdi-school",
        des: "Share knowledge in different companies & colleges",
      },
      {
        name: "Live Viewing Parties",
        icon: "mdi-chart-bubble",
        des: "Share knowledge in different Companies & colleges",
      },
    ],
  }),
  methods: {
    getImgUrl(url) {
      if (url.length > 0) {
        return require("@/assets/img/what-we-do/" + url);
      } else {
        return require("@/assets/img/what-we-do/notFound.png");
      }
    },
  },
};
</script>

