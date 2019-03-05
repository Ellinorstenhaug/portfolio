<template>
    <section class="gallery-wrap gray-bg my-5">

        <div class="fornow">

            <v-img :src="getImgUrl('earlierwork.png')" class="earlier-work">
            </v-img>
        </div>
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
    .fornow {
        height: 300px;
       /* HÄR ÄR JAG! Gör container runt gallery för att text ska skjutas upp  */
    }

    .gallery-wrap {
        padding: 30px;
        margin-top: 200px !important;

    }
</style>