<template>
  <v-content class="pa-0 pt-5">
    <v-container fluid class="pa-0 pt-5 mt-2">
      <v-row justify="center" align="center" class="py-0 my-0"
      :class="this.$vuetify.theme.dark == true?'grey darken-4':'grey lighten-4'">
        <v-col md="12" lg="10" xs="12" class="py-3 my-0">
          <profileHeader>Hardening</profileHeader>
        </v-col>
      </v-row>
    </v-container>
    <v-container fluid class="pa-0 pt-5 mt-2">
      <v-row justify="center" align="center" class="py-0 my-0">
        <v-col md="12" lg="10" xs="12" class="py-3 my-0">
          <div class="ma-2 pa-2 google-font">
            <p>
              These open-source community-based hardening baselines help to securely configure common system components. MITRE is helping to provide stewardship over these hardening baselines, hosted here and at other community vendor sites. If you are interested in new hardening baselines, please contact us at
              <a
                :href="mail_link"
              >{{ db.communityEmail }}</a>.
            </p>

            <v-switch
              class="ma-2"
              :input-value="showCompact"
              @change="toggleCompact"
              label="Compact View"
            />
            <div v-show="showCompact">
              <profileTemplateCompact :profiles="hardening" />
            </div>
            <div v-show="!showCompact">
              <profileTemplate :profiles="hardening" />
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
import profileTemplate from "@/components/profiles/profileTemplate.vue";
import profileTemplateCompact from "@/components/profiles/profileTemplateCompact.vue";
import profileHeader from "@/components/profiles/profileHeader.vue";
import hardening from "@/assets/data/hardening.json";
import db from "@/assets/data/communityData.json";
import { mapMutations, mapGetters } from "vuex";

export default {
  components: {
    profileTemplate,
    profileTemplateCompact,
    profileHeader
  },
  data() {
    return {
      hardening: hardening,
      db: db
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
    ...mapMutations(["toggleCompact"]),
    ...mapGetters(["isCompactGetter"])
  }
};
</script>