import { createStore } from 'vuex'
import VuexPersistence from 'vuex-persist'

export default createStore({
  state: {
    /*ESTADOS-PEDIDOS*/
    nombresP: [],
    nombreP: '',
    apellidosP: [],
    apellidoP:'',
    registros: [],
    registro: [],
    elemento: null,
    contador: 4,
    /*ESTADOS-INVENTARIO*/
    productoIS: ['Pastel de limón', 'Pastel de chocolate', 'Pastel de fresa', 'Pastel de queso'],
    cantidadIS: [50, 25, 50, 50],
    productoIA: ['Velas', 'Lunetas', 'Oro'],
    cantidadIA: [100, 100, 100]
  },
  getters: {
    /*GETTERS-PEDIDOS*/
    getNombreP( state ){
      return state.nombreP
    },
    getApellidoP( state ){
      return state.apellidoP
    },
    getRegistro( state ){
      return state.registro
    },
    getContador( state ){
      return state.contador
    },
    /*GETTERS-INVENTARIO*/
    getProductoIS( state ){
      return state.productoIS
    },
    getCantidadIS( state ){
      return state.cantidadIS
    },
    getProductoAS( state ){
      return state.productoAS
    },
    getCantidadAS( state ){
      return state.cantidadAS
    }
  },
  mutations: {
    addNombreP( state ){
      state.nombresP = [state.nombreP,...state.nombresP]
    },
    addApellidoP( state ){
      state.apellidosP = [state.apellidoP,...state.apellidosP]
    },
    addRegistro( state ){
      state.registros = [state.registro,...state.registros]
    },
    addElemento( state ){
      state.registro = [state.elemento,...state.registro]
    }
  },
  actions: {
    addNombrePAction ( context ){
      context.commit('addNombreP');
    },
    addApellidoPAction ( context ){
      context.commit('addApellidoP');
    },
    addRegistroAction ( context ){
      context.commit('addRegistro');
    },
    addElementoAction ( context ){
      context.commit('addElemento');
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
