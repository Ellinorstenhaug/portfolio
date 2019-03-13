<template>
    <section class="gallery-wrap" id="gallery">
        <v-img :src="getImgUrl('earlierwork.png')" class="earlier-work">
        </v-img>
        <div class="gallery-container gray-bg">
            <h2 class="display-4 font-weight-bold text-uppercase text-xs-right pr-5"><span>{{heading}}</span></h2>
            <v-layout row wrap justify-center v-if="selectedPost" fill-height>
                <v-flex xs12 sm6 md4 lg4 class="px-5 text-sm-right">
                    <h3 class=" text-uppercase display-1 font-weight-black">{{selectedPost.title}}</h3>
                    <div v-html="selectedPost.content"></div>
                    <div class="justify-center button-wrap mb-5">
                        <v-btn v-if="'js' in selectedPost" @click="tet" class="main-bg lighten-2 mt-5 px-5  about-btn"
                            block large>
                            {{selectedPost.jsBtnText}}
                        </v-btn>
                        <v-btn class="lighten-2 mt-5 px-5  about-btn" dark block large :href="selectedPost.url" target="_blank">
                            {{selectedPost.btnText}}
                        </v-btn>
                    </div>
                </v-flex>

                <v-flex xs12 sm6 md5 lg5>
                    <div v-if="'js' in selectedPost">
                        <div class="box elevation-2">
                            <div class="black-box">
                                <div v-html="selectedPost.js"></div>
                            </div>
                        </div>
                    </div>
                    <div v-else class="justify-center mx-3">
                        <v-img class="img-border elevation-2" :src="selectedPost.img" alt=""></v-img>
                    </div>
                </v-flex>
            </v-layout>

            <v-layout row wrap justify-center v-else fill-height>
                <v-flex xs12 sm6 md4 lg4 class="px-5 text-sm-right">
                    <h3 class="text-uppercase display-1 font-weight-black mb-3">{{posts[0].title}}</h3>
                    <div v-html="posts[0].content"></div>
                    <div class="justify-center button-wrap mb-5">
                        <v-btn class="lighten-2 mt-5 px-5   about-btn" dark block large :href="posts[0].url" target="_blank">
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
                            <Carousel class="carousel">
                                <Slide class="slide" v-for="(item, index) in posts" :key="index">
                                    <div class="slide-card_title slide-card_box elevation-2">
                                        <a class="link" :href="item.url">
                                            <h4 class=" dark--text  text-uppercase font-weight-light subheading">{{item.title}}</h4>
                                        </a>
                                    </div>
                                    <v-hover>
                                        <div slot-scope="{ hover }" :class="`elevation-${hover ? 12 : 2}`">
                                            <v-img :src="item.img" class="intro-card_img elevation-2" :class="{ selected: item === selectedPost }"
                                                v-on:click="handlePost(item)">
                                            </v-img>
                                        </div>
                                    </v-hover>
                                </Slide>
                            </Carousel>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-layout>
        </div>
    </section>
</template>

