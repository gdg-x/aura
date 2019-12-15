<template>
  <v-content>
    <div class="title text-justify pa-2">
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
    <v-btn v-on:click="toggleCompact" class="ml-8">Compact View</v-btn>
    <v-spacer />
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