<template>
    <v-content class="px-0 mx-0">
        <v-container fluid class="pa-0 mx-0" :class="this.$vuetify.theme.dark == true?'grey darken-4':'grey lighten-4'" >
             <v-row justify="center" align="center" class="py-0">
                <v-col md="12" lg="10" sm="11" xs="12" class="pt-5"  >
                  <v-container fluid class="py-0 my-0 mt-2">
                        <v-row align="center" class="py-0 my-0">
                            <v-col md="12" sm="12" cols="12" class="py-0 my-0 text-center">
                                <p class="google-font mb-0" style="font-weight: 350;font-size:200%"><b>
                                    <span style="color: #1a73e8;">Our</span> Volunteers </b> 
                                </p>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-col>
             </v-row>
              <v-row justify="center" align="center">
                <v-col md="7" lg="7" sm="8" xs="8" cols="11" class="">
                    <v-text-field
                        label="Search"
                        solo-inverted
                        v-model="search"
                    ></v-text-field>
                </v-col>
            </v-row>
        </v-container>

        <v-container fluid class="pa-0">
           
            <v-row justify="center" align="center" class="py-3" :class="this.$vuetify.theme.dark == true?'black':''">
                <v-col md="12" lg="10" sm="11" xs="12" class="pt-3 " v-if="Volunteers.length>0"  >
                    <v-data-iterator
                        :items="Volunteers"
                        class="text-center"
                        loading-text="Loading Team from Dir"
                        :search="search"
                        disable-pagination
                        hide-default-footer
                    >
                    <template v-slot:default="props">
                        <Volunteers :data="props.items"/>
                    </template>
                  </v-data-iterator>
                </v-col>

                <v-col v-if="Volunteers.length == 0 && loader == false" md="12" lg="10" sm="11" xs="12" class="pt-3 text-center" >
                    <v-img
                        :src="require('@/assets/img/svg/DataNotFound.svg')"
                        :lazy-src="require('@/assets/img/svg/DataNotFound.svg')"
                        width="15%"
                        style="border-radius:8px;margin-left:auto;margin-right:auto"
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
                    <h2 class="google-font mt-3">Data Not Found</h2>
                </v-col>

                <v-col v-if="loader" md="12" lg="10" xs="12" class="pt-3 "  >
                  <v-container fluid class="">
                      <v-row >
                          <v-col md="2" lg="2" sm="3" cols="6" v-for="i in 6" :key="i">
                                <v-sheet
                                    :color="`grey ${theme.isDark ? 'darken-2' : 'lighten-4'}`"
                                    class=""
                                >
                                    <v-skeleton-loader
                                    class="mx-auto"
                                    max-width="300"
                                    type="card"
                                    ></v-skeleton-loader>
                                </v-sheet>
                            </v-col>
                      </v-row>
                  </v-container>
                </v-col>
             </v-row>
        </v-container>

    </v-content>

</template>

<script>
import service from '@/services/appservices'
export default {
    name:'Team',
    inject: ['theme'],
    components:{
        Volunteers:()=>import('@/components/team/Volunteers'),
    },
    data:() =>({
      loader:true,
      search:'',
      Volunteers:[],
      ErrorMsg:''
    }),
    mounted(){
        this.getAllVolunteers()
    },
    methods:{
        getAllVolunteers(){
          this.loader = true
          service.getTeam().then(res=>{
            if(res.success==true){
              this.Volunteers = res.data.filter(res=>res.role=='Volunteer' && res.visible )
            //   this.Volunteers = []
              this.loader = false
            }else{
              this.loader = false
            }
          }).catch(e=>{
            this.loader = false
            this.ErrorMsg = e
          })
        }
    }

}
</script>

<style scoped>
  .darkbg{
    /* background: #1F1A24 */
  }
  @media screen and (min-width: 600px) {
    .card-top-margin {
      margin-top:-110px
    }
    .bottom-space{
      margin-bottom: 80px;
      margin-top: 20px
    }
  }
  @media screen and (max-width: 600px) {
    .card-top-margin {
      margin-top:-100px
    }
    .bottom-space{
      margin-bottom: 50px
    }
  }
</style>