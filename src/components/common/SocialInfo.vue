<template>
    <v-container fluid class="py-0 my-0">
        <v-row class="py-0 my-0" justify="start" align="start">
            <v-col md="12" lg="12" sm="12" cols="12" class="py-0 my-0">
                <v-btn aria-label="social media btn" small class="ml-0 mt-0 mx-0" icon v-if="data.twitter.length>0" :href="data.twitter" target="_blank">
                    <v-icon small style="color:#1da1f2">mdi-twitter</v-icon>
                </v-btn>

                <v-btn aria-label="social media btn" small class="mt-0 mx-0" icon v-if="data.linkedin.length>0" :href="data.linkedin" target="_blank">
                    <v-icon small style="color:#0077b5">mdi-linkedin</v-icon>
                </v-btn>
                <v-btn aria-label="social media btn" small class="mt-0 mx-0" icon v-if="data.facebook.length>0" :href="data.facebook" target="_blank">
                    <v-icon small style="color:#0077b5">mdi-facebook</v-icon>
                </v-btn>
                
                <v-btn aria-label="social media btn" small class="mt-0 mx-0" icon v-if="data.github.length>0" :href="data.github" target="_blank">
                    <v-icon small :color="this.$vuetify.theme.dark == true?'white':'#333'">mdi-github</v-icon>
                </v-btn>

                <v-btn aria-label="social media btn" small class="mt-0 mx-0" icon v-if="data.web.length>0" :href="data.web" target="_blank">
                    <v-icon small :color="this.$vuetify.theme.dark == true?'white':'#333'">mdi-link-variant</v-icon>
                </v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    props:['data']
}
</script>