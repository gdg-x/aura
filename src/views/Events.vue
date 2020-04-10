<template>
    <v-content class="px-0 mx-1">
        <v-container fluid class="pa-0">
            <v-row justify="center" align="center" :class="this.$vuetify.theme.dark == true?'grey darken-4':'grey lighten-4'" class="py-0 my-0">
                <v-col md="12" lg="10" sm="11" xs="12" class="py-3 my-0" >
                    <eventsHeader /> 
                    <upcomingEvents />
                </v-col>
            </v-row>
        </v-container>
        <v-container fluid class="pa-0 py-2" >
            <v-row justify="center" align="center">
                <v-col md="12" lg="10" sm="11" xs="12" class="py-0" >
                    <pastEvents />
                </v-col>
            </v-row>
        </v-container>
    </v-content>
</template>

<script>
export default {
    components:{
        eventsHeader:()=>import('@/components/events/EventHeader'),
        upcomingEvents:()=>import('@/components/events/UpcomingEvents'),
        pastEvents:()=>import('@/components/events/PastEvents')
    },
    data:()=>({

    })
}
</script>