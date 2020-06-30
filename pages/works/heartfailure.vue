<template>
  <section class="container-fluid">
    <h1 class="text-center my-5">Heart Failure Careness Consulting Platform</h1>
    <div class="row">
      <div class="col-12 col-md-8 offset-md-2 case-display">
        <img class="img-fluid" src="/images/heartfailure.png" alt="heartfailure site image">
      </div>
      <div class="col-12 col-md-8 offset-md-2 case-description">
        <span class="ex-link"><a href="https://www.heartfailure.tw" target="_blank">Actual Site <i class="fas fa-external-link-alt"></i></a></span>
        <h2>Features</h2>
        <ul>
          <li>Drupal 8</li>
          <li>Bootstrap Barrio subtheme</li>
          <li>Acquia lightning</li>
          <li>Custom Modules</li>
          <li>Memebership management</li>
        </ul>
        <h2>The Company</h2>
        <p>Heart Failure Careness Consulting Platform is based in Taiwan, aiming to provide a professional trustworthy platform to allow medical professionals to discuss on pratice issues and potential patients to consult common questions.</p>
        <h2>Site Development</h2>
        <p>This work is done in association with <a href="https:/www.hellosanta.tw" alt="HelloSanta link">HelloSanta</a> (Taiwan's leading Drupal Agency), the biggest technical challenge of this project was to automate the creation of memebers through a flag click on list of applications from the workbench. This feature was accomplished by writing a custom event subscriber plugin along with the <a href="https://www.drupal.org/project/flag">flag module</a>.</p>
        <p>Members are also given roles of medics and general users with related permission to gain access to content type creation and commenting. In addition, while applying for membership, custom validation on medical licence are made into its screening process.</p>
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