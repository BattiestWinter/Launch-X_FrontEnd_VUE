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
  
  <!--Slider-->
  <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="Imagenes/slide02.jpg" class="d-block w-100" alt="fondo queso">
      </div>
      <div class="carousel-item">
        <img src="Imagenes/slide03.jpg" class="d-block w-100" alt="fondo limon">
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>

    <!--Texto principal-->
    <div class="container w-50 mx-auto text-center pt-5" id="intro">
        <h1 class="p-2 border-top border-4">Pastélite</h1>
        <h3>Diseña a tu manera</h3>
        <p>Página dedicada al diseño de pasteles a partir de distintos sabores y adornos. ¡Personaliza tu pastel de la manera más creativa posible!</p>
    </div>

  
  <!--<div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <img alt="Vue logo" src="Imagenes/logoPastelite.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>-->
  
  <Informacion/>

</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Informacion from '@/components/Informacion.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    Informacion
  }
}
</script>
