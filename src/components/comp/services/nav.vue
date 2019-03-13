<template>
  <div class="white-nav">

    <div class="toolbar-wrapper">
      <v-card color="white lighten-4" flat>
        <Slide class="hidden-md-and-up">
          <div class="menu-wrap">
            <div class="submenu-cont">

              <v-btn  :href="link.url" v-smooth-scroll  flat block class="submenu-wrap title font-weight-regular text-xs-left" v-for="(link, i) in links" :key="i">
                <span class="mr-2 text-uppercase">{{link.title}}</span>
              </v-btn>
            </div>
            <div class="quick-contact">
              <v-btn flat block :href="icon.url" target="_blank" class="nav_icon-btn body-2" v-for="(icon, i) in icons" :key="i">
                <span class="mr-2" v-html="icon.icon">
                </span>
                {{icon.title}}
              </v-btn>
            </div>
          </div>
        </Slide>
      </v-card>
    </div>


    <v-toolbar app color="white" flat class="top">
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat :href="link.url" v-smooth-scroll v-for="(link, i) in links" :key="i">
          <span class="mr-2 text-uppercase">{{link.title}}</span>
        </v-btn>
      </v-toolbar-items>

      <v-spacer></v-spacer>

      <v-toolbar-title class="headline text-uppercase">
        <v-btn flat large href="#" v-smooth-scroll class="nav-btn">
          <span>Ellinor</span>
          <span class="font-weight-light">Stenhaug</span>
        </v-btn>
      </v-toolbar-title>

      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat disabled>
          <span class="mr-2">
          </span>
        </v-btn>
        <v-btn flat disabled>
          <span class="mr-2">
          </span>
        </v-btn>
        <v-btn flat :href="icon.url" target="_blank" v-for="(icon, i) in icons" :key="i">
          <span class="mr-2" v-html="icon.icon">
          </span>
        </v-btn>




      </v-toolbar-items>
    </v-toolbar>
  </div>

</template>



<script>
  import {
    Slide
  } from 'vue-burger-menu'

 
  export default {
    components: {
      Slide
    },
    data: function () {
      return {
        links: [{
            title: 'About',
            url: '#about'
          },
          {
            title: 'Gallery',
            url: '#gallery'
          },
          {
            title: 'services',
            url: '#services'
          },
          {
            title: 'contact',
            url: '#contact'
          }
        ],
        icons: [{
            icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z" /></svg>
              `,
            url: 'mailto:ellinor.stenhaug@gmail.com',
            title: 'ellinor.stenhaug@gmail.com'
          },
          {
            icon: ` <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
         `,
            url: 'https://github.com/Ellinorstenhaug',
            title: '@EllinorStenhaug'
          },
          {
            icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" /></svg>
          `,
            url: 'https://www.linkedin.com/in/ellinorstenhaug/',
            title: '@EllinorStenhaug'
          },

        ],
      };
    },
  }
</script>

<style>
  .white-nav {
    background-color: #fff !important;
  }
</style>