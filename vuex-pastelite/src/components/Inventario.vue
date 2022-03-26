<template>
    <!--Nombre de la sección-->
    <div class="container w-50 mx-auto text-center pt-5" id="intro">
        <h1>Inventario</h1>
        <!--Frase asociada-->
        <h3>Cantidad de adornos y sabores restantes</h3>
    </div>

    <div class="container w-50 mx-auto text-center pt-5">
        <h3>Sabores</h3>
    </div>

    <!--Contenedor principal-->
    <section class="container-fluid">
        <div class="table-responsive">
            <div v-for="(producto,index) in $store.state.productoIS">
            <table class="table table-bordered">
                <thead class="table-light">
                    <th>Producto</th>
                    <th>Cantidad</th>
                </thead>
                
                <tr>
                    <td>{{ producto }}</td>
                    <td>{{ $store.state.cantidadIS[index] }}</td>
                </tr>
                
            </table>
            </div>
        </div>
    </section>

    <div class="container w-50 mx-auto text-center pt-5">
        <h3>Adornos</h3>
    </div>

    <!--Contenedor principal-->
    <section class="container-fluid">
        <div class="table-responsive">
            <div v-for="(producto,index) in $store.state.productoIA">
            <table class="table table-bordered">
                <thead class="table-light">
                    <th>Producto</th>
                    <th>Cantidad</th>
                </thead>
                <tr>
                    <td>{{ producto }}</td>
                    <td>{{ $store.state.cantidadIA[index] }}</td>
                </tr>
            </table>
            </div>
        </div>
    </section>

</template>


<script>
export default {
  name: 'Inventario'
}
</script>