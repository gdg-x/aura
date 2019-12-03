<template>
  <v-navigation-drawer
    v-model="adminDrawer"
    app
    width="300px"
    clipped
  >

    <!-- <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="google-font " style="font-size:130%">
            {{communitydata.CommunityName}}
          </v-list-item-title>
        </v-list-item-content>
    </v-list-item>   -->

    <v-divider></v-divider>


    <v-list dense shaped >
      <v-list-item
        v-for="(link, i) in AdminLinks"
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

    <!-- <template v-slot:append>
        <div class="pa-2">
            <v-btn text block>Logout</v-btn>
        </div>
    </template> -->
  </v-navigation-drawer>

</template>

<script>
  import communitydata from '@/assets/data/communitydata.json'
  // Utilities
  import {
    mapGetters,
    mapMutations
  } from 'vuex'
  export default {
    name: 'CoreDrawer',
    data() {
      return {
        communitydata:communitydata
      }
    },
    computed: {
      ...mapGetters(['AdminLinks']),
      adminDrawer: {
        get () {
          return this.$store.state.adminDrawer
        },
        set (val) {
          this.ADsetDrawer(val)
        }
      }
    },
    methods: {
      ...mapMutations(['ADsetDrawer']),
      onClick (e, item) {
        e.stopPropagation()
        if (item.to === '/') {
          this.$vuetify.goTo(0)
          this.ADsetDrawer(false)
          return
        }
        if (item.to || !item.href) return
        this.$vuetify.goTo(item.href)
        this.ADsetDrawer(false)
      }
    }
  }
</script>