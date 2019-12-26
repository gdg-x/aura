<template>
    

    <v-dialog
      v-model="dialog"
      max-width="300"
    >
      <template v-slot:activator="{ on }">
        <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <v-btn
                icon
                v-on="on"
                dark
                color="red"
                @click.stop="dialog = true"
            >
              <v-icon>mdi-delete</v-icon>
            </v-btn>
          </template>
          <span>Remove {{teamData.name}}  </span>
        </v-tooltip>

        
      </template>
      <v-card>
        <v-card-title class="headline">Are you sure?</v-card-title>

        <v-card-text>
            
           Would you like to remove {{teamData.name}} form the Team?
        </v-card-text>

        <v-card-actions>
          <div class="flex-grow-1"></div>

          <v-btn
            color="green darken-1"
            text
            @click="dialog = false"
          >
            Disagree
          </v-btn>

          <v-btn
            color="green darken-1"
            text
            :loading="loading"
            @click="deleteItem(teamData.id)"
          >
            Agree
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>

<script>
  import firebase from 'firebase/app'
  import { firestore } from 'firebase';
  export default {
    props:{
        teamData:{}
    },
    data () {
      return {
        dialog: false,
        loading: false
      }
    },
    methods:{
        deleteItem(id){
            this.loading = true
            firebase.firestore().collection('team').where('id', '==',id).get().then(snapshot=>{
                snapshot.forEach(doc=>{
                    doc.ref.delete()
                    this.loading = false
                    this.dialog = false
                    this.$emit('RemoveSuceess')
                    this.$router.push({ path: '/admin/dashboard/team', query: { msg: 'removesuccess' } })
                    // this.$router.replace('/admin/dashboard/team?msg=removesuccess')
                })
            })
        },
    }
  }
</script>