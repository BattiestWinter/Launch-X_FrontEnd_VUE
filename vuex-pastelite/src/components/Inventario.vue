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
            <table class="table table-bordered">
                <thead class="table-light">
                    <th>Producto</th>
                    <th>Cantidad</th>
                </thead>
                <tbody>
                    <td>Ejemplo1</td>
                    <td>5</td>
                </tbody>
            </table>
        </div>
    </section>

    <div class="container w-50 mx-auto text-center pt-5">
        <h3>Adornos</h3>
    </div>

    <!--Contenedor principal-->
    <section class="container-fluid">
        <div class="table-responsive">
            <table class="table table-bordered">
                <thead class="table-light">
                    <th>Producto</th>
                    <th>Cantidad</th>
                </thead>
                <tbody>
                    <td>Ejemplo2</td>
                    <td>31</td>
                </tbody>
            </table>
        </div>
    </section>

</template>


<script>
export default {
  name: 'Inventario'
}
</script>