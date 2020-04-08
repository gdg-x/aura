
<template>
    <v-container fluid>
        <v-snackbar v-model="errorAlert" bottom left>
            {{ errorMsg }}
            <v-btn color="pink" text @click="errorAlert = false">Close</v-btn>
        </v-snackbar>
        <v-row align="center" justify="center" class="mb-5">
            <v-col cols="12" md="12" lg="12" sm="12" class="">
                <v-row>
                    <v-col md="6" lg="6" sm="6" cols="12">
                        <p class="google-font mb-0" style="font-size:150%;color: #1a73e8;">Directory of past events</p>
                        <p class="google-font mt-0 mb-0" style="font-size:95%">Events are listed in reverse chronological order by date.</p>
                        <!-- <p class="google-font mt-0" style="font-size:95%">Here are the recent 10 meetups. To know more about the past meetups  <a :href="communitydata.CommunityMeetupLink" target="_blank" style="text-decoration:none;color:#0277bd">Click here</a></p> -->
                    </v-col>
                    <v-col md="6" lg="6" sm="6" cols="12">
                        <v-text-field
                            flat
                            v-model="search"
                            solo-inverted
                            hide-details
                            prepend-inner-icon="mdi-search-web"
                            label="Search"
                            single-line
                            class="mr-2"
                        ></v-text-field>
                    </v-col>
                
                </v-row>
                
                    
                <v-data-table
                    class="mt-3"
                    :search="search"
                    mobile-breakpoint="no"
                    :headers="headers"
                    :items="eventsData"
                    :loading="isLoading"
                    :items-per-page="5"
                    :class="$vuetify.theme.dark == true?'darkModeCard':'card-light'"
                >   
                    <template v-slot:item.name="{ item }">
                        {{item.name}}
                    </template>

                    <template v-slot:item.status="{ item }">
                        <v-chip small v-if="item.status == 'past'" dark color="red">Past</v-chip>
                        <v-chip v-else small dark color="green">Upcoming</v-chip>
                    </template>

                    <template v-slot:item.link="{ item }">
                        <a :href="item.link" target="_blank">See More</a>
                    </template>
                </v-data-table>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import service from '@/services/appservices'
    export default {
        name: 'App',
        components:{
        },
        data: () => ({
            eventsData:[],
            showData: false,
            isLoading: true,
            search:'',
            notFoundUpcomingEventFlag: false,
            errorAlert: false,
            errorMsg: '',
            headers: [
                {
                    text: 'Event Name',
                    align: 'start',
                    value: 'name',
                },
                { text: 'Date', value: 'local_date' },
                { text: 'Status', value: 'status' },
                { text: 'See More', value: 'link' },
            ],
        }),
        mounted(){
            this.getAllMeetupPastEvents()
        },
        methods:{
            getAllMeetupPastEvents(){
                this.isLoading = true
                service.getAllMeetupPastEvents().then(res=>{
                    if(res.success){
                        this.eventsData = res.data
                        this.isLoading = false
                    }
                }).catch(e=>{
                    console.log(e)
                    this.errorMsg = "Issue found with " + e;
                    this.isLoading = false
                    this.errorAlert = true;
                })
            }
        }
    };
</script>