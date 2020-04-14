<template>
    <v-container fluid class="py-0 my-0 mt-3">
        <v-row class="py-0 my-0">
            <v-col md="12" sm="12" cols="12" class="py-0 my-0">
                <h1 class="google-font mb-2">Code of conduct</h1>
            </v-col>
        </v-row>
        <v-row class="py-0 my-0">
            <v-col md="8" sm="12" cols="12" class="py-0 my-0">
                <p class="google-font" style="font-size:110%">{{data}}</p>
            </v-col>
            
        </v-row>
    </v-container>
</template>

<script>
export default {
    props:['data'],
    data:()=>({

    })
}
</script>