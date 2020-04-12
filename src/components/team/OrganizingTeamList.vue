<template>
    <v-list three-line subheader class="py-0" :class="$vuetify.theme.dark == true?'black':'white'">
        <v-list-item
        class=""
        @click="goToTeam(data.id)"
        >
            <v-list-item-avatar>
                <img :src="getImgUrl(data.image, 'profile.jpg')">
            </v-list-item-avatar>

            <v-list-item-content>
                <v-list-item-title class="google-font mb-0" v-text="data.name"></v-list-item-title>
                <v-list-item-subtitle class="google-font mb-0 mt-0" >{{ data.designation }}</v-list-item-subtitle>
                <socialMediaDetails class="pl-0 ml-0" :data="data.socialLinks"/>
            </v-list-item-content>
        </v-list-item>

        <!-- <v-divider inset></v-divider> -->
    </v-list>
</template>

<script>
    import socialMediaDetails from '@/components/common/SocialInfo'
  export default {
    props:['data'],
    components:{
        socialMediaDetails
    },
    data () {
      return {
        dialog: false,
      }
    },
    methods:{
      goToTeam(id){
        this.$router.push("/team/" + id);
      },
    },
    filters:{
        summary: (val,num)=>{
          if(val.length > num){
            return val.substring(0,num)+".."
          }else{
            return val
          }
        },
        dateFilter: value => {
            const date = new Date(value);
            return date.toLocaleString(["en-US"], {
                month: "short",
                day: "2-digit",
                year: "numeric"
            });
        }
    }
  }
</script>