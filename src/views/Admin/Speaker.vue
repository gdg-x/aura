<template>
  <v-content :class="$vuetify.theme.dark == true?'blank':'grey lighten-5'">
    <v-snackbar
      :timeout="5000"
      v-model="snackbarSuccess"
      >
          Speaker Added Successfully
          <v-btn
              color="pink"
              text
              @click="snackbarSuccess = false"
          >
              Close
          </v-btn>
    </v-snackbar>
    <v-container fluid class="text-center">
      <v-row justify="center" align="center">
        <v-col cols="12" md="11">
          <v-toolbar class="elevation-1">
            <v-toolbar-title>Speaker Details:</v-toolbar-title>
            <div class="flex-grow-1"></div>
            <v-text-field
              flat
              v-model="search"
              solo-inverted
              hide-details
              prepend-inner-icon="mdi-search-web"
              label="Search"
              single-line
              class="hidden-sm-and-down"
            ></v-text-field>
            <AddSpeaker @showSuccess="success" class="ml-2" />
          </v-toolbar>
        </v-col>
      </v-row>
      <v-row justify="center" align="center" class>
        <v-col cols="12" md="11" class>
          <v-container fluid>
            <v-row justify="center" align="center" v-if="speakerLoader">
              <v-col col="12" md="2" class="text-center">
                <v-progress-circular :width="4" :size="70" color="indigo" indeterminate></v-progress-circular>
              </v-col>
            </v-row>

            <v-row v-else>
              <v-container fluid>
                <v-data-iterator :items="speakerData" :search="search">
                  <template v-slot:default="props">
                    <v-row align="center">
                      <v-col
                        col="12"
                        cols="6"
                        md="2"
                        sm="3"
                        v-for="(item,idx) in props.items"
                        :key="idx"
                        class="pa-1"
                      >
                        <div
                          style="cursor: pointer;height:200px"
                          v-ripple
                          class="text-center py-3 elevation-1"
                          :class="$vuetify.theme.dark == true?'grey darken-3':'white'"
                        >
                          <v-avatar size="100">
                            <img :src="item.image" alt />
                          </v-avatar>
                          <p class="mt-3 mb-0 google-font mb-0" style="font-size:120%">{{item.name}}</p>
                          <p
                            class="mt-0 mb-0 google-font mt-0"
                            style="font-size:70%"
                          >{{item.designation}}</p>
                          <p class="mt-0 mb-0 google-font mt-0" style="font-size:80%">{{item.company.name}}</p>
                        </div>
                      </v-col>
                    </v-row>
                  </template>
                </v-data-iterator>
              </v-container>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
import firebase from "@/firebase";

import AddSpeaker from "@/components/Admin/Speaker/addSpeaker";

export default {
  name: "speakers",
  components: {
    AddSpeaker
  },
  data: () => ({
    search: "",
    speakerData: [],
    loading: true,
    speakerLoader: true,
    snackbarSuccess:false
  }),
  mounted() {
    if (firebase.auth.currentUser) {
      this.showData();
    } else {
      this.$router.replace("login");
    }
  },
  methods: {
    success(e){
      console.log(e);
      this.snackbarSuccess = true;
      this.showData()
    },
    showData() {
      this.speakerLoader = true;
      this.speakerData = [];
      console.log("Calling Show Data");
      firebase.firestore
        .collection("speakers")
        .get()
        .then(snapshot => {
          snapshot.forEach(doc => {
            this.id = doc.id;
            this.speakerData.push(doc.data());
          });
          this.speakerLoader = false;
          this.loading = false;
        })
        .catch(err => {
          console.log("Error getting documents", err);
        });
    }
  }
};
</script>

<style>
</style>