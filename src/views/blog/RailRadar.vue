<template>
  <div :class="['ma-5', 'pa-5']">
    <project-headline id="carbon" theme="secondary">
      <template v-slot:header>My Project</template>
      {{ title }}
    </project-headline>
    <article class="columns">
      <v-img
        class="ma-5"
        src="https://sanvito-blog.s3.eu-central-1.amazonaws.com/railradar/train-station-accidant.png"
        aspect-ratio="1.4"
        contain
      />
      Dieses Foto mag alt sein, doch solche Zugkollisionen gibt es auch heute
      immer wieder – wie 2014 in Bad Aibling oder im Mai diesen Jahres in
      Aichach. Dass zwei Züge auf demselben Gleis fahren oder ein Zug mit einem
      Auto zusammenstößt, liegt in manchen Fällen an menschlichen Fehlern; weil
      die Leitstelle die falschen Signale gibt, der Fahrer mit seinem Handy
      beschäftigt ist oder ein Signal verpasst hat. Manchmal sind auch
      technische Probleme verantwortlich, vor allem in Entwicklungsländern, wo
      die Sicherungssysteme nicht so gut ausgebaut sind oder abhanden kommen.
      <p></p>
      Trotz aller technischen Entwicklungen, Digitalisierung und künstlicher
      Intelligenz können wir diese Art von Kollisionen noch immer nicht
      zuverlässig verhindern. Die Folge sind schwere Unfälle mit Toten,
      Verletzten und hohem Sachschaden. Die Reparaturen und die Kosten für
      Zugausfälle und Versicherungen summieren sich zu Millionen. Allein die
      Kollision in Bad Aibling kostete den Zugbetreiber zwischen 30 und 70
      Millionen Euro.
      <p></p>
      Durch zusätzliche Sicherheitstechnologie in diesem Bereich könnte man
      sowohl wirtschaftlichen Schaden als auch menschliches Leid zu vermeiden -
      ein ideales Thema, um sich damit auf dem Intrapreneur Bootcamp zu
      befassen.
      <p></p>
      Um die bestehenden gleisseitigen Sicherungssysteme zu ergänzen, überlegten
      wir, ein zusätzliches System auf den Zügen selbst zu installieren;
      sozusagen eine Kollisionserkennung in Echtzeit. Der erste Schritt war die
      Suche nach einer passenden Technologie und fanden schließlich eine Lösung,
      die sich an die die Zweidrahtleitung anlehnt, die bei Fernsehgeräten für
      den Anschluss der Antenne zur Führung von Radiowellen verwendet wurde.
      <p></p>
      Die Idee war, eine Radiowelle entlang von Eisenbahnschienen führen, so
      dass es sich der Streckenführung auch in Kurven anpasst. Das Signal eines
      entgegenkommenden Zuges sollte auf diese Weise rechtzeitig erkannt werden
      können. Unsere Überlegungen gingen noch einen Schritt weiter: Über die
      Veränderung des ausgesendeten Signals durch Reflektion oder Kurzschluss an
      einem Hindernis könnte man auch passive Hindernisse erkennen – wie ein
      Auto oder einen entkoppelten Waggon. Wie dachten dabei an eine
      AI-gestützte Anomalieerkennung bei der Signalauswertung.
      <p></p>
      Um diese Ideen zu verifizieren, speisten wir eine Radiowelle entlang einer
      Schienen ein und untersuchten deren Ausbreitung und Reichweite. Wir
      konnten eine Signalreflektion nachweisen, doch es werden noch viele Tests
      nötig sein. Wir haben die Idee bei Roland Busch vorgestellt und ein
      Funding von MO TI erhalten. Mit diesem Geld werden wir den RailRadar
      weiterentwickeln und hoffen, dadurch in Zukunft viele Zugunfälle zu
      verhindern.
      <p></p>
      Am Tag unserer Präsentation vor CEOs des Bootcamps ereigneten sich gleich
      zwei Zugkollisionen in Bayern. Bei Aichach fuhr ein Personenzug auf einen
      stehenden Güterzug auf. Die Folge waren zwei Tote und 14 Verletzte. Bei
      Starnberg starben zwei Menschen in ihrem Auto, als dieses von einem Zug
      erfasst wurde.
    </article>
  </div>
</template>

<script>
import VueDisqus from "vue-disqus/VueDisqus";
export default {
  data() {
    return {
      title: "RailRadar – ein Siemens-Intrapreneurs Projekt",
    };
  },
};
</script>
<style scoped>
article {
  -webkit-columns: 2 200px;
  -moz-columns: 2 200px;
  columns: 2 200px;
  -webkit-column-gap: 4em;
  -moz-column-gap: 4em;
  column-gap: 4em;
  -webkit-column-rule: 1px dotted #ddd;
  -moz-column-rule: 1px dotted #ddd;
  column-rule: 1px dotted #ddd;
}
</style>
