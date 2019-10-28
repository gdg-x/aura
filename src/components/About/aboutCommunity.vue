<template>
    <v-container fluid class="py-0 my-0 mt-2 mb-5">
        <v-row class="py-0 my-0">
            <v-col md="4" sm="4" cols="12" class="py-0 my-0">
                <v-img
                    src="https://developers.google.com/community/gdg/images/organizers/ecosystem_720.png"
                    lazy-src="https://developers.google.com/community/gdg/images/organizers/ecosystem_720.png"
                    class="grey lighten-2 mb-3"
                    width="100%"
                >
                    <template v-slot:placeholder>
                        <v-row
                        class="fill-height ma-0"
                        align="center"
                        justify="center"
                        >
                        <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                        </v-row>
                    </template>
                </v-img>
            </v-col>
            <v-col md="8" sm="8" cols="12" class="py-0 my-0">
                <p class="google-font mt-0" style="font-size:110%">Google Developer Group Jalandhar is inspired by GTUG/GDG Family . We started our journey in Feb 2011. We try to engage student developers, fresh graduates and professionals through our hack events & meetups. The motive is to create a local ecosystem of programmers & hackers in and around Jalandhar. The technology awareness is main goal for first few years of the group.</p>
                <p class="google-font mt-0 mb-0" style="font-size:110%">GDGs are local groups of developers who are specifically interested in Google products and APIs. Each local group is called a GDG chapter and can host a variety of technical activities for developers - from just a few people getting together to watch our latest videos, to large gatherings with demos and tech talks, to hackathons.</p>
                <br>
                <v-btn href="#" target="_blank" class="ma-0 google-font elevation-1" color="#6200EE" style="text-transform: capitalize;border-radius:5px;color:white">Become a Member</v-btn>

                &nbsp;

                <v-btn href="#" target="_blank" rounded color="cyan" style="text-transform: capitalize;border-radius:5px;text-transform: capitalize;" outlined  class="ml-0" dark>Learn More</v-btn>

            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import chapterDetails from '@/assets/data/ChapterDetails.json'
export default {
    data() {
        return {
            chapterDetails: chapterDetails
        }
    }
}
</script>