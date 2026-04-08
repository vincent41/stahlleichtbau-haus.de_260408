<template>
  <section class="py-20 lg:py-28 bg-bg">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <h2 class="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-center mb-16 animate-on-scroll">
        Für diese Betriebe ist unser Angebot gemacht
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div v-for="(target, i) in targets" :key="i"
          class="bg-white rounded-2xl p-8 border border-border/30 hover:border-accent/20 transition-all hover:shadow-lg animate-on-scroll"
          :class="`delay-${i + 1}`">
          <div class="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center mb-5 icon-animate">
            <svg class="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" :d="target.icon" />
            </svg>
          </div>
          <h3 class="text-lg font-bold mb-2">{{ target.title }}</h3>
          <p class="text-font/70 leading-relaxed text-sm">{{ target.text }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
useScrollAnimation()

const targets = [
  {
    icon: 'M12 4v16m8-8H4',
    title: 'Sie wollen Ihr Angebot erweitern',
    text: 'Ihr Betrieb läuft gut, aber Sie suchen ein zusätzliches Standbein. Stahlleichtbau ist eine Bauweise mit Zukunft und wenig Wettbewerb.'
  },
  {
    icon: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z',
    title: 'Sie bekommen Kundenanfragen für Stahlleichtbau',
    text: 'Ihre Kunden fragen, aber Sie mussten bisher ablehnen oder weiterleiten. Mit unserem Konstruktionspaket können Sie diese Aufträge annehmen.'
  },
  {
    icon: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15',
    title: 'Sie hatten Probleme mit Ihrem bisherigen Lieferanten',
    text: 'Falsche Maße, lange Wartezeiten, schwierige Kommunikation mit ausländischen Profil-Lieferanten. Sie wissen, was Sie brauchen. Sie brauchen einen deutschsprachigen Partner, der zuverlässig liefert.'
  },
  {
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
    title: 'Sie steigen gerade erst in den Stahlleichtbau ein',
    text: 'Sie haben sich über Leichtstahlbau informiert und wollen loslegen. Wir unterstützen Sie mit Schulung, Einweisung und technischem Support beim ersten Projekt, damit der Einstieg sauber läuft.'
  }
]
</script>
