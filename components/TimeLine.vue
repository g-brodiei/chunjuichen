<template>
  <div class="timeline-container">
    <ul class="timeline">
      <div class="timeline-badge"><span class="oi oi-timer"></span></div>
      <li class="timeline-panel" v-for="(history, index) in histories" :key="index">
        <span class="timeline-button"></span>
        <h4 class="timeline-title">{{history.title}}</h4>
        <small class="text-muted"><span class="oi oi-clock"></span>&nbsp;{{history.daterange}}</small>
        <small class="text-muted"><span class="oi oi-location"></span>&nbsp;{{history.location}}</small>
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
          description: "Given the past web development experience from TFRI which arised my interest in IT industry, I had chosen to travel abroad to fill-in the gaps of my breif knowledge. Two years of intense study has broaden my perspective and gained the skill sets needed for in terms of proper methodlogy and theroies with projects in practice at RMIT."
        },
        {
          title: "Taiwan Forestry Research Institute",
          daterange: "2014-2017",
          location: "Taipei, TW",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat tempore aliquid repellat eum officia ratione fugiat expedita molestias adipisci dignissimos doloribus magni, nesciunt omnis blanditiis distinctio voluptatibus autem quae recusandae."
        },
        {
          title: "Bachelor of Biology",
          daterange: "2008-2013",
          location: "Taipei, TW",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat tempore aliquid repellat eum officia ratione fugiat expedita molestias adipisci dignissimos doloribus magni, nesciunt omnis blanditiis distinctio voluptatibus autem quae recusandae."
        }
      ]
    }
  },
  methods: {
    hideDescription () {
      let titles = document.getElementsByClassName('timeline-title');
      let descriptions = document.getElementsByClassName('timeline-description');

      for (let i = 0; i < titles.length; i++) {
          titles[i].addEventListener("click", function(){
          if (descriptions[i].style.maxHeight) {
            descriptions[i].style.maxHeight = null;
          } else {
            descriptions[i].style.maxHeight = descriptions[i].scrollHeight + "px";
          }
        });
      }
      console.log("test");
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
      cursor: pointer;
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
        margin-left: 3.5px;
        margin-top: 0px;
      }
    }

    .timeline-panel {
      position: relative;
    }

    li:nth-child(2n+2) .timeline-button {
      position: absolute;
      left: -37px;
      border-radius: 50%;
      border: 3px rgb(255, 145, 19) solid;
      background-color: aliceblue;
      width: 20px;
      height: 20px;
    }
    
    li:nth-child(2n+1) .timeline-button {
      position: absolute;
      left: -37px;
      border-radius: 50%;
      border: 3px rgb(86, 255, 19) solid;
      background-color: aliceblue;
      width: 20px;
      height: 20px;
    }

    .timeline-description {
      overflow: hidden;
      max-height: 0;
      transition: max-height 0.2s ease-in-out;
    }


  }
</style>

