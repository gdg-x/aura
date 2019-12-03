<!--<template>
  <v-container fluid class="py-0 my-0">
    <v-row align="center" justify="center" class="py-0 my-0">
      <v-col cols="12" md="12" lg="12" sm="12" class="py-0 my-0">
        <h3 class="google-font">Core Organizing Team Members</h3>
      </v-col>
    </v-row>
    <v-row align="center" justify="center" class="py-0 my-0">
      <v-col cols="12" md="12" lg="12" sm="12" class="py-0 my-0">
        <v-row class="py-0 my-0">
          <v-col
            md="3"
            lg="3"
            sm="4"
            cols="12"
            class="pa-1"
            v-for="(item,i) in CoreTeamData"
            :key="i"
          >
            <organizingTeamList :data="{data:item}" />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import TeamMemberCard from "@/components/Team/TeamMemberCard";
import organizingTeamList from "@/components/Team/organizingTeamList";
import TeamMemberCardData from "@/assets/data/Team.json";
export default {
  name: "App",
  components: {
    TeamMemberCard,
    organizingTeamList
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
</script>-->