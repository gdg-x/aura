<template>
    <v-container class="pa-0 my-0">
        <v-layout wrap align-start justify-start row fill-height class="my-0" >
     
            <v-flex xs12 md8 lg8 class="pa-2 my-0">
                <p class="google-font" style="font-size:180%;color:#0277bd">Politique anti-harcèlement</p>

                <p class="google-font" style="font-size:110%">
                    <b style="font-size:120%;color: #2E2E2E;">Pourquoi avons-nous une politique anti-harcèlement officielle pour les événements  {{chapterDetails.ChapterName}}?</b>

                    <ul class="mt-2" style="font-size:110%">
                        <li class="google-font">Il définit les attentes de comportement lors de l'événement. Le simple fait d'avoir une politique anti-harcèlement peut empêcher le harcèlement.</li>
                        <li class="google-font">Il encourage les personnes qui ont eu de mauvaises expériences lors d'autres événements</li>
                        <li class="google-font">Il donne au personnel / bénévoles de l'événement des instructions sur la façon de gérer le harcèlement rapidement, avec un minimum de perturbations pour l'événement.</li>
                    </ul>
                </p>

                <p class="google-font" style="font-size:110%">
                    <b style="font-size:120%;color: #2E2E2E;">{{chapterDetails.ChapterName}} se consacre à fournir une expérience d'événement sans harcèlement pour tout le monde, indépendamment de: </b>

                    <ul class="mt-2" style="font-size:110%">
                        <li class="google-font">Sexe</li>
                        <li class="google-font">Orientation sexuelle</li>
                        <li class="google-font">l'Handicap</li>
                        <li class="google-font">Identité de genre</li>
                        <li class="google-font">Age</li>
                        <li class="google-font">Race</li>
                        <li class="google-font">Religion</li>
                        <li class="google-font">Ethnicité</li>
                        <li class="google-font">Nationalité</li>
                    </ul>

                    <span class="google-font" style="font-size:110%">La liste ci-dessus n'est pas exhaustive - nous ne tolérons pas le harcèlement des participants aux événements sous quelque forme que ce soit. </span>
                </p>

                <p class="google-font" style="font-size:120%">Le langage et les images sexuels ne conviennent à aucun lieu d'événement, y compris les discussions. Les participants à un événement qui enfreignent ces règles peuvent être expulsés de l'événement et interdits de futurs événements à la discrétion des organisateurs / gestion de l'événement.</p>

                <p class="google-font" style="font-size:110%">Le harcèlement comprend (mais sans s'y limiter):
                    <ul class="mt-2" style="font-size:110%">
                        <li class="google-font">Commentaires verbaux offensants liés au sexe, à l'orientation sexuelle, au handicap, à l'identité de genre, à l'âge, à la race, à la religion</li>
                        <li class="google-font">TL'utilisation ou l'affichage d'images sexuelles dans les espaces publics</li>
                        <li class="google-font">Intimidation délibérée</li>
                        <li class="google-font">Traquer</li>
                        <li class="google-font">Harceler la photographie ou l'enregistrement</li>
                        <li class="google-font">Perturbation durable des pourparlers lors de la présentation ou d'autres événements</li>
                        <li class="google-font">Contact physique inapproprié</li>
                        <li class="google-font">Attention sexuelle importune</li>
                    </ul>
                </p>

                <p class="google-font" style="font-size:120%">Les participants invités à mettre fin à tout comportement de harcèlement devraient se conformer immédiatement.
                    <br><br>
                    Les partenaires exposants et les invités sont également soumis à la politique anti-harcèlement. En particulier, les exposants et les orateurs ne doivent pas utiliser d'images, d'activités ou d'autre matériel sexualisés, ni créer autrement un environnement sexualisé dans leurs diapositives, matériel d'exposition, personnel d'exposition, articles promotionnels ou matériel de démonstration.
                    <br><br>
                    Si vous êtes victime de harcèlement, remarquez que quelqu'un d'autre est harcelé ou avez d'autres préoccupations, veuillez contacter immédiatement un organisateur ou un bénévole de l'événement. Les organisateurs et les bénévoles de l'événement peuvent être identifiés par des t-shirts ou des badges / longes spéciaux. Les organisateurs enquêteront sur le problème et prendront les mesures appropriées. Cela peut inclure aider les participants à contacter la sécurité du site ou les forces de l'ordre locales, à fournir des escortes ou à aider les victimes de harcèlement à se protéger pendant la durée de l'événement.
                    <br><br>
                    Bien que nous espérons que nous n'aurons jamais à invoquer cette politique, nous pensons que le fait d'avoir ce document aide tout le monde à réfléchir un peu plus à la façon dont leurs actions et leurs paroles affectent l'ensemble de la communauté, ainsi que les individus de la communauté.
                </p>


            </v-flex> 
           
            <v-flex xs12 md4 lg4 class="pa-2 hidden-sm-and-down">
                
            </v-flex>
        </v-layout>

    </v-container>
</template>

<script>
import ChapterDetails from '@/assets/data/chapterDetails.json'
export default {
    data() {
        return {
            chapterDetails: ChapterDetails,
        }
    },
}
</script>
