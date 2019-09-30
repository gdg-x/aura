<template>
  <div>
    <v-app-bar
      color="white"
    >
      <v-app-bar-nav-icon 
      @click="toggleDrawer"></v-app-bar-nav-icon>

      <v-toolbar-title class="google-font">Page title</v-toolbar-title>

      <div class="flex-grow-1"></div>

      <v-btn
            v-for="(link, i) in links"
            :key="i"
            :to="link.to"
            class="ml-0 google-font hidden-sm-and-down"
            style="text-transform: capitalize;" 
            text
            @click="onClick($event, link)"
        >
            {{ link.text }}
      </v-btn>

      <!-- <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn> -->

      <v-menu
        left
        bottom
      >
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="n in 5"
            :key="n"
            @click="() => {}"
          >
            <v-list-item-title>Option {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
  </div>
</template>

<script>
  import {
    mapGetters,
    mapMutations
  } from 'vuex'
  export default {
    data() {
      return {
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