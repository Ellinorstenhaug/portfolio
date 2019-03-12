<template>
    <div>
        <Hero />
        <Intro />
        <About />
        <Gallery />
        <Services />
        <SellingPoint />
        <Contact />
    </div>
</template>

<script>
    import Hero from './../comp/hero'
    import Intro from './../comp/intro'
    import About from './../comp/about'
    import Gallery from './../comp/gallery'
    import Contact from './../comp/contact'
    import Services from './../comp/services'
    import SellingPoint from './../comp/sellingpoint'

    export default {
        components: {
            Hero,
            Intro,
            About,
            Gallery,
            Services,
            Contact,
            SellingPoint
        },
    }
</script>

<style>

</style>