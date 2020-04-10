<template>
  <v-navigation-drawer
    v-model="drawer"
    app
    width="300px"
    temporary
  >
    
    <!-- <v-flex xs12 class="pa-2 white" style="border-bottom: 2px solid rgb(224, 224, 224);">
      <v-img
            :src="require('@/assets/img/logo.png')"
            :lazy-src="require('@/assets/img/logo.png')"
            width="10vh">
            <v-layout
                slot="placeholder"
                fill-height
                align-center
                justify-center
                ma-0
            >
                <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
            </v-layout>
      </v-img>
      <p class="google-font mt-2" style="font-size:130%">ghh</p>
      
    </v-flex> -->

    <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="google-font " style="font-size:130%">
            GDG Jalandhar
          </v-list-item-title>
          <!-- <v-list-item-subtitle class="google-font">
            Google Developers Group
          </v-list-item-subtitle> -->
        </v-list-item-content>
    </v-list-item>  

    <v-divider></v-divider>


    <v-list dense shaped >
      <v-list-item
        v-for="(link, i) in links"
        :key="i"
        :to="link.to"
        :href="link.href"
        @click="onClick($event, link)"
        class="google-font my-0 py-0"
        color="primary"
      >
        <v-list-item-icon>
          <v-icon v-text="link.icon"></v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title v-text="link.text" />
        </v-list-item-content>
        
      </v-list-item>
    </v-list>
<!-- 
    <template v-slot:append>
        <div class="pa-2">
            <v-btn text block>Logout</v-btn>
        </div>
    </template> -->
  </v-navigation-drawer>

</template>

<script>
  // Utilities
  import {
    mapGetters,
    mapMutations
  } from 'vuex'
  export default {
    name: 'CoreDrawer',
    data() {
      return {
      }
    },
    computed: {
      ...mapGetters(['links']),
      drawer: {
        get () {
          return this.$store.state.drawer
        },
        set (val) {
          this.setDrawer(val)
        }
      }
    },
    methods: {
      ...mapMutations(['setDrawer']),
      onClick (e, item) {
        e.stopPropagation()
        if (item.to === '/') {
          this.$vuetify.goTo(0)
          this.setDrawer(false)
          return
        }
        if (item.to || !item.href) return
        this.$vuetify.goTo(item.href)
        this.setDrawer(false)
      }
    }
  }
</script>