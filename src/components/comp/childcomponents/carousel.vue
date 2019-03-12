<template>
    <section>
        <!-- <test />
        <test2 />
 -->

        <div id="dynamic-component-demo">

            <div class="posts-tab">
                <!-- <ul class="posts-sidebar">
                <li v-for="post in posts" v-bind:key="post.id" v-bind:class="{ selected: post === selectedPost }"
                    v-on:click="selectedPost = post">
                    {{ post.title }}
                    <v-img :src="post.img"></v-img>
                </li>
            </ul> -->



                <div class="selected-post-container">
                    <div v-if="selectedPost" class="selected-post">
                        <h3>{{ selectedPost.title }}</h3>
                        <div v-html="selectedPost.content"></div>
                    </div>
                    <strong v-else>
                        Click on a blog title to the left to view it.
                    </strong>
                </div>
            </div>

            <v-layout column wrap class="pb-5" align-center>
                <v-container grid-list-xl>
                    <v-layout row wrap align-center>
                        <v-flex md12>
                            <carousel class="carousel">
                                <slide class="slide" v-for="(item, index) in posts" :key="index">
                                    <div id="testelement">{{item.title}}</div>

                                    <v-img :src="item.img" class="intro-card_img" :class="{ selected: item === selectedPost }"
                                        v-on:click="selectedPost = item">
                                    </v-img>
                                </slide>
                            </carousel>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-layout>


        </div>











        <!-- <v-layout column wrap class="pb-5" align-center>

            <v-container grid-list-xl>
                <v-layout row wrap align-center>
                    <v-flex md12>
                        <carousel class="carousel">
                            <slide class="slide" v-for="(item, index) in galleryPhoto" :key="index" >
                                <div id="testelement">{{item.title}}</div>

                                <v-img :src="item.img" class="intro-card_img">
                                </v-img>
                            </slide>
                        </carousel>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-layout> -->
    </section>
</template>

