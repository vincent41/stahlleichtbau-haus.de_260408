<template>
  <section class="relative py-20 lg:py-28 overflow-hidden">
    <!-- Background -->
    <div class="absolute inset-0">
      <img
        src="/img/fotos/stahlleichtbauhaus_kontakt_sm.jpg"
        alt="Stahlleichtbau Baustelle"
        loading="lazy"
        class="w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-font/80"></div>
    </div>

    <!-- Content -->
    <div class="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
      <h2 class="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-4 animate-on-scroll">
        Projekt eingeben, Preisvorschlag erhalten.
      </h2>
      <p class="text-white/70 mb-10 text-lg max-w-xl mx-auto animate-on-scroll delay-1">
        Geben Sie die Eckdaten Ihres Bauvorhabens ein. Innerhalb von 48 Stunden haben Sie einen konkreten Preisvorschlag in Ihrem Postfach.
      </p>
      <a
        href="#formular"
        class="inline-block bg-accent text-white px-10 py-4 rounded-lg text-lg font-bold hover:bg-accent-hover transition-all hover:scale-105 shadow-lg shadow-accent/30 animate-on-scroll delay-2"
      >
        Zum Auftragsformular
      </a>
    </div>
  </section>
</template>

<script setup>
useScrollAnimation()
</script>
