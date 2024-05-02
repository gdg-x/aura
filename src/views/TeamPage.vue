<template>
  <v-main>
    <v-container fluid class="pa-0">
      <v-row justify="center" align="center" class=" google-font">
        <v-col md="12" lg="11" sm="11" xs="12">
          <!-- Header -->
          <v-container fluid class="py-0 my-0">
            <v-row align="center" class="py-0 my-0">
              <v-col md="7" sm="7" cols="12" class="py-0 my-0">
                <p
                  class="google-font mb-0"
                  style="font-weight: 350; font-size: 200%"
                >
                  <b> Our<span class="aura-text"> Team</span> </b>
                </p>
                <p class="google-font" style="font-size: 100%">
                  {{ config.generalConfig.shortDescription }}
                </p>
              </v-col>
              <v-col md="5" sm="5" cols="12" class="">
                <v-img :src="require('@/assets/img/common/team.png')"></v-img>
              </v-col>
            </v-row>
          </v-container>
          <!-- Header -->

          <!-- Core Team -->
          <v-container fluid class="py-0 mb-10">
            <v-row align="center" class="py-0 my-0">
              <v-col cols="12" md="11" sm="11">
                <h3 class="google-font">Core Team Members</h3>
                <p class="google-font mb-0">
                  Our goal is to organize space to connect the best industry
                  experts with audience to boost development of IT. And
                  Our Core Team is:
                </p>
              </v-col>
            </v-row>

            <!-- Core Team Data -->
            <v-row v-if="!loader && CoreTeam.length" class="mt-0">
              <v-col
                md="3"
                lg="2"
                sm="4"
                cols="6"
                class="mb-0"
                v-for="(item, i) in CoreTeam"
                :key="i"
              >
                <CoreTeamMemberCard :data="item" />
              </v-col>
            </v-row>
            <!-- Core Team Data -->

            <!-- Core Team Loader -->
            <v-row v-if="loader">
              <v-col md="2" lg="2" sm="3" cols="6" v-for="i in 6" :key="i">
                <v-sheet
                  :color="`grey ${theme.isDark ? 'darken-2' : 'lighten-4'}`"
                  class=""
                >
                  <v-skeleton-loader
                    class="mx-auto"
                    max-width="300"
                    type="card"
                  ></v-skeleton-loader>
                </v-sheet>
              </v-col>
            </v-row>
            <!-- Core Team Loader -->
            <!-- Not Found -->
            <v-row v-if="!loader && CoreTeam.length==0" class="my-0 google-text">
              <v-col>
                <p>Not Data Found</p>
              </v-col>
            </v-row>
            <!-- Not Found -->
          </v-container>
          <!-- Core Team -->

          <!-- Organizing Team -->
          <v-container fluid class="my-10" v-if="OrganizingTeam.length">
            <v-row align="center" class="">
              <v-col cols="12" md="11" sm="11">
                <h3 class="google-font mb-1">Organizing Team Members</h3>
              </v-col>
            </v-row>

            <!-- Organizing Team Data -->
            <v-row v-if="!loader && OrganizingTeam.length" class="mt-0">
              <v-col
                md="3"
                lg="3"
                sm="4"
                cols="12"
                class="mb-0"
                v-for="(item, i) in OrganizingTeam"
                :key="i"
              >
                <organizingTeamList :data="item" />
              </v-col>
            </v-row>
            <!-- Organizing Team Data -->

            <!-- Organizing Team Loader -->
            <v-row v-if="loader">
              <v-col md="2" lg="2" sm="3" cols="6" v-for="i in 6" :key="i">
                <v-sheet
                  :color="`grey ${theme.isDark ? 'darken-2' : 'lighten-4'}`"
                  class=""
                >
                  <v-skeleton-loader
                    class="mx-auto"
                    max-width="300"
                    type="card"
                  ></v-skeleton-loader>
                </v-sheet>
              </v-col>
            </v-row>
            <!-- Organizing Team Loader -->

            <!-- Not Found -->
            <v-row v-if="!loader && OrganizingTeam.length==0" class="my-0 google-text">
              <v-col>
                <p>Not Data Found</p>
              </v-col>
            </v-row>
            <!-- Not Found -->
          </v-container>
          <!-- Organizing Team -->
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import service from "@/services/appservices";
import { mapState } from "vuex";
export default {
  name: "TeamPage",
  inject: ["theme"],
  computed: {
    ...mapState(["config"]),
  },
  components: {
    organizingTeamList: () => import("@/components/team/OrganizingTeamList"),
    CoreTeamMemberCard: () => import("@/components/team/CoreTeamMemberCard"),
  },
  data: () => ({
    loader: true,
    OrganizingTeam: [],
    CoreTeam: [],
    Volunteers: [],
    notFound: false,
    ErrorMsg: "",
  }),
  mounted() {
    this.getAllTeamMembers();
  },
  methods: {
    getAllTeamMembers() {
      this.loader = true;
      service
        .getTeam()
        .then((res) => {
          if (res.success == true) {
            this.OrganizingTeam = res.data.filter(
              (res) => res.role == "Organizing Team" && res.visible
            );
            this.CoreTeam = res.data.filter(
              (res) => res.role == "Core Team" && res.visible
            );
            this.Volunteers = res.data.filter(
              (res) => res.role == "Volunteer" && res.visible
            );
            this.loader = false;
            this.notFound = false;
          } else {
            this.notFound = true;
            this.loader = false;
          }
        })
        .catch((e) => {
          this.loader = false;
          this.notFound = true;
          this.ErrorMsg = e;
        });
    },
  },
};
</script>