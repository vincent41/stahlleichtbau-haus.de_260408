<template>
  <section id="formular" class="py-20 lg:py-28 bg-bg">
    <div class="max-w-4xl mx-auto px-4 sm:px-6">
      <h2 class="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-center mb-4">
        Preisvorschlag für Ihr Projekt
      </h2>
      <p class="text-center text-font/60 mb-12 max-w-xl mx-auto">
        Geben Sie die Eckdaten Ihres Bauvorhabens ein. Sie erhalten innerhalb von 48 Stunden einen unverbindlichen Preisvorschlag per Mail.
      </p>

      <!-- Step Indicator -->
      <div class="flex items-center justify-center gap-3 mb-10">
        <button type="button" @click="step = 1"
          class="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all"
          :class="step === 1 ? 'bg-accent text-white shadow-lg shadow-accent/20' : 'bg-white text-font/50 border border-border/30 hover:border-accent/30'">
          <span class="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold" :class="step === 1 ? 'bg-white/20' : 'bg-bg'">1</span>
          Gebäudedaten
        </button>
        <div class="w-8 h-0.5 bg-border/50"></div>
        <button type="button" @click="step1Valid ? step = 2 : null"
          class="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all"
          :class="[step === 2 ? 'bg-accent text-white shadow-lg shadow-accent/20' : 'bg-white text-font/50 border border-border/30', step1Valid && step !== 2 ? 'hover:border-accent/30 cursor-pointer' : step !== 2 ? 'opacity-50 cursor-not-allowed' : '']">
          <span class="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold" :class="step === 2 ? 'bg-white/20' : 'bg-bg'">2</span>
          Kontaktdaten
        </button>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-5 gap-8">
        <!-- ===== Volumen-Visualisierung ===== -->
        <div class="lg:col-span-2 flex flex-col items-center justify-start animate-on-scroll">
          <div class="bg-white rounded-2xl p-6 border border-border/30 w-full text-center sticky top-24">
            <p class="text-sm text-font/50 mb-2">Gebäudevolumen</p>

            <!-- SVG Isometric -->
            <svg viewBox="0 0 300 260" class="w-full max-w-[280px] mx-auto mb-4" xmlns="http://www.w3.org/2000/svg">
              <!-- Ground shadow -->
              <polygon :points="groundPts" fill="#2C2C2C" fill-opacity="0.04" />

              <!-- Box: right wall -->
              <polygon :points="rightWallPts" fill="#A6111B" fill-opacity="0.10" stroke="#A6111B" stroke-opacity="0.25" stroke-width="0.8" />
              <!-- Box: front wall -->
              <polygon :points="frontWallPts" fill="#A6111B" fill-opacity="0.06" stroke="#A6111B" stroke-opacity="0.3" stroke-width="0.8" />

              <!-- Geschoss lines front -->
              <line v-for="(ln, i) in geschossLinesFront" :key="'gf'+i"
                :x1="ln.x1" :y1="ln.y1" :x2="ln.x2" :y2="ln.y2"
                stroke="#A6111B" stroke-opacity="0.15" stroke-width="0.6" stroke-dasharray="4 3" />
              <!-- Geschoss lines right -->
              <line v-for="(ln, i) in geschossLinesRight" :key="'gr'+i"
                :x1="ln.x1" :y1="ln.y1" :x2="ln.x2" :y2="ln.y2"
                stroke="#A6111B" stroke-opacity="0.1" stroke-width="0.6" stroke-dasharray="4 3" />

              <!-- Kniestock lines -->
              <line v-if="kniestockLnF" :x1="kniestockLnF.x1" :y1="kniestockLnF.y1" :x2="kniestockLnF.x2" :y2="kniestockLnF.y2"
                stroke="#EAB308" stroke-opacity="0.5" stroke-width="0.8" stroke-dasharray="3 2" />
              <line v-if="kniestockLnR" :x1="kniestockLnR.x1" :y1="kniestockLnR.y1" :x2="kniestockLnR.x2" :y2="kniestockLnR.y2"
                stroke="#EAB308" stroke-opacity="0.35" stroke-width="0.8" stroke-dasharray="3 2" />

              <!-- Roof: Flachdach -->
              <polygon v-if="form.dachtyp === 'flachdach'" :points="topFacePts"
                fill="#A6111B" fill-opacity="0.07" stroke="#A6111B" stroke-opacity="0.2" stroke-width="0.8" />

              <!-- Roof: Satteldach -->
              <template v-if="form.dachtyp === 'satteldach' && giebelH > 0">
                <polygon :points="satteldachRight" fill="#A6111B" fill-opacity="0.13" stroke="#A6111B" stroke-opacity="0.2" stroke-width="0.8" />
                <polygon :points="satteldachFront" fill="#A6111B" fill-opacity="0.07" stroke="#A6111B" stroke-opacity="0.3" stroke-width="0.8" />
                <line :x1="ridgePts[0]" :y1="ridgePts[1]" :x2="ridgePts[2]" :y2="ridgePts[3]"
                  stroke="#A6111B" stroke-opacity="0.4" stroke-width="1.2" />
              </template>

              <!-- Roof: Walmdach -->
              <template v-if="form.dachtyp === 'walmdach' && giebelH > 0">
                <polygon :points="walmRight" fill="#A6111B" fill-opacity="0.13" stroke="#A6111B" stroke-opacity="0.2" stroke-width="0.8" />
                <polygon :points="walmFront" fill="#A6111B" fill-opacity="0.07" stroke="#A6111B" stroke-opacity="0.3" stroke-width="0.8" />
                <line v-if="walmRidgePts" :x1="walmRidgePts[0]" :y1="walmRidgePts[1]" :x2="walmRidgePts[2]" :y2="walmRidgePts[3]"
                  stroke="#A6111B" stroke-opacity="0.4" stroke-width="1.2" />
              </template>

              <!-- Roof: Zeltdach -->
              <template v-if="form.dachtyp === 'zeltdach' && giebelH > 0">
                <polygon :points="zeltRight" fill="#A6111B" fill-opacity="0.13" stroke="#A6111B" stroke-opacity="0.2" stroke-width="0.8" />
                <polygon :points="zeltFront" fill="#A6111B" fill-opacity="0.07" stroke="#A6111B" stroke-opacity="0.3" stroke-width="0.8" />
              </template>
            </svg>

            <!-- Volume display -->
            <p class="text-3xl font-black text-accent transition-all duration-300">
              {{ volumeDisplayM3 }} m³
            </p>
            <p class="text-xs text-font/40 mt-1">
              {{ flaecheM2 }} m² Grundfläche · {{ form.anzahlGeschosse }} {{ form.anzahlGeschosse === 1 ? 'Geschoss' : 'Geschosse' }}
              <span v-if="form.kniestock && kniestockCm > 0"> · KS {{ form.kniestockHoehe }}cm</span>
            </p>

            <!-- Dimension cards -->
            <div v-if="form.breite && form.laenge" class="mt-3 grid grid-cols-3 gap-2 text-xs">
              <div class="bg-bg rounded-lg p-2">
                <p class="text-font/40">Breite</p>
                <p class="font-bold">{{ (Number(form.breite) / 100).toFixed(1) }}m</p>
              </div>
              <div class="bg-bg rounded-lg p-2">
                <p class="text-font/40">Länge</p>
                <p class="font-bold">{{ (Number(form.laenge) / 100).toFixed(1) }}m</p>
              </div>
              <div class="bg-bg rounded-lg p-2">
                <p class="text-font/40">Firsthöhe</p>
                <p class="font-bold">{{ ((wallHeightCm + giebelH) / 100).toFixed(1) }}m</p>
              </div>
            </div>

            <!-- Volume breakdown -->
            <div v-if="vGesamt > 0" class="mt-3 text-[11px] text-font/40 space-y-0.5 border-t border-border/20 pt-3">
              <div class="flex justify-between"><span>Geschosse ({{ form.anzahlGeschosse }}x)</span><span>{{ fmtVol(vGeschoss) }} m³</span></div>
              <div v-if="vKniestock > 0" class="flex justify-between"><span>Kniestock</span><span>{{ fmtVol(vKniestock) }} m³</span></div>
              <div v-if="vDach > 0" class="flex justify-between"><span>{{ dachLabel }}</span><span>{{ fmtVol(vDach) }} m³</span></div>
              <div class="flex justify-between font-bold text-font/70 pt-1 border-t border-border/20"><span>Gesamt</span><span>{{ fmtVol(vGesamt) }} m³</span></div>
            </div>
          </div>
        </div>

        <!-- ===== Formular ===== -->
        <form @submit.prevent="handleSubmit" class="lg:col-span-3 bg-white rounded-2xl p-6 sm:p-10 border border-border/30 shadow-sm animate-on-scroll delay-1">

          <!-- ====== SCHRITT 1 ====== -->
          <div v-show="step === 1">
            <h3 class="text-lg font-bold mb-6 pb-3 border-b border-border/30">Gebäudemaße</h3>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
              <div>
                <label class="block text-sm font-medium mb-1.5">Gebäudebreite (cm)</label>
                <input v-model.number="form.breite" type="number" step="1" min="200" placeholder="z.B. 1000"
                  class="inp" />
              </div>
              <div>
                <label class="block text-sm font-medium mb-1.5">Gebäudelänge (cm)</label>
                <input v-model.number="form.laenge" type="number" step="1" min="200" placeholder="z.B. 1200"
                  class="inp" />
              </div>
            </div>

            <!-- Geschosse -->
            <h3 class="text-lg font-bold mb-6 pb-3 border-b border-border/30">Geschosse</h3>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
              <div>
                <label class="block text-sm font-medium mb-1.5">Geschosshöhe (cm)</label>
                <input v-model.number="form.geschossHoehe" type="number" step="1" min="200" max="500" placeholder="275"
                  class="inp" />
                <p class="text-xs text-font/40 mt-1">+ 45cm Zwischendecke = {{ (Number(form.geschossHoehe) || 0) + 45 }}cm</p>
              </div>
              <div>
                <label class="block text-sm font-medium mb-3">Anzahl Geschosse</label>
                <div class="flex gap-2">
                  <button v-for="n in 4" :key="n" type="button" @click="form.anzahlGeschosse = n"
                    class="flex-1 h-12 rounded-lg font-bold text-lg transition-all"
                    :class="form.anzahlGeschosse === n ? 'bg-accent text-white shadow-md shadow-accent/20' : 'bg-bg border border-border hover:border-accent/30'">
                    {{ n }}
                  </button>
                </div>
              </div>
            </div>

            <!-- Kniestock -->
            <div class="bg-bg rounded-lg p-4 border border-border/30 mb-8">
              <div class="flex items-center justify-between">
                <label class="flex items-center gap-2 cursor-pointer">
                  <input v-model="form.kniestock" type="checkbox" class="accent-accent w-4 h-4" />
                  <span class="text-sm font-medium">Kniestock</span>
                </label>
                <input v-if="form.kniestock" v-model.number="form.kniestockHoehe" type="number" placeholder="Höhe (cm)" min="10" max="200"
                  class="w-36 px-3 py-2 rounded-lg border border-border bg-white focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors text-sm text-right" />
              </div>
            </div>

            <!-- Dach -->
            <h3 class="text-lg font-bold mb-6 pb-3 border-b border-border/30">Dach</h3>

            <div class="mb-6">
              <label class="block text-sm font-medium mb-3">Dachform</label>
              <div class="grid grid-cols-2 sm:grid-cols-4 gap-2">
                <button v-for="d in dachTypen" :key="d.value" type="button" @click="form.dachtyp = d.value"
                  class="border-2 rounded-lg p-3 text-center transition-all"
                  :class="form.dachtyp === d.value ? 'border-accent bg-accent/5' : 'border-border/30 hover:border-accent/20'">
                  <svg class="w-12 h-8 mx-auto mb-1" viewBox="0 0 48 32">
                    <rect x="10" y="16" width="28" height="14" fill="none" stroke="currentColor" stroke-width="1.2" stroke-opacity="0.25" rx="1" />
                    <path :d="d.roofPath" fill="none" :stroke="form.dachtyp === d.value ? '#A6111B' : 'currentColor'" stroke-width="2" stroke-linejoin="round" />
                  </svg>
                  <span class="text-xs font-medium">{{ d.label }}</span>
                </button>
              </div>
            </div>

            <div v-if="form.dachtyp !== 'flachdach'" class="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-4">
              <div>
                <label class="block text-sm font-medium mb-1.5">Dachneigung (°)</label>
                <input v-model.number="form.dachneigung" type="number" step="0.5" min="5" max="60" placeholder="z.B. 35"
                  class="inp" />
                <p v-if="giebelH > 0" class="text-xs text-font/40 mt-1">Firsthöhe: {{ (giebelH / 100).toFixed(2) }}m</p>
              </div>
              <div>
                <label class="block text-sm font-medium mb-1.5">Dachüberstand (cm)</label>
                <input v-model.number="form.dachuberstand" type="number" min="0" max="200" placeholder="z.B. 40"
                  class="inp" />
              </div>
            </div>

            <!-- Weiter -->
            <button type="button" @click="goToStep2"
              class="w-full mt-8 bg-accent text-white py-4 rounded-lg font-bold text-lg hover:bg-accent-hover transition-all hover:shadow-lg hover:shadow-accent/20 flex items-center justify-center gap-2">
              Weiter zu Kontaktdaten
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
            </button>
          </div>

          <!-- ====== SCHRITT 2 ====== -->
          <div v-show="step === 2">
            <!-- Zusammenfassung -->
            <div class="bg-bg rounded-xl p-4 mb-8 border border-border/30">
              <div class="flex items-center justify-between mb-2">
                <p class="text-sm font-semibold text-font/70">Ihre Gebäudedaten</p>
                <button type="button" @click="step = 1" class="text-accent text-xs font-semibold hover:text-accent-hover transition-colors">Bearbeiten</button>
              </div>
              <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                <div><p class="text-font/40">Maße</p><p class="font-bold">{{ (Number(form.breite)/100).toFixed(1) }} x {{ (Number(form.laenge)/100).toFixed(1) }}m</p></div>
                <div><p class="text-font/40">Geschosse</p><p class="font-bold">{{ form.anzahlGeschosse }} x {{ form.geschossHoehe }}cm</p></div>
                <div><p class="text-font/40">Dach</p><p class="font-bold">{{ dachLabel }}{{ form.dachneigung ? ` ${form.dachneigung}°` : '' }}</p></div>
                <div><p class="text-font/40">Volumen</p><p class="font-bold text-accent">{{ volumeDisplayM3 }} m³</p></div>
              </div>
            </div>

            <h3 class="text-lg font-bold mb-6 pb-3 border-b border-border/30">Kontaktdaten</h3>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">
              <div>
                <label class="block text-sm font-medium mb-1.5">Firma <span class="text-accent">*</span></label>
                <input v-model="form.firma" type="text" required class="inp" />
              </div>
              <div>
                <label class="block text-sm font-medium mb-1.5">Ansprechpartner <span class="text-accent">*</span></label>
                <input v-model="form.ansprechpartner" type="text" required class="inp" />
              </div>
              <div>
                <label class="block text-sm font-medium mb-1.5">E-Mail <span class="text-accent">*</span></label>
                <input v-model="form.email" type="email" required class="inp" />
              </div>
              <div>
                <label class="block text-sm font-medium mb-1.5">Telefon <span class="text-font/40">(optional)</span></label>
                <input v-model="form.telefon" type="tel" class="inp" />
              </div>
            </div>

            <!-- Nachricht -->
            <div class="mb-6">
              <label class="block text-sm font-medium mb-1.5">Nachricht <span class="text-font/40">(optional)</span></label>
              <textarea v-model="form.nachricht" rows="4" placeholder="Besonderheiten, Wünsche oder Fragen zu Ihrem Bauvorhaben..."
                class="inp resize-none"></textarea>
            </div>

            <!-- Datei-Upload -->
            <div class="mb-8">
              <label class="block text-sm font-medium mb-1.5">Bauplan anhängen <span class="text-font/40">(optional)</span></label>
              <div
                class="border-2 border-dashed border-border rounded-lg p-6 text-center cursor-pointer hover:border-accent/40 transition-colors bg-bg"
                :class="{ 'border-accent/40 bg-accent/5': dragOver }"
                @click="($refs.fileInput as HTMLInputElement).click()"
                @dragover.prevent="dragOver = true"
                @dragleave="dragOver = false"
                @drop.prevent="handleDrop"
              >
                <input ref="fileInput" type="file" multiple accept=".pdf,.dwg,.dxf,.ifc,.jpg,.jpeg,.png" class="hidden" @change="handleFileSelect" />
                <svg class="w-8 h-8 text-font/30 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
                </svg>
                <p class="text-sm text-font/50"><span class="text-accent font-semibold">Dateien auswählen</span> oder hierher ziehen</p>
                <p class="text-xs text-font/30 mt-1">PDF, DWG, DXF, IFC, JPG, PNG (max. 20 MB)</p>
              </div>
              <div v-if="uploadedFiles.length > 0" class="mt-3 space-y-2">
                <div v-for="(file, i) in uploadedFiles" :key="i"
                  class="flex items-center justify-between bg-bg rounded-lg px-4 py-2.5 border border-border/30">
                  <div class="flex items-center gap-2 min-w-0">
                    <svg class="w-4 h-4 text-accent shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                    <span class="text-sm truncate">{{ file.name }}</span>
                    <span class="text-xs text-font/40 shrink-0">{{ formatFileSize(file.size) }}</span>
                  </div>
                  <button type="button" @click="removeFile(i)" class="text-font/30 hover:text-error transition-colors p-1">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
                  </button>
                </div>
              </div>
            </div>

            <!-- Buttons -->
            <div class="flex gap-4">
              <button type="button" @click="step = 1"
                class="px-6 py-4 rounded-lg font-semibold border border-border/30 hover:bg-bg transition-colors flex items-center gap-2">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 17l-5-5m0 0l5-5m-5 5h12" /></svg>
                Zurück
              </button>
              <button type="submit" :disabled="submitting"
                class="flex-1 bg-accent text-white py-4 rounded-lg font-bold text-lg hover:bg-accent-hover transition-all hover:shadow-lg hover:shadow-accent/20 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2">
                <svg v-if="submitting" class="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" /><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>
                {{ submitting ? 'Wird gesendet...' : 'Preisvorschlag anfordern' }}
              </button>
            </div>
          </div>
        </form>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
