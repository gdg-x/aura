<template>
    <v-container fluid class="py-0 my-0 mt-0">
        <v-row class="py-0 my-0">
            <v-col md="12" sm="12" cols="12" class="py-0 my-0">
                <v-row class="my-4" v-if="data.speakers.length>0">
                    <v-col cols="6" md="3" lg="2" sm="3" class="pa-1" v-for="(item,i) in data.speakers" :key="i" >
                        <div v-for="(itemp,j) in SpeakersData" :key="j">
                            <div v-if="item == itemp.id" class="text-center">
                                <LayoutSpeaker :data="itemp" />
                            </div>
                        </div>
                    </v-col>
                </v-row>
               
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import service from "@/services/appservices";
export default {
    components:{
        LayoutSpeaker:()=>import('@/views/Events/layout/sublayout/subcomponents/LayoutSpeaker')
    },
    props:['data'],
    data:()=>({
        ErrorMsg:'',
        SpeakersData:[]
    }),
    mounted(){
        this.getAllSpeakers()
    },
    methods:{
        getAllSpeakers(){
            service
            .getAllSpeakers()
            .then(res => {
            if (res.success == true) {
                this.SpeakersData = res.data
            }
            })
            .catch(e => {
                this.ErrorMsg = e;
            // console.log(e)
            });
        }
    }
    
}
</script>