<template>
  <v-main
    :class="this.$vuetify.theme.dark == true ? 'black' : 'light-bg'"
    class="pa-0"
  >
    <v-slide-y-reverse-transition>
      <router-view v-show="show" />
    </v-slide-y-reverse-transition>
  </v-main>
</template>

<script>
export default {
  name: "ViewMain",
  data() {
    return {
      show: false,
    };
  },
  created() {
    this.show = true;
  },
};
</script>

<style>
.light-bg {
  background-color: white;
}
</style>