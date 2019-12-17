<template>
  <v-content>
    <v-container fluid class="pa-0 py-2">
      <v-row justify="center" align="center">
        <v-col
          md="12"
          lg="10"
          xs="12"
          class="py-0"
          :class="this.$vuetify.theme.dark == true?'darkModeContainer':'lightModeContainer'"
        >
        <div class="ma-2 pa-2 google-font" max-width="1000">
          <p>
            These open-source community-based InSpec profiles validate the security of
            common system components. MITRE is helping to provide stewardship over
            these profiles, hosted here and at other community vendor sites. If you
            are interested in new profiles, please contact us at
            <a
              :href="mail_link"
            >{{ db.communityEmail }}</a>. If you are interested in developing and contributing your own
            profiles, please see our links to Training material.
          </p>
        </div>
      </v-col>
    </v-row>
    </v-container>
    <v-switch class="ma-2" :input-value="showCompact" @change="toggleCompact" label="Compact View" />
    <div v-show="showCompact">
      <profileTemplateCompact :profiles="baselines" />
    </div>
    <div v-show="!showCompact">
      <profileTemplate :profiles="baselines" />
    </div>
  </v-content>
</template>

<script>
import profileTemplateCompact from "@/components/profiles/profileTemplateCompact.vue";
import profileTemplate from "@/components/profiles/profileTemplate.vue";
import baselines from "@/assets/data/baselines.json";
import db from "@/assets/data/communityData.json";
import { mapMutations } from "vuex";

export default {
  components: {
    profileTemplate,
    profileTemplateCompact
  },
  data() {
    return {
      baselines: baselines,
      db: db,
      isCompact: false
    };
  },
  computed: {
    mail_link() {
      return "mailto:" + db.communityEmail;
    },
    showCompact() {
      return this.$store.state.isCompact;
    }
  },
  methods: {
    ...mapMutations(["toggleCompact"])
  }
};
</script>