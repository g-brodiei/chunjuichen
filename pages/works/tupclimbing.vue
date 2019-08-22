<template>
  <section class="container-fluid">
    <h1 class="text-center my-5">T-UP Climbing Gym</h1>
    <div class="row">
      <div class="col-12 col-md-8 offset-md-2 case-display">
        <img class="img-fluid" src="/images/tupclimb.png" alt="">
      </div>
      <div class="col-12 col-md-8 offset-md-2 case-description">
        <span class="ex-link"><a href="https://tupclimbing.tw" target="_blank">Actual Site <i class="fas fa-external-link-alt"></i></a></span>
        <h2>Features</h2>
        <ul>
          <li>Course Submission</li>
          <li>Location</li>
          <li>Price/Membership Details</li>
          <li>Mailing</li>
          <li>Dual Language</li>
        </ul>
        <h2>The Company</h2>
        <p>T-UP Climbing Gym is a startup company focusing in climbing gym service based in Taipei, Taiwan. Aiming to increase the health and wellbeing of the local community through fitness and rock climbing activities.</p>
        <h2>Site Development</h2>
        <p>The main purpose of the site was to serve as an official website to present information to their customers along to collect course submission from clients. T-UP's site utilize Drupal 7 and Bootstrap 3 theme with modules as its fundamental structure. Content types for courses, price, memberships, locations, and latest news were structured for future extension of their branch and proper view display format.</p>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  
}
</script>
<style lang="scss" scoped>
  .case-display {
    position: relative;
    height: 40vh;
    margin-bottom: 20px;
    img{
      position: relative;
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }
  .ex-link {
    display: block;
    position: absolute;
    top: 10px;
    right: 10px;
  }
</style>
