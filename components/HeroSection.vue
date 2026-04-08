<template>
  <section class="relative min-h-[90vh] flex items-center overflow-hidden">
    <!-- Background -->
    <div class="absolute inset-0">
      <img
        src="/img/fotos/stahlleichtbauweise-konstruktion_5665.jpg"
        alt="Stahlleichtbau Konstruktion — Innenansicht eines Rohbaus mit Stahlprofilen von SWD-HAUS in Deutschland"
        class="w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-font/80"></div>
    </div>

    <!-- Content -->
    <div class="relative max-w-4xl mx-auto px-4 sm:px-6 text-center py-20">
      <h1 class="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight animate-on-scroll">
        Stahlleichtbau als neue Geschäftssparte.<br class="hidden sm:block" />
        Mehr Aufträge, bessere Margen.
      </h1>
      <p class="text-white/70 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed animate-on-scroll delay-1">
        Sie bekommen von uns Konstruktionsplanung, Profile und technischen Support als fertiges Paket. Sie bauen, wir liefern die Grundlage — deutschlandweit.
      </p>
      <div class="flex flex-col sm:flex-row items-center justify-center gap-4 animate-on-scroll delay-2">
        <a
          href="#formular"
          class="inline-block bg-accent text-white px-10 py-4 rounded-lg text-lg font-bold hover:bg-accent-hover transition-all hover:scale-105 shadow-lg shadow-accent/30"
        >
          Preisvorschlag anfordern
        </a>
      </div>
      <p class="mt-6 text-white/50 text-sm">
        Sie suchen ein Bauunternehmen für Ihr Eigenheim?
        <a href="https://swd-haus.de" target="_blank" rel="noopener" class="underline hover:text-white/80 transition-colors">
          SWD-HAUS.de
        </a>
      </p>
    </div>
  </section>
</template>

<script setup>
useScrollAnimation()
</script>
