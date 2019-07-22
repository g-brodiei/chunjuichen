<template>
  <div>
    <section id="intro" class="container-fluid" aria-label="introduction">
      <div class="row full-screen-height">
        <div class="col message-zh">
          <div class="zh-name" aria-labelledby="ZH-name">
            <p data-aos="fadeInDown">陳</p>
            <p data-aos="fadeInDown">君</p>
            <p data-aos="fadeInDown">瑞</p>
          </div>
          <p class="zh-des pt-2" data-aos="fadeInRight" aria-labelledby="ZH-description">你好，<br>我是一名網頁工程師<br>及商業分析師</p>
        </div>
        <div class="col message-en">
          <h1 class="ml-sm-5 ml-3 title" aria-labelledby="EN-name">
            <span data-aos="fadeInUp">Hi,</span>
            <br class="d-block d-sm-none">
            <span data-aos="fadeInUp">I'm Michael Chen</span>
          </h1>
          <p class="ml-sm-5 ml-3 subtitle" data-aos="fadeInUp" aria-labelledby="EN-description">A Web developer | Business Analyst</p>
        </div>
        <DownArrow />
      </div>
    </section>
    <section class="container-fluid" aria-label="portfolio">
      <div class="row full-screen-height portfolio-sector">
        <h2 class="col-12 portfolio-title text-center"  data-aos="fadeIn">Porfolio</h2>
        <p class="col-12 sec-bus" data-aos="fadeInLeft" data-aos-delay="200">
          Business Side
          <span class="decor-angle-1"></span>
        </p>
        <p class="col-12 sec-it">
          <span class=""></span>
          <nuxt-link to="about"> Information<br>
          System Technology
          </nuxt-link>
          <span class=""></span>
        </p>
        <p class="col-12 sec-dev" data-aos="fadeInRight" data-aos-anchor=".sec-it" data-aos-delay="200">
          <span class="decor-angle-2"></span>
          Development Side
        </p>
      </div>
    </section>
  </div>
</template>

<script>
import DownArrow from '~/components/DownArrowIndicator'
export default {
  components: {
    DownArrow
  }
}
</script>

<style lang="scss">
// Portfolio sector
.portfolio-sector {
  .portfolio-title{
    height: 20px;
  }

  .sec-bus {
    font-size:1.5rem;
  }

  .sec-it {
    font-size: 1.5rem;
    text-align: center;
    align-self: center;
  }

  .sec-dev {
    font-size: 1.5rem;
    text-align: right;
    align-self: flex-end; 
  }

  .decor-angle-1 {
    position: absolute;
    margin-left: 1rem;
    margin-top: 1.5rem;
    height: 28vh;
    width: 10vw;
    top: 0;
    border-top: 3px solid black;
    border-right: 3px solid black;
    -moz-transform: skew(-45deg);
    -webkit-transfrom: skew(-45deg);
    transform: skew(-45deg);
    // -webkit-animation: increase 3s;
    // -moz-animation: increase 3s;
    // -o-animation: increase 3s;
    // animation: increase 3s;
    // animation-fill-mode: forwards;

  }
  
  .decor-angle-2 {
    position: absolute;
    margin-right: 1rem;
    margin-bottom: 1.5rem;
    height:28vh;
    width: 10vw;
    bottom: 0%;
    border-bottom: 3px solid black;
    border-left: 3px solid black;
    -moz-transform: skew(-45deg);
    -webkit-transfrom: skew(-45deg);
    transform: skew(-45deg);
  }
}

// Full screen settings
.full-screen-height {
  height: calc(100vh);
  position: relative;
}

// Introduction message
.message-en {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: absolute;
    bottom: 20%;
    padding-left:5%;
  
  .title {
    :first-child {
      animation-delay: 200ms;
      animation-duration: 2000ms;
    }
    :last-child {
      animation-delay: 300ms;
      animation-duration: 2000ms;
    }
  }

  .subtitle {
    animation-delay: 400ms;
    animation-duration: 2000ms;
    font-size: 1.2rem;
  }
}

.message-zh {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    position: absolute;
    top: 25%;
    padding-right: 32%;

  p {
    writing-mode: vertical-lr;
    text-orientation: upright;
    font-size: 2.5rem;
  }

  .zh-name {
    :nth-child(1){
      animation-delay: 200ms;
      animation-duration: 2000ms;
    }
    :nth-child(2){
      animation-delay: 300ms;
      animation-duration: 2000ms;
    }
    :nth-child(3){
      animation-delay: 400ms;
      animation-duration: 2000ms;
    }
  }
  .zh-des {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    position: absolute;
    right: 10%;
    font-size: 1.2rem;
    animation-delay: 200ms;
    animation-duration: 1500ms;
    margin-bottom: -50px;
  }
}

@media screen and (min-width:768px) {
  .message-en {
    h1 {
      font-size: 2.5rem;
    }
    
    p {
      font-size: 1.5rem;
    }
  }

  .message-zh {
    p {
      font-size: 3rem;
    }
    
    .zh-des {
      right: 18%;
    }
  }
}

@media screen and (max-height: 568px) {
  .message-en {
    bottom: 15%;
  }
}

</style>
