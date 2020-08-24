<template>
    <v-container fluid class="py-0 my-0 mt-2">
        <v-row align="center" class="py-0 my-0">
            <v-col md="12" sm="12" cols="12" class="py-0 my-0">
                <p class="google-font mb-0" style="font-weight: 350;font-size:200%"><b>
                    <span style="color: #1a73e8;">Contact</span></b> {{data.shortName || data.name}}
                </p>
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