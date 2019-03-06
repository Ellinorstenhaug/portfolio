<template>
  <div>


    <!-- <section>
      <v-container grid-list-xl>
        <v-layout row wrap justify-center class="my-5">
          <v-flex xs12 sm4>
            <v-card class="elevation-0 transparent">
              <v-card-title primary-title class="layout justify-center">
                <div class="headline">Company info</div>
              </v-card-title>
              <v-card-text>
                Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
                Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti.
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex xs12 sm4 offset-sm1>
            <v-card class="elevation-0 transparent">
              <v-card-title primary-title class="layout justify-center">
                <div class="headline">Contact us</div>
              </v-card-title>
              <v-card-text>
                Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
              </v-card-text>
              <v-list class="transparent">
                <v-list-tile>
                  <v-list-tile-action>
                    <v-icon class="blue--text text--lighten-2">phone</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>777-867-5309</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-action>
                    <v-icon class="blue--text text--lighten-2">place</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>Chicago, US</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-action>
                    <v-icon class="blue--text text--lighten-2">email</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>john@vuetifyjs.com</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
              </v-list>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </section> -->
<!-- 
    <v-footer class="blue darken-2">
      <v-layout row wrap align-center>
        <v-flex xs12>
          <div class="white--text ml-3">
            Made with
            <v-icon class="red--text">favorite</v-icon>
            by <a class="white--text" href="https://vuetifyjs.com" target="_blank">Vuetify</a>
            and <a class="white--text" href="https://github.com/vwxyzjn">Costa Huang</a>
          </div>
        </v-flex>
      </v-layout>
    </v-footer> -->
  </div>
</template>

<script>
  export default {
    data: () => ({
      ecosystem: [{
          text: 'vuetify-loader',
          href: 'https://github.com/vuetifyjs/vuetify-loader'
        },
        {
          text: 'github',
          href: 'https://github.com/vuetifyjs/vuetify'
        },
        {
          text: 'awesome-vuetify',
          href: 'https://github.com/vuetifyjs/awesome-vuetify'
        }
      ],
      importantLinks: [{
          text: 'Documentation',
          href: 'https://vuetifyjs.com'
        },
        {
          text: 'Chat',
          href: 'https://community.vuetifyjs.com'
        },
        {
          text: 'Made with Vuetify',
          href: 'https://madewithvuetifyjs.com'
        },
        {
          text: 'Twitter',
          href: 'https://twitter.com/vuetifyjs'
        },
        {
          text: 'Articles',
          href: 'https://medium.com/vuetify'
        }
      ],
      whatsNext: [{
          text: 'Explore components',
          href: 'https://vuetifyjs.com/components/api-explorer'
        },
        {
          text: 'Select a layout',
          href: 'https://vuetifyjs.com/layout/pre-defined'
        },
        {
          text: 'Frequently Asked Questions',
          href: 'https://vuetifyjs.com/getting-started/frequently-asked-questions'
        }

      ]
    })
  }
</script>

<style>

</style>