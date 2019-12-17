<template>
  <v-content>
    <v-row>
      <v-col xs="12" sm="12" md="6" lg="9" xl="6">
        <div class="ma-2 pa-2 google-font" max-width="1000">
          <p>
            These open-source community-based hardening baselines help to securely configure common system components. MITRE is helping to provide stewardship over these hardening baselines, hosted here and at other community vendor sites. If you are interested in new hardening baselines, please contact us at
            <a
              :href="mail_link"
            >{{ db.communityEmail }}</a>.
          </p>
        </div>
      </v-col>
    </v-row>
    <v-switch class="ma-2" :input-value="showCompact" @change="toggleCompact" label="Compact View" />
    <div v-show="showCompact">
      <profileTemplateCompact :profiles="hardening" />
    </div>
    <div v-show="!showCompact">
      <profileTemplate :profiles="hardening" />
    </div>
  </v-content>
</template>

<script>
import profileTemplate from "@/components/profiles/profileTemplate.vue";
import profileTemplateCompact from "@/components/profiles/profileTemplateCompact.vue";
import hardening from "@/assets/data/hardening.json";
import db from "@/assets/data/communityData.json";
import { mapMutations, mapGetters } from "vuex";

export default {
  components: {
    profileTemplate,
    profileTemplateCompact
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