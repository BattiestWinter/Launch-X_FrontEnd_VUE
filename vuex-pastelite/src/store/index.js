import { createStore } from 'vuex'
import VuexPersistence from 'vuex-persist'

export default createStore({
  state: {
    nombresP: [],
    nombreP: '',
    contador: 10
  },
  getters: {
    getNombreP( state ){
      return state.nombreP
    },
    getContador( state ){
      return state.contador
    }
  },
  mutations: {
    addNombreP( state ){
      state.nombresP = [state.nombreP,...state.nombresP]
    }
  },
  actions: {
    addNombrePAction ( context ){
      context.commit('addNombreP');
    }
  },
  modules: {
  },
  plugins: [
    new VuexPersistence({
      storage: window.localStorage
    }).plugin
  ]
})
