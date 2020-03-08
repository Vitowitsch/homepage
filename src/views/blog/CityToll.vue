<template>
  <v-container>
    <project-headline id="citytoll">
      <template v-slot:header>My Project</template>
      Pollution is in the air
    </project-headline>
    <blockquote class="post__subtitle">
      <center>
        <div class="title">A smart city toll system (Cito) made second prizes.</div>
      </center>
    </blockquote>
    <v-row>
      <v-col cols="12" sm="6">
        <p></p>The estimated number of premature deaths due to traffic related air pollution is estimated by 60 thousand per year in Germany.
        Even if this number is controversial, 65 German cities surpassed the pollution levels in 2017.
        If they all were fined by the EU, this would add up to millions of Euros.
        Traffic related pollution was one of the topics at the 2018’s
        <a
          style="color:black;font-style: italic;display: inline-block;"
          href="https://www.bmu.de/service/veranstaltungen/wettbewerbe/code4green"
        >Code4Green</a> - Hackathon at the ministry of environment.
        <p></p>It took place in the ministry itself that had been perfectly equipped with beds and all the stuff you need for a 24h hackathon. Even Minister Svenja Schulze herself showed up.
        <p></p>I was part of a team of seven. The idea for the final project only emerged the night before the hackathon:
        We built a smart system that calculates dynamic price for entering - or parking - in the city, based on the real time NOx level.
        It should also include a 24h hours forecast.
        <p>
          There were two options for billing: Either an IOT device on the car that would
          automatically deduct the payment from a prepaid account when it entered a city zone, or smart parking ticket vending machines.
        </p>Our hackathon IoT-prototype retrieves real time and forecast pollution data from our cloud service. The city toll is deducted from a prepaid account, based on GPS and NOx level. Users can see their account balance, a 24 hour pollution forecast with corresponding prices on their mobile phones.
        <p></p>We hope that this is a first step towards fewer cars and better air in cities. Cito can enforce legal pollution thresholds and bans on diesel cars - without tracking any personal GPS data.
        <p></p>Let us turn the grey sky blue again!
        <p></p>
      </v-col>
      <v-col cols="12" sm="6">
        <v-img :src="require('@/assets/pics/code4green-device.jpg')" aspect-ratio="2.0" contain />
        <p />
      </v-col>
      <iframe
        src="https://www.youtube.com/embed/rVUP4-I9TJ4"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </v-row>
  </v-container>
</template>


