<template>
  <div id="hint-arrow" class="col">
    <div class="row">
      <div class="col">
        <a class="button-wrapper" href="/about">
          <span class="oi oi-arrow-thick-left infiniteFadeIn arrow-left"></span>
          <p>About</p>
        </a>
      </div>
      <div class="col flex-right">
        <a class="button-wrapper" href="portfolio">
          <p>Works</p>
          <span class="oi oi-arrow-thick-right infiniteFadeIn arrow-right"></span>
        </a>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>

// accessory effects

#hint-arrow {
  position: absolute;
  margin: auto;
  width: 250px;
  bottom: 8%;
  left: calc(50% - 125px);
}

.button-wrapper {
  display:inline-flex;

  p {
    font-size: 1.2rem;
    padding: 0 10px;
  }
}

.flex-right {
  display: flex;
  flex-direction: row-reverse;
}

@keyframes flicker {
  0%   { opacity:1; }
  50%  { opacity:0; }
  100% { opacity:1; }
}
@-o-keyframes flicker{
  0%   { opacity:1; }
  50%  { opacity:0; }
  100% { opacity:1; }
}
@-moz-keyframes flicker{
  0%   { opacity:1; }
  50%  { opacity:0; }
  100% { opacity:1; }
}
@-webkit-keyframes flicker{
  0%   { opacity:1; }
  50%  { opacity:0; }
  100% { opacity:1; }
}

.infiniteFadeIn {
  -webkit-animation: flicker 1.5s infinite;
  -moz-animation: flicker 1.5s infinite;
  -o-animation: flicker 1.5s infinite;
  animation: flicker 1.5s infinite;
}

</style>

