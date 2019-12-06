<template>
  <v-content>
    <div class="title text-justify pa-2">
      <p>
        These open-source community-based hardening baselines help to securely configure common system components. MITRE is helping to provide stewardship over these hardening baselines, hosted here and at other community vendor sites. If you are interested in new hardening baselines, please contact us at
        <a
          :href="mail_link"
        >{{ db.CommunityEmail }}</a>.
      </p>
    </div>
    <profileTemplate :profiles="hardening" />
  </v-content>
</template>

<script>

import profileTemplate from "@/components/profiles/profileTemplate.vue";
import hardening from "@/assets/data/hardening.json";
import db from "@/assets/data/communitydata.json";

export default {
  components: {
    profileTemplate
  },
  data() {
    return {
      hardening: hardening,
      db: db

    };
  },
  computed: {
    mail_link() {
      return "mailto:" + db.CommunityEmail;
    }
  }
};
</script>

<style scoped>
p {
  text-align: left;
  padding: 5px 0;
}
.break-word {
  overflow-wrap: normal;
  word-wrap: break-word;
  word-break: normal;
  hyphens: auto;
}
</style>