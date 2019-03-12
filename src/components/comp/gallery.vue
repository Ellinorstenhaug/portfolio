<template>
    <section class="gallery-wrap" id="gallery">
        <v-img :src="getImgUrl('earlierwork.png')" class="earlier-work">
        </v-img>
        <div class="gallery-container gray-bg">
            <h2 class="display-4 font-weight-bold text-uppercase text-xs-right pr-5"><span>{{heading}}</span></h2>
            <!-- <h3 class="mt-5 text-uppercase display-3 font-weight-black mb-3">{{heading}}</h3> -->
            <v-layout row wrap justify-center v-if="selectedPost">
                <v-flex xs12 sm6 md4 lg4 class="px-5 d-my-5 text-xs-right">
                    <h3 class=" text-uppercase display-1 font-weight-black mb-3">{{selectedPost.title}}</h3>
                    <div v-html="selectedPost.content"></div>
                    <div class="justify-center button-wrap mb-5">
                        <!-- TODO centrera knapp-->
                        <v-btn class="lighten-2 mt-5 px-5 py-4  about-btn" dark block large :href="selectedPost.url"
                            target="_blank">
                            {{selectedPost.btnText}}
                        </v-btn>
                    </div>
                </v-flex>
                <v-flex xs12 sm6 md5 lg5>
                    <div class="justify-center mx-3">
                        <v-img class="img-border elevation-2" :src="selectedPost.img" alt=""></v-img>
                    </div>
                </v-flex>
            </v-layout>

            <v-layout row wrap justify-center v-else>
                <v-flex xs12 sm6 md4 lg4 class="px-5 d-my-5 text-xs-right">
                    <h3 class="text-uppercase display-1 font-weight-black mb-3">{{posts[0].title}}</h3>
                    <div v-html="posts[0].content"></div>


                    <div class="justify-center button-wrap mb-5">
                        <v-btn class="lighten-2 mt-5 px-5 py-4  about-btn" dark block large :href="posts[0].url" target="_blank">
                            {{posts[0].btnText}}
                        </v-btn>
                    </div>
                </v-flex>
                <v-flex xs12 sm6 md5 lg5>
                    <div class="justify-center mx-3">
                        <v-img class="img-border elevation-2" :src="posts[0].img" alt=""></v-img>
                    </div>
                </v-flex>
            </v-layout>

            <v-layout column wrap class="pb-5" align-center>
                <v-container grid-list-xl>
                    <v-layout row wrap align-center>
                        <v-flex md12>
                            <carousel class="carousel">
                                <slide class="slide" v-for="(item, index) in posts" :key="index">
                                    <div class="slide-card_title slide-card_box elevation-2">
                                        <a class="link" :href="item.url">
                                            <h4 class=" dark--text title text-uppercase font-weight-light">{{item.title}}</h4>
                                        </a>
                                    </div>
                                    <v-hover>
                                        <div slot-scope="{ hover }" :class="`elevation-${hover ? 12 : 2}`">
                                            <v-img :src="item.img" class="intro-card_img elevation-2" :class="{ selected: item === selectedPost }"
                                                v-on:click="selectedPost = item">
                                            </v-img>
                                        </div>
                                    </v-hover>
                                </slide>
                            </carousel>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-layout>





            <!-- <carousel /> -->
        </div>
    </section>
</template>

