<template>
  <v-app>
   
    <Toolbar/>
    <v-content>
      <HelloWorld/>
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import Toolbar from '@/components/core/Toolbar'

export default {
  name: 'App',

  components: {
    Toolbar,
    HelloWorld,
  },

  data: () => ({
    //
  }),
};
</script>
