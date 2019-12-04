<template>
  <div>
    <v-btn
        small
        dark
        color="red"
        @click.stop="dialog = true"
    >
        Remove
    </v-btn>

    <v-dialog
      v-model="dialog"
      max-width="300"
    >
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
  </div>
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
                    
                    alert('Data Deleted')
                    this.$emit('removeSuccess')
                })
            })
        },
    }
  }
</script>