<template>
    <v-container fluid class="py-0 my-0 mt-0">
        <v-row justify="center" align="center" class="py-5" v-if="isLoading">
          <v-col cols="12" md="12" class="text-center">
            <v-progress-circular :width="5" :size="50" color="indigo" indeterminate></v-progress-circular>
          </v-col>
        </v-row>
        <v-row justify="center" align="center" class="py-5" v-else-if="sData.length<=0 && !isLoading">
          <v-col cols="12" md="12" class="text-center">
            <p class="google-font" style="font-size:120%">No Speaker Found.</p>
          </v-col>
        </v-row>
        <v-row class="py-0 my-0" v-else>
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
        sData:[],
        isLoading:false,
    }),
    created(){
        this.getAllSpeakers()
    },
    methods:{
        getAllSpeakers(){
            this.isLoading = true
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
                this.isLoading = false;
            })
            .catch(e => {
                this.ErrorMsg = e;
                this.isLoading = false;
            });
        }
    }
    
}
</script>