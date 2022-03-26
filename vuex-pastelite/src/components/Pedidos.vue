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
            <div v-for="registro in $store.state.registros">
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
                
                <!--AQUI DEBERIA IR DIV V-FOR-->
                <tr>
                    
                        <!--<div v-for="elemento in registro "> -->
                    <!--<div v-for="(nombreP, index) in $store.state.nombresP" :key="index"> 
                        <td>{{ index+1 }}. {{ nombreP }}</td>
                    </div>-->

                        <td> {{ registro[0] }} </td>

                            <!--<td><div v-for="elemento in registro[0] ">{{elemento}}</div></td>-->

                    <!--<div v-for="(apellidoP, index) in $store.state.apellidosP" :key="index"> 
                        <td>{{ apellidoP }}</td>
                    </div>-->
                            
                        <td>{{ registro[1] }}</td>
                        <td>{{ registro[2] }}</td>
                        <td>{{ registro[3] }} </td>
                        <td>{{ registro[4] }} </td>
                        <td>{{ registro[5] }} </td>
                        <td>{{ registro[6] }} </td>
                        <!--<td><ul>
                            <li>Limón</li>
                            <li>Queso</li>
                        </ul></td>
                        <td><ul>
                            <li>Velas</li>
                        </ul></td>-->
                        <!--</div>-->
                </tr>
                
            </table>
            </div>
        </div>
    </section>
</template>



<script>

export default {
  name: 'Pedidos'
}
</script>