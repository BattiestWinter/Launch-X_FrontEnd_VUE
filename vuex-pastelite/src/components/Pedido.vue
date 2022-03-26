<template>
    <!--Nombre de la sección-->
    <div class="container w-50 mx-auto text-center pt-5" id="intro">
        <h1>Pedido</h1>
        <!--Frase asociada-->
        <h3>Ordena en cualquier momento para recibir más allá de un pastel</h3>
    </div>

    <!--Contenedor principal   <section id="seccion-formu" class="border-bottom border-secondary border-2 my-5">-->
    <section id="seccion-formu">
        
        <!--
        <div id="bg-formu">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fcfbc7" fill-opacity="1" d="M0,160L24,165.3C48,171,96,181,144,197.3C192,213,240,235,288,224C336,213,384,171,432,133.3C480,96,528,64,576,74.7C624,85,672,139,720,133.3C768,128,816,64,864,37.3C912,11,960,21,1008,53.3C1056,85,1104,139,1152,181.3C1200,224,1248,256,1296,272C1344,288,1392,288,1416,288L1440,288L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"></path></svg>
        </div>
        -->

        <!--Contenedor del formulario-->
        <div class="container topmargin-lg" id="contenedor-formulario">
            <div id="titulo-formulario" class="text-center mb-4">
                <div>
                    <img src="Imagenes/pastelForm.png" alt="Imagen formulario" width="100px" class="img-fluid">
                    <h2>Datos del pedido</h2>
                </div>
            </div>
            <!--Formulario-->
            <form action="">
                <div class="mb-3">
                    <label for="nombre" class="form-label">Nombre</label>
                    <input type="text" class="form-control" id="nombre" v-model="nombreP">
                </div>
                <div class="mb-3">
                    <label for="apellido" class="form-label">Apellido</label>
                    <input type="text" class="form-control" id="apellido" v-model="apellidoP">
                </div>
                <div class="mb-3">
                    <label for="telefono" class="form-label">Telefono</label>
                    <input type="tel" class="form-control" id="telefono" v-model="telefonoP">
                </div>
                <div class="mb-3">
                    <label for="correo" class="form-label">Correo Electrónico</label>
                    <input type="email" class="form-control" id="correo" v-model="correoP">
                </div>
                <div class="mb-3">
                    <label for="desc" class="form-label">Descripción del pedido</label>
                    <textarea class="form-control" id="desc" rows="3" v-model="descripcionP"></textarea>
                </div>
                <div class="mb-3">
                    <h6>Sabores:</h6>
                
                    <input type="checkbox" id="limon" value="Limón" v-model="saboresP">
                    <label for="limon" class="form-label">Limón</label>
                
                    <input type="checkbox" id="chocolate" value="Chocolate" v-model="saboresP">
                    <label for="chocolate" class="form-label">Chocolate</label>
                
                    <input type="checkbox" id="fresa" value="Fresa" v-model="saboresP">
                    <label for="fresa" class="form-label">Fresa</label>
                
                    <input type="checkbox" id="queso" value="Queso" v-model="saboresP">
                    <label for="queso" class="form-label">Queso</label>
                </div>
                <div class="mb-3">
                    <h6>Adornos:</h6>
                
                    <input type="checkbox" id="velas" value="Velas" v-model="adornosP">
                    <label for="velas" class="form-label">Velas</label>
                
                    <input type="checkbox" id="lunetas" value="Lunetas" v-model="adornosP">
                    <label for="lunetas" class="form-label">Lunetas</label>
                
                    <input type="checkbox" id="oro" value="Oro" v-model="adornosP">
                    <label for="oro" class="form-label">Oro</label>
                </div>
                <!--Botón para enviar información-->
                <div class="mb-3">
                    <button v-on:click="addElementos" type="button" class="btn btn-primary w-100 fs-5">
                        Realizar pedido
                    </button>
                </div>
            </form>
        </div>
    </section>
</template>

<script>
export default {
  name: 'Pedido',
  data(){
      return{
          nombreP:'',
          apellidoP: '',
          telefonoP: null,
          correoP: null,
          descripcionP: null,
          saboresP: [],
          adornosP: []
      }
  },
  methods:{
      addElementos(){
          this.$store.state.elemento = this.adornosP;
          this.$store.dispatch('addElementoAction');
          
          this.$store.state.elemento = this.saboresP;
          this.$store.dispatch('addElementoAction');

          this.$store.state.elemento = this.descripcionP;
          this.$store.dispatch('addElementoAction');

          this.$store.state.elemento = this.correoP;
          this.$store.dispatch('addElementoAction');

          this.$store.state.elemento = this.telefonoP;
          this.$store.dispatch('addElementoAction');

          this.$store.state.elemento = this.apellidoP;
          this.$store.dispatch('addElementoAction');

          this.$store.state.elemento = this.nombreP;
          this.$store.dispatch('addElementoAction');

          this.$store.dispatch('addRegistroAction')

          this.$store.state.elemento = null;
          this.$store.state.registro = [];
      },
      addNombreP(){
          this.$store.state.nombreP = this.nombreP;
          this.$store.dispatch('addNombrePAction');
          this.nombreP = '';
      },
      addApellidoP(){
          this.$store.state.apellidoP = this.apellidoP;
          this.$store.dispatch('addApellidoPAction');
          this.apellidoP='';
      }
  }
}
</script>