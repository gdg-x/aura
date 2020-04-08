import firebase from '@/config/firebase'

let appservice = {
    testfun:(a)=>{
        console.log('Test Works ' +a)
    },
    
    getTeam:()=>{
        let team = []
        return new Promise((resolve,reject)=>{
            firebase.firestore.collection("team")
            .get()
            .then(doc => {
              if (doc.empty) {
                resolve({
                  success:false,
                  data:{}
                })
              }
              if (Object.keys(doc).length > 0) {
                doc.forEach(res=>{
                    team.push(res.data())
                })
                resolve({
                    success:true,
                    data:team
                })
              }
            })
            .catch(e => {
              reject(e)
            });
        })
    },

    getTeamMember(id){
        return new Promise((resolve,reject)=>{
            firebase.firestore.collection("team").doc(id)
            .get()
            .then(doc => {
              if (doc.empty) {
                resolve({
                    success:false,
                    data:{}
                })
              }
              if(!doc.exists){
                resolve({
                    success:false,
                    data:{}
                })
              }
              if (Object.keys(doc).length > 0) {
                resolve({
                    success:true,
                    data:doc.data()
                })
              }
            })
            .catch(e => {
              reject(e)
            });
        })
    },

    getAllEvents(){
        let events = []
        return new Promise((resolve,reject)=>{
            firebase.firestore.collection("events")
            .get()
            .then(doc => {
              if (doc.empty) {
                resolve({
                    success:false,
                    data:{}
                })
              }
              if (Object.keys(doc).length > 0) {
                doc.forEach(res=>{
                    events.push(res.data())
                })
                resolve({
                    success:true,
                    data:events
                })
              }
            })
            .catch(e => {
              reject(e)
            });
        })
    },

    getEvent(id){
        return new Promise((resolve,reject)=>{
            firebase.firestore.collection("events").doc(id)
            .get()
            .then(doc => {
              if (doc.empty) {
                resolve({
                    success:false,
                    data:{}
                })
              }
              if(!doc.exists){
                resolve({
                    success:false,
                    data:{}
                })
              }
              if (Object.keys(doc).length > 0) {
                resolve({
                    success:true,
                    data:doc.data()
                })
              }
            })
            .catch(e => {
              reject(e)
            });
        })
    },

    getSpeaker(id){
        return new Promise((resolve,reject)=>{
            firebase.firestore.collection("Speakers").doc(id)
            .get()
            .then(doc => {
              if (doc.empty) {
                resolve({
                    success:false,
                    data:{}
                })
              }
              if(!doc.exists){
                resolve({
                    success:false,
                    data:{}
                })
              }
              if (Object.keys(doc).length > 0) {
                resolve({
                    success:true,
                    data:doc.data()
                })
              }
            })
            .catch(e => {
              reject(e)
            });
        })
    },

    getAllSpeakers(){
        let speakers = []
        return new Promise((resolve,reject)=>{
            firebase.firestore.collection("Speakers")
            .get()
            .then(doc => {
              if (doc.empty) {
                resolve({
                    success:false,
                    data:{}
                })
              }
              if (Object.keys(doc).length > 0) {
                doc.forEach(res=>{
                    speakers.push(res.data())
                })
                resolve({
                    success:true,
                    data:speakers
                })
              }
            })
            .catch(e => {
              reject(e)
            });
        })
    },

    getFeaturesEvents(){
        return new Promise((resolve,reject)=>{
            firebase.firestore.collection("featureevents").doc('data')
            .get()
            .then(doc => {
              if (doc.empty) {
                resolve({
                    success:false,
                    data:{}
                })
              }
              if(!doc.exists){
                resolve({
                    success:false,
                    data:{}
                })
              }
              if (Object.keys(doc).length > 0) {
                resolve({
                    success:true,
                    data:doc.data().eventid
                })
                // resolve(doc.data().eventid)
              }
            })
            .catch(e => {
              reject(e)
            });
        })
    },

    getAllPartners(){
        let partners = []
        return new Promise((resolve,reject)=>{
            firebase.firestore.collection("partners")
            .get()
            .then(doc => {
              if (doc.empty) {
                resolve({
                    success:false,
                    data:{}
                })
              }
              if (Object.keys(doc).length > 0) {
                doc.forEach(res=>{
                    partners.push(res.data())
                })
                resolve({
                    success:true,
                    data:partners
                })
              }
            })
            .catch(e => {
              reject(e)
            });
        })
    },

    getAllConfig(){
      let config = []
      return new Promise((resolve,reject)=>{
          firebase.firestore.collection("config")
          .get()
          .then(doc => {
            if (doc.empty) {
              resolve({
                  success:false,
                  data:{}
              })
            }
            if (Object.keys(doc).length > 0) {
              doc.forEach(res=>{
                  config.push(res.data())
              })
              resolve({
                  success:true,
                  data:config
              })
            }
          })
          .catch(e => {
            reject(e)
          });
      })
    },

    getAllUpcomingMeetupsEvents(){
      return new Promise((resolve,reject)=>{
          firebase.firestore.collection("config").doc('keysandsecurity')
          .get()
          .then(doc => {
            if (doc.empty) {
              resolve({
                  success:false,
                  data:{}
              })
            }
            if(Object.keys(doc.data()).length > 0){
              fetch(
                "https://cors-anywhere.herokuapp.com/https://api.meetup.com/"+doc.data().meetup+"/events?&sign=true"
              ).then(res=>res.json()).then(data=>{
                if(data.length>0){
                  resolve({
                    success:true,
                    data:data
                  })
                }
              }).catch(e=>{
                reject(e)
              })
            }
          })
          .catch(e => {
            reject(e)
          });
      })
    },

    getGeneralConfig(){
      return new Promise((resolve,reject)=>{
        firebase.firestore.collection("config").doc('general')
        .get()
        .then(doc => {
          if (doc.empty) {
            resolve({
                success:false,
                data:{}
            })
          }
          if(Object.keys(doc.data()).length > 0){
            resolve({
              success:true,
              data:doc.data()
            })
          }
        })
        .catch(e => {
          reject(e)
        });
      })
    },

    getFooterConfig(){
      return new Promise((resolve,reject)=>{
        firebase.firestore.collection("config").doc('footer')
        .get()
        .then(doc => {
          if (doc.empty) {
            resolve({
                success:false,
                data:{}
            })
          }
          if(Object.keys(doc.data().links).length > 0){
            resolve({
              success:true,
              data:doc.data().links
            })
          }
        })
        .catch(e => {
          reject(e)
        });
      })
    },

    getCommunityGuidelines(){
      return new Promise((resolve,reject)=>{
        firebase.firestore.collection("config").doc('communityguidelines')
        .get()
        .then(doc => {
          if (doc.empty) {
            resolve({
                success:false,
                data:{}
            })
          }
          if(Object.keys(doc.data()).length > 0){
            resolve({
              success:true,
              data:doc.data()
            })
          }
        })
        .catch(e => {
          reject(e)
        });
      })
    },

    getAllMeetupPastEvents(){
      return new Promise((resolve,reject)=>{
        firebase.firestore.collection("config").doc('keysandsecurity')
        .get()
        .then(doc => {
          if (doc.empty) {
            resolve({
                success:false,
                data:{}
            })
          }
          if(Object.keys(doc.data()).length > 0){
            fetch(
              "https://cors-anywhere.herokuapp.com/https://api.meetup.com/"+doc.data().meetup+"/events?desc=true&photo-host=public&page=300&status=past&sign=true"
            ).then(res=>res.json()).then(data=>{
              if(data.length>0){
                resolve({
                  success:true,
                  data:data
                })
              }
            }).catch(e=>{
              reject(e)
            })
          }
        })
        .catch(e => {
          reject(e)
        });
      })
    },

    getAllMediumBlogs(){
      return new Promise((resolve,reject)=>{
        firebase.firestore.collection("config").doc('general')
        .get()
        .then(doc => {
          if (doc.empty) {
            resolve({
                success:false,
                data:{}
            })
          }
          console.log(doc.data().blogs.medium)
          if(Object.keys(doc.data().blogs).length > 0){
            let baseURL = "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/"+doc.data().blogs.medium
            
            fetch(baseURL).then(res=>res.json()).then(data=>{
              if(data.items.length>0){
                resolve({
                  success:true,
                  data:data
                })
              }
            }).catch(e=>{
              reject(e)
            })
          }
        })
        .catch(e => {
          reject(e)
        });
      })
    },

    getAllKeys(){
      return new Promise((resolve,reject)=>{
          firebase.firestore.collection("config").doc('keysandsecurity')
          .get()
          .then(doc => {
            if (doc.empty) {
              resolve({
                  success:false,
                  data:{}
              })
            }
            if(Object.keys(doc.data()).length > 0){
              resolve({
                  success:true,
                  data:doc.data()
              })
            }
          })
          .catch(e => {
            reject(e)
          });
      })
    },

    getPartner(id){
        return new Promise((resolve,reject)=>{
            firebase.firestore.collection("partners").doc(id)
            .get()
            .then(doc => {
              if (doc.empty) {
                resolve({
                    success:false,
                    data:{}
                })
              }
              if(!doc.exists){
                resolve({
                    success:false,
                    data:{}
                })
              }
              if (Object.keys(doc).length > 0) {
                resolve({
                    success:true,
                    data:doc.data()
                })
              }
            })
            .catch(e => {
              reject(e)
            });
        })
    },
}

export default appservice