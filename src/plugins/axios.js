import Vue from 'vue'
import axios from 'axios'

axios.defaults.baseURL = 'https://akabab.github.io/starwars-api/api/'

Vue.use({
    install(Vue) {
        Vue.prototype.$http = axios
    }
})