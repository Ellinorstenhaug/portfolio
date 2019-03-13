<template>
    <v-content>
        <section>
            <v-img class="hero-bg" :src="require('@/assets/images/heroimg.png')">

                <v-container>
                    <v-layout row wrap align-center v-if="$vuetify.breakpoint.mdAndUp">
                        <!-- <v-layout column align-center justify-center class="white--text"> -->
                        <v-flex xs12 md6 xl4 class="relative offset-xl1">
                            <img class="img-border responsive" src="https://picsum.photos/g/500/650?random" alt="">
                            <img class="img-border hero-pic-on-top" src="https://picsum.photos/g/300/400?random" alt="">
                        </v-flex>
                        <v-flex xs12 md5 xl5  class="py-5 offset-md1 hero-text">
                            <h1 class=" display-4 text-xs-left text-align-left font-weight-bold text-uppercase">{{h1}}</h1>
                            <h3 class="mb-2 display-3 text-xs-left text-align-left font-weight-medium text-uppercase">{{h3}}</h3>
                            <v-btn class="lighten-2 mt-3 px-5 py-4 large-btn-80" dark large href="#intro" v-smooth-scroll>
                                {{sellingButton}}
                            </v-btn>
                        </v-flex>
                    </v-layout>



                    <v-layout row wrap align-center v-if="$vuetify.breakpoint.smAndDown">
                        <!-- <v-layout column align-center justify-center class="white--text"> -->
                        <v-flex xs12 class="relative">
                            <img class="img-border responsive img-mobile" src="https://picsum.photos/g/500/500?random" alt="">
                            <img class="img-border hero-pic-on-top" src="https://picsum.photos/g/200/300?random" alt="">
                        </v-flex>
                        <v-flex xs12 md5 xl5  class="pt-3 offset-md1 hero-text">
                            <h1 class=" display-4 text-xs-left text-align-left font-weight-bold text-uppercase">{{h1}}</h1>
                            <h3 class=" display-3 text-xs-left text-align-left font-weight-medium text-uppercase">{{h3}}</h3>
                            <v-btn class="lighten-2 mt-2 px-5 py-4" dark block large href="#intro" v-smooth-scroll>
                                {{sellingButton}}
                            </v-btn>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-img>
        </section>
    </v-content>
</template>

<script>
    export default {
        data: function () {
            return {
                h1: "Hello",
                h3: "some nice text",
                // introText: "Tjenare Halli hallå",
                sellingButton: "Read More"
            };
        }
    }
</script>

<style>
.img-mobile {
    width:100% !important;
}

@media (max-width:700px) {
    .hero-bg {
        position: relative;
        top:-50px;
    }
}

</style>