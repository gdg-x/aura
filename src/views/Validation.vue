<template>
  <v-content>
    <div class="title text-justify pa-4">
      <p>
        These open-source community-based InSpec profiles validate security of
        common system components. MITRE is helping to provide stewardship over
        these profiles, hosted here and at other community vendor sites. If you
        are interested in new profiles, please contact us at
        <a
          :href="mail_link"
        >{{ db.email }}</a>. If you are interested in developing and contributing your own
        profiles, please see our links to Training material.
      </p>
    </div>

    <v-sheet v-for="item in items" :key="item.category" class="ma-4 pa-2">
      <h2>{{ item.category }}</h2>
      <v-card
        flat
        v-for="(link, entry) in item.values"
        :key="link"
        class="ma-4"
        :href="link"
        target="_blank"
        outlined
      >
        <v-card-title class="headline break-word">{{ entry }}</v-card-title>
      </v-card>
    </v-sheet>
  </v-content>
</template>

<script>
import baselines from "@/assets/data/baselines.json";
import db from "@/assets/data/db.json";

export default {
  data() {
    return {
      items: baselines.items, // fetch data
      db: db, // catch-all for misc data like the contact email
      width: "1000" // should width be locked in? cards can be bound to this
    };
  },
  computed: {
    mail_link() {
      return "mailto:" + db.email;
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

wrap button text fix the viewports -- buttons should stack
