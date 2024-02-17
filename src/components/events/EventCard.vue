<template>
  <div
    style="cursor: pointer"
    :class="
      $vuetify.theme.dark == true
        ? 'darkModeCardFeatureEvent'
        : 'lightModeCardFeatureEvent'
    "
    class="pa-3 pa-md-6 py-5 fill-height"
  >
    <p class="google-font mb-0" style="font-size: 90%">
      {{ convtDate(data.date) }}
    </p>
    <p class="google-font mb-0" style="font-size: 120%">
      {{ summeryText(data.name, 15)}}
    </p>
    <!-- <p class="google-font mb-0" style="font-size:90%">{{data.venue.name | summary(20)}}</p> -->
    <v-spacer></v-spacer>
    <v-btn
      rounded
      depressed
      small
      class="mb-0 mt-4 google-font aura-btn"
      style=""
      @click="goToEvent(data.id)"
      color="primary"
      >See More</v-btn
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

<style>
</style>