<template>
  <v-container fluid>
    {{this.topic}}
    <v-row align="center" justify="center">
      <v-col cols="12" md="3" lg="3" sm="12" class="text-left pa-2">
        <p class="google-font mb-2 tool-header">{{ topic.sectionHeader }}</p>
        <p class="google-font mt-0" style="font-size:95%">{{ topic.sectionDesc }}</p>
      </v-col>
      <v-col cols="12" md="9" lg="9" sm="12">
        <v-container fluid>
          <v-row>
            <v-col
              v-for="(item, i) in topic.items"
              :key="i"
              md="3"
              lg="3"
              sm="6"
              cols="6"
              class="text-center pa-2"
            >
              <slot >whoops</slot>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: "App",
  props: {
      topic : Object
  },
  data: () => ({}),
  methods: {
    make_readable(str) {
      return str.replace(/_/, " ");
    }
  }
};
