
<template>
    <v-app-bar
      app
      color="deep-purple accent-4"
      fixed
      
      clipped-left
      dark
    >
      <v-app-bar-nav-icon class=""
      @click="ADtoggleDrawer"></v-app-bar-nav-icon>

      <v-toolbar-title class="px-0">
        <v-container fluid>
          <v-row align="center">
            <v-col >
              <router-link :to="{ name: 'dashboard'}" class="google-font" style="text-decoration:none;font-size:110%;color:white" >{{communitydata.CommunityName}}</router-link>
            </v-col>
          </v-row>
        </v-container>
      </v-toolbar-title>

      <div class="flex-grow-1"></div>
      <v-btn
            v-for="(link, i) in AdminLinks"
            :key="i"
            :to="link.to"
            v-if="link.meta.showToolbar"
            class="ml-2 google-font hidden-sm-and-down"
            style="text-transform: capitalize;" 
            text
            @click="onClick($event, link)"
        > 
            {{ link.text }}
      </v-btn>
      <v-btn icon v-on:click="darkMode" class="ml-2">
        <v-icon v-if="this.$vuetify.theme.dark">mdi-brightness-7</v-icon>
        <v-icon v-else>mdi-brightness-4</v-icon>
      </v-btn> 
      <v-btn
        class="ml-2 google-font"
        style="text-transform: capitalize;" 
        text
        @click="logout"
        > 
          Logout
      </v-btn>
      
    </v-app-bar>
</template>

<script>
import firebase from '@/firebase';
  import communitydata from '@/assets/data/communitydata.json'
  import {
    mapGetters,
    mapMutations
  } from 'vuex'
  export default {
    data() {
      return {
        communitydata:communitydata
      }
    },
    components:{
    },
    computed: {
      ...mapGetters(['AdminLinks'])
    },
    methods: {
      ...mapMutations(['ADtoggleDrawer']),
      onClick (e, item) {
        e.stopPropagation()
        if (item.to || !item.href) return
        this.$vuetify.goTo(item.href)
      }, 
      logout(){
        firebase.auth.signOut().then(()=>{
            this.$router.replace('/admin')
        })
      },
      darkMode(){
        let metaThemeColor = document.querySelector("meta[name=theme-color]");
        this.$vuetify.theme.dark = !this.$vuetify.theme.dark
        if(localStorage)
              localStorage.setItem('darkMode',this.$vuetify.theme.dark);
        if(this.$vuetify.theme.dark){
          metaThemeColor.setAttribute("content", '#212121');
        }else{
           metaThemeColor.setAttribute("content", '#0277bd');
        }
      }
    }
  }
</script>

<style scoped>
  .whiteText{
    color:white
  }
  .blackText{
    color: rgba(0,0,0,.87);
  }
</style>
