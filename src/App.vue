<template>
  <v-app>
    <Nav />
    <v-content>
      <StartPage />
      <Footer />
    <HelloWorld />
    </v-content>
  </v-app>
</template>

<script>
  import HelloWorld from './components/comp/HelloWorld'
  import Nav from './components/comp/services/nav'
  import Footer from './components/comp/services/footer'
  import StartPage from './components/views/startpage'

  export default {
    name: 'App',
    components: {
      StartPage,
      HelloWorld,
      Nav,
      Footer
    },
    data() {
      return {
        //
      }
    }
  }
</script>