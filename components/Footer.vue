<template>
    <footer class="foot-wrapper">
      <div class="icon-wrapper">
        <a href="https://www.linkedin.com/in/chun-jui-chen/" rel="external" target="_blank"><i class="fab fa-linkedin"></i></a>
        <a href="https://github.com/g-brodiei" rel="external" target="_blank"><i class="fab fa-github"></i></a>
        <!-- <a href="mailto:&#099;&#104;&#117;&#110;&#106;&#117;&#105;&#099;&#104;&#101;&#110;&#064;&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;" rel="external nofollow" target="_blank"><i class="fas fa-envelope"></i></a> -->
      </div>
      <p class="text-wrapper">&copy;{{currentYear}} copyright all rights reserved</p>
    </footer>
</template>
<script>
export default {
  data(){
    return {
      currentYear: ""
    }
  },
  methods: {
    findCurrentYear: function(){
      this.currentYear = new Date().getFullYear();
    }
  },
  mounted(){
    this.findCurrentYear();
  }
}
</script>
<style lang="scss" scoped>
  .foot-wrapper {
    display: block;
    position: absolute;
    bottom: 0;
    width: 100%;
    text-align: center;
    .icon-wrapper {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      margin-bottom: 10px;
      a {
        margin: 5px 10px 10px;
        i {
          font-size: 1.5em;
        }
      }
    }
  }
</style>