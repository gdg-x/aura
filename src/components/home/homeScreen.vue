<template>
    <v-container fluid>
        <v-row align="center">
            <v-col md="3" sm="4">
                <v-img
                    :src="require('@/assets/img/gdg.jpg')"
                    :lazy-src="require('@/assets/img/gdg.jpg')"
                    class="grey lighten-2"
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
            <v-col md="9" sm="4">
                <p class="google-font mb-1" style="font-weight: 350;color: #616161;font-size:200%"><b>Make good things 
                    <span style="color: #1a73e8;">together</span>.</b>
                </p>
                <p class="google-font mt-0 mb-0" style="font-size:150%">GDG Jalandhar</p>
                <p class="google-font" style="font-size:100%">Google Developers Group Jalandhar is an initiative to concentrate the efforts of many developers in and around Punjab to learn, share and get productive using the various Google products.</p>
                <p class="google-font" style="font-size:100%;color:#9e9e9e">
                    #GDGJalandhar   #WTMJalandhar   #GDG   #WTM  
                    <!-- <span v-for="(item,i) in chapterDetails.ChapterHashTags" :key="i">
                        #{{item}} &nbsp;
                    </span> -->
                </p>

                <v-btn href="#" target="_blank" class="ma-0 google-font elevation-1" color="#1a73e8" style="text-transform: capitalize;border-radius:5px;color:white">Become a Member</v-btn>

                &nbsp;

                <v-btn href="#" target="_blank" rounded color="cyan" style="text-transform: capitalize;border-radius:5px;text-transform: capitalize;" outlined  class="ml-0" dark>Learn More</v-btn>

            </v-col>
        </v-row>
    </v-container>
</template>