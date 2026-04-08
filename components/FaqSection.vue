<template>
  <section id="faq" class="py-20 lg:py-28 bg-white">
    <div class="max-w-3xl mx-auto px-4 sm:px-6">
      <h2 class="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-center mb-16 animate-on-scroll">
        Häufige Fragen
      </h2>

      <div class="space-y-3">
        <div v-for="(faq, i) in faqs" :key="i"
          class="animate-on-scroll"
          :class="`delay-${i + 1}`">
          <div
            class="border border-border/30 rounded-xl overflow-hidden transition-colors"
            :class="openIndex === i ? 'bg-bg' : 'bg-white hover:bg-bg/50'">
            <button
              @click="toggle(i)"
              class="w-full flex items-center justify-between px-6 py-5 text-left"
            >
              <span class="font-semibold pr-4">{{ faq.question }}</span>
              <svg
                class="w-5 h-5 shrink-0 text-accent transition-transform duration-300"
                :class="{ 'rotate-180': openIndex === i }"
                fill="none" stroke="currentColor" viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <Transition name="accordion">
              <div v-show="openIndex === i" class="px-6 pb-5">
                <p class="text-font/70 leading-relaxed text-sm">{{ faq.answer }}</p>
              </div>
            </Transition>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
useScrollAnimation()

const openIndex = ref<number | null>(null)

function toggle(i: number) {
  openIndex.value = openIndex.value === i ? null : i
}

const faqs = [
  {
    question: 'Ist Stahlleichtbau nicht zu kompliziert für meinen Betrieb?',
    answer: 'Nein. Wenn Ihre Mannschaft mit Ständerwerk und Beplankung arbeiten kann, ist der Umstieg überschaubar. Die Bauweise ist systematisch: Profile nach Plan verschrauben, beplanken, fertig. Beim ersten Projekt unterstützen wir Sie mit Anleitungen und technischem Support.'
  },
  {
    question: 'Meine Leute haben damit noch nie gearbeitet.',
    answer: 'Das ist bei fast jedem Betrieb so, der einsteigt. Deshalb liefern wir Aufbaupläne und Wandaufbau-Zeichnungen mit. Beim ersten Projekt kommen wir persönlich auf Ihre Baustelle und weisen Ihr Team ein. Danach sitzt der Ablauf.'
  },
  {
    question: 'Lohnt sich das bei meiner Firmengröße?',
    answer: 'Stahlleichtbau funktioniert auch mit kleinen Teams. Durch das geringe Gewicht der Profile brauchen Sie keine Spezialgeräte und keine große Mannschaft. Schon ab einem Projekt pro Quartal kann sich der Einstieg rechnen.'
  },
  {
    question: 'Was kostet das?',
    answer: 'Das hängt vom Projekt ab. Füllen Sie das Auftragsformular mit den Eckdaten aus und Sie erhalten innerhalb von 48 Stunden einen konkreten Preisvorschlag per Mail. Unverbindlich.'
  },
]
</script>

<style scoped>
.accordion-enter-active, .accordion-leave-active {
  transition: all 0.3s ease;
  overflow: hidden;
}
.accordion-enter-from, .accordion-leave-to {
  opacity: 0;
  max-height: 0;
  padding-top: 0;
  padding-bottom: 0;
}
.accordion-enter-to, .accordion-leave-from {
  opacity: 1;
  max-height: 200px;
}
</style>
