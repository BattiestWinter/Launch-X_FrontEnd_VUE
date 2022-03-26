<template>
    <!--Nombre de la sección-->
    <div class="container w-50 mx-auto text-center pt-5" id="intro">
        <h1>Pedidos</h1>
        <!--Frase asociada-->
        <h3>Lista de pedidos</h3>
    </div>

    <!--Contenedor principal-->
    <section class="container-fluid">
        <div class="table-responsive">
            <table class="table table-bordered">
                <thead class="table-light">
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Teléfono</th>
                    <th>Correo</th>
                    <th>Descripción</th>
                    <th>Sabores</th>
                    <th>Adornos</th>
                </thead>
                <tbody>
                    <td>Nombre_Ejemplo</td>
                    <td>Apellido_Ejemplo</td>
                    <td>Telefono_Ejemplo</td>
                    <td>Correo_Ejemplo</td>
                    <td>Descripción_Ejemplo</td>
                    <td><ul>
                        <li>Limón</li>
                        <li>Queso</li>
                    </ul></td>
                    <td><ul>
                        <li>Velas</li>
                    </ul></td>
                </tbody>
            </table>
        </div>
    </section>
</template>

<script>
export default {
  name: 'Pedidos'
}
</script>