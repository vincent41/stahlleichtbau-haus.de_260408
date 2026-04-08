<template>
  <section id="ablauf" class="py-20 lg:py-28 bg-white">
    <div class="max-w-4xl mx-auto px-4 sm:px-6">
      <h2 class="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-center mb-4 animate-on-scroll">
        So läuft die Abwicklung
      </h2>
      <p class="text-center text-font/60 mb-16 max-w-xl mx-auto animate-on-scroll">
        Wenn der Preisvorschlag für Sie passt, arbeiten wir in vier klaren Schritten.
      </p>

      <!-- Timeline -->
      <div class="relative">
        <!-- Vertical line -->
        <div class="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-border/50 -translate-x-1/2"></div>

        <div class="space-y-8 md:space-y-0">
          <div v-for="(step, i) in steps" :key="i"
            class="md:grid md:grid-cols-2 md:gap-8 relative md:pb-16 last:pb-0 animate-on-scroll"
            :class="`delay-${i + 1}`"
            <!-- Dot -->
            <div class="hidden md:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 bg-accent rounded-full items-center justify-center text-white font-bold z-10 shadow-lg shadow-accent/20">
              {{ step.percent }}
            </div>

            <!-- Content alternating -->
            <div :class="[i % 2 === 0 ? 'md:text-right md:pr-14' : 'md:col-start-2 md:pl-14']">
              <div class="bg-bg rounded-xl p-6 border border-border/30 inline-block w-full">
                <!-- Mobile percent badge -->
                <div class="md:hidden inline-flex items-center gap-2 bg-accent text-white text-sm font-bold px-3 py-1 rounded-full mb-3">
                  {{ step.percent }}
                </div>
                <h3 class="text-lg font-bold mb-1">{{ step.title }}</h3>
                <p class="text-font/70 text-sm">{{ step.text }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <p class="text-center text-font/60 mt-12 text-sm bg-bg rounded-xl p-4 border border-border/30 animate-on-scroll delay-5">
        Keine versteckten Kosten. Der Preis im Angebot ist der Preis, der gilt.
      </p>
    </div>
  </section>
</template>

<script setup>
useScrollAnimation()

const steps = [
  { percent: '15%', title: 'Anzahlung', text: 'Die Konstruktionsplanung startet.' },
  { percent: '50%', title: 'Vor Produktion', text: 'Die Profile werden gefertigt.' },
  { percent: '20%', title: 'Vor Lieferung', text: 'Ware wird versandfertig gemacht.' },
  { percent: '15%', title: 'Nach Lieferung', text: 'Wenn alles bei Ihnen auf der Baustelle ist.' }
]
</script>
