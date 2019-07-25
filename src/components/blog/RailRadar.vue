<template>
  <article v-if="allReady" class="post">
    <header class="post__header">
      <h2 class="post__title">{{ title }}</h2>
    </header>
    <section class="post__body rte">
      Dieses Foto mag alt sein, doch solche Zugkollisionen gibt es auch heute immer wieder –
      wie 2014 in Bad Aibling oder im Mai diesen Jahres in Aichach.
      Dass zwei Züge auf demselben Gleis fahren oder ein Zug mit einem Auto zusammenstößt, liegt in manchen Fällen
      an menschlichen Fehlern; weil die Leitstelle die falschen Signale gibt, der Fahrer mit seinem Handy beschäftigt
      ist oder ein Signal verpasst hat. Manchmal sind auch technische Probleme verantwortlich, vor allem in Entwicklungsländern,
      wo die Sicherungssysteme nicht so gut ausgebaut sind oder abhanden kommen.
      <p></p>Trotz aller technischen Entwicklungen, Digitalisierung und künstlicher Intelligenz können wir diese Art von
      Kollisionen noch immer nicht zuverlässig verhindern. Die Folge sind schwere Unfälle mit Toten,
      Verletzten und hohem Sachschaden. Die Reparaturen und die Kosten für Zugausfälle und Versicherungen
      summieren sich zu Millionen.
      Allein die Kollision in Bad Aibling kostete den Zugbetreiber zwischen 30 und 70 Millionen Euro.
      <p></p>Durch zusätzliche Sicherheitstechnologie in diesem Bereich könnte man sowohl
      wirtschaftlichen Schaden als auch menschliches Leid zu vermeiden -
      ein ideales Thema, um sich damit auf dem Intrapreneur Bootcamp zu befassen.
      <p></p>Um die bestehenden gleisseitigen Sicherungssysteme zu ergänzen, überlegten wir,
      ein zusätzliches System auf den Zügen selbst zu installieren; sozusagen eine Kollisionserkennung in Echtzeit.
      <p></p>Der erste Schritt war die Suche nach einer passenden Technologie und fanden schließlich eine Lösung,
      die sich an die die Zweidrahtleitung anlehnt, die bei Fernsehgeräten für den Anschluss der Antenne zur Führung von
      Radiowellen verwendet wurde.
      <p></p>Die Idee war, eine Radiowelle entlang von Eisenbahnschienen führen,
      so dass es sich der Streckenführung auch in Kurven anpasst. Das Signal eines
      entgegenkommenden Zuges sollte auf diese Weise rechtzeitig erkannt werden können.
      Unsere Überlegungen gingen noch einen Schritt weiter: Über die Veränderung des ausgesendeten
      Signals durch Reflektion oder Kurzschluss an einem Hindernis könnte man auch passive Hindernisse erkennen
      – wie ein Auto oder einen entkoppelten Waggon. Wie dachten dabei an eine AI-gestützte
      Anomalieerkennung bei der Signalauswertung.
      <p></p>Um diese Ideen zu verifizieren, speisten wir eine Radiowelle entlang einer Schienen ein und untersuchten
      deren Ausbreitung und Reichweite. Wir konnten eine Signalreflektion nachweisen, doch es werden noch viele
      Tests nötig sein. Wir haben die Idee bei Roland Busch vorgestellt und ein Funding von MO TI erhalten.
      Mit diesem Geld werden wir den RailRadar weiterentwickeln und hoffen,
      dadurch in Zukunft viele Zugunfälle zu verhindern.
      <p></p>Am Tag unserer Präsentation vor CEOs des Bootcamps ereigneten sich gleich zwei Zugkollisionen in Bayern.
      Bei Aichach fuhr ein Personenzug auf einen stehenden Güterzug auf. Die Folge waren zwei Tote und 14 Verletzte.
      Bei Starnberg starben zwei Menschen in ihrem Auto, als dieses von einem Zug erfasst wurde.
    </section>

    <footer class="post__footer">
      <vue-disqus
        v-if="commentsReady"
        shortname="vue-blog-demo"
        :key="post"
        :identifier="post"
        :url="`https://vue-blog-demo.netlify.com/read/${post}`"
      />
    </footer>
  </article>
</template>

 <script>
import VueDisqus from "vue-disqus/VueDisqus";
import { scrollTo, kebabify, prettyDate } from '@/utils/helpers'
export default {
  resource: "BlogPost",
  components: { VueDisqus },
  props: { post: String },
  data() {
    return {
      title:
        "RailRadar – ein Siemens Intrapreneurs Bootcamp Projekt",
      author: "Veit Wehner",
      content: "",
      published: "2019-06-17T18:31:01Z",
      description: "RailRadar – ein Siemens Intrapreneurs Bootcamp Projekt",
      commentsReady: false,
      ready: true
    };
  },
  computed: {
    allReady() {
      return this.ready && ('railradar' === this.post);
    }
  },
  methods: {
    kebabify,
    prettyDate
  },
  mounted() {
    if (!this.post) {
      this.ready = true;
      return;
    }
    this.$getResource("post", this.post)
      .then(this.showComments)
      .then(() => {
        this.ready = true;
      });
  }
};
</script>