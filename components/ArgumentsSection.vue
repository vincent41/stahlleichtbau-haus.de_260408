<template>
  <section id="vorteile" class="py-20 lg:py-28 bg-bg">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <h2 class="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-center mb-16 animate-on-scroll">
        Drei Gründe, warum Baufirmen auf Stahlleichtbau umsteigen
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div
          v-for="(arg, i) in args"
          :key="i"
          class="bg-white rounded-2xl p-8 border border-border/30 hover:border-accent/20 transition-all hover:shadow-lg animate-on-scroll"
          :class="`delay-${i + 1}`"
        >
          <div class="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-5 icon-animate">
            <svg class="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5">
              <path stroke-linecap="round" stroke-linejoin="round" :d="arg.icon" />
            </svg>
          </div>
          <h3 class="text-lg font-bold mb-2">{{ arg.title }}</h3>
          <p class="text-accent font-extrabold text-2xl mb-2">{{ arg.stat }}</p>
          <p class="text-font/70 leading-relaxed text-sm">{{ arg.text }}</p>
        </div>
      </div>

      <!-- Showcase -->
      <div class="mt-12 rounded-2xl overflow-hidden border border-border/30 shadow-lg animate-on-scroll">
        <img
          src="/img/fotos/stahlleichtbauweise-konstruktion.jpg"
          alt="Stahlleichtbau Rohbau — Außenansicht eines mehrgeschossigen Gebäudes"
          loading="lazy"
          class="w-full h-64 sm:h-80 lg:h-96 object-cover"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
useScrollAnimation()

const args = [
  {
    icon: 'M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z',
    title: 'Rohbau in Tagen',
    stat: '3–5 Tage',
    text: 'Ein Einfamilienhaus in Stahl-Leichtbauweise steht als Rohbau in wenigen Tagen. In der gleichen Zeit schaffen Sie zwei Projekte statt einem.'
  },
  {
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
    title: 'Bessere Marge',
    stat: '10–15%',
    text: 'Geringere Rohbaukosten als Holzrahmenbau. Kaltgeformte Stahlprofile, kein Kran, keine schweren Maschinen nötig.'
  },
  {
    icon: 'M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5',
    title: 'Freier Markt',
    stat: 'Kaum Anbieter',
    text: 'Stahlleichtbau ist in Deutschland so gut wie frei. Wer jetzt als Baufirma oder Trockenbaubetrieb einsteigt, hat echten Vorsprung.'
  }
]
</script>
