<template>
    <section>
        <v-parallax :src='getImgUrl("test.png")' class="selling-img">
            <v-layout align-center justify-center row>
                <v-flex class="md6 justify-center text-xs-center">
                    <div class="display-3 font-weight-bold white--text mb-3">Någon text här va</div>
                    <p class=" subheading font-weight-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit,
                        obcaecati! Itaque sint officiis ea hic! Quod velit hic eligendi suscipit, possimus sapiente
                        quam dolore, consectetur labore repellendus mollitia sit. Impedit nisi eveniet harum sint
                        dolores perferendis fugiat voluptatem omnis rem?</p>
                    <v-btn class=" mt-5 large-btn-60 main-dark-bg" dark color="#D4B7B5" large href="/pre-made-themes">
                        Let's talk!
                    </v-btn>
                </v-flex>
            </v-layout>
        </v-parallax>
    </section>
</template>

<script>
    export default {
        data: function () {
            return {
                // img: 'https://images.unsplash.com/photo-1476156863127-a8f1e9dba2b7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
                // img: '@/assets/images/test.png'
                // img: 'https://images.unsplash.com/photo-1499900255727-c4eebde21450?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
                // img: 'https://images.unsplash.com/uploads/141122515468214308073/30ddbd81?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2110&q=80'
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
</style>