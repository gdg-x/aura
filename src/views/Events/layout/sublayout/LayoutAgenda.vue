<template>
    <v-container fluid class="py-0 my-0 mt-0">
        <v-row class="py-0 my-0" justify="center" align="center">
            <v-col md="12" sm="12" cols="12" class="py-0 my-0 mb-5 mt-5">
                <v-data-table
                    :mobile-breakpoint="0"
                    style="border-radius:5px;"
                    :headers="headers"
                    :items="data.agenda"
                    :items-per-page="5"
                    class="elevation-0 ma-0 pa-0 mt-2"
                    >
                </v-data-table>
                <!-- <v-row class="pa-0" align="center" v-for="(item,i) in agendaData" :key="i" style="border:1px solid #e0e0e0;">
                    <v-col cols="3" md="2" lg="2" sm="4" class="pa-2" >
                        <p class="mb-0 google-font">{{item.StartTime}}-{{item.EndTime}}</p>
                    </v-col>
                    <v-col cols="9" md="10" lg="10" sm="8" class="pa-2" style="border-left:1px solid #e0e0e0">
                        <p class="mb-0 google-font" style="font-size:120%">{{item.Title}}</p>
                        <p class="mb-0 google-font">{{item.Description}}</p>
                    </v-col>
                </v-row> -->
               
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    props:['data'],
    components:{
    },
    data:()=>({
        headers: [
            {
                text: 'Start Time',
                align: 'start',
                value: 'starttime',
            },
            { text: 'End Time', value: 'endtime' },
            { text: 'Title', value: 'title' },
            { text: 'Description', value: 'des' }
        ]
    })
    
}
</script>