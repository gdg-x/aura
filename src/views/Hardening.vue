<template>
  <v-content>
    <div class="title text-justify pa-2">
      <p>
        These open-source community-based hardening baselines help to securely configure common system components. MITRE is helping to provide stewardship over these hardening baselines, hosted here and at other community vendor sites. If you are interested in new hardening baselines, please contact us at
        <a
          :href="mail_link"
        >{{ db.communityEmail }}</a>.
      </p>
    </div>
    <v-btn v-on:click="toggleCompact">Compact View</v-btn>
    <v-spacer />
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
import { mapMutations } from "vuex";

export default {
  components: {
    profileTemplate,
    profileTemplateCompact
  },
  data() {
    return {
      hardening: hardening,
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