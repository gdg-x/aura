<template>
  <v-dialog v-model="dialog" max-width="300">
    <template v-slot:activator="{ on }">
      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on" dark color="red" @click.stop="dialog = true">
            <v-icon>mdi-delete</v-icon>
          </v-btn>
        </template>
        <span>Remove {{speakerData.name}}</span>
      </v-tooltip>
    </template>
    <v-card>
      <v-card-title class="headline">Are you sure?</v-card-title>

      <v-card-text>Would you like to remove {{speakerData.name}}?</v-card-text>

      <v-card-actions>
        <div class="flex-grow-1"></div>

        <v-btn color="green darken-1" text @click="dialog = false">No</v-btn>

        <v-btn
          color="red darken-1"
          text
          :loading="isLoading"
          @click="deleteItem(speakerData.id)"
        >Remove</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import firebase from "@/firebase";
export default {
  props: {
    speakerData: {}
  },
  data() {
    return {
      dialog: false,
      isLoading: false
    };
  },
  methods: {
    deleteItem(id) {
      this.isLoading = true;
      firebase.firestore.collection('speakers').doc(id).delete().then(()=>{
          this.isLoading = false;
          this.dialog = false
        this.$router.push({
              path: "/admin/dashboard/speaker",
              query: { msg: "removesuccess" }
            });
      });
    }
  }
};
</script>