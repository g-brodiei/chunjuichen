<template>
  <div>
    <section id="intro" class="container-fluid" aria-label="introduction">
      <div class="row full-screen-height">
        <div class="col message-zh">
          <div class="head-img"><img src="/images/kingfisher.jpg" alt=""></div>
          <div class="zh-name" aria-labelledby="ZH-name">
            <p>我叫</p>
            <p>陳</p>
            <p>君</p>
            <p>瑞</p>
            <p class="zh-des pt-2" aria-labelledby="ZH-description">一名網頁工程師</p>
          </div>
        </div>
        <div class="col message-en">
          <h1 class="ml-sm-5 ml-3 title" aria-labelledby="EN-name">
            <span>Hi,</span>
            <br class="d-block d-sm-none">
            <span>I'm Michael Chen</span>
          </h1>
          <p class="ml-sm-5 ml-3 subtitle" aria-labelledby="EN-description">A Web developer</p>
        </div>
        <DownArrow />
      </div>
    </section>
    <section id="about" class="container-fluid" aria-label="about">
      <h2 class="text-center">
        <nuxt-link to="about">About Me</nuxt-link>
      </h2>
      <div class="row">
        <div class="col">
        </div>
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
// Full screen settings
.full-screen-height {
  height: calc(100vh);
  position: relative;
}

// Introduction message
#intro {
  .message-en {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      position: absolute;
      bottom: 20%;
      padding-left:5%;
    
    & p {
      font-family: 'Merienda One', cursive;
    }
    
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
      font-family: "Noto Sans TC";
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      position: absolute;
      top: 16%;
      padding-right: 25%;

    p {
      font-family: "Noto Sans TC";
      writing-mode: vertical-lr;
      text-orientation: upright;
      font-size: 2rem;
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
      right: 7%;
      top: 0%;
      font-size: 1.2rem;
      animation-delay: 200ms;
      animation-duration: 1500ms;
      margin-bottom: -50px;
    }
  }
  .head-img {
    border-radius: 50%;
    border: 5px #269e93 solid;
    display: block;
    position: absolute;
    overflow: hidden;
    width: 150px;
    height: 150px;
    left: 7%;
    top: -20%;
    img {
      position: absolute;
      height: 100%;
      margin-left: -41px;
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
      padding-right: 18%;
      p {
        font-size: 2.5rem;
      }
      
      .zh-name .zh-des {
        font-size: 1.6rem;
      }
    }
  }
}

@media screen and (max-height: 568px) {
  #intro{
    .message-en {
      bottom: 15%;
    }
  }
}

</style>
