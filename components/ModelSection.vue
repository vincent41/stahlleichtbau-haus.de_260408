<template>
  <section class="py-20 lg:py-28 bg-font">
    <div class="max-w-5xl mx-auto px-4 sm:px-6">
      <h2 class="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-center text-white mb-4 animate-on-scroll">
        Stahlleichtbau in 3D erleben
      </h2>
      <p class="text-center text-white/50 mb-12 max-w-xl mx-auto animate-on-scroll">
        Drehen, zoomen und erkunden Sie eine Stahlleichtbau-Konstruktion von SWD-HAUS — direkt im Browser.
      </p>

      <div class="relative w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl animate-on-scroll delay-1">
        <div class="aspect-video">
          <iframe
            title="SWD Haus — 3D-Modell"
            class="w-full h-full"
            frameborder="0"
            allowfullscreen
            mozallowfullscreen="true"
            webkitallowfullscreen="true"
            allow="autoplay; fullscreen; xr-spatial-tracking"
            xr-spatial-tracking
            execution-while-out-of-viewport
            execution-while-not-rendered
            web-share
            loading="lazy"
            src="https://sketchfab.com/models/ba1978fcc4504d80ab2a4dc913dd5a30/embed?ui_theme=dark"
          />
        </div>
      </div>

      <p class="text-center text-white/30 text-xs mt-4">
        3D-Modell bereitgestellt via
        <a
          href="https://sketchfab.com/swd-haus"
          target="_blank"
          rel="nofollow"
          class="underline hover:text-white/50 transition-colors"
        >
          Sketchfab
        </a>
      </p>
    </div>
  </section>
</template>

<script setup>
useScrollAnimation()
</script>
