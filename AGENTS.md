# AGENTS.md - Robin Gartenbau Website

Diese Datei enthält alle wichtigen Informationen für AI Coding Agents, die an diesem Projekt arbeiten.

---

## Projektübersicht

**Robin Garten- und Landschaftsbau** ist eine deutsche Unternehmenswebsite für einen Garten- und Landschaftsbau-Betrieb in Stadthagen, Niedersachsen.

- **Website:** https://robingartenbau.de
- **Sprache:** Deutsch (de-DE)
- **Zielgruppe:** Privatkunden und Gewerbekunden in Stadthagen und Umgebung
- **Fokus:** GDPR-Konformität, Performance (100/100 Lighthouse), Accessibility

---

## Technologie-Stack

| Komponente | Technologie | Version |
|------------|-------------|---------|
| Framework | [Astro](https://astro.build/) | ^4.15.0 |
| Styling | [Tailwind CSS](https://tailwindcss.com/) | ^3.4.0 |
| Schriftarten | @fontsource/inter (lokal) | ^5.0.0 |
| Icons | Inline SVGs | - |
| Integration | @astrojs/tailwind | ^5.1.0 |
| Sitemap | Statisch (sitemap.xml) | - |
| Formular-Service | Web3Forms | - |
| Hosting | Netlify | - |

---

## Projektstruktur

```
├── public/                      # Statische Assets
│   ├── favicon.svg              # Favicon
│   ├── fonts/                   # Lokale Schriftarten
│   └── images/                  # Bilder
│       ├── hero.png             # Hero-Bild (Startseite)
│       ├── logo.png             # Unternehmenslogo
│       ├── uberuns.png          # Bild für "Über uns" Sektion
│       ├── ref1.jpeg - ref6.jpeg # Referenzbilder Galerie
│       ├── gallery/             # Galerie-Bilder (optional)
│       └── README.md            # Bild-Dokumentation
├── src/
│   ├── components/              # Wiederverwendbare Astro-Komponenten
│   │   ├── CookieBanner.astro   # DSGVO-konformes Cookie-Banner
│   │   ├── Footer.astro         # Footer mit Navigation & Kontakt
│   │   └── Header.astro         # Sticky Header mit Navigation
│   ├── layouts/                 # Layout-Templates
│   │   └── Layout.astro         # Basis-Layout mit SEO, Schema.org
│   ├── pages/                   # Routen/Seiten (Datei-basiertes Routing)
│   │   ├── index.astro          # Startseite (One-Pager)
│   │   ├── danke.astro          # Dankesseite nach Formular
│   │   ├── datenschutz.astro    # Datenschutzerklärung
│   │   ├── impressum.astro      # Impressum
│   │   └── 404.astro            # 404-Fehlerseite
│   └── env.d.ts                 # TypeScript-Umgebungsdeklarationen
├── .astro/                      # Astro interne Dateien
│   ├── settings.json            # Astro-Einstellungen
│   └── types.d.ts               # Astro Typen
├── astro.config.mjs             # Astro-Konfiguration
├── tailwind.config.mjs          # Tailwind CSS-Konfiguration
├── tsconfig.json                # TypeScript-Konfiguration
├── netlify.toml                 # Netlify-Deployment-Konfiguration
├── package.json                 # NPM-Abhängigkeiten
├── .gitignore                   # Git-Ausschlüsse
└── README.md                    # Projektdokumentation
```

---

## Build- und Entwicklungs-Befehle

```bash
# Abhängigkeiten installieren
npm install

# Entwicklungsserver starten (localhost:4321)
npm run dev

# Produktions-Build erstellen (Output: dist/)
npm run build

# Build lokal testen
npm run preview

# Astro CLI
npm run astro
```

### Wichtige Build-Einstellungen (astro.config.mjs)

- **Output:** `static` (statische Site Generation)
- **Site-URL:** https://robingartenbau.de
- **Bildoptimierung:** Sharp mit 80% Qualität (WebP/AVIF)
- **HTML-Komprimierung:** Aktiviert (`compressHTML: true`)
- **Inline Stylesheets:** Automatisch (`inlineStylesheets: 'auto'`)
- **CSS Code Splitting:** Aktiviert

---

## Code-Stil & Konventionen

### Datei-Header

Jede Datei beginnt mit einem Header-Kommentar:

```astro
---
// ============================================
// ROBIN GARTENBAU - [KOMPONENTENNAME]
// ============================================
// Kurzbeschreibung der Funktion
// ============================================
---
```

### Benennungskonventionen

- **Komponenten:** PascalCase (z.B. `CookieBanner.astro`)
- **Dateien:** Kebab-case für Seiten (z.B. `datenschutz.astro`)
- **CSS-Klassen:** Tailwind-Utility-Klassen, keine benutzerdefinierten Klassen
- **Variablen:** camelCase für JavaScript/TypeScript

### Astro-Komponenten-Muster

```astro
---
// 1. Frontmatter: Imports und Logik
import Layout from '../layouts/Layout.astro';
import Header from '../components/Header.astro';

// Konstanten definieren
const pageTitle = 'Seitentitel | Robin Gartenbau';
const pageDescription = 'SEO-Beschreibung';
---

<!-- 2. Template mit Slots -->
<Layout title={pageTitle} description={pageDescription}>
  <Header slot="header" />
  
  <main>
    <!-- Inhalt -->
  </main>
  
  <Footer slot="footer" />
</Layout>
```

### Tailwind CSS Konventionen

- **Farbschema:** Verwende definierte Brand-Farben:
  - `primary` / `primary-500`: Brand-Grün (#6fa822)
  - `secondary` / `secondary-500`: Schiefergrau (#3e4444)
- **Responsive:** Mobile-first (z.B. `text-lg lg:text-xl`)
- **Zustände:** Hover, Focus mit Transitions

### Animationen (definiert in tailwind.config.mjs)

- `animate-fade-in`: 0.5s ease-in-out
- `animate-slide-up`: 0.6s ease-out
- `animate-slide-down`: 0.3s ease-out

### Accessibility (A11y) Standards

- **ARIA-Attribute:** Alle interaktiven Elemente müssen ARIA-Labels haben
- **Semantisches HTML:** Verwende `<header>`, `<main>`, `<footer>`, `<nav>`, `<section>`
- **Skip-Link:** Vorhanden in Layout.astro für Screen Reader
- **Alt-Texte:** Alle Bilder müssen beschreibende Alt-Texte haben
- **Focus-Visible:** Klare Fokus-Indikatoren (grüner Rahmen)
- **Reduced Motion:** Respektiere `prefers-reduced-motion`

---

## Branding & Design

### Farbpalette

| Name | Hex | Tailwind | Verwendung |
|------|-----|----------|------------|
| Primär | `#6fa822` | `primary-500` | Buttons, Links, Akzente |
| Primär Hell | `#8fc230` | `primary-400` | Hover-Zustände |
| Primär Dunkel | `#5a8a1c` | `primary-600` | Aktive Zustände |
| Sekundär | `#3e4444` | `secondary-500` | Text, Header, Footer |
| Hintergrund | `#ffffff` | `white` | Haupt-Hintergrund |
| Hintergrund Alt | `#f5f5f5` | `secondary-50` | Sekundärer Hintergrund |

### Schriftarten

- **Primär:** Inter (lokal geladen via @fontsource)
- **Fallback:** system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto

---

## DSGVO & Sicherheit

### Datenschutz-Features

- ✅ **Keine externen Fonts:** Alle Schriften lokal (@fontsource/inter)
- ✅ **Keine Tracking-Cookies:** Nur technisch notwendige Cookies
- ✅ **Cookie-Banner:** Mit Zustimmungs-Management (RGPD-konform)
- ✅ **Keine Analytics:** Kein Google Analytics, kein Facebook Pixel
- ✅ **Formular:** Web3Forms (DSGVO-konform, Formular-Weiterleitung)

### Sicherheits-Headers (netlify.toml)

```toml
X-Frame-Options = "DENY"
X-Content-Type-Options = "nosniff"
X-XSS-Protection = "1; mode=block"
Referrer-Policy = "strict-origin-when-cross-origin"
Permissions-Policy = "accelerometer=(), camera=(), ..."
Content-Security-Policy = "default-src 'self'; ..."
```

### Formular-Sicherheit

- **Honeypot-Feld:** Spam-Schutz ohne CAPTCHA
- **HTTPS:** Alle Formular-Übermittlungen verschlüsselt
- **Web3Forms:** Access-Key ist direkt im Code (siehe index.astro)

---

## Unternehmensdaten

| Daten | Wert |
|-------|------|
| Firmenname | Robin Garten- und Landschaftsbau |
| Kurzname | Robin Galabau |
| Inhaber | Kayhan Özer |
| Adresse | Lauenhäger Straße 53a, 31655 Stadthagen |
| Telefon | +49 178 5361122 |
| E-Mail | info@robingartenbau.de |
| Steuernummer | 44/132/08209 |
| WhatsApp | https://wa.me/491785361122 |

### Öffnungszeiten (Schema.org in Layout.astro)

- Montag - Freitag: 07:00 - 18:00 Uhr

---

## Deployment

### Netlify-Konfiguration

- **Build-Befehl:** `npm run build`
- **Publish-Verzeichnis:** `dist`
- **Node-Version:** 20

### Umgebungsvariablen

Keine erforderlich für den Build. Alle Konfigurationen sind statisch.

---

## Testing

### Manuelle Tests

- [ ] Lighthouse Score (Performance, A11y, SEO, Best Practices)
- [ ] Mobile Responsiveness (Chrome DevTools)
- [ ] Cookie-Banner Funktionalität
- [ ] Formular-Übermittlung
- [ ] Navigation (Desktop & Mobile)
- [ ] Alt-Texte für Bilder
- [ ] Keyboard-Navigation (Tab-Taste)

### Lighthouse-Ziele

- **Performance:** 100/100
- **Accessibility:** 100/100
- **Best Practices:** 100/100
- **SEO:** 100/100

---

## Wartung & Updates

### Regelmäßige Aufgaben

1. **Bilder optimieren:** Vor Upload komprimieren (z.B. mit Squoosh)
2. **Links prüfen:** Telefonnummern, E-Mail-Adressen
3. **Öffnungszeiten:** In Layout.astro (Schema.org) aktualisieren
4. **Copyright-Jahr:** Automatisch via `new Date().getFullYear()`

### Dateien mit Unternehmensdaten

| Datei | Daten |
|-------|-------|
| `src/layouts/Layout.astro` | Schema.org, Meta-Tags, Firmendaten |
| `src/components/Footer.astro` | Adresse, Kontaktdaten, Leistungen |
| `src/components/Header.astro` | Telefonnummer, Navigation |
| `src/pages/index.astro` | Kontaktdaten, Leistungen, Galerie |
| `src/pages/impressum.astro` | Vollständige Impressumsdaten |
| `src/pages/danke.astro` | Kontaktdaten |

---

## Häufige Änderungen

### Neue Seite hinzufügen

1. Datei in `src/pages/` erstellen (z.B. `neue-seite.astro`)
2. Layout importieren und verwenden
3. Header und Footer als Slots einfügen
4. SEO-Meta-Daten definieren
5. In `netlify.toml` Redirect hinzufügen (optional)

### Neue Leistung hinzufügen

1. In `src/pages/index.astro` das `services`-Array erweitern
2. Icon als SVG-Path hinzufügen
3. In `src/components/Footer.astro` die Services-Liste aktualisieren

### Bilder austauschen

1. Bilder in `public/images/` ablegen
2. In Astro-Komponenten: `<Image>` Komponente verwenden
3. Alt-Texte beschreibend formulieren
4. Bildgrößen optimieren (siehe `public/images/README.md`)

---

## Support & Ressourcen

- **Astro Docs:** https://docs.astro.build/
- **Tailwind CSS Docs:** https://tailwindcss.com/docs
- **Web3Forms:** https://web3forms.com/
- **Netlify Docs:** https://docs.netlify.com/

---

## Hinweise für AI Agents

1. **Sprache:** Alle UI-Texte auf Deutsch, Code-Kommentare auf Deutsch
2. **DSGVO:** Keine externen Ressourcen ohne Prüfung
3. **Accessibility:** ARIA-Labels und semantisches HTML beibehalten
4. **Performance:** Bilder optimieren, kein unnötiges JavaScript
5. **SEO:** Meta-Tags, Schema.org, Canonical-URLs beachten
6. **Keine Annahmen:** Alle Änderungen müssen auf tatsächlichen Datei-Inhalten basieren
