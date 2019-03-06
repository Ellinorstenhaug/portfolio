<template>
    <section class="gallery-wrap  my-5">
        <div>
            <v-img :src="getImgUrl('earlierwork.png')" class="earlier-work">
            </v-img>
            <div class="gallery-container gray-bg">
                <h2 class="display-4 font-weight-bold text-uppercase text-xs-right pr-5"><span>{{heading}}</span></h2>
                <!-- <h3 class="mt-5 text-uppercase display-3 font-weight-black mb-3">{{heading}}</h3> -->

                <div>
                    <v-layout row wrap justify-center class="py-5">
                        <v-flex xs12 sm5>
                            <div class="justify-center ml-5">
                                <v-img class="img-border elevation-2" :src="currentImg" alt=""></v-img>
                            </div>
                        </v-flex>
                        <v-flex xs12s sm6 pa-5>
                            <h3 class="mt-5 text-uppercase display-1 font-weight-black mb-3">{{heading}}</h3>

                            <!-- TODO Gör om till data?  -->
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quod sequi magni
                                porro maxime nulla alias perferendis dolore dolorum voluptate, quis et!
                                Recusandae
                                dolore explicabo eius? Eos eveniet dolorem deserunt tempore illo hic, optio
                                ratione
                                saepe a excepturi id architecto?</p>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta necessitatibus,
                                et tempore fugiat alias voluptate veritatis iusto expedita esse nulla
                                repudiandae molestiae. Minus est placeat mollitia aspernatur soluta laborum
                                velit.</p>
                            <div class="justify-center button-wrap">
                                <!-- TODO centrera knapp-->
                                <v-btn class="lighten-2 mt-3 px-5 py-4 large-btn-80 about-btn" dark large href="#">
                                    CV & PL
                                </v-btn>
                            </div>
                        </v-flex>
                    </v-layout>


    <carousel />
                </div>

            </div>

        </div>

    </section>
</template>

<script>
    import carousel from './childcomponents/carousel'

    export default {
        components: {
            carousel
        },
        data: function () {
            return {
                heading: "Gallery",
                currentImg: "https://picsum.photos/400/500?random"
            }
        },
        methods: {
            getImgUrl(img) {
                return require('@/assets/images/' + img)
            },
        },
    }
</script>

<style>

</style>