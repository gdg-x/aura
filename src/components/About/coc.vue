<template>
    <v-container fluid class="py-0 my-0 mt-3">
        <v-row class="py-0 my-0">
            <v-col md="12" sm="12" cols="12" class="py-0 my-0">
                <p class="google-font" style="font-size:150%;color:#0277bd">Code of conduct</p>
            </v-col>
        </v-row>
        <v-row class="py-0 my-0">
            <v-col md="8" sm="8" cols="12" class="py-0 my-0">
                <p class="google-font" style="font-size:110%">{{communityGuidelinesData.coc}}</p>
            </v-col>
            
        </v-row>
    </v-container>
</template>

<script>
import communityGuidelinesData from '@/assets/data/about.json'
export default {
    data() {
        return {
            communityGuidelinesData: communityGuidelinesData
        }
    }
}
</script>