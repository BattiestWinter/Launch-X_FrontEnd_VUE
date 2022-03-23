<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Informacion/>
  </div>
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
