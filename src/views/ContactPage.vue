<template>
  <v-main >
    <v-container fluid class="px-0 py-0">
      <v-row justify="center" align="center">
        <v-col md="12" lg="11" sm="11" xs="12">

            <v-container fluid class="py-0 my-0 mt-2">
              <v-row align="center" class="py-0 my-0">
                <v-col md="12" sm="12" cols="12" class="py-0 my-0">
                  <p
                    class="google-font mb-0"
                    style="font-weight: 350; font-size: 200%"
                  >
                    <b> <span class="aura-text">Contact</span></b>
                    <!-- {{ config.generalConfig.shortName || config.generalConfig.name }} -->
                  </p>
                  <contactDetails :data="config.generalConfig" />
                </v-col>
              </v-row>
            </v-container>

        </v-col>
      </v-row>
    </v-container>

  </v-main>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "ContactPage",
  components: {
    // contactHeader: () => import("@/components/contact/ContactHeader"),
    contactDetails: () => import("@/components/contact/ContactDetails"),
  },
  computed: {
    ...mapState(["config"]),
  },
  data: () => ({
    loading: false,
  }),
};
</script>