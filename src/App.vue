<template>
  <v-app class="app-container">
    <Header />
      <transition name="fade" appear mode="out-in">
          <router-view></router-view>
      </transition>
    <Footer />
  </v-app>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  data () {
    return {
      //
    }
  }
}
</script>
<style lang="scss">
@import "@/scss/resources.scss";
html {
  scroll-behavior: smooth;
}

body {
  box-sizing: border-box;
  background: $forth-color url('./assets/dot.png');
  box-shadow: inset 0px 200px 100px -53px rgba(0,58,90,.2);
  font-family: $primary-font;
}

li {
  list-style-type: none;
}

a {
  text-decoration: none;
  text-transform: none;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.app-container {
  position: relative;
  max-width: 1280px;
  display: block;
  margin: 0 auto;
  font-family: $primary-font;
  background: $default-color;
  box-shadow: 1px 1px 35px 5px $primary-color;
  text-transform: capitalize;
  overflow: hidden;
  font-family: $primary-font;
}

.flex-between {
  display: flex;
  justify-content: space-between;
}

.flex-between-center {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.flex-start {
  display: flex;
}

.flex-center {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.flex-end {
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
}

.flex-column {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: flex-start;
}

.fade-enter {
    opacity: 0;
}

.fade-enter-active {
    transition: opacity 300ms;
}

.fade-leave-active {
    transition: opacity 300ms;
    opacity: 0;
}

.clearfix,
.clearfix::before,
.clearfix::after {
    content: "";
    clear: both;
    display: table;
}

.gradient-bgr {
  background-image: linear-gradient(to top right, $secondary-color, $third-color);
  color: $default-color;
}

.btn {
  @include border-radius(15px);
  @include font($font-size: 16px, $color: $default-color);
  background: $third-color;
  background-image: linear-gradient(to top right, $secondary-color, $third-color);
  padding: 5px 50px;
  border: 1px solid $default-color;
  outline: none;
  transition: all 300ms ease-in-out;

  @include on_event {
    box-shadow: 0 0 55px 0px rgba(33, 178, 231, .5);
  }
}

@media screen and (max-width: 767px) {
  .btn {
    @include border-radius(15px);
    font-size: 14px;
  }
}
</style>
