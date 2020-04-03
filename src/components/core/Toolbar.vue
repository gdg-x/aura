<template>
    <v-app-bar app fixed clipped-left :class="this.$vuetify.theme.dark == true?'black':'white'">
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
        <v-toolbar-title class="google-font">Google</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon v-on:click="darkMode" class="ml-2">
            <v-icon v-if="this.$vuetify.theme.dark">mdi-brightness-7</v-icon>
            <v-icon v-else>mdi-brightness-4</v-icon>
        </v-btn> 
    </v-app-bar>
</template>

<script>
export default {
    name:'Toolbar',
    data:()=>({

    }),
    methods:{
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