<template>
  <div>
    <header>
      <Menu />
    </header>
    <nuxt />
    <Footer />
  </div>
</template>
<script>
import Menu from '~/components/Menu.vue';
import Footer from '~/components/Footer.vue';
export default {
  components: {
    Menu,
    Footer
  }
}
</script>


<style>
html {
  /* font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif; */
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  overflow-x: hidden;
  background-color: linear-gradient(-45deg, rgb(197, 197, 197), rgb(236, 236, 238));;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
</style>
