<template>
  <h2 class="text-center text-effect">
    <span class="text-wrapper">
      <span class="letters">{{title}}</span>
      <span class="line"></span>
    </span>
  </h2>
</template>
<script>
export default {
  props: ['title'],
  mounted() {
    let textWrapper = document.querySelectorAll('.text-effect .letters');
    textWrapper.forEach((text) => {
      text.innerHTML = text.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");
    });


    this.$anime
      .timeline({loop:true})
      .add({
        targets: '.text-effect .line',
        scaleX: [0,1],
        opacity: [0.5,1],
        easing: "easeInOutExpo",
        duration: 900
      })
      .add({
        targets: '.text-effect .letter',
        opacity: [0,1],
        translateY: [-30,0],
        translateZ: 0,
        scaleX: [0.3,1],
        easing: "easeOutExpo",
        duration: 2000,
        offset: '-=600',
        delay: function(el, i) {
          return 50 + 25 * i;
        }
      })
      .add({
        targets: '.text-effect',
        opacity: 0,
        duration: 2000,
        easing: "easeOutExpo",
        delay: 1000
      })
  }
}
</script>
<style lang="scss" scoped>
  .text-effect {
    color: whitesmoke;
    font-weight: bold;
    .text-wrapper {
      position: relative;
      display: inline-block;
    }
    
    .line {
      opacity: 0;
      position: absolute;
      bottom: 0;
      left: 0;
      height: 3px;
      width: 100%;
      margin: auto;
      background-color: whitesmoke;
      transform-origin: 0.5 0;
    }

    .letter {
      display: inline-block;
      line-height: 1em;
    }
  }
</style>


