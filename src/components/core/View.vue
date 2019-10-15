<template>
  <v-container :class="this.$vuetify.theme.dark == true?'black':'white'" fluid style="">
    <v-slide-y-reverse-transition>
      <router-view v-show="show" />
    </v-slide-y-reverse-transition>
  </v-container >
</template>

<script>
export default {
  data(){
    return {
      show : false,
    }
  },
  created(){
   this.show = true
  }
}
</script>