useScrollAnimation()

// ── State ──
const router = useRouter()
const submitting = ref(false)
const step = ref(1)
const dragOver = ref(false)
const fileInput = ref<HTMLInputElement | null>(null)
const uploadedFiles = ref<File[]>([])

const form = reactive({
  breite: null as number | null,          // cm
  laenge: null as number | null,          // cm
  geschossHoehe: 275,                     // cm
  anzahlGeschosse: 1,
  kniestock: false,
  kniestockHoehe: null as number | null,  // cm
  dachtyp: 'satteldach' as 'flachdach' | 'satteldach' | 'walmdach' | 'zeltdach',
  dachneigung: null as number | null,     // Grad
  dachuberstand: null as number | null,   // cm
  firma: '',
  ansprechpartner: '',
  email: '',
  telefon: '',
  nachricht: ''
})

const ZWISCHENDECKE = 45 // cm

// ── Dachtyp-Optionen ──
const dachTypen = [
  { value: 'flachdach' as const,  label: 'Flachdach',  roofPath: 'M6 16 H42' },
  { value: 'satteldach' as const, label: 'Satteldach', roofPath: 'M6 16 L24 4 L42 16' },
  { value: 'walmdach' as const,   label: 'Walmdach',   roofPath: 'M6 16 L15 5 L33 5 L42 16' },
  { value: 'zeltdach' as const,   label: 'Zeltdach',   roofPath: 'M6 16 L24 2 L42 16' }
]

