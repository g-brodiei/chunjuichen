<template>
  <section class="container-fluid">
    <h1 class="text-center my-5">HeartandSoulRescue</h1>
    <div class="row">
      <div class="col-12 col-md-8 offset-md-2 case-display">
        <img class="img-fluid" src="/images/heartandsoulrescue-org.png" alt="">
      </div>
      <div class="col-12 col-md-8 offset-md-2 case-description">
        <span class="ex-link"><a href="https://heartandsoulrescue.org" target="_blank">Actual Site <i class="fas fa-external-link-alt"></i></a></span>
        <h2>Features</h2>
        <ul>
          <li>WordPress</li>
          <li>Bootstrap 4</li>
          <li>Custom Child Theming</li>
          <li>Ninja Form</li>
          <li>Advanced Custom Field</li>
        </ul>
        <h2>The Company</h2>
        <p>Heart and Soul Rescue is an animal rescue focused on rescuing abandoned and neglected animals, and those that are living on the streets. Through our network of supportive veterinaries, volunteer foster carers and volunteers, we rehabilitate, socialize and adopt those animals to their loving forever homes.</p>
        <h2>Site Development</h2>
        <p>This is a volunteer work to support the charity by the designer and I, thanks for the given opportunity. The work was to code it into life using custom theme <i>(wp-bootstrapstarter theme)</i> and  ACF according to the designed wirefram. To minimize the total cost for client, Let's Encrpyt was setup for the SSL certificate, and backup scripts were done by cron job automatically instead of purchasing similar service.</p>
        <p></p>
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