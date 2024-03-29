<template>
  <div
    style="cursor: pointer"
    :class="
      $vuetify.theme.dark == true
        ? 'aura-darkModeCardFeatureEvent'
        : 'aura-lightModeCardFeatureEvent'
    "
    class="pa-3 pa-md-6 py-5 fill-height"
  >
    <p class="google-font mb-0" style="font-size: 85%">
      {{ convtDate(data.date) }}
    </p>
    <p class="google-font mb-0" style="font-size: 120%;font-weight: 600;">
      {{ summeryText(data.name, 20)}}
    </p>
    <!-- <p class="google-font mb-0" style="font-size:90%">{{data.venue.name | summary(20)}}</p> -->
    <v-spacer></v-spacer>
    <v-btn
      rounded
      depressed
      small
      right
      class="mb-0 mt-4 google-font"
      @click="goToEvent(data.id)"
      :color="$vuetify.theme.dark?'#585B5A':'#DEE4EA'"
      >See More
      <v-icon right>mdi-arrow-right-thin</v-icon>
      </v-btn
    >
  </div>
</template>

<script>
export default {
  name: "EventCard",
  props: ["data"],
  methods: {
    goToEvent(id) {
      this.$router.push("/events/" + id);
    },
  },
};
</script>