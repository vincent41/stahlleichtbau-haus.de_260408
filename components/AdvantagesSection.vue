<template>
  <section class="py-20 lg:py-28 bg-bg">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <h2 class="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-center mb-16 animate-on-scroll">
        Was Stahlleichtbau auf der Baustelle ausmacht
      </h2>

      <div class="grid grid-cols-2 md:grid-cols-4 gap-5">
        <div
          v-for="(adv, i) in advantages"
          :key="i"
          class="bg-white rounded-2xl p-6 border border-border/30 hover:border-accent/20 transition-all hover:shadow-lg text-center animate-on-scroll"
          :class="`delay-${i + 1}`"
        >
          <div class="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4 icon-animate">
            <svg class="w-7 h-7 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5">
              <path stroke-linecap="round" stroke-linejoin="round" :d="adv.icon" />
            </svg>
          </div>
          <h3 class="font-bold mb-1 text-sm sm:text-base">{{ adv.title }}</h3>
          <p class="text-font/60 text-xs sm:text-sm leading-relaxed">{{ adv.text }}</p>
        </div>
      </div>

      <!-- Bildergalerie -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
        <div class="rounded-2xl overflow-hidden border border-border/30 shadow-lg animate-on-scroll delay-1">
          <img
            src="/img/fotos/stahlleichtbau_5752.jpg"
            alt="Stahlleichtbau Dachkonstruktion — Nahaufnahme der Stahlprofile"
            loading="lazy"
            class="w-full h-56 sm:h-64 object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div class="rounded-2xl overflow-hidden border border-border/30 shadow-lg animate-on-scroll delay-2">
          <img
            src="/img/fotos/stahlleichtbauweise-konstruktion_1949.jpg"
            alt="Stahlleichtbau Innenausbau — Sanitärinstallation"
            loading="lazy"
            class="w-full h-56 sm:h-64 object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
useScrollAnimation()

const advantages = [
  {
    icon: 'M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z',
    title: 'Wetterunabhängig',
    text: 'Montage auch bei Regen, ohne Trocknungszeiten.'
  },
  {
    icon: 'M11.42 15.17l-5.658-5.66a2.12 2.12 0 010-3l1.532-1.531a2.12 2.12 0 013 0L12 6.684l1.706-1.706a2.12 2.12 0 013 0l1.532 1.532a2.12 2.12 0 010 3L12.58 15.17a1.636 1.636 0 01-1.16.48 1.636 1.636 0 01-1.16-.48z',
    title: 'Einfache Montage',
    text: 'Verschrauben, beplanken, fertig.'
  },
  {
    icon: 'M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z',
    title: 'Langlebig',
    text: 'Kein Rost, kein Verzug, keine Wartung.'
  },
  {
    icon: 'M4.745 3A23.933 23.933 0 003 12c0 3.183.62 6.22 1.745 9M19.255 3c1.125 2.78 1.745 5.817 1.745 9s-.62 6.22-1.745 9M12 3a23.933 23.933 0 00-1.745 9c0 3.183.62 6.22 1.745 9m0-18a23.933 23.933 0 011.745 9c0 3.183-.62 6.22-1.745 9M3.513 9h16.974M3.513 15h16.974',
    title: 'Millimeterpräzise',
    text: 'Alles passt. Kein Nachschneiden.'
  }
]
</script>
