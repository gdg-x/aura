<template>
  <v-content class="pa-0">
    <v-container fluid class="pa-0 mt-2">
      <v-row
        justify="center"
        align="center"
        class="py-0 my-0"
        :class="this.$vuetify.theme.dark == true?'grey darken-4':'grey lighten-4'"
      >
        <v-col md="12" lg="10" xs="12" class="py-3 my-0">
          <profileHeader>Validation</profileHeader>
        </v-col>
      </v-row>
    </v-container>
    <v-container fluid class="pa-0 pt-5 mt-2">
      <v-row justify="center" align="center" class="py-0 my-0">
        <v-col md="12" lg="10" xs="12" class="py-3 my-0">
          <div class="ma-2 pa-2 google-font">
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
            <v-switch
              class="ma-2"
              :input-value="showCompact"
              @change="toggleCompact"
              label="Compact View"
            />
            <div v-show="showCompact">
              <profileTemplateCompact :profiles="baselines.baselines" />
            </div>
            <div v-show="!showCompact">
              <profileTemplate :profiles="baselines.baselines" />
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
import profileTemplateCompact from "@/components/profiles/profileTemplateCompact.vue";
import profileTemplate from "@/components/profiles/profileTemplate.vue";
import profileHeader from "@/components/profiles/profileHeader.vue";
import baselines from "@/assets/data/baselines.json";
import db from "@/assets/data/communityData.json";
import { mapMutations } from "vuex";

export default {
  components: {
    profileTemplate,
    profileTemplateCompact,
    profileHeader
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
