<template>
  <v-container fluid class="py-0 my-0">
    <v-row align="center" justify="center" class="py-0 my-0">
      <v-col cols="12" md="12" lg="12" sm="12" class="py-0 my-0">
        <v-row class="py-0 my-0">
          <v-col
            md="2"
            lg="2"
            sm="3"
            cols="6"
            class="pa-1 mb-0"
            v-for="(item,i) in CoreTeamData"
            :key="i"
          >
            <TeamMemberCard :data="{data:item}" />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import TeamMemberCard from "@/components/Team/TeamMemberCard";
import TeamMemberCardData from "@/assets/data/Team.json";
export default {
  name: "App",
  components: {
    TeamMemberCard
  },
  data: () => ({
    CoreTeamData: TeamMemberCardData
  }),
  created() {},
  methods: {
    getImgUrl(url) {
      if (url.length > 0) {
        return require("@/assets/img/what-we-do/" + url);
      } else {
        return require("@/assets/img/what-we-do/notFound.png");
      }
    }
  }
};
</script>