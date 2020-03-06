<template>
  <v-card outlined class="pa-2 ma-2 d-flex flex-column" :to="item.link" flat>
    <!--<toolBlock v-if="item.tools" :tools="item.tools" />-->
    <v-icon v-if="item.icon" large style="font-size:300%">{{ item.icon }}</v-icon>
    <img
      v-else-if="item.svg"
      :src="require('@/assets/img/svg/' + item.svg + '.svg')"
      v-on="on"
      dark
      style="max-width: 32px; max-height: 32px;"
    />
    <v-card-title class="google-font mt-2 title align-bottom justify-center break-word">{{ make_readable(item.name) }}</v-card-title>
    <v-card-text class="google-font">{{ item.desc }}</v-card-text>
    <v-spacer> </v-spacer>
    <v-card-actions>
      <v-container fluid>
      <v-row justify="center">
          <v-btn color="primary" v-if="item.app_link" class="d-none d-sm-inline" :href="item.app_link" :target='item.app_link[0] == "/" ? "" : "_blank"' text>Demo</v-btn>
          <v-btn color="primary" v-if="item.doc_link" class="d-none d-sm-inline " :href="item.doc_link" :target='item.doc_link[0] == "/" ? "" : "_blank"' text>Docs</v-btn>
          <v-btn color="primary" v-if="item.github_link" class="d-none d-sm-inline " :href="item.github_link" :target='item.github_link[0] == "/" ? "" : "_blank"' text>GitHub</v-btn>
          <a v-if="item.app_link" :href="item.app_link" target="_blank">
            <img
              :src="require('@/assets/img/svg/' + item.app_svg + '.svg')"
              class="svg-style d-flex d-sm-none ma-2"
            />
          </a>
          <a v-if="item.doc_link" :href="item.doc_link" target="_blank">
            <img
              :src="require('@/assets/img/svg/desc.svg')"
              class="svg-style d-flex d-sm-none ma-2"
            />
          </a>
          <a v-if="item.github_link" :href="item.github_link" target="_blank">
            <img
              :src="require('@/assets/img/svg/github.svg')"
              class="svg-style d-flex d-sm-none ma-2"
            />
          </a>
      </v-row>
      </v-container>
    </v-card-actions>
  </v-card>
</template>

<script>

// see https://stackoverflow.com/questions/58556447/is-there-a-card-footer-card-deck-feature-on-vuetify
// for details on arranging card components

//import toolBlock from "@/components/home/wwdComponents/toolBlock.vue";
export default {
  props: {
    item: Object
  },
  components: {
    //toolBlock
  },
  methods: {
    make_readable(str) {
      return str.replace(/_/, " ");
    }
  }
};
</script>

<style scoped>
.card-outer {
  position: relative;
  padding-bottom: 10px;
}
.card-actions {
  position: absolute;
  bottom: 0;
}
.flexcard {
  display: flex;
  flex-direction: column;
}
.svg-style {
  max-width: 24px;
  max-height: 24px;
}
</style>