const dachLabel = computed(() => dachTypen.find(d => d.value === form.dachtyp)?.label || '')

// ── Volumen-Berechnungen (alles in cm) ──

const kniestockCm = computed(() => {
  if (!form.kniestock || !form.kniestockHoehe) return 0
  return Number(form.kniestockHoehe) || 0
})

// V_Geschoss = L * B * (H + Zwischendecke) * Stockwerke
const vGeschoss = computed(() => {
  const b = Number(form.breite) || 0
  const l = Number(form.laenge) || 0
  const h = Number(form.geschossHoehe) || 0
  return l * b * (h + ZWISCHENDECKE) * form.anzahlGeschosse // cm³
})

// V_Kniestock = L * B * H_Kniestock
const vKniestock = computed(() => {
  const b = Number(form.breite) || 0
  const l = Number(form.laenge) || 0
  return l * b * kniestockCm.value // cm³
})

// h_Giebel = (Breite / 2) * tan(Dachneigung)
const giebelH = computed(() => {
  if (form.dachtyp === 'flachdach' || !form.dachneigung) return 0
  const b = Number(form.breite) || 0
  const rad = (Number(form.dachneigung) || 0) * Math.PI / 180
  return (b / 2) * Math.tan(rad) // cm
})

// Dachvolumen
const vDach = computed(() => {
  const b = Number(form.breite) || 0
  const l = Number(form.laenge) || 0
  const h = giebelH.value
  if (h <= 0) return 0

  switch (form.dachtyp) {
    case 'satteldach':
      return 0.5 * l * b * h
    case 'walmdach':
      return (h * b / 6) * (3 * l - b)
    case 'zeltdach':
      return (1 / 3) * l * b * h
    default:
      return 0
  }
})

