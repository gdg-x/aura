<template>
  <v-content>
    <h1>SCHA</h1>
    {{ eventDetails }}
  </v-content>
</template>

<script>
export default {
  name: "SchdeuleEvents",
  props: ["eventDetails"]
};
</script>

<style>
</style>