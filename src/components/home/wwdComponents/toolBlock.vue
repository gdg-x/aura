<template>
  <v-container fluid>
    <v-row justify="space-around">
      <v-col v-for="(tool, i) in tools" :key="i" cols="auto" class="d-flex justify-center">
        <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <a :href="tool.link" target="_blank">
              <v-img
                :src="require('@/assets/img/svg/' + tool.svg + '.svg')"
                dark
                v-on="on"
                :href="tool.link"
                target="_blank"
                style="max-width: 50px; max-height: 50px"
                contain
              />
            </a>
          </template>
          <span>{{tool.name}}</span>
        </v-tooltip>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
    tools: Array
  }
};
</script>