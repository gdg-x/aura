<template>
  <v-container fluid :class="this.$vuetify.theme.dark == true?'black':'white'" class="px-1">
    <v-slide-y-reverse-transition>
      <router-view v-show="show" />
    </v-slide-y-reverse-transition>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      show: false
    };
  },
  created() {
    this.show = true;
  }
};
</script>