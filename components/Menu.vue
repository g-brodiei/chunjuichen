<template>
  <b-navbar id="navbar" class="col-md-10 offset-md-1" type="light" toggleable="lg">
    <b-navbar-brand href="/">
      <img src="/favicon-32x32.png" alt="cjchen">
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item href="about">About</b-nav-item>
        <b-nav-item href="portfolio">Portfolio</b-nav-item>
        <b-nav-item>Contact</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>
<script>
export default {
  methods: {
    handleScroll () {
      // any code to handle scroll event
      let nav = document.getElementById('navbar');
      if (window.scrollY !== 0) {
        nav.classList.add('fixed-top');
        nav.classList.remove('sticky-top');
      } else {
        nav.classList.add('sticky-top');
        nav.classList.remove('fixed-top');
      }
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll);
  }
}
</script>

<style lang="scss">
.navbar-light .navbar-toggler {
   border-color: transparent;
 }

.navbar-toggler:focus {
   outline-color: transparent;
  .navbar-toggler-icon {
    box-shadow: 1px 2px 1.5px #575757;
    border-radius: 5px;
  }
 }


</style>

