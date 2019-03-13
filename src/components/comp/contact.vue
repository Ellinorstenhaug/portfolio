<template>
    <section class="gallery-container light-bg mt-115" id="contact">

                <h2 class="display-4 font-weight-bold text-uppercase pl-5"><span>{{heading}}</span></h2>
                <!-- <h3 class="mt-5 text-uppercase display-3 font-weight-black mb-3">{{heading}}</h3> -->
                <div>
                    <v-layout row wrap justify-center class="pb-5">
                        <v-flex xs12 sm6 md4 lg4 class="px-5 d-my-5">
                            <v-card class="elevation-0 transparent">

                                <h3 class=" text-uppercase display-1 font-weight-black mb-3 ">{{subHeading}}</h3>
                                <!-- TODO Gör om till data?  -->
                                <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione nisi rem
                                    explicabo
                                    laborum nihil? Officiis velit accusantium ad porro exercitationem.
                                </p>

                                <div v-for="(contact, i) in contactInfo" :key="i">
                                    <v-list class="transparent">


                                        <v-list-tile :href="contact.link">
                                            <v-list-tile-action>
                                                <v-icon class="dark--text">{{contact.icon}}</v-icon>
                                            </v-list-tile-action>
                                            <v-list-tile-content>
                                                <v-list-tile-title>{{contact.text}}</v-list-tile-title>
                                            </v-list-tile-content>
                                        </v-list-tile>
                                    </v-list>
                                </div>




                                <div class="justify-center button-wrap">
                                  
                                    <v-btn class="lighten-2 mt-3 px-5 py-4  about-btn" dark block large href="" download="CV">
                                        Contact woooop
                                    </v-btn>
                                </div>
                            </v-card>

                        </v-flex>
                        <v-flex xs12 sm6 md6 lg6>
                            <div class="justify-center mx-3 fill-height elevation-2">
                                <iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2034.2613400341502!2d18.02120511623268!3d59.34528528166437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f9d9ccfa13c0f%3A0xfe490cdfcc1acf9c!2sHagalund%2C+171+65+Solna!5e0!3m2!1ssv!2sse!4v1552228517681"></iframe>
                            </div>
                        </v-flex>
                    </v-layout>
                </div>
           
    </section>
</template>

<script>
// import cv from '@/assets/docs/CV_Ellinor.pdf'

    export default {
        components: {
        },
        data: function () {
            return {
                heading: "Contact",
                subHeading: "Hey You!",
                contactInfo: [{
                        icon: "phone",
                        text: "0736504717",
                        link: "tel:0736504717"
                    },
                    {
                        icon: "email",
                        text: "ellinor.stenhaug@gmail.com",
                        link: "mailto:ellinor.stenhaug@gmail.com"
                    },
                    {
                        icon: "place",
                        text: "Stockholm, Sweden",
                        link: "https://goo.gl/maps/ut5nFNyU9j62"
                    },
                ],
            }
        },
        methods: {
                        getDocUrl(doc) {
                return require('@/assets/docs/' + doc)
            },
        },
    }
</script>

<style>
.mt-115 {
    margin-top:115px !important;
}
    .contact-wrap {
        width: auto;
        margin: 0 auto;
    }

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