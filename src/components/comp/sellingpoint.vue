<template>
    <section my-0>
        <v-parallax :src='getImgUrl("test.png")' class="selling-img">
            <v-layout align-center justify-center row>
                <v-flex class="md6 justify-center text-xs-center">
                    <div class="display-3 font-weight-bold white--text mb-3">Någon text här va</div>
                    <v-btn class=" mt-5 py-4 large-btn-60 main-dark-bg" dark color="#D4B7B5" large href="/">
                        Let's talk!
                    </v-btn>
                </v-flex>
            </v-layout>
        </v-parallax>
    </section>
</template>

<script>
    export default {

        methods: {
            getImgUrl(img) {
                return require('@/assets/images/' + img)
            },
        },
    }
</script>

<style>

</style>