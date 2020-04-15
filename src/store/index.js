import Vue from 'vue' 
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        cowcms_userid: ""
    },
    mutations: {
        setUserId(state,data){
            state.cowcms_userid = data;
        }
    }
})