<template>
  <v-container fluid>
      <wwdSection :topic="wwd[0]" />
      <v-divider />
      <wwdSection :topic="wwd[1]" xl="3"/>
      <v-divider />
      <wwdSection :topic="wwd[2]" />
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