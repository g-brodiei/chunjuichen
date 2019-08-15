<template>
  <section class="container-fluid">
    <h1 class="text-center my-5">Forest Disease Information Center</h1>
    <div class="row">
      <div class="col-12 col-md-8 offset-md-2 case-display">
        <img class="img-fluid" src="/images/fhsnc.png" alt="">
      </div>
      <div class="col-12 col-md-8 offset-md-2 case-description">
        <h2>Features</h2>
        <ul>
          <li>Mailing</li>
          <li>Disease Report Data collection</li>
          <li>Data presentation</li>
          <li>Membership system</li>
          <li>Google Analytic</li>
          <li>Location aggregation</li>
        </ul>
        <h2>The Company</h2>
        <p>Ecoinfomatic lab is one of the unit in Taiwan Forest Research Institute. It utilizes technology to study and understand the ecology of Taiwan by data collection in the field or from public, to be further analysed and presented to the public.</p>
        <h2>Site Development</h2>
        <p>The main chanllage for this case was to Update the system to Drupal 7 due to system deprecation of Drupal 6 at the time being.</p>
        <p>Theme reform and custom content types were made to match the original content fields, feeds module supported the process of data migration. Gladly improved the system stability, security updates, and user experience from the legacy system in Drupal 6. General disease report data and member's data were succeccfully transferred during the upgrading process. Google Analytic tools providing monthly report enhanced the information of site's visitor condition as well.</p>
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
</style>