const vGesamt = computed(() => vGeschoss.value + vKniestock.value + vDach.value) // cm³

// Wandhöhe (Geschosse + Kniestock)
const wallHeightCm = computed(() => {
  return ((Number(form.geschossHoehe) || 0) + ZWISCHENDECKE) * form.anzahlGeschosse + kniestockCm.value
})

// Grundfläche
const flaecheM2 = computed(() => {
  const b = Number(form.breite) || 0
  const l = Number(form.laenge) || 0
  return (b * l / 10000).toFixed(1) // m²
})

const volumeDisplayM3 = computed(() => {
  const m3 = vGesamt.value / 1000000
  return m3 > 0 ? m3.toLocaleString('de-DE', { maximumFractionDigits: 1 }) : '—'
})

function fmtVol(cm3: number): string {
  return (cm3 / 1000000).toLocaleString('de-DE', { maximumFractionDigits: 1 })
}

// ── SVG Isometric Helpers ──

const vizScale = computed(() => {
  const b = Number(form.breite) || 1000
  const l = Number(form.laenge) || 1000
  const h = wallHeightCm.value + giebelH.value
  const isoW = (b + l) * 0.866
  const isoH = (b + l) * 0.5 + h
  return Math.min(220 / isoW, 180 / isoH, 0.15)
})

