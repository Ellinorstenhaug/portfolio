<template>
  <v-app>
   <Nav />
    <v-content>
      <StartPage />
      <HelloWorld />
    </v-content>
  </v-app>
</template>

<script>
  import HelloWorld from './components/comp/HelloWorld'
  import Nav from './components/comp/services/nav'
  import StartPage from './components/views/startpage'

  export default {
    name: 'App',
    components: {
      HelloWorld, 
      Nav,
      StartPage
    },
    data() {
      return {
        //
      }
    }
  }
</script>