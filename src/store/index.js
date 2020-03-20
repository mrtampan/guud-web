import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)
const baseUrl = process.env.NODE_ENV === 'production' ? window.location.origin : window.location.origin + '/api'
export default new Vuex.Store({
  state: {
    postData: {},
    viewData: {},
    viewPerusahaan: {},
    publisherRegisterData: {},
    advertiserRegisterData: {},
    publisherLoginData: {},
    advertiserLoginData: {},
    saveData: {},
    editData: {},
    deleteData: {},
    editPerusahaan: {}
  },
  mutations: {
    update (state, payload) {
      state[payload[0]] = payload[1]
    },
    count (state, payload) {
      state[payload]++
    }
  },
  actions: {
    getPostData ({commit}, x) {
      Axios.get(baseUrl + '/guud/post/listdata?page=' + x).then((response) => {
        console.log(response.data)
        commit('update', ['postData', response.data])
        commit('count', 0)
      }).catch((err) => {
        console.log(err)
      })
    },
    getViewData ({commit}, x) {
      Axios.get(baseUrl + '/guud/post/viewdata?idPosting=' + x).then((response) => {
        commit('update', ['viewData', response.data])
      }).catch((err) => {
        console.log(err)
      })
    },
    getViewPerusahaan ({commit}, x) {
      Axios.get(baseUrl + '/guud/pt/viewdata?idPerusahaan=' + x).then((response) => {
        commit('update', ['viewPerusahaan', response.data])
      }).catch((err) => {
        console.log(err)
      })
    },
    publisherRegister ({commit}, x) {
      Axios.post(baseUrl + '/guud/register/publisher', x).then((response) => {
        commit('update', ['publisherRegisterData', response.data])
      }).catch((err) => {
        console.log(err)
      })
    },
    advertiserRegister ({commit}, x) {
      Axios.post(baseUrl + '/guud/register/advertiser', x).then((response) => {
        commit('update', ['advertiserRegisterData', response.data])
      }).catch((err) => {
        console.log(err)
      })
    },
    publisherLogin ({commit}, [x, y]) {
      Axios.post(baseUrl + '/guud/login/publisher?username=' + x + '&password=' + y).then((response) => {
        commit('update', ['publisherLoginData', response.data])
      }).catch((err) => {
        console.log(err)
      })
    },
    advertiserLogin ({commit}, [x, y]) {
      Axios.post(baseUrl + '/guud/login/advertiser?username=' + x + '&password=' + y).then((response) => {
        commit('update', ['advertiserLoginData', response.data])
      }).catch((err) => {
        console.log(err)
      })
    },
    postingSave ({commit}, x) {
      Axios.post(baseUrl + '/guud/post/savedata', x).then((response) => {
        commit('update', ['saveData', response.data])
      }).catch((err) => {
        console.log(err)
      })
    },
    postingEdit ({commit}, [x, y]) {
      Axios.post(baseUrl + '/guud/post/editdata?idPosting=' + x, y).then((response) => {
        commit('update', ['editData', response.data])
      }).catch((err) => {
        console.log(err)
      })
    },
    postingDelete ({commit}, x) {
      Axios.post(baseUrl + '/guud/post/deletedata?idPosting=' + x).then((response) => {
        commit('update', ['deleteData', response.data])
      }).catch((err) => {
        console.log(err)
      })
    },
    perusahaanEdit ({commit}, [x, y]) {
      Axios.post(baseUrl + '/guud/pt/editdata?idPerusahaan=' + x, y).then((response) => {
        commit('update', ['editPerusahaan', response.data])
      }).catch((err) => {
        console.log(err)
      })
    }
  }
})
