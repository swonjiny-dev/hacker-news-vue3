import * as api from "../api";

/* eslint-disable*/
export default {
    FETCH_NEWS({commit} , payload){
        api.fetchNewsList(payload)
        .then(res =>{
            return commit('SET_NEWS',res.data)
        })
    },
    FETCH_NEWEST({commit}){
        api.fetchNewestList()
        .then(res =>{
            return commit('SET_NEWEST',res.data)
        })
    },
    FETCH_ASK({commit}){
        api.fetchAskList()
        .then(res =>{
            return commit('SET_ASK',res.data)
        })
    },
    FETCH_SHOW({commit}){
        api.fetchShowList()
        .then(res =>{
            return commit('SET_SHOW',res.data)
        })
    },
    FETCH_JOBS({commit}){
        api.fetchJobsList()
        .then(res =>{
            return commit('SET_JOBS',res.data)
        })
    },
}