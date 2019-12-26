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
          class="headline"
          primary-title
          dark
        >
        <!-- {{+(docId)+1}} -->
          Create New Team Member 
        </v-card-title>

        <v-card-text>
          <v-container fluid>
            <v-row class="pa-0">
                <v-col md="12" cols="12">
                  <v-form
                        ref="form"
                        v-model="valid"
                        lazy-validation
                  >
                    <!-- Row 1 -->
                    <v-row class="pa-3">
                      <v-col md="12" cols="12" class="pa-1 ma-0">
                        <p style="font-size:120%" class="my-0">Team Member Status</p>
                      </v-col>

                      <v-col md="3" xs="3" cols="12" class="pa-1 ma-0">
                        <v-select
                        :items="items"
                        v-model="active"
                        label="Active Status"
                        outlined
                        ></v-select>
                      </v-col>

                      <v-col md="3" xs="3" cols="12" class="pa-1 ma-0">
                        <v-select
                        :items="items"
                        v-model="visible"
                        label="Visiblity Status"
                        outlined
                        ></v-select>
                      </v-col>

                      <v-col md="3" xs="3" cols="12" class="pa-1 ma-0">
                        <v-text-field
                            v-model="id"
                            class="ma-0"
                            label="ID"
                            type="text"
                            outlined
                        ></v-text-field>
                      </v-col>

                      <v-col md="3" xs="3" cols="12" class="pa-1 ma-0">
                        <v-select
                            :items="teamRole"
                            v-model="role"
                            label="Role"
                            outlined
                        ></v-select>
                      </v-col>

                    </v-row>
                    <!-- Row 1 -->

                    <!-- Row 2 -->
                    <v-row class="pa-3">
                      <v-col md="12" cols="12" class="pa-1 ma-0">
                        <p style="font-size:120%" class="my-0">Team Member Info</p>
                      </v-col>

                      <v-col md="4" xs="4" cols="12" class="pa-1 ma-0">
                        <v-text-field
                            v-model="name"
                            :rules="nameRules"
                            class="ma-0"
                            label="Name"
                            outlined
                        ></v-text-field>
                      </v-col>

                      <v-col md="4" xs="4" cols="12" class="pa-1 ma-0">
                        <v-text-field
                            v-model="designation"
                            class="ma-0"
                            :rules="nameRules"
                            label="Desigination"
                            outlined
                        ></v-text-field>
                      </v-col>

                      <v-col md="4" xs="4" cols="12" class="pa-1 ma-0">
                        <v-text-field
                            v-model="imageURL"
                            class="ma-0"
                            label="Image URL"
                            outlined
                        ></v-text-field>
                      </v-col>

                      <!-- Image URL Upload Model -->
                      <v-col cols="12" sm="6" class="pa-1 ma-0">
                        <v-dialog v-model="dialogImageUload" max-width="290">
                          <template v-slot:activator="{ on }">
                            <v-btn
                              color="primary"
                              :loading="imageUploading"
                              dark
                              class="mt-n6"
                              v-on="on"
                            >Upload Image</v-btn>
                          </template>
                          <v-card>
                            <v-card-title>Upload Speaker Image</v-card-title>
                            <v-card-text>
                              <v-img :src="imagePre" class="mb-6"></v-img>

                              <v-file-input
                                v-model="imageUpload"
                                accept="image/*"
                                label="File input"
                                prepend-icon
                                @change="onFileChange"
                                outlined
                              ></v-file-input>
                            </v-card-text>
                            <v-card-actions>
                              <v-spacer></v-spacer>
                              <v-btn
                                color="green darken-1"
                                text
                                @click="dialogImageUload = false"
                              >Disagree</v-btn>
                              <v-btn color="green darken-1" text @click="uploadImage">Agree</v-btn>
                            </v-card-actions>
                          </v-card>
                        </v-dialog>
                      </v-col>
                      <!-- Image URL Upload Model -->

                      <v-col md="4" xs="12" cols="12" class="pa-1 ma-0">
                        <v-img :src="imageURL" class="mt-n7"></v-img>
                      </v-col>

                      <v-col md="12" xs="12" cols="12" class="pa-1 ma-0">
                        <v-textarea
                        outlined
                        name="input-7-4"
                        v-model="bio"
                        label="Bio"
                        ></v-textarea>
                      </v-col>

                    </v-row>
                    <!-- Row 2 -->


                    <!-- Row 3 -->
                    <v-row class="pa-3">
                      <v-col md="12" cols="12" class="pa-1 ma-0">
                        <p style="font-size:120%" class="my-0">Personal Info</p>
                      </v-col>

                      <v-col md="4" xs="4" cols="12" class="pa-1 ma-0">
                        <v-text-field
                            class="ma-0"
                            v-model="mbnumber"
                            label="Contact Number"
                            outlined
                        ></v-text-field>
                      </v-col>


                      <v-col md="8" xs="8" cols="12" class="pa-1 ma-0">
                        <v-text-field
                            class="ma-0"
                            v-model="email"
                            :rules="emailRules"
                            label="Email Id"
                            outlined
                        ></v-text-field>
                      </v-col>

                    </v-row>
                    <!-- Row 3 -->

                    <!-- Row 4 -->
                    <v-row class="pa-3">
                      <v-col md="12" cols="12" class="pa-1 ma-0">
                        <p style="font-size:120%" class="my-0">Social Links</p>
                      </v-col>

                      <v-col md="4" xs="4" cols="12" class="pa-1 ma-0">
                        <v-text-field
                            class="ma-0"
                            label="Facebook"
                            outlined
                            v-model="facebook"
                        ></v-text-field>
                      </v-col>

                      <v-col md="4" xs="4" cols="12" class="pa-1 ma-0">
                        <v-text-field
                            class="ma-0"
                            label="Github"
                            v-model="github"
                            outlined
                        ></v-text-field>
                      </v-col>


                      <v-col md="4" xs="4" cols="12" class="pa-1 ma-0">
                        <v-text-field
                            class="ma-0"
                            v-model="linkedin"
                            label="Linkedin"
                            outlined
                        ></v-text-field>
                      </v-col>

                      <v-col md="4" xs="4" cols="12" class="pa-1 ma-0">
                        <v-text-field
                            class="ma-0"
                            v-model="meetup"
                            label="Meetup"
                            outlined
                        ></v-text-field>
                      </v-col>

                      <v-col md="4" xs="4" cols="12" class="pa-1 ma-0">
                        <v-text-field
                            class="ma-0"
                            v-model="twitter"
                            label="Twitter"
                            outlined
                        ></v-text-field>
                      </v-col>

                      <v-col md="4" xs="4" cols="12" class="pa-1 ma-0">
                        <v-text-field
                            class="ma-0"
                            v-model="web"
                            label="Website/Blog"
                            outlined
                        ></v-text-field>
                      </v-col>

                    </v-row>
                    <!-- Row 4 -->

                  </v-form> 
                </v-col>
              </v-row>

             
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
import { storage } from 'firebase';
  export default {
    props:{

    },
    data () {
      return {
        imageUpload: [],
        imagePre: "",
        imageUploading: false,
        valid: true,
        dialogImageUload: false,
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
        imageURL:'',
        designation:'',
        role:null
      }
    },
    methods:{
      onFileChange() {
        let reader = new FileReader();
        reader.readAsDataURL(this.imageUpload);
        reader.onload = () => {
          this.imagePre = reader.result;
        };
      },
      uploadImage() {
        this.imageUploading = true;
        var fileName = `${this.userId}.${this.imageUpload.name.split(".")[1]}`;
        console.log(fileName);
        var refLink = firebase.storage().ref("team/" + fileName);
        refLink.put(this.imageUpload).then(file => {
          refLink.getDownloadURL().then(a => {
            console.log(a);
            this.imageURL = a;
            this.imageUploading = false;
            this.uploadImage = "Uploaded";
          });
        });
        this.dialogImageUload = false;
      },
      SaveEvent(){
        if (this.$refs.form.validate()) {
            var Data = {
                active: this.active,
                visible: this.visible,
                name:this.name,
                designation: this.designation,
                mbnumber: this.mbnumber,
                email:this.email,
                image:this.imageURL,
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