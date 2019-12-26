<template>
  <div class="text-center">
    <v-dialog v-model="dialog" scrollable width="1200">
      <template v-slot:activator="{ on }">
        <v-btn color="indigo" dark v-on="on">Add Speaker</v-btn>
      </template>
      <v-card>
        <v-card-title class="headline deep-purple accent-4 white--text">Add new Speaker</v-card-title>
        <v-divider></v-divider>
        <v-card-text>
          <v-container fluid>
            <v-form lazy-validation>
              <v-row align="center">
                <v-col cols="12">
                  <v-row align="center">
                    <v-col cols="12">
                      <p style="font-size:120%" class="my-0">Speaker Status</p>
                    </v-col>
                    <v-col cols="6" md="4" xl="3">
                      <v-select
                        :items="visiblity"
                        v-model="visible"
                        label="Visiblity Status"
                        outlined
                      ></v-select>
                    </v-col>
                    <v-col cols="6" md="4" xl="3">
                      <v-text-field v-model="userId" label="ID" type="text" outlined></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row align="center">
                    <v-col cols="12">
                      <p style="font-size:120%" class="my-0">Speaker info</p>
                    </v-col>
                    <v-col cols="12" sm="8" md="10">
                      <v-row align="center">
                        <v-col cols="12" md="8" xl="3" class="pa-1 ma-0">
                          <v-text-field v-model="name" label="Full Name" type="text" outlined></v-text-field>
                        </v-col>
                        <v-col cols="12" md="4" xl="3" class="pa-1 ma-0">
                          <v-text-field
                            v-model="desigination"
                            label="Desigination"
                            type="text"
                            outlined
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" class="pa-1 ma-0">
                          <v-text-field
                            v-model="imageURL"
                            label="Profile Image URL"
                            type="text"
                            outlined
                          ></v-text-field>
                        </v-col>

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
                                  label="Select Image"
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
                                >Discard</v-btn>
                                <v-btn color="green darken-1" text @click="uploadImage">Upload Image</v-btn>
                              </v-card-actions>
                            </v-card>
                          </v-dialog>
                        </v-col>
                      </v-row>
                    </v-col>

                    <v-col cols="12" sm="4" md="2">
                      <v-img :src="imageURL" class="mt-n7"></v-img>
                    </v-col>

                    <v-col cols="12" md="10" class="pa-1 ma-0">
                      <v-textarea outlined v-model="bio" label="Bio"></v-textarea>
                    </v-col>
                  </v-row>
                  <v-row align="center">
                    <v-col cols="12">
                      <p style="font-size:120%" class="my-0">Personal Info</p>
                    </v-col>
                    <v-col cols="12" md="6" class="pa-1 ma-0">
                      <v-text-field
                        v-model="mbnumber"
                        label="Contact Number"
                        type="tel"
                        outlined
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6" class="pa-1 ma-0">
                      <v-text-field v-model="email" label="Email" type="email" outlined></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6" class="pa-1 ma-0">
                      <v-text-field v-model="companyName" label="Company Name" type="text" outlined></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6" class="pa-1 ma-0">
                      <v-text-field v-model="companyURL" label="Company URL" type="url" outlined></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6" class="pa-1 ma-0">
                      <v-text-field v-model="city" label="City" type="text" outlined></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6" class="pa-1 ma-0">
                      <v-text-field v-model="country" label="Country" type="text" outlined></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row align="center">
                    <v-col cols="12">
                      <p style="font-size:120%" class="my-0">Social Links</p>
                    </v-col>
                    <v-col cols="12" md="6" class="pa-1 ma-0">
                      <v-text-field v-model="facebook" label="Facebook" type="url" outlined></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6" class="pa-1 ma-0">
                      <v-text-field v-model="twitter" label="Twitter" type="url" outlined></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6" class="pa-1 ma-0">
                      <v-text-field v-model="github" label="Github" type="url" outlined></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6" class="pa-1 ma-0">
                      <v-text-field v-model="linkedin" label="LinkdeIN" type="url" outlined></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6" class="pa-1 ma-0">
                      <v-text-field v-model="medium" label="Medium" type="url" outlined></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6" class="pa-1 ma-0">
                      <v-text-field v-model="website" label="Website" type="url" outlined></v-text-field>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
            </v-form>
          </v-container>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
          <v-btn color="primary" dark @click="saveData" :loading="addSpeakerLoading">Add new Speaker</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import firebase from "@/firebase";

export default {
  name: "addSpeaker",
  data: () => ({
    dialog: false,
    dialogImageUload: false,
    visiblity: [true, false],
    uploadbtnText: "Upload Image",
    visible: Boolean,
    userId: "",
    name: "",
    desigination: "",
    imageURL: "",
    imagePre: "",
    imageUploading: false,
    bio: "",
    imageUpload: [],
    mbnumber: "",
    email: "",
    companyName: "",
    companyURL: "",
    country: "",
    city: "",
    facebook: "",
    github: "",
    linkedin: "",
    twitter: "",
    medium: "",
    website: "",
    addSpeakerLoading: false
  }),
  methods: {
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
      var refLink = firebase.storage.ref("speakers/" + fileName);
      refLink.put(this.imageUpload).then(file => {
        console.log(file);
        refLink.getDownloadURL().then(a => {
          console.log(a);
          this.imageURL = a;
          this.imageUploading = false;
          this.uploadImage = "Uploaded";
        });
      });
      this.dialogImageUload = false;
    },
    saveData() {
      this.addSpeakerLoading = true;
      var Data = {
        visible: this.visible,
        id: this.userId,
        name: this.name,
        designation: this.desigination,
        mbnumber: this.mbnumber,
        email: this.email,
        image: this.imageURL,
        bio: this.bio,
        city: this.city,
        country: this.country,
        company: {
          name: this.companyName,
          url: this.companyURL
        },
        socialLinks: {
          facebook: this.facebook,
          github: this.github,
          linkedin: this.linkedin,
          medium: this.medium,
          twitter: this.twitter,
          web: this.website
        }
      };
      firebase.firestore
        .collection("speakers")
        .doc(Data.id)
        .set(Data)
        .then(res => {
          console.log(res);
          this.dialog = false;
          this.addSpeakerLoading = false;
          this.$emit("showSuccess", true);
        })
        .catch(e => {
          console.log(e);
        });
    }
  }
};
</script>

<style>
</style>