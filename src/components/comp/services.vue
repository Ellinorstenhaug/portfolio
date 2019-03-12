<template>
    <section class="" id="services">
      
                <!-- <h2 class="display-4 font-weight-bold text-uppercase text-xs-right pr-5"><span>{{heading}}</span></h2> -->
                <!-- <h3 class="mt-5 text-uppercase display-3 font-weight-black mb-3">{{heading}}</h3> -->

                <div>
                    <v-layout row wrap justify-center>

                        <v-flex xs12 sm8 md8 lg8 class="px-5 d-my-5 text-xs-center">
                            <h3 class="text-uppercase display-1 font-weight-black mb-3">{{heading}}</h3>

                            <span v-for="(item, i) in serviceIcons" :key="i">
                                <v-icon class="dark--text">{{item.icon}}</v-icon>
                            </span>


                            <div class="justify-center button-wrap mb-5">
                                <!-- TODO centrera knapp-->
                                <v-btn class="lighten-2 mt-5 px-5 py-4  about-btn" dark block large href="#">
                                    CV & PL
                                </v-btn>
                            </div>
                        </v-flex>

                    </v-layout>
                </div>
           
    </section>
</template>

<script>
    export default {
        components: {},
        data: function () {
            return {
                heading: "I offer awesome services",
                currentImg: "https://picsum.photos/400/500?random",
                serviceIcons: [{
                        icon: "phone",
                    },
                    {
                        icon: "email",
                    },
                    {
                        icon: "place",
                    },
                ],
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