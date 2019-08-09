<template>
  <b-navbar id="navbar" class="fixed-top" type="light">
    <b-navbar-brand href="/">
      <img src="/favicon-32x32.png" alt="cjchen">
    </b-navbar-brand>
    <div class="nav-animation-wrapper menu-animation-background">
      <div class="nav-animated-background menu-animated-background"></div>
    </div>
    <div v-on:click="menuToggle" class="menu">
      <span class="menu-line-1 menu-hamburger"></span>
      <span class="menu-line-2 menu-hamburger"></span>
      <span class="menu-line-3 menu-hamburger"></span>
    </div>
    <div class="nav-overlay">
      <div class="nav-content">
        <div class="nav-header"><span>Climbing is Pure Passion!!</span></div>
        <ul class="nav-items">
          <li class="nav-item">
            <nuxt-link to="/" class="nav-link">Home</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link to="/about" class="nav-link">About</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link to="/portfolio" class="nav-link">Portfolio</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link to="/gallery" class="nav-link">Gallery</nuxt-link>
          </li>
          <!-- <li class="nav-item">
            <nuxt-link to="/contact" class="nav-link">Contact</nuxt-link>
          </li> -->
        </ul>
      </div>
    </div>
  </b-navbar>  
</template>
<script>
export default {
  data(){
    return {
      viewPoint: false
    }
  },
  methods: {
    // handleScroll () {
    //   // any code to handle scroll event
    //   let nav = document.getElementById('navbar');
    //   if (window.scrollY !== 0) {
    //     nav.classList.add('fixed-top');
    //     nav.classList.remove('sticky-top');
    //   } else {
    //     nav.classList.add('sticky-top');
    //     nav.classList.remove('fixed-top');
    //   }
    // }
    clickShut: function () {
      let links = document.querySelectorAll('.nav-link');

      links.forEach((link)=>{
        link.addEventListener('click', ()=>{
          this.menuHide();
        })
      });
    },
    menuToggle: function () {
      !this.viewPoint ? this.menuShow() : this.menuHide();
    },
    toggleState: function(){
      document.querySelector('body').classList.toggle('no-scroll');
      document.querySelector('.menu').classList.toggle('menu-active');
      document.querySelector('.nav-overlay').classList.toggle('nav-active');
    },
    menuShow: function () {
      this.viewPoint = true;
      this.toggleState();

      this.$anime
      .timeline()
      .add({
        targets: ".menu-animated-background",
        scale: [0.3,3],
        opacity: [0,1],
        easing: "easeInCubic",
        duration: 300
      })
      .add({
        targets: ".nav-overlay",
        opacity: [0,1],
        easing: "easeInOutExpo",
        duration: 100
      })
    },
    menuHide: function () {
      this.viewPoint = false;
      this.toggleState();

      this.$anime
      .timeline()
      .add ({
        targets: ".nav-overlay",
        opacity: [1,0],
        easing: "easeInOutExpo",
        duration: 100
      })
      .add({
        targets: ".menu-animated-background",
        scale: [3,0.3],
        opacity: [1,0],
        easing: "easeInCubic",
        duration: 300
      })
    }
  },
  mounted () {
    // window.addEventListener('scroll', this.handleScroll);
    this.clickShut();
  }
}
</script>

<style lang="scss">
.no-scroll {
  overflow: hidden;
  position: fixed;
  height: 100%;
  width: 100%;
}

.menu {
  position:absolute;
  top: 2.7vmin;
  right: 2.8vmin;
  z-index: 1003;
  width: 23px;
  outline: none;
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  .menu-hamburger {
    display: block;
    height: 2px;
    width: 100%;
    background-color: #a5acbc;
    margin-bottom: 4px;
    border-radius: 2px;
    transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275),opacity 0.2s ease-out;
  }

  &:hover .menu-hamburger {
    transform: scaleX(1.2);
    background-color: #8591ac;
  }
}

.nav-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1002;
  text-align: center;
  overflow: hidden;
  color: #fff;
  pointer-events: none;
  opacity: 0;
  background-color: #269e93;
  .nav-content {
    width: 620px;
    max-width: 100%;
    margin: 40px auto;
    margin-top: 18vh;
    padding: 0 60px;
    box-sizing: border-box;

    .nav-header {
      text-align: center;
    }
    .nav-items {
      list-style: none;
      padding: 20px 0 30px;
      .nav-item {
        .nav-link {
          color: inherit;
        }
      }
    }
  }
}

.nav-active {
  pointer-events: initial;
}

.menu-active, .menu-active:hover {
  &>.menu-line-1 {
    transform: translateY(6px) rotateZ(-135deg);
    background-color: #fff;
  }
  &>.menu-line-2 {
    opacity: 0;
    background-color: #fff;
  }
  &>.menu-line-3 {
    transform: translateY(-6px) rotateZ(135deg);
    background-color: #fff;
  }
}

.nav-animation-wrapper {
    overflow: hidden;
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 1000;
    top: 0;
    left: 0;
    pointer-events: none;
}
.nav-animated-background {
  position: absolute;
  width: 800px;
  height: 800px;
  background-color: #269e93;
  border-radius: 50%;
  pointer-events: none;
  z-index: 1001;
  opacity: 0;
}
.menu-animated-background {
  top: -358px;
  right: -358px;
}

</style>

