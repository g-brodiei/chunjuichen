<template>
  <div class="container-fluid">
    <section id="intro" aria-label="introduction">
      <div class="row full-screen-height">
        <div class="col-12 col-md-8 offset-md-2 message-zh">
          <div class="head-img ml-3"><img src="/images/selfie_dog.jpg" alt=""></div>
          <div class="zh-name" aria-labelledby="ZH-name">
            <p class="zh-punch">我叫陳君瑞</p>
            <p class="zh-des" aria-labelledby="ZH-description">一名網頁工程師</p>
          </div>
        </div>
        <div class="col-12 col-md-10 offset-md-2 message-en">
          <h1 class="ml-sm-5 ml-3 title" aria-labelledby="EN-name">
            I am Michael Chen
          </h1>
          <p class="ml-sm-5 ml-3 subtitle" aria-labelledby="EN-description">A Web developer</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
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
  height: calc(95vh - 96px);
  position: relative;
  top: 96px;
}

// Introduction message
#intro {
  
  .message-en {
    opacity: 0;
    p {
      font-family: 'Roboto';
    }

    h1 {
      font-size: 1.8rem;
    }

    .subtitle {
      font-size: 1.2rem;
    }
  }

  .message-zh {
    font-family: "Noto Sans TC";

    p {
      font-family: "Noto Sans TC";
      writing-mode: vertical-lr;
      text-orientation: upright;
      font-size: 1.9rem;
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
        transform: scale(1.2);
        margin-left: 5px;
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
</style>
