<template>
    <v-container fluid class="py-0 my-0 mt-0">
        <v-row class="py-0 my-0">
            <v-col md="12" sm="12" cols="12" class="py-0 my-0">
                <v-row class="my-4" v-if="checkExistance(data.speakers,0)">
                    <v-col cols="6" md="3" lg="2" sm="3" class="pa-1" v-for="(item,i) in sData" :key="i" >
                        <LayoutSpeaker :data="item" />
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
        SpeakersData:[],
        sData:[]
    }),
    mounted(){
        this.getAllSpeakers()
    },
    methods:{
        getAllSpeakers(){
            this.sData = []
            service
            .getAllSpeakers()
            .then(res => {
                if (res.success == true) {
                    this.SpeakersData = res.data

                    this.data.speakers.map(s=>{
                        this.SpeakersData.map(obj=>{
                            if(obj.id == s){
                                this.sData.push(obj)
                            }
                        })
                    })
                }
            })
            .catch(e => {
                this.ErrorMsg = e;
            });
        }
    }
    
}
</script>