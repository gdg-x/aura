<template>
  <v-main class="px-0 mx-0 pt-1">
    <v-container fluid class="px-0 pt-5 mt-3" >
      <v-row justify="center" align="center" class="py-3">
        <v-col md="12" lg="10" xs="12" class="pt-3 bottom-space"  >
          <partners />
        </v-col>
      </v-row>
    </v-container>

  </v-main>
</template>

<script>
export default {
  name: 'PartnersPage',
  components: {
    partners:()=>import('@/components/common/Partners')
  },
};
</script>