<template>
  <v-container fluid>
    <br />
    <v-row align="center">
      <v-col md="12" sm="12" cols="12">
        <p class="google-font mb-0" style="font-weight: 350;font-size:200%">
          <b :style="this.$vuetify.theme.dark ? 'color: white' : 'color:#616161'">
            <slot></slot>
          </b>
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  computed: {}
};
</script>