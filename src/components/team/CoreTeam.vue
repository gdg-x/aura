<template>
  <v-container fluid class="py-0 my-0">
    <v-row align="center" justify="center" class="py-0 my-0">
      <v-col cols="12" md="12" lg="12" sm="12" class="py-0 my-0">
        <v-row class="py-0 my-0">
          <v-col md="3" lg="2" sm="4" cols="6" class="pa-1 mb-0" v-for="(item,i) in data" :key="i">
            <CoreTeamMemberCard :data="item" />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "App",
  props: ["data"],
  components: {
    CoreTeamMemberCard: () => import("@/components/team/CoreTeamMemberCard")
  },
  data: () => ({}),
  created() {},
  methods: {}
};
</script>