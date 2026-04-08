<template>
  <div>
    <HeroSection />
    <ArgumentsSection />
    <ModelSection />
    <OfferSection />
    <AdvantagesSection />
    <FormSection />
    <PaymentSection />
    <TargetSection />
    <FaqSection />
    <CtaSection />
  </div>
</template>

<script setup lang="ts">
// JSON-LD Structured Data: LocalBusiness + FAQPage + Service
useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': [
          // Organization / LocalBusiness
          {
            '@type': 'LocalBusiness',
            '@id': 'https://stahlleichtbau-haus.de/#organization',
            name: 'SWD-HAUS UG',
            alternateName: 'SWD-HAUS',
            url: 'https://stahlleichtbau-haus.de',
            logo: 'https://stahlleichtbau-haus.de/img/logos/logo-alternativ_dark.png',
            image: 'https://stahlleichtbau-haus.de/img/fotos/stahlleichtbauweise-konstruktion.jpg',
            description: 'Fertige Konstruktionspakete für Baufirmen: CAD-Planung, Stahlleichtbau-Profile, Aufbaupläne und technischer Support. Ihr Partner für den Einstieg in den Stahlleichtbau in Deutschland.',
            email: 'info@stahlleichtbau-haus.de',
            // TODO: Echte Adresse eintragen
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Wilhelmsfeld',
              addressRegion: 'Baden-Württemberg',
              addressCountry: 'DE'
            },
            geo: {
              '@type': 'GeoCoordinates',
              // TODO: Exakte Koordinaten eintragen
              latitude: 49.47,
              longitude: 8.76
            },
            areaServed: [
              {
                '@type': 'Country',
                name: 'Deutschland'
              },
              {
                '@type': 'State',
                name: 'Baden-Württemberg'
              },
              {
                '@type': 'State',
                name: 'Bayern'
              },
              {
                '@type': 'State',
                name: 'Nordrhein-Westfalen'
              },
              {
                '@type': 'State',
                name: 'Hessen'
              }
            ],
            priceRange: '$$',
            openingHoursSpecification: {
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
              opens: '08:00',
              closes: '17:00'
            },
            sameAs: [
              'https://swd-haus.de',
              // TODO: LinkedIn, Instagram URLs ergänzen
            ],
            knowsAbout: [
              'Stahlleichtbau',
              'Leichtstahlbau',
              'Stahl-Leichtbauweise',
              'CAD-Konstruktionsplanung',
              'Stahlprofile',
              'Trockenbau',
              'Leichtstahlbau'
            ]
          },
          // WebSite
          {
            '@type': 'WebSite',
            '@id': 'https://stahlleichtbau-haus.de/#website',
            url: 'https://stahlleichtbau-haus.de',
            name: 'SWD-HAUS — Stahlleichtbau für Baufirmen',
            publisher: { '@id': 'https://stahlleichtbau-haus.de/#organization' },
            inLanguage: 'de-DE'
          },
          // Service
          {
            '@type': 'Service',
            '@id': 'https://stahlleichtbau-haus.de/#service',
            name: 'Stahlleichtbau Konstruktionspakete',
            provider: { '@id': 'https://stahlleichtbau-haus.de/#organization' },
            description: 'Komplette Konstruktionspakete für Baufirmen: CAD-Planung, passgenau gefertigte Stahlprofile, Aufbaupläne, Wandaufbau-Zeichnungen, Einweisung vor Ort und technischer Support.',
            areaServed: {
              '@type': 'Country',
              name: 'Deutschland'
            },
            serviceType: 'Stahlleichtbau Konstruktionsplanung und Profillieferung',
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'Konstruktionspakete',
              itemListElement: [
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'CAD-Planung' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Stahlprofile passgenau gefertigt' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Aufbaupläne und Wandaufbau-Zeichnungen' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Einweisung vor Ort' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Technischer Support' } }
              ]
            }
          },
          // FAQPage — structured FAQ for rich snippets
          {
            '@type': 'FAQPage',
            '@id': 'https://stahlleichtbau-haus.de/#faq',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'Ist Stahlleichtbau nicht zu kompliziert für meinen Betrieb?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Nein. Wenn Ihre Mannschaft mit Ständerwerk und Beplankung arbeiten kann, ist der Umstieg überschaubar. Die Bauweise ist systematisch: Profile nach Plan verschrauben, beplanken, fertig. Beim ersten Projekt unterstützen wir Sie mit Anleitungen und technischem Support.'
                }
              },
              {
                '@type': 'Question',
                name: 'Meine Leute haben damit noch nie gearbeitet.',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Das ist bei fast jedem Betrieb so, der einsteigt. Deshalb liefern wir Aufbaupläne und Wandaufbau-Zeichnungen mit. Beim ersten Projekt kommen wir persönlich auf Ihre Baustelle und weisen Ihr Team ein. Danach sitzt der Ablauf.'
                }
              },
              {
                '@type': 'Question',
                name: 'Lohnt sich das bei meiner Firmengröße?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Stahlleichtbau funktioniert auch mit kleinen Teams. Durch das geringe Gewicht der Profile brauchen Sie keine Spezialgeräte und keine große Mannschaft. Schon ab einem Projekt pro Quartal kann sich der Einstieg rechnen.'
                }
              },
              {
                '@type': 'Question',
                name: 'Was kostet ein Stahlleichtbau Konstruktionspaket?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Das hängt vom Projekt ab. Füllen Sie das Auftragsformular mit den Eckdaten aus und Sie erhalten innerhalb von 48 Stunden einen konkreten Preisvorschlag per Mail. Unverbindlich.'
                }
              },
              {
                '@type': 'Question',
                name: 'Können wir Ihre Bilder für unsere Werbung nutzen?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Gerne. Wir unterstützen Sie mit umfassendem Werbematerial. Lassen Sie uns darüber sprechen.'
                }
              }
            ]
          }
        ]
      })
    }
  ]
})
</script>
