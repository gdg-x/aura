<template>
    <v-list two-line subheader class="py-0" :class="$vuetify.theme.dark == true?'black':'white'">
        <v-list-item
        >
            <v-list-item-avatar>
                <v-avatar :class="$vuetify.theme.dark == true?'animate-shimmer-dark':'animate-shimmer-white'">
                    <span class="google-font" style="width:100vh;"></span>
                </v-avatar>
            </v-list-item-avatar>

            <v-list-item-content>
                <v-list-item-title class="google-font google-font" :class="$vuetify.theme.dark == true?'animate-shimmer-dark':'animate-shimmer-white'" style="color:#424242;width:200px;height:20px;"></v-list-item-title>
                <v-list-item-subtitle class="google-font" :class="$vuetify.theme.dark == true?'animate-shimmer-dark':'animate-shimmer-white'" style="color:#424242;width:80px;height:20px;"></v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-action>
                <v-btn icon>
                    <v-icon :color="$vuetify.theme.dark == true?'grey lighten-1':'grey lighten-3'">mdi-information</v-icon>
                </v-btn>
            </v-list-item-action>
        </v-list-item>

        <v-divider inset></v-divider>
    </v-list>
</template>

<script>
  export default {
    data () {
      return {
        
      }
    }
  }
</script>

<style>
.animate-shimmer-dark {
  background: linear-gradient(286deg, #BDBDBD, #616161);
  background-size: 400% 400%;
  -webkit-animation: AnimationName 5s ease infinite;
  -moz-animation: AnimationName 5s ease infinite;
  animation: AnimationName 5s ease infinite;
}
.animate-shimmer-white {
  background: linear-gradient(286deg, #ffffff, #ddd);
  background-size: 400% 400%;
  -webkit-animation: AnimationName 5s ease infinite;
  -moz-animation: AnimationName 5s ease infinite;
  animation: AnimationName 5s ease infinite;
}
@-webkit-keyframes AnimationName {
  0% {
    background-position: 0% 52%;
  }
  50% {
    background-position: 100% 49%;
  }
  100% {
    background-position: 0% 52%;
  }
}
@-moz-keyframes AnimationName {
  0% {
    background-position: 0% 52%;
  }
  50% {
    background-position: 100% 49%;
  }
  100% {
    background-position: 0% 52%;
  }
}
@keyframes AnimationName {
  0% {
    background-position: 0% 52%;
  }
  50% {
    background-position: 100% 49%;
  }
  100% {
    background-position: 0% 52%;
  }
}
</style>