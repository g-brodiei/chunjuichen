<template>
  <div>
    <section class="container-fluid" aria-label="about">
      <div class="row full-screen-height">
        <h1 class="col-12">About Me</h1>
        <div class="col-12">
          <img src="" alt="">
          <p class="self-intro">Hi, I'm Michael (Chun-Jui, Chen), from Taiwan. a passionate learner in web development which started from Drupal since 2013, freshly graduated from RMIT in Master degree of Business of IT since 2019. I constantly seek pratical solutions for my clients by filling in the knowledge gaps between their business requirements and actual visionary of technology implimentation, instead of proposing a vague cumbersome solution, a pratical applicable solution that fits the current limits and cost provides a better aim.</p>
        </div>
        <div class="col-12">
          <h3>Timeline</h3>
          <TimeLine />
        </div>
        <h3 class="col-12">Skill Sets</h3>
        <div class="col-5">
          <h3>Business Side</h3>
          <ul>
            <li>Business Research</li>
            <li>Project Management</li>
            <li>Agile Development</li>
            <li>Prototyping</li>
            <li>Business Process</li>
            <li>Critical thinking</li>
          </ul>
        </div>
        <div class="col-5">
          <h3>IT Side</h3>
          <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>Javascript</li>
            <li>PHP</li>
            <li>VueJS</li>
            <li>Version Control</li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import TimeLine from "~/components/TimeLine";

export default {
  components: {
    TimeLine,
  }
}
</script>
<style lang="scss">
  .self-intro {
    padding: 0px 1rem;
  }
</style>


