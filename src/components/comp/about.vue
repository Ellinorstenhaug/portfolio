<template>
    <section class="py-5 my-5">
        <div class="about-wrapper">
            <div class="about-wrapper">
                <div class="rotate-text">
                    <h2 class="display-4 font-weight-bold text-uppercase about-headline"><span>About</span></h2>
                </div>
            </div>

            <div class="block-behind main-bg">
                <div class="block-top light-bg">
                    <div>
                        <v-layout row wrap justify-center class="py-5">
                            <v-flex xs12 sm5>
                                <div class="justify-center ml-5">
                                    <v-img class="img-border elevation-2" :src="aboutImg" alt=""></v-img>
                                </div>
                            </v-flex>
                            <v-flex xs12s sm5 offset-sm1 py-5>
                                <h3 class="mt-5 text-uppercase display-1 font-weight-black mb-3">{{heading}}</h3>

                                <!-- TODO Gör om till data?  -->
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quod sequi magni
                                    porro maxime nulla alias perferendis dolore dolorum voluptate, quis et! Recusandae
                                    dolore explicabo eius? Eos eveniet dolorem deserunt tempore illo hic, optio ratione
                                    saepe a excepturi id architecto?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta necessitatibus, et tempore fugiat alias voluptate veritatis iusto expedita esse nulla repudiandae molestiae. Minus est placeat mollitia aspernatur soluta laborum velit.</p>
                                <div class="justify-center button-wrap"> 
                                    <!-- TODO centrera knapp-->
                                    <v-btn class="lighten-2 mt-3 px-5 py-4 large-btn-80 about-btn" dark large href="#">
                                        CV & PL
                                    </v-btn>
                                </div>
                            </v-flex>
                        </v-layout>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        data: function () {
            return {
                heading: "Hello",
                aboutImg: "https://picsum.photos/400/600?random"
            }
        }
    }
</script>

<style>
    .button-wrap {
        width: 100%;
    }

    .about-wrapper {
        height: 500px;
    }

    .rotate-text h2 {
        position: relative;
        float: left;
        /* background: gray; */
        /* width: 50px; */
        height: auto;
        top: 250px;
        z-index: 4;
        left: 5%;
    }

    h2 span {
        width: 150px;
        /* same as height of .rotate-text */
        -webkit-transform-origin: 84px 70px;
        transform-origin: 84px 70px;
        display: inline-block;
        -webkit-transform: rotate(-90deg);
        transform: rotate(-90deg);
        text-align: center;
    }


    .about-wrapper {
        margin-top: 30px;
        width: 100%;
        height: auto;
    }

    .block-behind {
        width: 100%;
        height: 500px;
        /* position: relative;
        z-index: 1; */
    }

    .block-top {
        width: 80%;
        min-height: 700px;
        /*TODO*/
        position: relative;
        z-index: 2;
        margin: 0 auto;
        top: -100px;
    }

    @media (max-width: 1200px) {
        .rotate-text h2 {
            top: 250px;
            left: 2%;
        }
    }

    @media (max-width: 900px) {
        .rotate-text h2 {
            top: 250px;
            left: 0px;
        }

    }

    @media (max-width: 700px) {
        .rotate-text h2 {
            top: 200px;
            left: 0px;
        }

        .about-headline {
            font-size: 5em !important;
        }
    }
</style>