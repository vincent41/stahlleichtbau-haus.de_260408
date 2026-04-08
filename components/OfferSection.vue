<template>
  <section id="angebot" class="py-20 lg:py-28 bg-white">
    <div class="max-w-5xl mx-auto px-4 sm:px-6">
      <h2 class="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-center mb-4 animate-on-scroll">
        Was Sie von uns bekommen
      </h2>
      <p class="text-center text-font/60 mb-16 max-w-2xl mx-auto animate-on-scroll">
        Ein fertiges Stahlleichtbau-Konstruktionspaket — von der Planung bis zur Einweisung.
      </p>

      <!-- Service Grid mit Fotos -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
        <div
          v-for="(item, i) in items"
          :key="i"
          class="group bg-bg rounded-xl overflow-hidden border border-border/30 hover:border-accent/20 transition-all hover:shadow-lg animate-on-scroll"
          :class="`delay-${i + 1}`"
        >
          <div v-if="item.img" class="h-40 overflow-hidden">
            <img :src="item.img" :alt="item.title" loading="lazy" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          </div>
          <div class="p-5">
            <div class="flex items-center gap-3 mb-2">
              <div class="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center shrink-0 icon-animate">
                <svg class="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" :d="item.icon" />
                </svg>
              </div>
              <h3 class="font-bold">{{ item.title }}</h3>
            </div>
            <p class="text-font/70 text-sm leading-relaxed">{{ item.text }}</p>
          </div>
        </div>
      </div>

      <!-- Wandaufbau -->
      <div class="bg-bg rounded-2xl border border-border/30 p-6 sm:p-8 mb-12 animate-on-scroll">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 class="text-lg font-bold mb-3">Wandaufbau im Detail</h3>
            <p class="text-font/70 text-sm leading-relaxed">
              Jedes Paket enthält detaillierte Wandaufbau-Zeichnungen — vom Ständerprofil über die Beplankung bis zur fertigen Wand.
            </p>
          </div>
          <div class="flex justify-center">
            <img
              src="/img/wandaufbauten/stahlleichtbau-wandaufbauten_2.png"
              alt="Stahlleichtbau Wandaufbau — 3D-Schnittzeichnung"
              loading="lazy"
              class="max-h-72 w-auto rounded-lg"
            />
          </div>
        </div>
      </div>

      <p class="text-center text-font/70 bg-bg rounded-xl p-5 border border-border/30 text-sm animate-on-scroll">
        Ein Paket. Ein Ansprechpartner. Alles passt zusammen.
      </p>
    </div>
  </section>
</template>

<script setup>
useScrollAnimation()

const items = [
  {
    icon: 'M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z',
    title: 'CAD-Planung',
    text: 'Komplette Konstruktionszeichnungen für Ihr Bauvorhaben.',
    img: '/img/fotos/cad-planung.jpeg'
  },
  {
    icon: 'M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25',
    title: 'Profile',
    text: 'Kaltgeformte Stahlprofile, passgenau gefertigt.',
    img: '/img/fotos/stahlprofile-lager.jpeg'
  },
  {
    icon: 'M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z',
    title: 'Aufbauplan',
    text: 'Detaillierter Plan für die Baustelle.',
    img: '/img/fotos/aufbauplan-grundriss.jpg'
  },
  {
    icon: 'M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z',
    title: 'Wandaufbau-Zeichnungen',
    text: 'Alle Schichten dokumentiert.',
    img: '/img/fotos/stahlrahmen-detail.jpeg'
  },
  {
    icon: 'M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z',
    title: 'Einweisung vor Ort',
    text: 'Persönliche Schulung beim ersten Aufbau.',
    img: '/img/fotos/team-baustelle.jpg'
  },
  {
    icon: 'M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z',
    title: 'Technischer Support',
    text: 'Jederzeit erreichbar bei Fragen.',
    img: '/img/fotos/werkzeug-baustelle.jpg'
  }
]
</script>
