<template>
  <div class="text-center">
    <v-dialog
      v-model="dialog"
      width="1200"
    >
      <template v-slot:activator="{ on }">
        <v-btn
          color="indigo"
          dark
          v-on="on"
        >
          Add New Team Member
        </v-btn>
      </template>

      <v-card>
        <v-card-title
          class="headline deep-purple accent-4"
          primary-title
          dark
        >
        <!-- {{+(docId)+1}} -->
          Create New Team Member 
        </v-card-title>

        <v-card-text>
          <v-container fluid>
              <v-layout row wrap>
                  <v-flex xs12 md12 >
                    <v-form
                        ref="form"
                        v-model="valid"
                        lazy-validation
                    >
                      <v-layout row wrap class="pa-3">
                          <v-flex xs12 class="pa-1 ma-0">
                              <p style="font-size:120%" class="my-0">Team Member Status</p>
                          </v-flex>

                          <v-flex xs3 class="pa-1 ma-0">
                                <v-select
                                :items="items"
                                v-model="active"
                                label="Active Status"
                                outlined
                                ></v-select>
                          </v-flex>
                          <v-flex xs3 class="pa-1 ma-0">
                                <v-select
                                :items="items"
                                v-model="visible"
                                label="Visiblity Status"
                                outlined
                                ></v-select>
                          </v-flex>
                          <v-flex xs3 class="pa-1 ma-0">
                                <v-text-field
                                    v-model="id"
                                    class="ma-0"
                                    label="ID"
                                    type="text"
                                    outlined
                                ></v-text-field>
                          </v-flex>
                          <v-flex xs3 class="pa-1 ma-0">
                                <v-select
                                    :items="teamRole"
                                    v-model="role"
                                    label="Role"
                                    outlined
                                ></v-select>
                          </v-flex>
                      </v-layout>

                      <v-layout row wrap class="pa-3">
                          <v-flex xs12 class="pa-1 ma-0">
                              <p style="font-size:120%" class="my-0">Team Member Info</p>
                          </v-flex>
                          <v-flex xs4 class="pa-1 ma-0">
                               <v-text-field
                                    v-model="name"
                                    :rules="nameRules"
                                    class="ma-0"
                                    label="Name"
                                    outlined
                                ></v-text-field>
                          </v-flex>
                          <v-flex xs4 class="pa-1 ma-0">
                               <v-text-field
                                    v-model="designation"
                                    class="ma-0"
                                    :rules="nameRules"
                                    label="Desigination"
                                    outlined
                                ></v-text-field>
                          </v-flex>
                          
                          <v-flex xs8 class="pa-1 ma-0">
                               <v-text-field
                                    class="ma-0"
                                    v-model="image"
                                    label="Profile Image URL"
                                    outlined
                                ></v-text-field>
                          </v-flex>
                          
                          <v-flex xs10 class="pa-1 ma-0">
                                <v-textarea
                                outlined
                                name="input-7-4"
                                v-model="bio"
                                label="Bio"
                                ></v-textarea>
                          </v-flex>

                      </v-layout>

                      <v-layout row wrap class="pa-3">
                          <v-flex xs12 class="pa-1 ma-0">
                              <p style="font-size:120%" class="my-0">Personal Info</p>
                          </v-flex>

                          <v-flex xs4 class="pa-1 ma-0">
                              <v-text-field
                                    class="ma-0"
                                    v-model="mbnumber"
                                    label="Contact Number"
                                    outlined
                                ></v-text-field>
                          </v-flex>
                          <v-flex xs6 class="pa-1 ma-0">
                               <v-text-field
                                    class="ma-0"
                                    v-model="email"
                                    :rules="emailRules"
                                    label="Email Id"
                                    outlined
                                ></v-text-field>
                          </v-flex>
                          
                      </v-layout>

                      <v-layout row wrap class="pa-3">
                          <v-flex xs12 class="pa-1 ma-0">
                              <p style="font-size:120%" class="my-0">Social Links</p>
                          </v-flex>

                          <v-flex xs4 class="pa-1 ma-0">
                               <v-text-field
                                    class="ma-0"
                                    label="Facebook"
                                    outlined
                                    v-model="facebook"
                                ></v-text-field>
                          </v-flex>
                          <v-flex xs4 class="pa-1 ma-0">
                               <v-text-field
                                    class="ma-0"
                                    label="Github"
                                    v-model="github"
                                    outlined
                                ></v-text-field>
                          </v-flex>
                          <v-flex xs4 class="pa-1 ma-0">
                               <v-text-field
                                    class="ma-0"
                                    v-model="linkedin"
                                    label="Linkedin"
                                    outlined
                                ></v-text-field>
                          </v-flex>
                          <v-flex xs4 class="pa-1 ma-0">
                               <v-text-field
                                    class="ma-0"
                                    v-model="meetup"
                                    label="Meetup"
                                    outlined
                                ></v-text-field>
                          </v-flex>
                          <v-flex xs4 class="pa-1 ma-0">
                               <v-text-field
                                    class="ma-0"
                                    v-model="twitter"
                                    label="Twitter"
                                    outlined
                                ></v-text-field>
                          </v-flex>
                          <v-flex xs4 class="pa-1 ma-0">
                               <v-text-field
                                    class="ma-0"
                                    v-model="web"
                                    label="Website/Blog"
                                    outlined
                                ></v-text-field>
                          </v-flex>
                      </v-layout>

                    </v-form>
                  </v-flex>
              </v-layout>
          </v-container>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <div class="flex-grow-1"></div>
          <v-btn
            color="primary"
            text
            @click="dialog = false"
          >
            Close
          </v-btn>
          <v-btn
            color="primary"
            :disabled="!valid"
            :loading="loading"
            @click="SaveEvent"
          >
            Add New Team Member
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

    },
    data () {
      return {
        valid: true,
        nameRules: [
            v => !!v || 'Name is required',
            v => (v && v.length <= 10) || 'Name must be less than 10 characters',
        ],
        emailRules: [
            v => !!v || 'E-mail is required',
            v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
        ],
        teamRole:["Core Team","Organizing Team", "Volunteer"],
        dialog: false,
        loading:false,
        items:[true,false],
        active:Boolean,
        visible: Boolean,
        id:'',
        mbnumber:'',
        name:'',
        facebook:'',
        github:'',
        linkedin:'',
        email:'',
        meetup:'',
        twitter:'',
        web:'',
        bio:'',
        image:'',
        designation:'',
        role:null
      }
    },
    methods:{
        SaveEvent(){
            if (this.$refs.form.validate()) {
                var Data = {
                    active: this.active,
                    visible: this.visible,
                    name:this.name,
                    designation: this.designation,
                    mbnumber: this.mbnumber,
                    email:this.email,
                    image:this.image,
                    bio:this.bio,
                    id: this.id,
                    role:this.role,
                    socialLinks:{
                        facebook: this.facebook,
                        github: this.github,
                        linkedin: this.linkedin,
                        meetup: this.meetup,
                        twitter: this.twitter,
                        web: this.web,
                    }
                }
                firebase.firestore().collection('team').doc(Data.id).set(Data).then(res=>{
                    // console.log(res)
                    this.dialog = false
                    this.$emit('showSuccess')
                }).catch(e=>{
                    console.log(e)
                })
            }
            
        }
    }
  }
</script>