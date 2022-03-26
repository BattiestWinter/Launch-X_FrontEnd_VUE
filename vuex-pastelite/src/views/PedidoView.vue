<template>

  <!--Menú-->
  
  <nav class="navbar navbar-expand-lg navbar-light bg-light" id="menu">
    <div class="container">
    

      <!--Logo e inicio-->
      
      <a class="navbar-brand" href="index.html">
      <div class="home">
      <img src="Imagenes/logoPastelite.png" alt="logo" width="75px">
      </div>
      </a>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      

      <!--Navegación a través de páginas-->
      
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item"><router-link class="nav-link" to="/">Inicio</router-link></li>
          <li class="nav-item"><router-link class="nav-link" to="/sabores">Sabores</router-link></li>
          <li class="nav-item"><router-link class="nav-link" to="/adornos">Adornos</router-link></li>
          <li class="nav-item"><router-link class="nav-link" to="/pedido">Pedido</router-link></li>
        </ul>
      </div>
    </div>
  </nav>
  
    <Pedido/>

</template>

<script>
// @ is an alias to /src
import Pedido from '@/components/Pedido.vue'

export default {
  name: 'PedidoView',
  components: {
    Pedido
  }
}
</script>