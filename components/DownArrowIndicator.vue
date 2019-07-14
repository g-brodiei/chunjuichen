<template>
  <div id="hint-arrow" class="infiniteFadeIn">
    <span class="oi oi-arrow-thick-bottom"></span>
  </div>
</template>
<style lang="scss" scoped>

// accessory effects

#hint-arrow {
  position: absolute;
  bottom: 10%;
  left: 50%;
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