// Scaled dimensions
const sB = computed(() => (Number(form.breite) || 1000) * vizScale.value)
const sL = computed(() => (Number(form.laenge) || 1000) * vizScale.value)
const sWH = computed(() => wallHeightCm.value * vizScale.value)
const sGH = computed(() => giebelH.value * vizScale.value)

function iso(x: number, y: number, z: number): [number, number] {
  return [
    150 + (x - y) * 0.866,
    215 - (x + y) * 0.5 - z
  ]
}

function pt(x: number, y: number, z: number): string {
  const [sx, sy] = iso(x, y, z)
  return `${sx.toFixed(1)},${sy.toFixed(1)}`
}

function pts(...coords: [number, number, number][]): string {
  return coords.map(c => pt(c[0], c[1], c[2])).join(' ')
}

function ln(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number) {
  const [sx1, sy1] = iso(x1, y1, z1)
  const [sx2, sy2] = iso(x2, y2, z2)
  return { x1: sx1, y1: sy1, x2: sx2, y2: sy2 }
}

// ── SVG Polygons ──

const groundPts = computed(() => {
  const b = sB.value, l = sL.value
  return pts([0,0,0],[b,0,0],[b,l,0],[0,l,0])
})

const frontWallPts = computed(() => {
  const b = sB.value, h = sWH.value
  return pts([0,0,0],[b,0,0],[b,0,h],[0,0,h])
})

