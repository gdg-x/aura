<template>
  <v-card outlined v-bind:href="item.link" target="_blank" class="pa-2" flat>
    <v-icon v-if="item.icon" large style="font-size:300%">{{ item.icon }}</v-icon>
    <img
      v-else-if="item.svg"
      justify="center"
      :src="require('@/assets/img/svg/' + tool.svg + '.svg')"
      v-on="on"
      dark
      style="max-width: 32px; max-height: 32px;"
    />
    <p class="google-font mt-2 title">{{ make_readable(item.name) }}</p>
    <p class="google-font" style="font-size:95%">{{ item.desc }}</p>
  </v-card>
</template>

<script>
export default {
  props: {
    item: Object
  },
  methods: {
    make_readable(str) {
      return str.replace(/_/, " ");
    }
  }
};
</script>
              