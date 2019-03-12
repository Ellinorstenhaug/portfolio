<template>
  <v-app>
    <v-content>
      <Nav />
      <StartPage />
      <Footer />
    </v-content>
  </v-app>
</template>

<script>
  import Nav from './components/comp/services/nav'
  import Footer from './components/comp/services/footer'
  import StartPage from './components/views/startpage'

  export default {
    name: 'App',
    components: {
      StartPage,
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