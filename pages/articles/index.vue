<template>
  <section class="container articles-list">
    <div class="row">
        <h1 class="col-12 mt-5 text-center">Learn and Share</h1>
    </div>
    <div class="row mt-4">
      <div class="col-md-10 col-12 offset-md-1">
        <div class="article-wrapper">
          <nuxt-link :to="links">
          <h2 class="article-title">Drupal Site Essentials: "Config Split", Spliting Configurations between dev and stage sites.</h2>
          </nuxt-link>
          <i class="tech-tags fab fa-drupal"> Drupal 8</i>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      links: '/articles/config_split'
    }
  }
}
</script>
<style lang="scss" scoped>
  .articles-list {
    h2 {
      font-size: 1.5em;
        
      @media screen and (min-width: 768px) {
        font-size: 1.75em;
      }
      @media screen and (min-width: 1200px){
        font-size: 2em;;
      }
    }
  }
</style>