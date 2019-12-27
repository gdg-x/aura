<template>
  <v-container fluid>
    <v-row align="center" justify="center">
      <v-col :cols="$vuetify.breakpoint.smAndDown ? '12' : '3'" class="text-left pa-2">
        <p class="google-font mb-2 tool-header">{{ topic.sectionHeader }}</p>
        <p class="google-font mt-0" style="font-size:95%">{{ topic.sectionDesc }}</p>
      </v-col>
      <v-col class="d-flex" :cols="$vuetify.breakpoint.smAndDown ? '12' : '9'">
        <v-container fluid>
          <v-row justify="center">
            <v-col
              v-for="(item, i) in topic.items"
              :key="i"
              :cols="cols"
              :sm="sm"
              :md="md"
              :lg="lg"
              :xl="xl"
              class="text-center pa-2 d-flex justify-center"
              
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
      topic : Object,
      cols : {
        type: String,
        default : "12"
      },
      sm : {
        type: String,
        default : "12"
      },
      md : {
        type: String,
        default : "6"
      },
      lg : {
        type: String,
        default : "3"
      },
      xl : {
        type: String,
        default : "3"
      }
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