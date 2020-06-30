<template>
  <section id="works" class="container-fluid" aria-label="works">
    <div class="row">
      <h1 class="col-12 text-center mt-5">
        Works
      </h1>
      <div class="col-12 col-md-8 offset-md-2">
        <div class="row work-wrapper" v-for="(work, index) in works" :key="index">
          <div class="col-12 col-md-5 img-wrapper">
            <div class="work-img">
              <nuxt-link :to="work.links">
                <b-img-lazy v-bind="imgProps" class="img-fluid" :src="work.imgSource" :alt="work.title"></b-img-lazy>
              </nuxt-link>
            </div>
          </div>
          <div class="col-12 col-md-7">
            <h3 class="work-title text-center text-md-left">
              <nuxt-link :to="work.links">{{work.title}}</nuxt-link>
            </h3>
            <div class="work-scope text-center text-md-left">
              <i v-for="(tooltip, index2) in work.tooltips" :key="index2" :class="'scope-icon '+tooltip.iconClass" :id="index+'index'+index2"></i>
              <b-tooltip v-for="(tooltip, index2) in work.tooltips" :key="index2" :target="index+'index'+index2" :title="tooltip.title"></b-tooltip>
            </div>
            <p class="work-description" v-html="work.description"></p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data () {
    return {
      imgProps: {
        fluidGrow: true,
        blank: true,
        blankColor: '#bbb',
        blankWidth: 370,
        blankHeight: 200
      },
      works: [
        {
          links: '/works/heartfailure',
          imgSource: '/images/heartfailure.png',
          title: 'Heart Failure Careness Consulting Platform',
          tooltips: [
            {
              iconClass: 'fab fa-bootstrap',
              title: 'Bootstrap is an open source toolkit for developing with HTML, CSS, and JS'
            },
            {
              iconClass: 'fab fa-drupal',
              title: 'Drupal 8, Drupal is a free and open-source content management framework written in PHP and distributed under the GNU General Public License'
            }
          ],
          description: 'Heart Failure Careness Consulting Platform is based in Taiwan, aiming to provide a professional trustworthy platform to allow medical professionals to discuss on pratice issues and potential patients to consult common questions.'
        },
        {
          links: '/works/heartandsoulrescue',
          imgSource: '/images/heartandsoulrescue-org.png',
          title: 'HeartandSoulRescue',
          tooltips: [
            {
              iconClass: 'fab fa-bootstrap',
              title: 'Bootstrap is an open source toolkit for developing with HTML, CSS, and JS'
            },
            {
              iconClass: 'fab fa-wordpress',
              title: 'WordPress is a content management system (CMS) based on PHP and MySQL that is usually used with the MySQL or MariaDB database servers but can also use the SQLite database engine. Features include a plugin architecture and a template system.'
            }
          ],
          description: 'HeartandSoulRescue is an Australian charity organization focusing on animal rescue.'
        },
        {
          links: '/works/tupclimbing',
          imgSource: '/images/tupclimb.png',
          title: 'T-UP Climbing Gym',
          tooltips: [
            {
              iconClass: 'fab fa-bootstrap',
              title: 'Bootstrap is an open source toolkit for developing with HTML, CSS, and JS'
            },
            {
              iconClass: 'fab fa-drupal',
              title: 'Drupal 7, Drupal is a free and open-source content management framework written in PHP and distributed under the GNU General Public License'
            }
          ],
          description: 'T-UP Climbing Gym is a fitness company that provide fitness course with yoga and climbing courses.'
        },
        {
          links: '/works/itreetw',
          imgSource: '/images/itreetw.jpg',
          title: 'i-Tree TW',
          tooltips: [
            {
              iconClass: 'fab fa-bootstrap',
              title: 'Bootstrap is an open source toolkit for developing with HTML, CSS, and JS'
            },
            {
              iconClass: 'fab fa-drupal',
              title: 'Drupal 7, Drupal is a free and open-source content management framework written in PHP and distributed under the GNU General Public License'
            }
          ],
          description: 'i-Tree TW is a public project serve by Taiwan Forestry Research Institute to provide Chinese manual of <a href="https://www.itreetools.org">i-Tree tools</a> while presenting data information utilizing it.'
        },
        {
          links: '/works/fhsnc',
          imgSource: '/images/fhsnc.png',
          title: 'Forest Disease Information Center',
          tooltips: [
            {
              iconClass: 'fab fa-drupal',
              title: 'Drupal 7, Drupal is a free and open-source content management framework written in PHP and distributed under the GNU General Public License'
            }
          ],
          description: 'Forest Disease Information Center is a digital platform receiving analysis request by submission to undergo tree pathology diagnosis. Yearly data of disease and relevant information are being presented on site.'
        }
      ]
    }
  }
}
</script>
<style lang="scss">

#works {
  .work-wrapper {
    margin-bottom: 20px;
  }
  .work-scope {
    .fab {
      font-size: 1.3rem;
      &.fa-bootstrap {
        color: #563d7c;
      }
      &.fa-drupal {
        color: #0678be;
      }
      &:hover , &:focus {
        transform: scale(1.2);
        transition: 350ms linear;
        color: #269e93;
      }
    }
    .scope-icon {
      margin: {
        left: 3px;
        right: 3px;
      }
    }
  }
}
</style>


