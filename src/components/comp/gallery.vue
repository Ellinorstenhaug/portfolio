<template>
    <section class="gallery-wrap">
        <div>
            <v-img :src="getImgUrl('earlierwork.png')" class="earlier-work">
            </v-img>
            <div class="gallery-container gray-bg">
                <h2 class="display-4 font-weight-bold text-uppercase text-xs-right pr-5"><span>{{heading}}</span></h2>
                <!-- <h3 class="mt-5 text-uppercase display-3 font-weight-black mb-3">{{heading}}</h3> -->

                <div>
                    <v-layout row wrap justify-center class="d-py-5">
                       
                        <v-flex xs12 sm6 md4 lg4 class="px-5 d-my-5 text-xs-right">
                            <h3 class=" text-uppercase display-1 font-weight-black mb-3">{{heading}}</h3>

                            <!-- TODO Gör om till data?  -->
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quod sequi magni
                                porro maxime nulla alias perferendis dolore dolorum voluptate, quis et!
                                Recusandae
                                dolore explicabo eius? Eos eveniet dolorem deserunt tempore illo hic, optio
                                ratione
                                saepe a excepturi id architecto?</p>
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
                                <v-btn class="lighten-2 mt-5 px-5 py-4 large-btn-80 about-btn" dark large href="#">
                                    CV & PL
                                </v-btn>
                            </div>
                        </v-flex>
                         <v-flex xs12 sm6 md5 lg5>
                            <div class="justify-center mx-3">
                                <v-img class="img-border elevation-2" :src="currentImg" alt=""></v-img>
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
    .d-py-5 {
        padding: 5% 0;
    }

    @media (min-width: 900px) {
        .d-my-5 {
            margin: 5% 0;
        }

    }

    @media (max-width: 700px) {
        .d-py-5 {
            padding: unset unset;
        }
    }
</style>