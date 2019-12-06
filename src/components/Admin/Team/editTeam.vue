<template>
    <v-dialog
      v-model="dialog"
      width="800"
    >
      <template v-slot:activator="{ on }">
        <v-btn
          small
          color="cyan"
          dark
          v-on="on"
        >
          Edit {{teamData.name}} Details 
        </v-btn>
      </template>

      <v-card v-if="dialog">
        <v-card-title
          class="headline white"
          primary-title
          
        >
        <!-- {{+(docId)+1}} -->
          Edit {{teamData.name}} Details
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
                                v-model="updatedData.active"
                                label="Active Status"
                                outlined
                                ></v-select>
                          </v-flex>
                          <v-flex xs3 class="pa-1 ma-0">
                                <v-select
                                :items="items"
                                v-model="updatedData.visible"
                                label="Visiblity Status"
                                outlined
                                ></v-select>
                          </v-flex>
                          <v-flex xs3 class="pa-1 ma-0">
                                <v-text-field
                                    v-model="updatedData.id"
                                    class="ma-0"
                                    disabled
                                    label="ID"
                                    type="text"
                                    outlined
                                ></v-text-field>
                          </v-flex>
                          <v-flex xs3 class="pa-1 ma-0">
                                <v-select
                                    :items="teamRole"
                                    v-model="updatedData.role"
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
                                    v-model="updatedData.name"
                                    :rules="nameRules"
                                    class="ma-0"
                                    label="Name"
                                    outlined
                                ></v-text-field>
                          </v-flex>
                          <v-flex xs4 class="pa-1 ma-0">
                               <v-text-field
                                    v-model="updatedData.designation"
                                    class="ma-0"
                                    :rules="nameRules"
                                    label="Desigination"
                                    outlined
                                ></v-text-field>
                          </v-flex>
                          
                          <v-flex xs8 class="pa-1 ma-0">
                               <v-text-field
                                    class="ma-0"
                                    v-model="updatedData.image"
                                    label="Profile Image URL"
                                    outlined
                                ></v-text-field>
                          </v-flex>
                          
                          <v-flex xs10 class="pa-1 ma-0">
                                <v-textarea
                                outlined
                                name="input-7-4"
                                v-model="updatedData.bio"
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
                                    v-model="updatedData.mbnumber"
                                    label="Contact Number"
                                    outlined
                                ></v-text-field>
                          </v-flex>
                          <v-flex xs6 class="pa-1 ma-0">
                               <v-text-field
                                    class="ma-0"
                                    v-model="updatedData.email"
                                    :rules="emailRules"
                                    label="Email Id"
                                    outlined
                                ></v-text-field>
                          </v-flex>
                          
                      </v-layout>

                      <v-layout row wrap class="pa-3">
                          <v-flex xs12 class="pa-1 ma-0">
                              <p style="font-size:120%" class="my-0">Social Links</p>
                              <!-- {{teamData}} -->
                              <!-- {{updatedData}} -->
                          </v-flex>

                          <v-flex xs4 class="pa-1 ma-0">
                               <v-text-field
                                    class="ma-0"
                                    label="Facebook"
                                    outlined
                                    v-model="updatedData.socialLinks.facebook"
                                ></v-text-field>
                          </v-flex>
                          <v-flex xs4 class="pa-1 ma-0">
                               <v-text-field
                                    class="ma-0"
                                    label="Github"
                                    v-model="updatedData.socialLinks.github"
                                    outlined
                                ></v-text-field>
                          </v-flex>
                          <v-flex xs4 class="pa-1 ma-0">
                               <v-text-field
                                    class="ma-0"
                                    v-model="updatedData.socialLinks.linkedin"
                                    label="Linkedin"
                                    outlined
                                ></v-text-field>
                          </v-flex>
                          <v-flex xs4 class="pa-1 ma-0">
                               <v-text-field
                                    class="ma-0"
                                    v-model="updatedData.socialLinks.meetup"
                                    label="Meetup"
                                    outlined
                                ></v-text-field>
                          </v-flex>
                          <v-flex xs4 class="pa-1 ma-0">
                               <v-text-field
                                    class="ma-0"
                                    v-model="updatedData.socialLinks.twitter"
                                    label="Twitter"
                                    outlined
                                ></v-text-field>
                          </v-flex>
                          <v-flex xs4 class="pa-1 ma-0">
                               <v-text-field
                                    class="ma-0"
                                    v-model="updatedData.socialLinks.web"
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
            @click="UpdateData"
          >
            Update {{teamData.name}} Details
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
        valid: true,
        nameRules: [
            v => !!v || 'Name is required',
            v => (v && v.length <= 20) || 'Name must be less than 10 characters',
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
        role:null,
        updatedData:{
            active: this.teamData.active,
            visible: this.teamData.visible,
            name:this.teamData.name,
            designation: this.teamData.designation,
            mbnumber: this.teamData.mbnumber,
            email:this.teamData.email,
            image:this.teamData.image,
            bio:this.teamData.bio,
            id: this.teamData.id,
            role:this.teamData.role,
            socialLinks:{
                facebook: this.teamData.socialLinks.facebook,
                github: this.teamData.socialLinks.github,
                linkedin: this.teamData.socialLinks.linkedin,
                meetup: this.teamData.socialLinks.meetup,
                twitter: this.teamData.socialLinks.twitter,
                web: this.teamData.socialLinks.web,
            }
        }
      }
    },
    methods:{
        UpdateData(){
            var self =this
            self.loading = true
            if (this.$refs.form.validate()) {
                console.log(this.updatedData)
                console.log(this.teamData.id)
                

                firebase.firestore().collection("team").where("id", "==", this.teamData.id)
                .get()
                .then(function(querySnapshot) {
                    querySnapshot.forEach(function(doc) {
                        console.log(doc.id, " => ", doc.data());
                        // Build doc ref from doc.id
                        
                        firebase.firestore().collection("team").doc(doc.id).update({
                            active: self.updatedData.active,
                            visible: self.updatedData.visible,
                            name:self.updatedData.name,
                            designation: self.updatedData.designation,
                            mbnumber: self.updatedData.mbnumber,
                            email:self.updatedData.email,
                            image:self.updatedData.image,
                            bio:self.updatedData.bio,
                            id: self.updatedData.id,
                            role:self.updatedData.role,
                            socialLinks:{
                                facebook: self.updatedData.socialLinks.facebook,
                                github: self.updatedData.socialLinks.github,
                                linkedin: self.updatedData.socialLinks.linkedin,
                                meetup: self.updatedData.socialLinks.meetup,
                                twitter: self.updatedData.socialLinks.twitter,
                                web: self.updatedData.socialLinks.web,
                            }
                        });
                    });
                }).then(()=>{
                    // alert('Data Updated')
                    self.loading = false
                    self.dialog = false 
                }).catch(e=>{
                    console.log(e)
                    self.loading = false
                })

                // firebase.firestore().collection('team').where('id','==', this.teamData.id)
                // update(Data).then(res=>{
                //     // console.log(res)
                //     alert('Updated')
                //     this.dialog = false
                //     this.$emit('showSuccess')
                // }).catch(e=>{
                //     console.log(e)
                // })
            }
            
        }
    }
  }
</script>