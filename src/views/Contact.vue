<template>
  <v-content class="px-0 mx-0 pt-5">
    <v-container fluid class="px-0 pt-5 mt-5 py-0">
      <v-row justify="center" align="center">
        <v-col md="12" lg="10" sm="11" xs="12" class="pt-3">
          <v-lazy v-model="loading" transition="fade-transition">
            <contactHeader :data="config.generalConfig" />
          </v-lazy>
        </v-col>
      </v-row>
    </v-container>

    <v-container fluid class="px-0 py-0">
      <v-row justify="center" align="center">
        <v-col md="12" lg="10" sm="11" xs="12" class>
          <contactDetails :data="config.generalConfig" />
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
import { mapState } from "vuex";
export default {
  components: {
    contactHeader:()=>import('@/components/contact/ContactHeader'),
    contactDetails:()=>import('@/components/contact/ContactDetails')
  },
  computed: {
    ...mapState(["config"])
  },
  data: () => ({
    loading:false,
  })
};
</script>