<script>
    // import carousel from './childcomponents/carousel'
    import {
        Carousel,
        Slide
    } from 'vue-carousel';

    export default {
        components: {
            Carousel,
            Slide
            // carousel
        },
        data: function () {
            return {
                heading: "Gallery",
                currentImg: "https://picsum.photos/400/500?random",
                posts: [{
                        id: 1,
                        title: "First project",
                        // title: "Work",
                        url: "https://github.com/ellinorstenhaug",
                        btnText: "See for yourself",
                        img: "https://picsum.photos/400/500/?random",
                        content: '<p>Dont wait for the storm to pass, dance in the rain kick up litter decide to want nothing to do with my owner today demand to be let outside at once, and expect owner to wait for me as i think about it cat cat moo moo lick ears lick paws so make meme, make cute face but lick the other cats. Kitty poochy chase imaginary bugs, but stand in front of the computer screen. Sweet beast cat dog hate mouse eat string barf pillow no baths hate everything stare at guinea pigs. My left donut is missing, as is my right loved it, hated it, loved it, hated it scoot butt on the rug cat not kitten around</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima sunt magni, consequuntur eos cupiditate deserunt cumque debitis nesciunt dolore amet?</p>'
                    },
                    {
                        id: 2,
                        title: "HTML & CSS",
                        // title: "Work",
                        url: "https://github.com/ellinorstenhaug",
                        btnText: "Se källkod",
                        img: "https://picsum.photos/400/500?random",
                        content: '<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima sunt magni, consequuntur eos cupiditate deserunt cumque debitis nesciunt dolore amet?</p><p>Dont wait for the storm to pass, dance in the rain kick up litter decide to want nothing to do with my owner today demand to be let outside at once, and expect owner to wait for me as i think about it cat cat moo moo lick ears lick paws so make meme, make cute face but lick the other cats. Kitty poochy chase imaginary bugs, but stand in front of the computer screen. Sweet beast cat dog hate mouse eat string barf pillow no baths hate everything stare at guinea pigs. My left donut is missing, as is my right loved it, hated it, loved it, hated it scoot butt on the rug cat not kitten around</p>'
                    },
                    {
                        id: 3,
                        title: "JavaScript 1",
                        // title: "Work",
                        url: "https://github.com/ellinorstenhaug",
                        btnText: "Besök hemsidan",
                        img: "https://picsum.photos/g/400/500?image=972",
                        content: '<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima sunt magni, consequuntur eos cupiditate deserunt cumque debitis nesciunt dolore amet?</p><p>Dont wait for the storm to pass, dance in the rain kick up litter decide to want nothing to do with my owner today demand to be let outside at once, and expect owner to wait for me as i think about it cat cat moo moo lick ears lick paws so make meme, make cute face but lick the other cats. Kitty poochy chase imaginary bugs, but stand in front of the computer screen. Sweet beast cat dog hate mouse eat string barf pillow no baths hate everything stare at guinea pigs. My left donut is missing, as is my right loved it, hated it, loved it, hated it scoot butt on the rug cat not kitten around</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima sunt magni, consequuntur eos cupiditate deserunt cumque debitis nesciunt dolore amet?</p>'
                    },
                    {
                        id: 4,
                        title: "vue & vuetify",
                        // title: "Work",
                        url: "https://github.com/ellinorstenhaug",
                        btnText: "Gå till projektet",
                        img: "https://picsum.photos/400/500?image=816",
                        content: '<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima sunt magni, consequuntur eos cupiditate deserunt cumque debitis nesciunt dolore amet?</p><p>Dont wait for the storm to pass, dance in the rain kick up litter decide to want nothing to do with my owner today demand to be let outside at once, and expect owner to wait for me as i think about it cat cat moo moo lick ears lick paws so make meme, make cute face but lick the other cats. Kitty poochy chase imaginary bugs, but stand in front of the computer screen. Sweet beast cat dog hate mouse eat string barf pillow no baths hate everything stare at guinea pigs. My left donut is missing, as is my right loved it, hated it, loved it, hated it scoot butt on the rug cat not kitten around</p>'
                    },
                    {
                        id: 5,
                        title: "Fifth project",
                        // title: "Work",
                        url: "https://github.com/ellinorstenhaug",
                        btnText: "Gå till projektet",
                        img: "https://picsum.photos/400/500?image=730",
                        content: '<p>Dont wait for the storm to pass, dance in the rain kick up litter decide to want nothing to do with my owner today demand to be let outside at once, and expect owner to wait for me as i think about it cat cat moo moo lick ears lick paws so make meme, make cute face but lick the other cats. Kitty poochy chase imaginary bugs, but stand in front of the computer screen. Sweet beast cat dog hate mouse eat string barf pillow no baths hate everything stare at guinea pigs. My left donut is missing, as is my right loved it, hated it, loved it, hated it scoot butt on the rug cat not kitten around</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima sunt magni, consequuntur eos cupiditate deserunt cumque debitis nesciunt dolore amet?</p>'
                    },
                    {
                        id: 6,
                        title: "Best project",
                        // title: "Work",
                        url: "https://github.com/ellinorstenhaug",
                        btnText: "Gå till projektet",
                        img: "https://picsum.photos/400/500?image=544",
                        content: '<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima sunt magni, consequuntur eos cupiditate deserunt cumque debitis nesciunt dolore amet?</p><p>Dont wait for the storm to pass, dance in the rain kick up litter decide to want nothing to do with my owner today demand to be let outside at once, and expect owner to wait for me as i think about it cat cat moo moo lick ears lick paws so make meme, make cute face but lick the other cats. Kitty poochy chase imaginary bugs, but stand in front of the computer screen. Sweet beast cat dog hate mouse eat string barf pillow no baths hate everything stare at guinea pigs. My left donut is missing, as is my right loved it, hated it, loved it, hated it scoot butt on the rug cat not kitten around</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima sunt magni, consequuntur eos cupiditate deserunt cumque debitis nesciunt dolore amet?</p>'
                    },

                ],
                selectedPost: null,

                currentTab: 'Posts',
                // tabs: ['Posts', 'Archive']
            }
        },
        methods: {
            getImgUrl(img) {
                return require('@/assets/images/' + img)
            },

            project(post) {
                this.selectedPost = post;

            }
        },
        computed: {
            currentTabComponent: function () {
                return 'tab-' + this.currentTab.toLowerCase()
            }
        }
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