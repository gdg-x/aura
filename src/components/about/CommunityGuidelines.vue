<template>
  <v-container fluid class="py-0 my-0 mt-5">
    <v-row align="center" class="py-0 my-0 mb-5">
      <v-col md="12" sm="12" cols="12" class="py-0 my-0">
        <h1 class="google-font mb-2">Community Guidelines</h1>

        <v-container fluid class="google-font mx-0 px-0">
          <v-row>
            <v-col :md="data.length>3?3:4" :lg="data.length>3?3:4" sm="4" cols="12" v-for="(item, i) in data" :key="i">
              <div class="pa-5" :class="$vuetify.theme.dark ? 'aura-card-dark' : 'aura-card-light'">
                <p class="mb-0">
                  <b>{{ item.name }}</b>
                </p>
                <p style="font-size: 85%;" class="mb-0">{{ item.des }}</p>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: ["data"],
  data: () => ({}),
};
</script>