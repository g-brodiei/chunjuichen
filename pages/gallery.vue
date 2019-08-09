<template>
  <div id="mansory">
    <div class="mansory-wrapper">
      <div class="mansory-col">
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
</template>
<script>
export default {
  
}
</script>
<style lang="scss">
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
</style>
