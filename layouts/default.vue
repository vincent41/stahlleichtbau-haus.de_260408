<template>
  <div class="min-h-screen bg-bg font-sans text-font">
    <!-- Header -->
    <header class="fixed top-0 left-0 right-0 z-50 bg-bg/90 backdrop-blur-md border-b border-border">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <a href="/" class="flex items-center gap-3">
          <img src="/img/logos/logo-alternativ_dark.png" alt="SWD-HAUS" class="h-9 w-9 rounded" />
          <span class="text-lg font-bold tracking-tight">stahlleichtbau-haus.de</span>
        </a>
        <nav class="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#vorteile" class="hover:text-accent transition-colors">Vorteile</a>
          <a href="#angebot" class="hover:text-accent transition-colors">Leistungen</a>
          <a href="#ablauf" class="hover:text-accent transition-colors">Ablauf</a>
          <a href="#faq" class="hover:text-accent transition-colors">FAQ</a>
          <a href="#formular" class="bg-accent text-white px-5 py-2 rounded-lg hover:bg-accent-hover transition-colors font-semibold">
            Preisvorschlag anfordern
          </a>
        </nav>
        <!-- Mobile Menu Button -->
        <button @click="mobileMenuOpen = !mobileMenuOpen" class="md:hidden p-2" aria-label="Menü">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <!-- Mobile Menu -->
      <Transition name="slide">
        <div v-if="mobileMenuOpen" class="md:hidden bg-bg border-b border-border px-4 pb-4">
          <nav class="flex flex-col gap-3 text-sm font-medium">
            <a href="#vorteile" @click="mobileMenuOpen = false" class="py-2">Vorteile</a>
            <a href="#angebot" @click="mobileMenuOpen = false" class="py-2">Leistungen</a>
            <a href="#ablauf" @click="mobileMenuOpen = false" class="py-2">Ablauf</a>
            <a href="#faq" @click="mobileMenuOpen = false" class="py-2">FAQ</a>
            <a href="#formular" @click="mobileMenuOpen = false" class="bg-accent text-white px-5 py-2.5 rounded-lg text-center font-semibold">
              Preisvorschlag anfordern
            </a>
          </nav>
        </div>
      </Transition>
    </header>

    <!-- Main Content -->
    <main class="pt-16">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="bg-font text-bg" itemscope itemtype="https://schema.org/LocalBusiness">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <img src="/img/logos/logo-alternativ_light.png" alt="SWD-HAUS Logo" class="h-10 w-10 rounded mb-4" itemprop="logo" />
            <p class="text-sm font-semibold text-white" itemprop="name">SWD-HAUS UG</p>
            <p class="text-sm text-muted">Stahlleichtbau für Baufirmen</p>
          </div>
          <div>
            <h4 class="font-bold mb-3">Kontakt</h4>
            <p class="text-sm text-muted">
              E-Mail: <a href="mailto:info@stahlleichtbau-haus.de" class="hover:text-white transition-colors" itemprop="email">info@stahlleichtbau-haus.de</a>
            </p>
            <p class="text-sm text-muted mt-1">
              Web: <a href="https://stahlleichtbau-haus.de" class="hover:text-white transition-colors" itemprop="url">stahlleichtbau-haus.de</a>
            </p>
          </div>
          <div>
            <h4 class="font-bold mb-3">Links</h4>
            <div class="flex flex-col gap-1 text-sm text-muted">
              <a href="https://swd-haus.de" target="_blank" rel="noopener" class="hover:text-white transition-colors">SWD-HAUS.de (Endkunden)</a>
              <a href="/impressum" class="hover:text-white transition-colors">Impressum</a>
              <a href="/datenschutz" class="hover:text-white transition-colors">Datenschutz</a>
            </div>
          </div>
        </div>
        <div class="border-t border-white/10 mt-8 pt-6 text-center text-sm text-muted">
          © {{ new Date().getFullYear() }} SWD-HAUS UG. Alle Rechte vorbehalten.
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
const mobileMenuOpen = ref(false)
</script>

<style>
html {
  scroll-behavior: smooth;
}
.slide-enter-active, .slide-leave-active {
  transition: all 0.3s ease;
}
.slide-enter-from, .slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* Scroll Animations */
.animate-on-scroll {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.7s ease-out, transform 0.7s ease-out;
}
.animate-on-scroll.animate-in {
  opacity: 1;
  transform: translateY(0);
}
.animate-on-scroll.delay-1 { transition-delay: 0.1s; }
.animate-on-scroll.delay-2 { transition-delay: 0.2s; }
.animate-on-scroll.delay-3 { transition-delay: 0.3s; }
.animate-on-scroll.delay-4 { transition-delay: 0.4s; }
.animate-on-scroll.delay-5 { transition-delay: 0.5s; }

/* Icon Animations */
@keyframes icon-pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.12); }
}
@keyframes icon-float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-4px); }
}
@keyframes icon-spin-in {
  from { transform: rotate(-90deg) scale(0.5); opacity: 0; }
  to { transform: rotate(0) scale(1); opacity: 1; }
}
.icon-animate {
  animation: icon-float 3s ease-in-out infinite;
}
.icon-animate:hover {
  animation: icon-pulse 0.5s ease-in-out;
}

/* Counter Animation */
@keyframes count-up {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Accessibility: Respect reduced motion preference */
@media (prefers-reduced-motion: reduce) {
  .animate-on-scroll {
    opacity: 1;
    transform: none;
    transition: none;
  }
  .icon-animate {
    animation: none;
  }
  .icon-animate:hover {
    animation: none;
  }
  html {
    scroll-behavior: auto;
  }
}

/* Focus Visibility for keyboard navigation */
:focus-visible {
  outline: 2px solid #A6111B;
  outline-offset: 2px;
  border-radius: 4px;
}
</style>
