<template>
    <section class="py-5 my-5 about-wrapper">

        <div class="block-behind main-bg">
            <div class="rotate-text">
                <h3 class="display-4 font-weight-bold text-uppercase about-headline"><span><mark>About</mark></span></h3>
            </div>
            <div class="block-top light-bg">
                <div>
                    <v-layout row wrap justify-center align-center class="py-5">
                        <v-flex xs12 sm11 md5 lg4>
                            <div class="justify-center d-ml-5">
                                <div v-if="$vuetify.breakpoint.mdAndUp">
                                    <v-img class="img-border elevation-2 px-1" :src="aboutImg" alt=""></v-img>
                                </div>
                                <div v-if="$vuetify.breakpoint.smAndDown">
                                    <v-img class="m-about-pic img-border elevation-2 mx-4" :src="mobileAboutImg" alt=""></v-img>
                                </div>
                            </div>
                        </v-flex>
                        <v-flex xs12s md5 offset-md1 mx-4>
                            <h3 class="mt-5 text-uppercase display-1 font-weight-black mb-3 ">{{heading}}</h3>
                            <!-- TODO Gör om till data?  -->
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quod sequi magni
                                porro maxime nulla alias perferendis dolore dolorum voluptate, quis et! Recusandae
                                dolore explicabo eius? Eos eveniet dolorem deserunt tempore illo hic, optio ratione
                                saepe a excepturi id architecto?</p>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta necessitatibus, et
                                tempore fugiat alias voluptate veritatis iusto expedita esse nulla repudiandae
                                molestiae. Minus est placeat mollitia aspernatur soluta laborum velit.</p>
                            <div class="justify-center button-wrap">
                                <!-- TODO centrera knapp-->
                                <v-btn class="lighten-2 mt-3 px-5 py-4 about-btn" dark block large href="#">
                                    CV & PL
                                </v-btn>
                            </div>
                        </v-flex>
                    </v-layout>
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
                aboutImg: "https://picsum.photos/400/550?random",
                mobileAboutImg: "https://picsum.photos/400/550?random"
            }
        }
    }
</script>

<style>
    .button-wrap {
        width: 100%;
    }


    .rotate-text h3 {
        position: absolute;
        float: left;
        /* background: gray; */
        /* width: 50px; */
        height: auto;
        top: 300px;
        z-index: 4;
        left: 3.5%;
    }

    .rotate-text h3 span {
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
        min-height: auto;
        position: relative;
    }


    .block-behind {
        width: 100%;
        height: 500px;
        /* z-index: 1; */
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
        .rotate-text h3 {
            top: 300px;
            left: 2%;
        }
    }

    @media (max-width: 900px) {
        .rotate-text h3 {
            top: 300px;
            left: 0px;
        }

    }

    @media (max-width: 700px) {
     

        .about-headline {
            font-size: 5em !important;
        }

        .block-behind {
            height: 700px;
        }

        .rotate-text h3 {
            top: 370px;
            z-index: 14;
            left: -2%;
        }
    }
    @media (max-width: 600px) {
        .about-headline {
            font-size: 5em !important;
        }

        .block-behind {
            height: 700px;
        }

        .rotate-text h3 {
            top: 230px;
            z-index: 14;
            left: -2%;
        }
    }
    @media (max-width: 415px) {
        .rotate-text h3 {
            top: 120px;
        }
    }
</style>