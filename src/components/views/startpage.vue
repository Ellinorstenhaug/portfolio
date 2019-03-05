<template>
    <div>
        <Hero />
        <Intro />
        <About />
        <Gallery />
        <SellingPoint />
    </div>
</template>

<script>
    import Hero from './../comp/hero'
    import Intro from './../comp/intro'
    import About from './../comp/about'
    import Gallery from './../comp/gallery'
    import SellingPoint from './../comp/sellingpoint'

    export default {
        components: {
            Hero,
            Intro,
            About,
            Gallery,
            SellingPoint
        },
    }
</script>

<style>

</style>