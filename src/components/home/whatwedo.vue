<template>
  <v-container fluid>
    <v-row v-for="(topic, i) in wwd" :key="i">
      <wwdSection :topic="topic"></wwdSection>
      <v-divider :v-show="i < wwd.length" />
    </v-row>
  </v-container>
</template>

<script>
import whatwedodata from "@/assets/data/whatWeDo.json";
import wwdSection from "@/components/home/wwdComponents/wwdSection.vue";

export default {

  components : {
    wwdSection,
  },
  data: () => ({
    wwd : whatwedodata.whatWeDo
  }),

};
</script>