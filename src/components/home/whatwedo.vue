<template>
  <v-container fluid>
    <v-row v-for="(topic, i) in wwd" :key="i">

      <wwdSection v-bind:topic="topic"><wwdBasicCard /></wwdSection>
    </v-row>
  </v-container>
</template>

<script>
import whatwedodata from "@/assets/data/whatWeDo.json";
import wwdSection from "@/components/home/wwdComponents/wwdSection.vue";
import wwdBasicCard from "@/components/home/wwdComponents/wwdBasicCard.vue";
export default {
  name: "App",
  components : {
    wwdSection,
    wwdBasicCard
  },
  data: () => ({
    wwd : whatwedodata
  }),
};
</script>

<style scoped>
.tool-header {
  font-size: 200%;
  color: #1a73e8;
}
</style>