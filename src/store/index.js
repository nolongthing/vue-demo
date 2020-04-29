import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


const store = new Vuex.Store({
    state: {
        count: 0
    },
    mutations: {
        increment (state) {
            state.count++
            console.log(state.count);
        }
    },
    actions: {
        asyncIncrement({commit}){
            setTimeout(()=>{
                commit('increment');
            },1000)
        }
    }
});

export default store;