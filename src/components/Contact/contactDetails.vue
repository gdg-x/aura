<template>
    <v-container fluid class="py-0 my-0 mt-0">
        <v-row align="center" class="py-0 my-0">
            <v-col md="12" sm="12" cols="12" class="py-0 my-0">
                <p class="google-font mb-0" style="font-size:110%">Our events are open to newbies, developers, managers, and organizations who are interested in Google's technologies or use them as part of their projects.</p>
                <br>
                <p class="google-font">Questions? Please contact {{communitydata.CommunityEmail}}.</p>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import communitydata from '@/assets/data/communitydata.json'
export default {
    data() {
        return {
            communitydata: communitydata
        }
    }
}
</script>