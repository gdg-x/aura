<template>
  <v-main class="pa-0 ma-0 google-font"> 
    <v-container fluid class="py-0 my-0 mt-0">
        <v-row class="py-0 my-0" justify="center" align="center">
            <v-col md="12" sm="12" cols="12" class="py-0 my-0 mb-5 mt-5">
              <p class="aura-heading mb-0">
                <b><span class="aura-text">Schedule</span> </b>
              </p>
              <p>Check out the schedule below and don't forget to mark your calendar so that you don't miss out on any sessions.</p>
              <v-data-table
                  :mobile-breakpoint="0"
                  style="border-radius:5px;"
                  :headers="headers"
                  :items="eventDetails.agenda"
                  :items-per-page="5"
                  class="ma-0 pa-0 mt-3"
                  :class="$vuetify.theme.dark?'aura-card-dark' : 'aura-card-light'"
                  >
              </v-data-table>
            </v-col>
        </v-row>
    </v-container>
  </v-main>
</template>

<script>
export default {
  name: "SchdeuleEvents",
  props: ["eventDetails"],
  data:()=>({
        headers: [
            {
                text: 'Start Time',
                align: 'start',
                value: 'starttime',
            },
            { text: 'End Time', value: 'endtime' },
            { text: 'Title', value: 'title' },
            { text: 'Description', value: 'des', width:'50%'}
        ]
    })
};
</script>