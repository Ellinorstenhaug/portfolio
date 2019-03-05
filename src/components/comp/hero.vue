<template>
    <v-content>
        <section>
            <v-img :src="require('@/assets/images/heroimg.png')">

                <v-container>
                    <v-layout row wrap align-center>
                        <!-- <v-layout column align-center justify-center class="white--text"> -->
                        <v-flex md6 xl4 class="relative offset-xl1">
                            <img class="img-border hero-pix-under responsive" src="https://picsum.photos/500/650" alt="">
                            <img class="img-border hero-pic-on-top" src="https://picsum.photos/300/400" alt="">
                        </v-flex>
                        <v-flex md5 xl5  class="py-5 offset-md1 hero-text">
                            <h1 class=" display-4 text-xs-left text-align-left font-weight-bold text-uppercase">Tjenare</h1>
                            <h3 class="mb-2 display-3 text-xs-left text-align-left font-weight-medium text-uppercase">Halli hallå</h3>
                            <v-btn class="lighten-2 mt-3 px-5 py-4 large-btn-80" dark large href="#">
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
                // introText: "Tjenare Halli hallå",
                sellingButton: "Read More"
            };
        }
        // methods: {
        //     textToUpperCase: function (input) {
        //         return (input || '').textToUpperCase();
        //     },
        // }
    }
</script>

<style>

</style>