const rightWallPts = computed(() => {
  const b = sB.value, l = sL.value, h = sWH.value
  return pts([b,0,0],[b,l,0],[b,l,h],[b,0,h])
})

const topFacePts = computed(() => {
  const b = sB.value, l = sL.value, h = sWH.value
  return pts([0,0,h],[b,0,h],[b,l,h],[0,l,h])
})

// Satteldach
const satteldachRight = computed(() => {
  const b = sB.value, l = sL.value, h = sWH.value, g = sGH.value
  return pts([b,0,h],[b,l,h],[b/2,l,h+g],[b/2,0,h+g])
})

const satteldachFront = computed(() => {
  const b = sB.value, h = sWH.value, g = sGH.value
  return pts([0,0,h],[b,0,h],[b/2,0,h+g])
})

const ridgePts = computed(() => {
  const b = sB.value, l = sL.value, h = sWH.value, g = sGH.value
  const [x1, y1] = iso(b/2, 0, h+g)
  const [x2, y2] = iso(b/2, l, h+g)
  return [x1, y1, x2, y2]
})

// Walmdach
const walmOff = computed(() => Math.min(sB.value / 2, sL.value / 2))

const walmRight = computed(() => {
  const b = sB.value, l = sL.value, h = sWH.value, g = sGH.value, o = walmOff.value
  return pts([b,0,h],[b,l,h],[b/2,l-o,h+g],[b/2,o,h+g])
})

