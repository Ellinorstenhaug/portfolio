<template>
  <v-content>
    <section>
      <v-layout column wrap class="my-5" align-center>
        <v-flex xs12 sm4 class="my-3">
          <div class="text-xs-center">
            <h2 class="display-2 font-weight-bold">HEEEJ</h2>
            <span class="subheading">
              Cras facilisis mi vitae nunc
            </span>
          </div>
        </v-flex>
        <v-container grid-list-xl>
          <v-layout row wrap align-center>
            <v-flex xs12 sm6 md4 v-for="(item, index) in card" :key="index">
              <v-hover>

                <v-card flat slot-scope="{ hover }" :class="`elevation-${hover ? 12 : 2}`" class="mx-auto">
                  <v-img :src="item.img" class="intro-card_img intro-card_border elevation-2">
                  </v-img>
                </v-card>
              </v-hover>
              <div class="intro-card_title intro-card_box elevation-2 intro-card">
                <a class="link" :href="item.url">
                  <h4 class="headline dark--text text-uppercase">{{item.title}}</h4>
                </a>
              </div>
            </v-flex>
          </v-layout>
        </v-container>
      </v-layout>

      <introText />
    </section>
  </v-content>
</template>

<script>
  import introText from './childcomponents/introText'

  export default {
    components: {
      introText
    },
    data: function () {
      return {
        reviews: 413,
        value: 4.5,
        card: [{
            title: "About",
            url: "/om-oss",
            img: "https://picsum.photos/400?random"
          },
          {
            title: "Work",
            url: "/kontakt",
            img: "https://picsum.photos/400"
          },
          {
            title: "Contact",
            url: "/kontakt",
            img: "https://picsum.photos/400/?random"
          }
        ],
      };
    }
  }
</script>

<style>

</style>