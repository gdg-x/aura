<template>
  <v-dialog v-model="dialog" scrollable width="1200">
    <template v-slot:activator="{ on }">
      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <v-btn icon color="primary" v-on="on" @click.stop="dialog = true" dark>
            <v-icon>mdi-lead-pencil</v-icon>
          </v-btn>
        </template>
        <span>Edit {{speakerData.name}} Details</span>
      </v-tooltip>
    </template>

    <v-card v-if="dialog">
      <v-card-title class="headline" primary-title>Edit {{speakerData.name.split(" ")[0]}}'s Details</v-card-title>

      <v-card-text class>
        <v-container fluid class="pa-0">
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
                      v-model="updatedData.visible"
                      label="Visiblity Status"
                      outlined
                    ></v-select>
                  </v-col>
                  <v-col cols="6" md="4" xl="3">
                    <v-text-field v-model="updatedData.id" disabled label="ID" type="text" outlined></v-text-field>
                  </v-col>
                </v-row>
                <v-row align="center">
                  <v-col cols="12">
                    <p style="font-size:120%" class="my-0">Speaker info</p>
                  </v-col>
                  <v-col cols="12" sm="8" md="10">
                    <v-row align="center">
                      <v-col cols="12" md="8" xl="3" class="pa-1 ma-0">
                        <v-text-field
                          v-model="updatedData.name"
                          label="Full Name"
                          type="text"
                          outlined
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" md="4" xl="3" class="pa-1 ma-0">
                        <v-text-field
                          v-model="updatedData.designation"
                          label="Desigination"
                          type="text"
                          outlined
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" class="pa-1 ma-0">
                        <v-text-field
                          v-model="updatedData.image"
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
                    <v-img :src="updatedData.image" class="mt-n7"></v-img>
                  </v-col>

                  <v-col cols="12" md="10" class="pa-1 ma-0">
                    <v-textarea outlined v-model="updatedData.bio" label="Bio"></v-textarea>
                  </v-col>
                </v-row>
                <v-row align="center">
                  <v-col cols="12">
                    <p style="font-size:120%" class="my-0">Personal Info</p>
                  </v-col>
                  <v-col cols="12" md="6" class="pa-1 ma-0">
                    <v-text-field
                      v-model="updatedData.mbnumber"
                      label="Contact Number"
                      type="tel"
                      outlined
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="6" class="pa-1 ma-0">
                    <v-text-field v-model="updatedData.email" label="Email" type="email" outlined></v-text-field>
                  </v-col>
                  <v-col cols="12" md="6" class="pa-1 ma-0">
                    <v-text-field
                      v-model="updatedData.company.name"
                      label="Company Name"
                      type="text"
                      outlined
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="6" class="pa-1 ma-0">
                    <v-text-field
                      v-model="updatedData.company.url"
                      label="Company URL"
                      type="url"
                      outlined
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="6" class="pa-1 ma-0">
                    <v-text-field v-model="updatedData.city" label="City" type="text" outlined></v-text-field>
                  </v-col>
                  <v-col cols="12" md="6" class="pa-1 ma-0">
                    <v-text-field
                      v-model="updatedData.country"
                      label="Country"
                      type="text"
                      outlined
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row align="center">
                  <v-col cols="12">
                    <p style="font-size:120%" class="my-0">Social Links</p>
                  </v-col>
                  <v-col cols="12" md="6" class="pa-1 ma-0">
                    <v-text-field
                      v-model="updatedData.socialLinks.facebook"
                      label="Facebook"
                      type="url"
                      outlined
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="6" class="pa-1 ma-0">
                    <v-text-field
                      v-model="updatedData.socialLinks.twitter"
                      label="Twitter"
                      type="url"
                      outlined
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="6" class="pa-1 ma-0">
                    <v-text-field
                      v-model="updatedData.socialLinks.github"
                      label="Github"
                      type="url"
                      outlined
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="6" class="pa-1 ma-0">
                    <v-text-field
                      v-model="updatedData.socialLinks.linkedin"
                      label="LinkdeIN"
                      type="url"
                      outlined
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="6" class="pa-1 ma-0">
                    <v-text-field
                      v-model="updatedData.socialLinks.medium"
                      label="Medium"
                      type="url"
                      outlined
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="6" class="pa-1 ma-0">
                    <v-text-field
                      v-model="updatedData.socialLinks.web"
                      label="Website"
                      type="url"
                      outlined
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-form>
        </v-container>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <div class="flex-grow-1"></div>
        <v-btn color="primary" text @click="dialog = false">Close</v-btn>
        <v-btn color="primary" @click="updateData" :loading="isUpdating">Update Details</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import firebase from "@/firebase";

export default {
  props: {
    speakerData: {}
  },
  data() {
    return {
      dialog: false,
      visiblity: [true, false],
      imageUploading: false,
      imagePre: "",
      dialogImageUload: false,
      imageUpload: [],
      isUpdating:false,
      updatedData: {
        visible: this.speakerData.visible,
        name: this.speakerData.name,
        designation: this.speakerData.designation,
        mbnumber: this.speakerData.mbnumber,
        email: this.speakerData.email,
        image: this.speakerData.image,
        bio: this.speakerData.bio,
        id: this.speakerData.id,
        city: this.speakerData.city,
        country: this.speakerData.country,
        company: {
          name: this.speakerData.company.name,
          url: this.speakerData.company.url
        },
        socialLinks: {
          facebook: this.speakerData.socialLinks.facebook,
          github: this.speakerData.socialLinks.github,
          linkedin: this.speakerData.socialLinks.linkedin,
          medium: this.speakerData.socialLinks.medium,
          twitter: this.speakerData.socialLinks.twitter,
          web: this.speakerData.socialLinks.web
        }
      }
    };
  },
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
      var fileName = `${this.updatedData.id}.${
        this.imageUpload.name.split(".")[1]
      }`;
      var refLink = firebase.storage.ref("speakers/" + fileName);
      refLink.put(this.imageUpload).then(file => {
        console.log(file);
        refLink.getDownloadURL().then(a => {
          this.updatedData.image = a;
          this.imageUploading = false;
        });
      });
      this.dialogImageUload = false;
    },
    updateData() {
        this.isUpdating = true;
      firebase.firestore
        .collection("speakers")
        .doc(this.updatedData.id)
        .update({
          visible: this.updatedData.visible,
          id: this.speakerData.id,
          name: this.updatedData.name,
          designation: this.updatedData.designation,
          mbnumber: this.updatedData.mbnumber,
          email: this.updatedData.email,
          image: this.updatedData.image,
          bio: this.updatedData.bio,
          city: this.updatedData.city,
          country: this.updatedData.country,
          company: {
            name: this.updatedData.company.name,
            url: this.updatedData.company.url
          },
          socialLinks: {
            facebook: this.updatedData.socialLinks.facebook,
            github: this.updatedData.socialLinks.github,
            linkedin: this.updatedData.socialLinks.linkedin,
            medium: this.updatedData.socialLinks.medium,
            twitter: this.updatedData.socialLinks.twitter,
            web: this.updatedData.socialLinks.web
          }
        }).then(()=>{
            this.isUpdating = false;
            this.dialog = false;
            this.$emit("showEditSuccess", true);
        }).catch(err=>{
            console.log(err);
            this.isUpdating = false;
        });
    }
  }
};
</script>