<template>
  <v-content class="ma-0">
    <v-container fluid class="">
      <v-row justify="center" align="center">
        <v-col md="12" lg="10" xs="12" class="py-5">
          <HomeStartScreen/>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
  
</template>

<script>
import HomeStartScreen from '@/components/home/HomeStartScreen'
export default {
  name: 'Home',
  components: {
    HomeStartScreen
  }
}
</script>
