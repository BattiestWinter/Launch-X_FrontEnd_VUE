<template>
<!--Nombre de la sección-->
    <div class="container w-50 mx-auto text-center pt-5" id="intro">
        <h1>Adornos para pasteles</h1>
        <!--Frase asociada-->
        <h3>Expande tu imaginación con cualquier tipo de adorno</h3>
    </div>

    <!--Contenedor principal-->
    <!--Sabores con su respectiva información-->
    <section class="container-fluid">

        <!--Se manejan distintas opciones por filas -->
        <div class="row w-75 mx-auto my-5 servicio-fila">

            <!--formato para distintos tamaños de pantalla-->
            <div class="col-lg-6 col-md-12 col-sm-12 d-flex my-3 icono-wrap">

                <!--Se establece por separado la altura y anchura, ya que la imagen se deforma con la adpatación de pantalla-->
                <img src="Imagenes/velasP.jpg" alt="Velas" width="180px" height="130px">
                
                <!--Aplicamos margen al texto-->
                <div class="px-4">
                    <p><b>Decoración: </b>Velas metálicas</p>
                    <p><b>Cantidad: </b>24</p>
                    <p><b>Descripción: </b>Velas de combustión lenta. 
                        Velas largas y delgadas en soportes para fiesta de la suerte, 
                        fiesta de boda, fiesta de cumpleaños, etcétera.</p>
                    <p><b>Precio: </b>$169.00</p>
                </div>

            </div>
            <div class="col-lg-6 col-md-12 col-sm-12 d-flex my-3 icono-wrap">
                <img src="Imagenes/lunetasP.jpg" alt="Lunetas" width="180px" height="130px">
                <div class="px-4">
                    <p><b>Decoración: </b>Lunetas</p>
                    <p><b>Cantidad: </b>50</p>
                    <p><b>Descripción: </b>Lunetas marca m&ms. 
                        Lunetas que realizan una cobertura total al pastel.</p>
                    <p><b>Precio: </b>$335.00</p>
                </div>
            </div>
            <div class="col-lg-6 col-md-12 col-sm-12 d-flex my-3 icono-wrap">
                <img src="Imagenes/oroP.jpg" alt="Oro" width="180px" height="130px">
                <div class="px-4">
                    <p><b>Decoración: </b>Oro metálico</p>
                    <p><b>Cantidad: </b>1</p>
                    <p><b>Descripción: </b>Oro metálico super dust. 
                        Idela para una decoración elegante.</p>
                    <p><b>Precio: </b>$146.00</p>
                </div>
            </div>
        </div>
    </section>
</template>


<script>
export default {
  name: 'Adornos'
}
</script>