<template>
    <v-container fluid class="py-0 my-0 mt-5">
        <v-row class="py-0 my-0">
            <v-col md="12" sm="12" cols="12" class="py-0 my-0">
                <h1 class="google-font mb-2">Política contra el acoso</h1>
            </v-col>
        </v-row>
        <v-row class="py-0 my-0">
            <v-col md="8" sm="12" cols="12" class="py-0 my-0">
                <p class="google-font" style="font-size:110%">
                    <b style="font-size:120%;">¿Por qué tenemos una política oficial contra el acoso para los eventos de {{data}} ?</b>

                    <ul class="mt-2" style="font-size:110%">
                        <li class="google-font">Establece expectativas de comportamiento en el evento. Simplemente tener una política contra el acoso puede evitar el acoso.</li>
                        <li class="google-font">Alienta a las personas a asistir que hayan tenido malas experiencias en otros eventos.</li>
                        <li class="google-font">Le da al personal del evento/voluntarios instrucciones sobre cómo manejar el acoso rápidamente, con una cantidad mínima de interrupción para el evento.</li>
                    </ul>
                </p>

                <p class="google-font" style="font-size:110%">
                    <b style="font-size:120%;">{{data}} se dedica a proporcionar una experiencia de evento libre de acoso para todos, independientemente de: </b>

                    <ul class="mt-2" style="font-size:110%">
                        <li class="google-font">Género</li>
                        <li class="google-font">Orientación Sexual</li>
                        <li class="google-font">Discapacidad</li>
                        <li class="google-font">Identidad de Género</li>
                        <li class="google-font">Edad</li>
                        <li class="google-font">Raza</li>
                        <li class="google-font">Religión</li>
                        <li class="google-font">Nacionalidad</li>
                    </ul>

                   <span class="google-font" style="font-size:110%">Lo anterior no es una lista exhaustiva -- NO toleramos el acoso de los participantes del evento de ninguna forma. </span>
                </p>

                <p class="google-font" style="font-size:120%">El lenguaje y las imágenes sexuales no son apropiadas para ningún evento, incluidas las charlas. Los participantes del evento que violen estas reglas pueden ser expulsados del evento, y el evento será excluido de eventos futuros a discreción de los organizadores/administradores del evento. </p>

                <p class="google-font" style="font-size:115%">El acoso incluye (pero no se limita a):
                    <ul class="mt-2" style="font-size:100%">
                        <li class="google-font">Comentarios verbales ofensivos relacionados con género, orientación sexual, discapacidad, identidad de género, edad, raza, religión</li>
                        <li class="google-font">El uso o exhibición de imágenes sexuales en espacios públicos</li>
                        <li class="google-font">Intimidación deliberada</li>
                        <li class="google-font">Acecho</li>
                        <li class="google-font">Fotografía o grabación acosante</li>
                        <li class="google-font">Interrupción sostenida de conversaciones u otros eventos</li>
                        <li class="google-font">Contacto físico inapropiado</li>
                        <li class="google-font">Atención sexual no deseada</li>
                    </ul>
                </p>

                <p class="google-font" style="font-size:115%">Se espera que los participantes que soliciten detener cualquier comportamiento de acoso cumplan de inmediato. 
                    <br><br>
                    Los expositores e invitados también están sujetos a la política contra el acoso. En particular, los expositores y oradores no deben usar imágenes, actividades u otro material sexualizado, o crear un ambiente sexualizado en sus cubiertas de diapositivas, material de exhibición, personal de exhibición, artículos promocionales o material de demostración. 
                    <br><br>
                    Si estás siendo hostigado, observas que alguien más está siendo hostigado o si tienes alguna otra inquietud, comunícate de inmediato con un organizador o voluntario del evento. Los organizadores y los voluntarios del evento pueden identificarse con camisetas o insignias / cintas especiales. Los organizadores investigarán el problema y tomarán las medidas apropiadas. Esto puede incluir ayudar a los participantes a ponerse en contacto con la seguridad del lugar o con la policía local, proporcionar escoltas o de otra manera ayudar a estos que sufren acoso a permanecer seguros durante la duración del evento.
                    <br><br>
                    Aunque esperamos no tener que invocar esta política, creemos que tener este documento ayuda a todos a pensar un poco más sobre cómo sus acciones y palabras afectan a toda la comunidad, así como a las personas de la comunidad.
                </p>
            </v-col>
            <v-col md="4" sm="4" cols="12" class="py-0 my-0 hidden-sm-and-down">
               
            </v-col>
            
        </v-row>
    </v-container>
</template>

<script>
export default {
    props:['data'],
    data:()=>({

    })
}
</script>