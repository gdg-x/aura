<template>
  <v-bottom-navigation
    :value="activeBtn"
    grow
    app
    dark
    background-color="primary"
    shift
    color="white"
  > 
    
    <v-btn
        v-for="(link, i) in links"
        :key="i"
        :to="link.to"
        class="ml-0 google-font"
        style="text-transform: capitalize;" 
        text
        @click="onClick($event, link)"
    >
        <span>{{ link.text }}</span>
        <v-icon>{{ link.icon }}</v-icon>
    </v-btn>
    
    <!-- <v-btn>
      <span>Recents</span>
      <v-icon>mdi-home</v-icon>
    </v-btn>

    <v-btn>
      <span>Favorites</span>
      <v-icon>mdi-heart</v-icon>
    </v-btn>

    <v-btn>
      <span>Favorites</span>
      <v-icon>mdi-heart</v-icon>
    </v-btn>

    <v-btn>
      <span>Nearby</span>
      <v-icon>mdi-map-marker</v-icon>
    </v-btn> -->
  </v-bottom-navigation>
</template>

<script>
 import {
    mapGetters,
    mapMutations
  } from 'vuex'
  export default {
    data () {
      return {
        activeBtn: '/home',
      }
    },
    computed: {
      ...mapGetters(['links'])
    },
    methods: {
      ...mapMutations(['toggleDrawer']),
      onClick (e, item) {
        e.stopPropagation()
        if (item.to || !item.href) return
        this.$vuetify.goTo(item.href)
      }
    }
  }
</script>