const walmFront = computed(() => {
  const b = sB.value, h = sWH.value, g = sGH.value, o = walmOff.value
  return pts([0,0,h],[b,0,h],[b/2,o,h+g])
})

const walmRidgePts = computed(() => {
  const b = sB.value, l = sL.value, h = sWH.value, g = sGH.value, o = walmOff.value
  if (l <= b) return null // degenerated to zeltdach
  const [x1, y1] = iso(b/2, o, h+g)
  const [x2, y2] = iso(b/2, l-o, h+g)
  return [x1, y1, x2, y2]
})

// Zeltdach
const zeltRight = computed(() => {
  const b = sB.value, l = sL.value, h = sWH.value, g = sGH.value
  return pts([b,0,h],[b,l,h],[b/2,l/2,h+g])
})

const zeltFront = computed(() => {
  const b = sB.value, l = sL.value, h = sWH.value, g = sGH.value
  return pts([0,0,h],[b,0,h],[b/2,l/2,h+g])
})

// ── SVG Lines (Geschoss / Kniestock) ──

const geschossEinzel = computed(() => ((Number(form.geschossHoehe) || 275) + ZWISCHENDECKE) * vizScale.value)

const geschossLinesFront = computed(() => {
  const lines = []
  const b = sB.value
  for (let i = 1; i < form.anzahlGeschosse; i++) {
    const z = geschossEinzel.value * i
    lines.push(ln(0, 0, z, b, 0, z))
  }
  return lines
})

const geschossLinesRight = computed(() => {
  const lines = []
  const b = sB.value, l = sL.value
  for (let i = 1; i < form.anzahlGeschosse; i++) {
    const z = geschossEinzel.value * i
    lines.push(ln(b, 0, z, b, l, z))
  }
  return lines
})

const kniestockZ = computed(() => {
  if (!form.kniestock || kniestockCm.value <= 0) return 0
  return geschossEinzel.value * form.anzahlGeschosse
})

const kniestockLnF = computed(() => {
  if (!kniestockZ.value) return null
  return ln(0, 0, kniestockZ.value, sB.value, 0, kniestockZ.value)
})

const kniestockLnR = computed(() => {
  if (!kniestockZ.value) return null
  return ln(sB.value, 0, kniestockZ.value, sB.value, sL.value, kniestockZ.value)
})

// ── Step-Validierung ──

const step1Valid = computed(() => {
  return !!(form.breite && form.laenge && form.geschossHoehe)
})

function goToStep2() {
  if (step1Valid.value) {
    step.value = 2
    const el = document.getElementById('formular')
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

// ── Datei-Upload ──

function handleFileSelect(event: Event) {
  const input = event.target as HTMLInputElement
  if (input.files) addFiles(Array.from(input.files))
}

function handleDrop(event: DragEvent) {
  dragOver.value = false
  if (event.dataTransfer?.files) addFiles(Array.from(event.dataTransfer.files))
}

function addFiles(files: File[]) {
  const maxSize = 20 * 1024 * 1024
  const allowed = ['.pdf', '.dwg', '.dxf', '.ifc', '.jpg', '.jpeg', '.png']
  for (const file of files) {
    const ext = '.' + file.name.split('.').pop()?.toLowerCase()
    if (file.size <= maxSize && allowed.includes(ext)) {
      uploadedFiles.value.push(file)
    }
  }
}

function removeFile(index: number) { uploadedFiles.value.splice(index, 1) }

function formatFileSize(bytes: number): string {
  if (bytes < 1024) return bytes + ' B'
  if (bytes < 1048576) return Math.round(bytes / 1024) + ' KB'
  return (bytes / 1048576).toFixed(1) + ' MB'
}

// ── Submit ──

async function handleSubmit() {
  submitting.value = true
  // TODO: Backend-Anbindung (E-Mail senden via API)
  // Simulate network delay for UX feedback
  await new Promise(resolve => setTimeout(resolve, 1200))
  router.push('/danke')
}
</script>

<style scoped>
.inp {
  @apply w-full px-4 py-3 rounded-lg border border-border bg-bg focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors;
}
</style>
