<template>
  <div class="timeline-container">
    <ul class="timeline">
      <div class="timeline-badge"><span class="oi oi-timer"></span></div>
      <li class="timeline-panel" :click="hideDescription" v-for="(history, index) in histories" :key="index">
        <div class="timeline-expand">
          <h4 class="timeline-title">
            <span class="timeline-button"><img class="img-fluid" :class="`logo-${index}`" :src="`/images/${history.logoimage}`" alt="" /></span>
            {{history.title}}
          </h4>
          <small class="text-muted"><span class="oi oi-clock"></span>&nbsp;{{history.daterange}}</small>
          <small class="text-muted"><span class="oi oi-location"></span>&nbsp;{{history.location}}</small>
        </div>
        <p class="timeline-description">{{history.description}}</p>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data () {
    return {
      histories: [
        {
          title: "Master Business of IT, RMIT",
          daterange: "2017-2019",
          location: "Melbourne, AU",
          description: "Master Business of IT comprises the essential knowledge and pratical projects to educate graduates to illustrate business requirements and process of different industries into proper IT solutions. In short, \"Bridging the world between Buisness and IT\", allowing business to utilize IT to explore its potential within.",
          logoimage: "RMIT_logo.png"
        },
        {
          title: "Research Assistant, Ecoinformatic Lab, TFRI",
          daterange: "2014-2017",
          location: "Taipei, TW",
          description: "Ecoinformatic lab unitlizes modern technology to observe and support research studies of mother nature. The work consists data collection with trap camera, website, audio recorder and on-field research to understand the ecology domains of Taiwan. We also conduct workshops for international researcher and local volunteers to share knowledges and educate others.",
          logoimage: "TFRI_logo.png"
        },
        {
          title: "Bachelor of Life Science, FJCU",
          daterange: "2008-2013",
          location: "Taipei, TW",
          description: "Life science is a broad range of domains engaging from the mircro to macro scope of life. It emphasize the importance of experimenting hypothesis",
          logoimage: "FuJenCathU.png"
        }
      ]
    }
  },
  mounted() {
    this.hideDescription();
  },
  methods: {
    hideDescription (event) {
      let titles = document.getElementsByClassName('timeline-expand');
      let descriptions = document.getElementsByClassName('timeline-description');
      let timelineButtons = document.getElementsByClassName('timeline-button');

      for (let i = 0; i < titles.length; i++) {
          titles[i].addEventListener("click", function(){
          if (descriptions[i].style.maxHeight) {
            descriptions[i].style.maxHeight = null;
            timelineButtons[i].classList.remove('expand');
          } else {
            descriptions[i].style.maxHeight = descriptions[i].scrollHeight + "px";
            timelineButtons[i].classList.add('expand');
          }
        });
      }
    }
  }
}
</script>
<style lang="scss">
  /* container of timeline*/
  .timeline-container {
    position: relative;

  /* style the list to none */
    .timeline {
      list-style: none;
      padding-top: 30px;

  /* vertical timeline */
      &::before {
        content: " ";
        position: absolute;
        top:0;
        bottom: 0;
        width: 3px;
        background-color: rgba(163, 163, 163, 0.438);
        left: 10px;
        margin-left: 2px;
      }

  /* first individual timer badge */
      .timeline-badge {
        position: absolute;
        left: 0px;
        top: 0px;
        width: 25px;
        height: 25px;
        border: 2px rgb(255, 19, 129) solid;
        border-radius: 50%;
        background-color: aliceblue;
        span {
          position: absolute;
          margin-left: 3.5px;
          margin-top: -0.2px;
        }
      }

  /* overall panel container */
      .timeline-panel {
        position: relative;
        border-radius: 3%;
        border: 1px solid lightgoldenrodyellow;
        background: lightgoldenrodyellow;
        box-shadow: lightgray 2px 2px 5px;
        padding: 10px;
        margin: {
          top: 10px;
          bottom: 5px;
        }
  /*  toggle wrapper to expand paragraph */        
        .timeline-expand {
          cursor: pointer;
        }
  /* hint button to click */
        .timeline-button {
          position: absolute;
          left: -37px;
          display: inline-block;
          // border-radius: 50%;
          width: 20px;
          height: 20px;
          // background-color: aliceblue;
        }
  /* description section */
        .timeline-description {
          overflow: hidden;
          max-height: 0;
          transition: max-height 0.2s ease-out;
        }
  /* title design */
        .timeline-title {
          font-size: 1.2rem;
          font-weight: bold;

          &:hover {
          text-decoration: underline;
          }
        }
  /* individual coloring of each title and button */
        &:nth-child(2) {
          .timeline-title {
            color: #e63d36;
          }
          .timeline-button {
            &:after {
              color: #e63d36;
            }
          }
        }

        &:nth-child(3) {
          .timeline-title {
            color: #2a8a5d;
          }
          .timeline-button {
            &:after {
              color: #2a8a5d;
            }
          }
        }

        &:last-child(4) {
          .timeline-title {
            color: #2a2f4c;
          }
          .timeline-button {
            &::after {
              color: #2a2f4c;
            }
          }
        }
      }
    }
  }
  @media screen and (min-width: 768px) {
    .timeline-container {
      .timeline{
        padding-left: 0px;
        &::before {
          left: 50%;
        }
        .timeline-badge {
          left: calc(50% - 8px);
        }
       .timeline-panel{
        -webkit-box-flex: 0;
        flex: 0 0 41.666667%;
        max-width: 41.666667%;
        border-radius: 3%;
        border: 1.5px solid lightgoldenrodyellow;
        background: lightgoldenrodyellow;
        box-shadow: lightgray 2px 2px 5px;
        padding: 10px;

          .timeline-button {
            position: relative;
            display: inline-block;
            left: 0px;
          }
        }
        .timeline-panel:nth-child(2n+1) {
          margin-left: 58.333333%;
        }
      }
    }
  }
</style>

