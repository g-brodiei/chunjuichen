<template>
  <section class="container-fluid" aria-label="about">
    <div id="about" class="row fixed-background img-1">
      <!-- <div class="col-12 col-md-5 offset-md-1">
        <div class="about-img">
          <img src="/about_pic/selfie_mistwood.jpg" alt="">
        </div>
      </div> -->
      <div class="title-wrapper">
        <HeadLine title="About Me" />
      </div>
      <div class="col-12 col-md-6 mr-md-auto p-5 self-intro">
        <p>Hi, I'm <strong>Michael Chen.</strong> A <strong><i>Web Developer &#38; Business Analyst</i></strong> based in Melbourne.</p>
        <p>I like to research and solve business problems together with my clients and collegues, curating solutions that complies within requirements and beyond expectations.</p>
        <p>Currently I provide solutions that aligns with client's business strategies within proposed system design; Create system workflows, maintenance and security updates utilizing Drupal framework.</p>
      </div>
    </div>
    <div id="timeline" class="row fixed-background img-2">
        <div class="title-wrapper">
          <HeadLine title="Experiences" />
        </div>
        <div class="col-12 col-md-10">
          <TimeLine />
        </div>
    </div>
    <div id="skillsets" class="row fixed-background img-3">
      <div class="title-wrapper">
        <HeadLine title="Skill Sets" />
      </div>
      <div class="skill-wrapper col-12 col-md-10">
        <div class="row">
          <div class="col-12 col-md-5 offset-md-1">
            <h3>Business</h3>
            <ul>
              <li>Business Research</li>
              <li>Project Management</li>
              <li>Agile Development</li>
              <li>Prototyping</li>
              <li>Business Process</li>
              <li>Critical thinking</li>
            </ul>
          </div>
          <div class="col-12 col-md-5">
            <h3>Technical</h3>
            <ul>
              <li>
                <span></span>
                <span>Drupal 7</span>
              </li>
              <li>
                <span></span>
                <span>Drupal 8</span>
              </li>
              <li>
                <span></span>
                <span>PHP</span>
              </li>
              <li>
                <span></span>
                <span>VueJS</span>
              </li>
              <li>
                <span></span>
                <span>MySQL</span>
              </li>
              <li>
                <span></span>
                <span>Git</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div id="mansory">
      <div class="mansory-wrapper">
        <div class="mansory-col">
          <b-img-lazy :src="source"></b-img-lazy>
          <img src="/about_pic/bear_fir.jpg" alt="">
          <img src="/about_pic/caterpillar.jpg" alt="">
          <img src="/about_pic/cicada_skin.jpg" alt="">
          <img src="" alt="">
        </div>
        <div class="mansory-col">
          <img src="/about_pic/dusk_light.jpg" alt="">
          <img src="/about_pic/forest_glamour_light.jpg" alt="">
          <img src="/about_pic/nengao_ridgeline.jpg" alt="">
        </div>
        <div class="mansory-col">
          <img src="/about_pic/nengao_pine.jpg" alt="">
          <img src="/about_pic/plain_grass.jpg" alt="">
          <img src="/about_pic/revolute_cupule_oak.jpg" alt="">
          <img src="/about_pic/river.jpg" alt="">
        </div>
        <div class="mansory-col">
          <img src="/about_pic/city_river.jpg" alt="">
          <img src="/about_pic/memorial_monument.jpg" alt="">
          <img src="/about_pic/mist_forest.jpg" alt="">
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import TimeLine from "~/components/TimeLine";
// import { delay } from 'q';
import HeadLine from "~/components/TitleEffect";
export default {
  components: {
    TimeLine,
    HeadLine
  },
  data() {
    return {
      source: "/about_pic/backpack_hikerod.jpg"
    }
  }
}
</script>
<style lang="scss">
  .self-intro, .skill-wrapper {
    background-color: rgba(19, 19, 19, 0.6);
    p {
      color: whitesmoke;
    }
  }

  .skill-wrapper {
    h3, ul>li {
      color: whitesmoke;
    }
  }

  #about {
    .about-img {
      border-radius: 25%;
      overflow: hidden;
      margin: auto;
      img {
        width: 100%;
        background: {
          position: center;
          origin: content-box;
        }
      }
    }
  }
  #mansory {
    .mansory-wrapper {
      display: flex;
      flex-wrap: wrap;
      padding: 0 2px;
      
      .mansory-col {
        flex: 25%;
        max-width: 25%;
        padding: 0 2px;

        img {
          margin-top: 4px;
          vertical-align: middle;
          width: 100%;
        }
      }
    }
  }

  .title-wrapper {
    width: 100%;
    overflow: hidden;
    padding: {
      top: 0.3rem;
      bottom: 0.3rem;
    }
    background-color: rgba(19, 19, 19, 0.6);
  }

  .fixed-background {
    height: 100vh;
    position: relative;
    align-items: center;
    justify-content: center;

    &:before {
      content: " ";
      position: absolute;
      top: 0;
      left: 0;
      height: 100vh;
      width: 100vw;
      filter: blur(3px);
      z-index: -1;
      background: {
        repeat: no-repeat;
        position: center;
        attachment: scroll;
        size: cover;
      }
    }
  }

  .img-1::before {
    background-image: url(/about_pic/selfie_mistwood.jpg);
  }

  .img-2::before {
    background-image: url(/about_pic/city_river.jpg);
    // background-color: teal;
  }
  
  .img-3::before {
    background-image: url(/about_pic/plain_grass.jpg);
  }

  @media screen and (min-width: 768px) {

    .self-intro {
      align-items: center;
    }
<<<<<<< HEAD
=======
  }  

  .fixed-background {
    &::before{
      background: {
        attachment: fixed;
      }
    }
>>>>>>> 92fe192c51fbe30dee3e13b05d26ae9799e49d9a
  }
</style>


