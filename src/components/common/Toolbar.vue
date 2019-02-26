<template>
  <v-toolbar
    app
    color="white"
    height="55px"
  >
    <v-toolbar-side-icon
      class="hidden-md-and-up"
      @click="toggleDrawer"
    />

    <v-toolbar-title class="ml-0 pl-1 mr-1">
      <span class="google-font">GDG Jalandhar</span>
    </v-toolbar-title>
    <v-spacer />
    <v-btn
        v-for="(link, i) in links"
        :key="i"
        :to="link.to"
        class="ml-0 google-font hidden-sm-and-down"
        style="text-transform: capitalize;" 
        flat
        @click="onClick($event, link)"
      >
        {{ link.text }}
    </v-btn>

    <!-- <v-toolbar-title class="google-font">GDG Jalandhar</v-toolbar-title>
    <v-btn
          v-for="(link, i) in links"
          :key="i"
          :to="link.to"
          class="ml-0 hidden-sm-and-down"
          flat
          @click="onClick($event, item)"
        >
          {{ link.text }}
        </v-btn> -->
    <!-- <v-container
      mx-auto
      py-0
      class="red"
    >
      
      <v-layout>
       
        <v-spacer />
        
        
        <v-btn
          v-for="(link, i) in links"
          :key="i"
          :to="link.to"
          class="ml-0 hidden-sm-and-down"
          flat
          @click="onClick($event, link)"
        >
          {{ link.text }}
        </v-btn>

      </v-layout>
    </v-container> -->
  </v-toolbar>
</template>

<script>
  // Utilities
  import {
    mapGetters,
    mapMutations
  } from 'vuex'
  export default {
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