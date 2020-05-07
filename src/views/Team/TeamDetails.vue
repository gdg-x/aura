<template>
  <v-content class="px-3 mx-0 pb-5" :class="$vuetify.theme.dark == true?'black':'grey lighten-5'">
    <v-container fluid class="pa-0">
      <v-row justify="center" align="center" class="py-3">
        <v-col md="12" lg="10" sm="11" xs="12" class="pt-3">
          <v-toolbar :class="$vuetify.theme.dark?'card-dark':'card-light'" class="elevation-0">
            <v-btn
              text
              @click="goToTeam"
              class="ma-0 google-font mb-0"
              style="border-radius:5px;text-transform: capitalize;text-decoration:none;"
            >
              <v-icon left style="font-size:150%">mdi-arrow-left-thick</v-icon>
              <span style="font-size:120%">Team</span>
            </v-btn>

            <v-spacer></v-spacer>
          </v-toolbar>
        </v-col>
      </v-row>

      <v-row v-if="loader && notFound == false" justify="center" align="center">
        <v-col md="12" lg="10" sm="11" xs="12" class="text-center">
          <v-progress-circular :size="50" color="primary" indeterminate></v-progress-circular>
        </v-col>
      </v-row>

      <v-row
        v-if="Object.keys(MemberDetails).length>0"
        justify="center"
        align="center"
        class="py-3 px-4"
      >
        <v-col
          md="12"
          lg="10"
          sm="11"
          xs="12"
          class="pt-3"
          :class="$vuetify.theme.dark == true?'darkModeCard':'whiteTheme'"
        >
          <v-container fluid>
            <v-row>
              <v-col md="3" lg="3" sm="4" cols="12" class="text-center">
                <v-avatar size="150">
                  <img
                    :src="getImgUrl(MemberDetails.image, 'profile.jpg')"
                    :lazy-src="getImgUrl(MemberDetails.image, 'profile.jpg')"
                    alt
                  />
                </v-avatar>
                <p class="google-font mt-3" style="font-size:120%">{{MemberDetails.name}}</p>
                <p
                  class="mt-1 mb-0 google-font mt-0"
                  style="font-size:100%"
                >{{MemberDetails.designation}}</p>
                <v-chip class="mt-2" small>{{MemberDetails.role}}</v-chip>

                <br />
                <br />
                <v-chip
                  class="ma-1"
                  v-if="MemberDetails.active"
                  dark
                  label
                  color="green"
                  small
                >Active</v-chip>
                <v-chip class="ma-1" v-else label dark color="red" small>Not Active</v-chip>
              </v-col>
              <v-col md="9" lg="9" sm="8" cols="12">
                <p class="mb-0">
                  <b>Bio</b>
                </p>
                <p class="mt-1 mb-0 google-font mt-0" style="font-size:110%">{{MemberDetails.bio}}</p>

                <p class="mb-0 mt-3">
                  <b>Social Links</b>
                </p>
                <p class="mt-1 mb-0 google-font mt-0" style="font-size:110%">
                  <span
                    style="cursor: pointer;"
                    v-for="(slink,i) in MemberDetails.socialLinks"
                    :key="i"
                    class="mr-1"
                  >
                    <v-chip
                      v-if="slink"
                      :href="slink"
                      small
                      style="text-transform: uppercase;"
                    >{{i}}</v-chip>
                  </span>
                </p>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>

      <v-row
        justify="center"
        align="center"
        class="py-3 px-4"
        v-if="notFound == true && loader == false"
      >
        <v-col
          md="12"
          lg="10"
          sm="11"
          xs="12"
          class="pt-3"
          :class="$vuetify.theme.dark == true?'darkModeCard':'whiteTheme'"
        >
          <v-container fluid>
            <v-row>
              <v-col md="12" lg="12" sm="12" cols="12" class="text-center">
                <v-img
                  :src="require('@/assets/img/svg/DataNotFound.svg')"
                  :lazy-src="require('@/assets/img/svg/DataNotFound.svg')"
                  width="20%"
                  style="border-radius:8px;margin-left:auto;margin-right:auto"
                >
                  <template v-slot:placeholder>
                    <v-row class="fill-height ma-0" align="center" justify="center">
                      <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                    </v-row>
                  </template>
                </v-img>
                <h2 class="google-font">Team Member Not Found</h2>
                <p
                  class="google-font"
                >The requested URL /{{this.$route.params.id}} was not found on this server. That’s all we know.</p>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
import service from "@/services/appservices";
import { mapState } from "vuex";

export default {
  name: "TeamDetails",
  data: () => ({
    MemberDetails: {},
    notFound: false,
    loader: true
  }),
  mounted() {
    this.getTeamMembersDetails(this.$route.params.id);
  },
  computed: {
    ...mapState(["config"])
  },
  methods: {
    goToTeam() {
      this.$router.replace("/team");
    },
    getTeamMembersDetails(id) {
      this.loader = true;
      this.notFound = false;
      service
        .getTeamMember(id)
        .then(res => {
          if (res.success == true) {
            this.loader = false;
            this.MemberDetails = res.data;
            document.title =
              this.MemberDetails.name + " | " + this.config.generalConfig.name;
          } else {
            this.loader = false;
            this.notFound = true;
          }
        })
        .catch(e => {
          this.loader = false;
          console.log(e);
        });
    }
  }
};
</script>