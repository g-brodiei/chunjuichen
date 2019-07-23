<template>
  <div class="timeline-container">
    <ul class="timeline">
      <div class="timeline-badge"><span class="oi oi-timer"></span></div>
      <li class="timeline-panel" v-for="(history, index) in histories" :key="index">
        <div class="timeline-expand">
          <span class="timeline-button"><img class="img-fluid" :class="`logo-${index}`" :src="`/images/${history.logoimage}`" alt="" /></span>
          <h4 class="timeline-title">{{history.title}}</h4>
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
  data: function() {
    return {
      histories: [
        {
          title: "Master of Business of IT, RMIT",
          daterange: "2017-2019",
          location: "Melbourne, AU",
          description: "Given the past web development experience from TFRI which arised my interest in IT industry, I had chosen to travel abroad to fill-in the gaps of my breif knowledge. Two years of intense study has broaden my perspective and gained the skill sets needed for in terms of proper methodlogy and theroies with projects in practice at RMIT.",
          logoimage: "RMIT_logo.png"
        },
        {
          title: "Taiwan Forestry Research Institute",
          daterange: "2014-2017",
          location: "Taipei, TW",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat tempore aliquid repellat eum officia ratione fugiat expedita molestias adipisci dignissimos doloribus magni, nesciunt omnis blanditiis distinctio voluptatibus autem quae recusandae.",
          logoimage: "TFRI_logo.png"
        },
        {
          title: "Bachelor of Biology",
          daterange: "2008-2013",
          location: "Taipei, TW",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat tempore aliquid repellat eum officia ratione fugiat expedita molestias adipisci dignissimos doloribus magni, nesciunt omnis blanditiis distinctio voluptatibus autem quae recusandae.",
          logoimage: "FuJenCathU.png"
        }
      ]
    }
  },
  methods: {
    hideDescription () {
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
  },
  mounted() {
    this.hideDescription();
  }
}
</script>
<style lang="scss">
  .timeline-container {
    position: relative;
  }

  .timeline {
    list-style: none;
    padding-top: 30px;

    &:before {
      content: " ";
      position: absolute;
      top:0;
      bottom: 0;
      width: 3px;
      background-color: rgba(163, 163, 163, 0.438);
      left: 10px;
      margin-left: 2px;
    }

    .timeline-title {
      font-size: 1.2rem;
      font-weight: bold;
      text-decoration: underline;
    }

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

    .timeline-panel {
      position: relative;
    }

    .timeline-expand {
      cursor: pointer;
    }

    li {
      .timeline-button {
        position: absolute;
        left: -37px;
        border-radius: 50%;
        width: 20px;
        height: 20px;
        background-color: aliceblue;
      
        &:after, &.expand:after {
          position: absolute;
          margin-left: 0px;
          margin-top: -6px;
        }

        &:after {
          content: '\002B';
          font-size: 24px;
        }
        
        &.expand:after {
          content: '\002D';
          font-size: 40px;
          margin-top: -21px;
          margin-left: 0.8px;
        }
      }
    }

    li:nth-child(2) {
      .timeline-title {
        color: #e63d36;
      }
      .timeline-button {
        // add circle border here if needed.
        &:after {
          color: #e63d36;
        }
      }
    }
    
    li:nth-child(3) {
      .timeline-title {
        color: #2a8a5d;
      }
      .timeline-button {
        &:after {
          color: #2a8a5d;
        }
      }
    }

    li:last-child(4) {
      .timeline-title {
        color: #2a2f4c;
      }
      .timeline-button {
        &::after {
          color: #2a2f4c;
        }
      }
    }

    .timeline-description {
      overflow: hidden;
      max-height: 0;
      transition: max-height 0.2s ease-out;
    }
  }
</style>

