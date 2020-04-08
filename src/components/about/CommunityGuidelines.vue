<template>
    <v-container fluid class="py-0 my-0 mt-5">
        <!-- <v-row class="py-0 my-0">
            <v-col md="12" sm="12" cols="12" class="py-0 my-0">
                
            </v-col>
        </v-row> -->
        <v-row align="center" class="py-0 my-0 mb-5">
            <v-col md="8" sm="12" cols="12" class="py-0 my-0">
                <h1 class="google-font mb-2">Community Guidelines</h1>
                <!-- {{communitydata.CommunityGuideline}} -->
                <v-expansion-panels accordion>
                    <v-expansion-panel
                        v-for="(item,i) in data"
                        :key="i"
                    >
                        <v-expansion-panel-header>{{item.name}}</v-expansion-panel-header>
                        <v-expansion-panel-content>
                            {{item.des}}
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                </v-expansion-panels>
            </v-col>
            <v-col md="4" sm="4" cols="12" class="py-0 my-0 hidden-sm-and-down">
                <v-img
                    :src="require('@/assets/img/svg/bg.svg')"
                    :lazy-src="require('@/assets/img/svg/bg.svg')"
                    width="60%"
                    style="float:right"
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