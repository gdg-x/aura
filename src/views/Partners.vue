<template>
  <v-content class="px-0 mx-0 pt-1">
    <v-container fluid class="px-0 pt-5 mt-3" >
      <v-row justify="center" align="center" class="py-3" :class="this.$vuetify.theme.dark == true?'black':'grey lighten-4'" >
        <v-col md="12" lg="10" xs="12" class="pt-3 bottom-space"  >
          <partners />
        </v-col>
      </v-row>
    </v-container>

  </v-content>
</template>

<script>
export default {
  components: {
    partners:()=>import('@/components/common/Partners')
  },
};
</script>