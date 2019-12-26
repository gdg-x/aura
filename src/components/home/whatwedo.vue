<template>
  <v-container fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" md="3" lg="3" sm="12" class="text-left pa-2">
        <p class="google-font mb-2 tool-header">What We Do</p>
        <p
          class="google-font mt-0"
          style="font-size:95%"
        >The MITRE SAF brings together the right technologies, methods, and skills to meet the security needs of today's developers and operators.</p>
      </v-col>
      <v-col cols="12" md="9" lg="9" sm="12">
        <v-container fluid>
          <v-row>
            <v-col
              v-for="item in whatwedocats"
              :key="item.name"
              md="3"
              lg="3"
              sm="6"
              cols="6"
              class="text-center pa-2"
            >
              <v-card outlined v-bind:href="item.link" target="_blank" class="pa-2" flat>
                <v-icon large style="font-size:300%">{{ item.icon }}</v-icon>
                <p class="google-font mt-2 title">{{ item.name }}</p>
                <p class="google-font" style="font-size:95%">{{ item.desc }}</p>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
    <v-divider />
    <v-row align="center" justify="center">
      <v-col cols="12" md="3" lg="3" sm="12" class="text-left pa-2">
        <p class="google-font mb-2 tool-header">How We Do It</p>
        <p
          class="google-font mt-0"
          style="font-size:95%"
        >MITRE has developed a workflow for generating good security data - and acting on it.</p>
      </v-col>
      <v-col cols="12" md="9" lg="9" sm="12">
        <v-container fluid>
          <v-row justify="space-between">
            <v-col
              v-for="(item, i) in whatwedotools"
              :key="i"
              md="4"
              lg="4"
              sm="12"
              :cols="$vuetify.breakpoint.smAndDown ? '6' : '3'"
              class="d-flex"
            >
              <v-card outlined :href="item.link" target="_blank" flat class="pa-2">
                <!--<v-container fluid>
                <v-row>
                  <v-col v-for="tool in item.tools" :key="tool">
                    {{tool.name}}
                    <v-img
                      v-show="tool.svg"
                      :src="require('@/assets/img/svg/' + tool.svg + '.svg')"
                      align="center"
                      justify="center"
                      style="max-width: 50px; max-height: 50px;"
                      class="ma-2"
                      contain
                    />
                  </v-col>
                </v-row>
                </v-container>-->
                <div style="justify-content: space-between">
                  <v-tooltip bottom v-for="(tool, i) in item.tools" :key="i">
                    <template v-slot:activator="{ on }">
                      <a :href="tool.link" target="_blank" flat class="ma-2">
                        <img
                        justify="center"
                          :src="require('@/assets/img/svg/' + tool.svg + '.svg')"
                          v-on="on"
                          dark
                          style="max-width: 32px; max-height: 32px;"
                        />
                      </a>
                    </template>
                    <span>{{tool.name}}</span>
                  </v-tooltip>
                </div>
                <p
                  class="google-font text-center title"
                  style="font-size:140%"
                >{{ make_readable(item.name) }}</p>
                <p
                  class="text-left ma-2 google-font text-center"
                  style="font-size:95%"
                >{{ item.desc }}</p>

                <v-card-text
                  class="google-font text-center font-weight-bold align-bottom ma-2"
                  style="font-size:120%"
                >{{item.summary}}</v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
    <v-divider />
    <v-row align="center" justify="center">
      <v-col cols="12" md="3" lg="3" sm="12" class="text-left pa-2">
        <p class="google-font mb-2 tool-header">Tools We Built</p>
        <p
          class="google-font mt-0"
          style="font-size:95%"
        >MITRE has developed a toolchain to support secure development.</p>
      </v-col>
      <v-col cols="12" md="9" lg="9" sm="12">
        <v-container fluid>
          <v-row justify="center">
            <v-col
              v-for="(item, i) in whatwedolinks"
              :key="i"
              md="3"
              lg="3"
              sm="12"
              xs="12"
              
            >
              <v-card outlined :href="item.link" target="_blank" flat class="pa-2">
                <p
                  class="google-font text-center title"
                  style="font-size:140%"
                >{{ make_readable(item.name) }}</p>
                <p
                  class="text-left ma-2 google-font text-center"
                  style="font-size:95%"
                >{{ item.desc }}</p>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import whatwedodata from "@/assets/data/whatWeDo.json";
export default {
  name: "App",
  data: () => ({
    whatwedocats: whatwedodata.whatWeDoCategories,
    whatwedotools: whatwedodata.whatWeDoTools,
    whatwedolinks: whatwedodata.whatWeDoLinks
  }),
  filters: {
    truncate(value, bp) {
      if (bp.smAndDown && value.length > 75) {
        return value.substring(0, 72) + "...";
      } else if (value.length > 150) {
        return value.substring(0, 147) + "...";
      } else {
        return value;
      }
    }
  },
  methods: {
    getImgUrl(url) {
      if (url.length > 0) {
        return require("@/assets/img/what-we-do/" + url);
      } else {
        return require("@/assets/img/what-we-do/notFound.png");
      }
    },
    make_readable(str) {
      return str.replace(/_/, " ");
    }
  }
};
</script>

<style scoped>
.tool-header {
  font-size: 200%;
  color: #1a73e8;
}
</style>

