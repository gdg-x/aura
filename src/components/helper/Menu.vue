<template>
  <v-menu v-model="menu" :close-on-content-click="false" :nudge-width="200" offset-x>
    <template v-slot:activator="{ on }">
      <v-btn dark icon v-on="on">
        <!-- <v-icon>mdi-dots-vertical</v-icon> -->
        Click me
      </v-btn>
    </template>

    <v-card>
      <v-list>
        <v-list-item>
          <v-list-item-avatar>
            <img :src="user.photoURL" alt="profile-photo" />
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>{{user.displayName}}</v-list-item-title>
            <v-list-item-subtitle>{{user.email}}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list>
        <v-list-item>
          <v-list-item-action>
            <v-btn
              class="ml-0 google-font hidden-sm-and-down"
              style="text-transform: capitalize;"
              flat
              @click="logout"
            >Logout</v-btn>
          </v-list-item-action>
        </v-list-item>
      </v-list>
    </v-card>
  </v-menu>
</template>

<script>
export default {
  props: ["userData"],
  data() {
    return {
      user: {},
      fav: true,
      menu: false,
      message: false,
      hints: true
    };
  },
  methods: {
    logout() {
      this.$emit("userLogout");
    }
  },
  mounted() {
    this.user = this.userData;
  }
};
</script>

<style>
</style>