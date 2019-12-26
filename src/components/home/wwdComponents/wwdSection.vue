<template>
  <v-container fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" md="3" lg="3" sm="12" class="text-left pa-2">
        <p class="google-font mb-2 tool-header">{{ topic.sectionHeader }}</p>
        <p class="google-font mt-0" style="font-size:95%">{{ topic.sectionDesc }}</p>
      </v-col>
      <v-col cols="12" md="9" lg="9" sm="12">
        <v-container fluid>
          <v-row>
            
            <v-col
              v-for="(item, i) in topic.items"
              :key="i"
              cols="mx-auto"
              class="text-center pa-2 d-flex"
            >
              <wwdBasicCard :item="item" />
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import wwdBasicCard from "@/components/home/wwdComponents/wwdBasicCard.vue";
export default {
  components : {
    wwdBasicCard
  },
  props: {
      topic : Object
  },
  data: function () {
  return {}},
  methods: {
    make_readable(str) {
      return str.replace(/_/, " ");
    }
  }
};
</script>

<style scoped>
.tool-header {
  font-size: 200%;
  color: #1a73e8;
}
</style>