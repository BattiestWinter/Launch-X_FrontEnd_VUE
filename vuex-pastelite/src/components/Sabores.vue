<template>
<!--Nombre de la sección-->
    <div class="container w-50 mx-auto text-center pt-5" id="intro">
        <h1>Sabores de pasteles</h1>
        <!--Frase asociada-->
        <h3>Nunca fue tan fácil diseñar tu propio pastel</h3>
    </div>

    <!--Contenedor principal-->
    <!--Sabores con su respectiva información-->
    <section class="container-fluid">

        <!--Se manejan distintas opciones por filas -->
        <div class="row w-75 mx-auto my-5 servicio-fila">

            <!--formato para distintos tamaños de pantalla-->
            <div class="col-lg-6 col-md-12 col-sm-12 d-flex my-3 icono-wrap">

                <!--Se establece por separado la altura y anchura, ya que la imagen se deforma con la adpatación de pantalla-->
                <img src="Imagenes/limonP.jpg" alt="Pastel de limón" width="180px" height="130px">
                
                <!--Aplicamos margen al texto-->
                <div class="px-4">
                    <p><b>Sabor: </b>Limón</p>
                    <p><b>Descripción: </b>Pastel relleno de betún de limón. 
                    Perfecto para una cena de verano.</p>
                    <p><b>Precio: </b>$550.00</p>
                </div>

            </div>
            <div class="col-lg-6 col-md-12 col-sm-12 d-flex my-3 icono-wrap">
                <img src="Imagenes/chocolateP.jpg" alt="Pastel de chocolate" width="180px" height="130px">
                <div class="px-4">
                    <p><b>Sabor: </b>Chocolate</p>
                    <p><b>Descripción: </b>Pastel cubierto con chocolate. 
                    Es un postre clásico para cualquier ocasión especial.</p>
                    <p><b>Precio: </b>$600.00</p>
                </div>
            </div>
            <div class="col-lg-6 col-md-12 col-sm-12 d-flex my-3 icono-wrap">
                <img src="Imagenes/fresaP.jpg" alt="Pastel de fresa" width="180px" height="130px">
                <div class="px-4">
                    <p><b>Sabor: </b>Fresa</p>
                    <p><b>Descripción: </b>Pastel relleno de crema pastelera y cobertura de fresas. 
                    Postre adecuado para servir en un día caluroso</p>
                    <p><b>Precio: </b>$520.00</p>
                </div>
            </div>
            <div class="col-lg-6 col-md-12 col-sm-12 d-flex my-3 icono-wrap">
                <img src="Imagenes/quesoP.jpg" alt="Pastel de queso" width="180px" height="130px">
                <div class="px-4">
                    <p><b>Sabor: </b>Queso</p>
                    <p><b>Descripción: </b>Pastel hecho a base de queso.
                    Se recomienda comer helado.</p>
                    <p><b>Precio: </b>$450.00</p>
                </div>
            </div>
        </div>
    </section>
</template>


<script>
export default {
  name: 'Sabores'
}
</script>