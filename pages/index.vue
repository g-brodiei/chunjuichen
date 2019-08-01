<template>
  <div>
    <section id="intro" class="container-fluid" aria-label="introduction">
      <div class="row full-screen-height">
        <div class="col-12 col-md-8 offset-md-2 message-zh">
          <div class="head-img ml-3"><img src="/images/kingfisher.jpg" alt=""></div>
          <div class="zh-name" aria-labelledby="ZH-name">
            <p class="zh-punch">我叫陳君瑞</p>
            <p class="zh-des" aria-labelledby="ZH-description">一名網頁工程師</p>
          </div>
        </div>
        <div class="col-12 col-md-4 offset-md-2 message-en">
          <h1 class="ml-sm-5 ml-3 title" aria-labelledby="EN-name">
            I'm Chun-Jui Chen
          </h1>
          <p class="ml-sm-5 ml-3 subtitle" aria-labelledby="EN-description">A Web developer</p>
        </div>
      <NavButton />
      </div>
    </section>
  </div>
</template>

<script>
import NavButton from '~/components/NavButton'

export default {
  components: {
    NavButton
  },
  mounted() {
    this.$anime
      .timeline()
        .add({
          targets: ".head-img",
          scale: [0.1,1],
          opacity: [0,1],
          easing: "easeOutSine",
          rotate: 720,
          duration: 1000,
          delay: 400
        })
        .add({
          targets: ".zh-name",
          opacity: [0,1],
          translateY: 40,
          easing: "easeOutSine",
          duration: 800,
          delay: 200
        })
        .add({
          targets: ".message-en",
          opacity: [0,1],
          translateY: -30,
          easing: "easeOutSine",
          druation: 800,
        })
  }
}
</script>

<style lang="scss">
// Full screen settings
.full-screen-height {
  height: calc(100vh - 96px);
  position: relative;
}

// Introduction message
#intro {
  
  .message-en {
    margin-top: 100px;
    opacity: 0;
    & p {
      font-family: 'Roboto';
    }

    .subtitle {
      font-size: 1.2rem;
    }
  }

  .message-zh {
    font-family: "Noto Sans TC";
    margin-top: 50px;


    p {
      font-family: "Noto Sans TC";
      writing-mode: vertical-lr;
      text-orientation: upright;
      font-size: 2rem;
    }

    .zh-name {
      opacity: 0;
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      // margin-right: -30px;
    }
    .zh-des {
      font-size: 1.2rem;
    }

    .head-img {
      display: block;
      opacity: 0;
      border-radius: 50%;
      border: 5px rgb(38, 158, 147) solid;
      position: absolute;
      overflow: hidden;
      width: 150px;
      height: 150px;
      left: 5%;
      img {
        position: absolute;
        height: 100%;
        margin-left: -41px;
      }
    }
  }
}



@media screen and (min-width:768px) {
  #intro { 
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
        font-size: 2.5rem;
      }
      
      .zh-name .zh-des {
        font-size: 1.6rem;
      }

      .head-img {
        width: 200px;
        height: 200px;
      }
    }
  }
}

@media screen and (max-height: 568px) {
  #intro{
    .message-en {
      
    }
  }
}

</style>
