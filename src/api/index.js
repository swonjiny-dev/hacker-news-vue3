import axios from "axios";

const config = {
    baseUrl : 'https://api.hnpwa.com/v0/',
}
/* eslint-disable*/
function fetchNewsList(payload){
    return axios.get(`${config.baseUrl}news/${payload}.json`)
        .catch(error=>{
            console.error(error);
        })
 }
/* eslint-disable*/
function fetchNewestList(){
    return axios.get(`${config.baseUrl}newest/1.json`)
    .catch(error=>{
        console.error(error);
    })
}

/* eslint-disable*/
function fetchAskList(){
    return axios.get(`${config.baseUrl}ask/1.json`)
    .catch(error=>{
        console.error(error);
    })
}

/* eslint-disable*/
function fetchShowList(){
    return axios.get(`${config.baseUrl}show/1.json`)
    .catch(error=>{
        console.error(error);
    })
}

/* eslint-disable*/
function fetchJobsList(){
    return axios.get(`${config.baseUrl}jobs/1.json`)
    .catch(error=>{
        console.error(error);
    })
}


 export {
    fetchNewsList, 
    fetchNewestList,
    fetchAskList,
    fetchShowList,
    fetchJobsList
 }