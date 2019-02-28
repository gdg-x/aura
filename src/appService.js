import axios from 'axios'

const appService = {

    getUpcomingEvents(){
        return new Promise(function(resolve,reject){
            var config={
                headers:{
                    'Authorization':`${JSON.parse(window.localStorage.getItem("data")).token}`
                }
            };
            axios.post('/getbrandwiseretailer',credential,config
            ).then(response=>{
                resolve(response.data);
            })
        })
    }
}