<script>
    import {
        Carousel,
        Slide
    } from 'vue-carousel';


    export default {
        components: {
            Carousel,
            Slide,
        },
        data: function () {
            return {
                heading: "Gallery",
                currentImg: "https://picsum.photos/400/500?random",
                posts: [{
                        id: 1,
                        title: "First project",
                        url: "https://github.com/ellinorstenhaug",
                        btnText: "See for yourself",
                        img: "https://picsum.photos/400/500/?random",
                        content: '<p>Dont wait for the storm to pass, dance in the rain kick up litter decide to want nothing to do with my owner today demand to be let outside at once, and expect owner to wait for me as i think about it cat cat moo moo lick ears lick paws so make meme, make cute face but lick the other cats. Kitty poochy chase imaginary bugs, but stand in front of the computer screen. Sweet beast cat dog hate mouse eat string barf pillow no baths hate everything stare at guinea pigs. My left donut is missing, as is my right loved it, hated it, loved it, hated it scoot butt on the rug cat not kitten around</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima sunt magni, consequuntur eos cupiditate deserunt cumque debitis nesciunt dolore amet?</p>p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima sunt magni, consequuntur eos cupiditate deserunt cumque debitis nesciunt dolore amet?</p>'
                    },
                    {
                        id: 2,
                        title: "HTML & CSS",
                        url: "https://github.com/ellinorstenhaug",

                        btnText: "Se source code",
                        img: "https://picsum.photos/400/500?random",
                        content: '<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima sunt magni, consequuntur eos cupiditate deserunt cumque debitis nesciunt dolore amet?</p><p>Dont wait for the storm to pass, dance in the rain kick up litter decide to want nothing to do with my owner today demand to be let outside at once, and expect owner to wait for me as i think about it cat cat moo moo lick ears lick paws so make meme, make cute face but lick the other cats. Kitty poochy chase imaginary bugs, but stand in front of the computer screen. Sweet beast cat dog hate mouse eat string barf pillow no baths hate everything stare at guinea pigs. My left donut is missing, as is my right loved it, hated it, loved it, hated it scoot butt on the rug cat not kitten around</p>'
                    },
                    {
                        id: 3,
                        title: "JavaScript 1",
                        url: "https://github.com/ellinorstenhaug",
                        btnText: "Visit",
                        img: "https://picsum.photos/g/400/500?image=972",
                        content: '<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima sunt magni, consequuntur eos cupiditate deserunt cumque debitis nesciunt dolore amet?</p><p>Dont wait for the storm to pass, dance in the rain kick up litter decide to want nothing to do with my owner today demand to be let outside at once, and expect owner to wait for me as i think about it cat cat moo moo lick ears lick paws so make meme, make cute face but lick the other cats. Kitty poochy chase imaginary bugs, but stand in front of the computer screen. Sweet beast cat dog hate mouse eat string barf pillow no baths hate everything stare at guinea pigs. My left donut is missing, as is my right loved it, hated it, loved it, hated it scoot butt on the rug cat not kitten around</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima sunt magni, consequuntur eos cupiditate deserunt cumque debitis nesciunt dolore amet?</p>'
                    },
                    {
                        id: 4,
                        title: "vue & vuetify",
                        url: "https://github.com/ellinorstenhaug",
                        btnText: "Go to project",
                        img: "https://picsum.photos/400/500?image=816",
                        content: '<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima sunt magni, consequuntur eos cupiditate deserunt cumque debitis nesciunt dolore amet?</p><p>Dont wait for the storm to pass, dance in the rain kick up litter decide to want nothing to do with my owner today demand to be let outside at once, and expect owner to wait for me as i think about it cat cat moo moo lick ears lick paws so make meme, make cute face but lick the other cats. Kitty poochy chase imaginary bugs, but stand in front of the computer screen. Sweet beast cat dog hate mouse eat string barf pillow no baths hate everything stare at guinea pigs. My left donut is missing, as is my right loved it, hated it, loved it, hated it scoot butt on the rug cat not kitten around</p>'
                    },
                    {
                        id: 5,
                        title: "Tetris",
                        url: "https://github.com/ellinorstenhaug",
                        btnId: "start",
                        js: '<canvas id="tetris" width="240px" height="400"></canvas>',
                        btnText: "Se source code!",
                        jsBtnText: "Play Tetris!",
                        img: "https://picsum.photos/400/500?image=1073",
                        content: '<p>Dont wait for the storm to pass, dance in the rain kick up litter decide to want nothing to do with my owner today demand to be let outside at once, and expect owner to wait for me as i think about it cat cat moo moo lick ears lick paws so make meme, make cute face but lick the other cats. Kitty poochy chase imaginary bugs, but stand in front of the computer screen. Sweet beast cat dog hate mouse eat string barf pillow no baths hate everything stare at guinea pigs. My left donut is missing, as is my right loved it, hated it, loved it, hated it scoot butt on the rug cat not kitten around</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima sunt magni, consequuntur eos cupiditate deserunt cumque debitis nesciunt dolore amet?</p>'
                    },
                    {
                        id: 6,
                        title: "Best project",
                        url: "https://github.com/ellinorstenhaug",
                        btnText: "Visit",
                        img: "https://picsum.photos/400/500?image=544",
                        content: '<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima sunt magni, consequuntur eos cupiditate deserunt cumque debitis nesciunt dolore amet?</p><p>Dont wait for the storm to pass, dance in the rain kick up litter decide to want nothing to do with my owner today demand to be let outside at once, and expect owner to wait for me as i think about it cat cat moo moo lick ears lick paws so make meme, make cute face but lick the other cats. Kitty poochy chase imaginary bugs, but stand in front of the computer screen. Sweet beast cat dog hate mouse eat string barf pillow no baths hate everything stare at guinea pigs. My left donut is missing, as is my right loved it, hated it, loved it, hated it scoot butt on the rug cat not kitten around</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima sunt magni, consequuntur eos cupiditate deserunt cumque debitis nesciunt dolore amet?</p>'
                    },

                ],
                selectedPost: null,
                currentTab: 'Posts',
            }
        },
        methods: {
            getImgUrl(img) {
                return require('@/assets/images/' + img)
            },

            handlePost(post) {
                this.selectedPost = post;
                return this.selectedPost;
            },
            tet() {
                import('./../../assets/js/tetris.js')
            }
        },

        mounted() {

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