<script>
    import {
        Carousel,
        Slide
    } from 'vue-carousel';

    // import test from './test'
    // import test2 from './test2'


    export default {
        components: {
            Carousel,
            Slide
            // test2,
            // test
        },
        data: function () {
            return {
                posts: [{
                        id: 1,
                        title: "Projekt 1",
                        // title: "Work",
                        // url: "/kontakt",
                        img: "https://picsum.photos/400",
                        content: '<p>Dont wait for the storm to pass, dance in the rain kick up litter decide to want nothing to do with my owner today demand to be let outside at once, and expect owner to wait for me as i think about it cat cat moo moo lick ears lick paws so make meme, make cute face but lick the other cats. Kitty poochy chase imaginary bugs, but stand in front of the computer screen. Sweet beast cat dog hate mouse eat string barf pillow no baths hate everything stare at guinea pigs. My left donut is missing, as is my right loved it, hated it, loved it, hated it scoot butt on the rug cat not kitten around</p>'
                    },
                    {
                        id: 2,
                        title: "Projekt 2",
                        // title: "Work",
                        // url: "/kontakt",
                        img: "https://picsum.photos/400",
                        content: '<p>Dont wait for the storm to pass, dance in the rain kick up litter decide to want nothing to do with my owner today demand to be let outside at once, and expect owner to wait for me as i think about it cat cat moo moo lick ears lick paws so make meme, make cute face but lick the other cats. Kitty poochy chase imaginary bugs, but stand in front of the computer screen. Sweet beast cat dog hate mouse eat string barf pillow no baths hate everything stare at guinea pigs. My left donut is missing, as is my right loved it, hated it, loved it, hated it scoot butt on the rug cat not kitten around</p>'
                    },
                    {
                        id: 3,
                        title: "Projekt 3",
                        // title: "Work",
                        // url: "/kontakt",
                        img: "https://picsum.photos/400",
                        content: '<p>Dont wait for the storm to pass, dance in the rain kick up litter decide to want nothing to do with my owner today demand to be let outside at once, and expect owner to wait for me as i think about it cat cat moo moo lick ears lick paws so make meme, make cute face but lick the other cats. Kitty poochy chase imaginary bugs, but stand in front of the computer screen. Sweet beast cat dog hate mouse eat string barf pillow no baths hate everything stare at guinea pigs. My left donut is missing, as is my right loved it, hated it, loved it, hated it scoot butt on the rug cat not kitten around</p>'
                    },
                    {
                        id: 4,
                        title: "Projekt 4",
                        // title: "Work",
                        // url: "/kontakt",
                        img: "https://picsum.photos/400",
                        content: '<p>Dont wait for the storm to pass, dance in the rain kick up litter decide to want nothing to do with my owner today demand to be let outside at once, and expect owner to wait for me as i think about it cat cat moo moo lick ears lick paws so make meme, make cute face but lick the other cats. Kitty poochy chase imaginary bugs, but stand in front of the computer screen. Sweet beast cat dog hate mouse eat string barf pillow no baths hate everything stare at guinea pigs. My left donut is missing, as is my right loved it, hated it, loved it, hated it scoot butt on the rug cat not kitten around</p>'
                    },
                    {
                        id: 5,
                        title: "Projekt 5",
                        // title: "Work",
                        // url: "/kontakt",
                        img: "https://picsum.photos/400",
                        content: '<p>Dont wait for the storm to pass, dance in the rain kick up litter decide to want nothing to do with my owner today demand to be let outside at once, and expect owner to wait for me as i think about it cat cat moo moo lick ears lick paws so make meme, make cute face but lick the other cats. Kitty poochy chase imaginary bugs, but stand in front of the computer screen. Sweet beast cat dog hate mouse eat string barf pillow no baths hate everything stare at guinea pigs. My left donut is missing, as is my right loved it, hated it, loved it, hated it scoot butt on the rug cat not kitten around</p>'
                    },
                    {
                        id: 6,
                        title: "Projekt 6",
                        // title: "Work",
                        // url: "/kontakt",
                        img: "https://picsum.photos/400",
                        content: '<p>Dont wait for the storm to pass, dance in the rain kick up litter decide to want nothing to do with my owner today demand to be let outside at once, and expect owner to wait for me as i think about it cat cat moo moo lick ears lick paws so make meme, make cute face but lick the other cats. Kitty poochy chase imaginary bugs, but stand in front of the computer screen. Sweet beast cat dog hate mouse eat string barf pillow no baths hate everything stare at guinea pigs. My left donut is missing, as is my right loved it, hated it, loved it, hated it scoot butt on the rug cat not kitten around</p>'
                    },

                ],
                selectedPost: null,
                currentTab: 'Posts',
                tabs: ['Posts', 'Archive']
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
    .carousel {
        width: 100%;
        cursor: pointer;
        height: auto;

    }



    .tab-button {
        padding: 6px 10px;
        border-top-left-radius: 3px;
        border-top-right-radius: 3px;
        border: 1px solid #ccc;
        cursor: pointer;
        background: #f0f0f0;
        margin-bottom: -1px;
        margin-right: -1px;
    }

    .tab-button:hover {
        background: #e0e0e0;
    }

    .tab-button.active {
        background: #e0e0e0;
    }

    .tab {
        border: 1px solid #ccc;
        padding: 10px;
    }

    .posts-tab {
        display: flex;
    }

    .posts-sidebar {
        max-width: 40vw;
        margin: 0;
        padding: 0 10px 0 0;
        list-style-type: none;
        border-right: 1px solid #ccc;
    }

    .posts-sidebar li {
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        cursor: pointer;
    }

    .posts-sidebar li:hover {
        background: #eee;
    }

    .posts-sidebar li.selected {
        background: lightblue;
    }

    .selected-post-container {
        padding-left: 10px;
    }

    .selected-post> :first-child {
        margin-top: 0;
        padding-top: 0;
    }
</style>