<template>
  <div>
    <section id="portfolio" class="container-fluid" aria-label="portfolio">
      <h2 class="text-center">
        <nuxt-link to="portfolio">Portfolio</nuxt-link>
      </h2>
      <div class="row">
        <div class="col-12 portfolio-wrapper img-tup">
          <h3 class="parallax-title">TUP Climbing Gym</h3>
        </div>
        <div class="col-12 portfolio-wrapper img-itree">
          <h3 class="parallax-title">iTree TW</h3>
        </div>
        <div class="col-12 portfolio-wrapper img-fhsnc">
          <h3 class="parallax-title">Forest Health Disease Center</h3>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="scss">

#portfolio {
  .portfolio-wrapper {
    position:relative;
    height: calc(100vh/2.5);
    margin: 2% 0px;
    z-index: -2;
    opacity: 0.7;
    background: {
      size: auto 968px;
      repeat: no-repeat;
      attachment: fixed;
    }
    &:before {
      content: '';
      position: absolute;
      width: calc(100% - 15px);
      height: 100%;
      background: inherit;
      z-index: -1;
      filter: blur(3px);
      -webkit-filter: blur(3px);
    }

    .parallax-title {
      background-color: rgb(0,0,0); /* Fallback color */
      background-color: rgb(233, 151, 0); /* Black w/opacity/see-through */
      color: #000000;
      font-weight: bold;
      border-top: 3px solid #f1f1f1;
      border-bottom: 3px solid #f1f1f1;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 2;
      width: 50%;
      padding: 1%;
      text-align: center;
    }
  }

  .img-tup {
    background: {
      image: url(/images/tupclimb.png);
      position: top center;
    }
  }
  
  .img-itree {
    background: {
      image: url(/images/itreetw.jpg);
      position: center center;
    }
  }
  
  .img-fhsnc {
    background: {
      image: url(/images/fhsnc.png);
      position: bottom center;
    }
  }
}
</style>


