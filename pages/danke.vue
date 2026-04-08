<template>
  <section class="min-h-[80vh] flex items-center justify-center py-20 lg:py-28 bg-bg">
    <div class="max-w-2xl mx-auto px-4 sm:px-6 text-center">
      <!-- Animated Checkmark -->
      <div class="relative w-24 h-24 mx-auto mb-8">
        <div class="absolute inset-0 bg-success/10 rounded-full animate-ping-slow"></div>
        <div class="relative w-24 h-24 bg-success/10 rounded-full flex items-center justify-center">
          <svg class="w-12 h-12 text-success checkmark-draw" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
      </div>

      <h1 class="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-4">
        Vielen Dank für Ihre Anfrage!
      </h1>
      <p class="text-font/60 text-lg mb-3 max-w-lg mx-auto">
        Wir haben Ihre Projektdaten erhalten und erstellen Ihren individuellen Preisvorschlag.
      </p>
      <p class="text-font/50 mb-10 max-w-lg mx-auto">
        Sie erhalten innerhalb von <strong class="text-font">48 Stunden</strong> eine E-Mail mit dem Angebot an die von Ihnen angegebene Adresse.
      </p>

      <!-- Next Steps -->
      <div class="bg-white rounded-2xl p-6 sm:p-8 border border-border/30 mb-10 text-left">
        <h2 class="text-lg font-bold mb-5 pb-3 border-b border-border/30">So geht es weiter</h2>
        <div class="space-y-4">
          <div class="flex gap-4">
            <div class="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
              <span class="text-accent font-bold">1</span>
            </div>
            <div>
              <p class="font-semibold text-sm">Prüfung Ihrer Daten</p>
              <p class="text-font/60 text-sm">Wir prüfen Ihre Gebäudedaten und kalkulieren das Konstruktionspaket.</p>
            </div>
          </div>
          <div class="flex gap-4">
            <div class="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
              <span class="text-accent font-bold">2</span>
            </div>
            <div>
              <p class="font-semibold text-sm">Preisvorschlag per E-Mail</p>
              <p class="text-font/60 text-sm">Sie erhalten einen detaillierten, unverbindlichen Preisvorschlag.</p>
            </div>
          </div>
          <div class="flex gap-4">
            <div class="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
              <span class="text-accent font-bold">3</span>
            </div>
            <div>
              <p class="font-semibold text-sm">Persönliches Gespräch</p>
              <p class="text-font/60 text-sm">Bei Interesse besprechen wir die nächsten Schritte — per Telefon oder vor Ort.</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Actions -->
      <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
        <a href="/"
          class="inline-flex items-center gap-2 bg-accent text-white px-8 py-3.5 rounded-lg font-bold hover:bg-accent-hover transition-all hover:shadow-lg hover:shadow-accent/20">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 17l-5-5m0 0l5-5m-5 5h12" /></svg>
          Zurück zur Startseite
        </a>
        <a href="mailto:info@stahlleichtbau-haus.de"
          class="inline-flex items-center gap-2 text-font/60 hover:text-accent transition-colors text-sm font-medium">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
          info@stahlleichtbau-haus.de
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
useHead({
  title: 'Anfrage erhalten — SWD-HAUS Stahlleichtbau',
  meta: [
    { name: 'robots', content: 'noindex, nofollow' }
  ]
})
</script>

<style scoped>
@keyframes ping-slow {
  0% { transform: scale(1); opacity: 0.4; }
  75%, 100% { transform: scale(1.4); opacity: 0; }
}
.animate-ping-slow {
  animation: ping-slow 2s cubic-bezier(0, 0, 0.2, 1) 1;
}

@keyframes draw-check {
  from { stroke-dashoffset: 30; }
  to { stroke-dashoffset: 0; }
}
.checkmark-draw {
  stroke-dasharray: 30;
  stroke-dashoffset: 30;
  animation: draw-check 0.6s ease-out 0.3s forwards;
}
</style>
