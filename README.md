# Robin Garten- und Landschaftsbau - Website

Eine hochkonvertierende, blitzschnelle und zu 100% DSGVO-konforme Website für Robin Garten- und Landschaftsbau.

## 🚀 Tech Stack

- **Framework:** [Astro](https://astro.build/) (Static Site Generation)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Interaktivität:** Vanilla JavaScript
- **Deployment:** [Netlify](https://netlify.com/)
- **Formular-Service:** [Web3Forms](https://web3forms.com/)

## 📁 Projektstruktur

```
├── public/
│   ├── images/          # Bilder hier ablegen
│   │   ├── hero-garten.jpg
│   │   ├── team-arbeit.jpg
│   │   └── gallery/
│   │       ├── projekt-1.jpg
│   │       ├── projekt-2.jpg
│   │       └── ...
│   └── favicon.svg
├── src/
│   ├── components/      # Wiederverwendbare Komponenten
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   └── CookieBanner.astro
│   ├── layouts/         # Layout-Templates
│   │   └── Layout.astro
│   ├── pages/           # Routen/Seiten
│   │   ├── index.astro
│   │   ├── impressum.astro
│   │   ├── datenschutz.astro
│   │   ├── 404.astro
│   │   └── danke.astro
│   └── env.d.ts
├── astro.config.mjs
├── tailwind.config.mjs
├── netlify.toml
└── package.json
```

## 🎨 Brand Colors

| Farbe | Hex | Verwendung |
|-------|-----|------------|
| Primär (Grün) | `#6fa822` | Buttons, Links, Akzente |
| Sekundär (Schiefergrau) | `#3e4444` | Texte, Header, Footer |
| Hintergrund | `#ffffff` | Haupt-Hintergrund |
| Hintergrund Alt | `#f5f5f5` | Sekundärer Hintergrund |

## 🛠 Installation & Entwicklung

### 1. Abhängigkeiten installieren

```bash
npm install
```

### 2. Entwicklungsserver starten

```bash
npm run dev
```

Die Website ist dann unter `http://localhost:4321` verfügbar.

### 3. Build erstellen

```bash
npm run build
```

Der Build wird im `dist/`-Ordner erstellt.

## 📸 Bilder hinzufügen

Die Bilder-Platzhalter müssen mit echten Bildern ersetzt werden:

1. **Hero-Bild:** `public/images/hero-garten.jpg`
2. **Team-Bild:** `public/images/team-arbeit.jpg`
3. **Galerie-Bilder:** `public/images/gallery/projekt-1.jpg` bis `projekt-6.jpg`

### Bild-Formatierung

- **Format:** JPEG oder WebP
- **Hero:** 1920x800px (oder ähnliches Seitenverhältnis)
- **Galerie:** 800x600px (4:3)
- **Team:** 800x800px (quadratisch)
- **Optimierung:** Bilder vor dem Hochladen komprimieren (z.B. mit [Squoosh](https://squoosh.app/))

### Bilder im Code einbinden

Die Platzhalter in `src/pages/index.astro` suchen:

```astro
<!-- PLATZHALTER: Hintergrundbild -->
<div class="w-full h-full bg-gradient-to-br from-primary-600 via-primary-500 to-primary-700">
```

Und durch Astro `<Image>` Komponente ersetzen:

```astro
<Image 
  src="/images/hero-garten.jpg" 
  alt="Wunderschöner gepflegter Garten" 
  width={1920} 
  height={800}
  class="w-full h-full object-cover"
  loading="eager"
/>
```

## 🔑 Web3Forms Einrichtung

Das Kontaktformular verwendet Web3Forms. Um es zu aktivieren:

1. Auf [web3forms.com](https://web3forms.com/) registrieren
2. Eine neue E-Mail-Adresse hinzufügen (z.B. `info@robingartenbau.de`)
3. Den Access Key kopieren
4. In `src/pages/index.astro` suchen nach:
   ```html
   <input type="hidden" name="access_key" value="IHRE_WEB3FORMS_KEY_HIER" />
   ```
5. Den Platzhalter durch den echten Key ersetzen

## 🚀 Deployment auf Netlify

### Methode 1: Git-Integration (empfohlen)

1. Repository auf GitHub/GitLab hochladen
2. Bei Netlify anmelden
3. "Add new site" → "Import an existing project"
4. Git-Provider auswählen und Repository verbinden
5. Build-Einstellungen übernehmen:
   - Build command: `npm run build`
   - Publish directory: `dist`

### Methode 2: Manuelles Deployment

```bash
npm run build
# Dann den dist/-Ordner per Drag & Drop auf Netlify hochladen
```

## 📊 Lighthouse Score Ziele

- **Performance:** 100/100
- **Accessibility:** 100/100
- **Best Practices:** 100/100
- **SEO:** 100/100

## 🔒 DSGVO-Konformität

Die Website erfüllt folgende DSGVO-Anforderungen:

- ✅ **Keine externen Fonts:** Schriften werden lokal geladen
- ✅ **Keine Tracking-Cookies:** Nur technisch notwendige Cookies
- ✅ **DSGVO-konformes Cookie-Banner:** Mit Zustimmungs-Management
- ✅ **Sichere Formulare:** HTTPS + Honeypot-Spamschutz
- ✅ **Security Headers:** Via netlify.toml konfiguriert
- ✅ **Impressum & Datenschutz:** Vollständig und rechtlich korrekt

## 📝 Anpassungen vornehmen

### Unternehmensdaten ändern

Alle wichtigen Daten sind zentral in den Dateien definiert:

- **Layout.astro:** Unternehmensdaten für Schema.org
- **Footer.astro:** Adresse, Kontaktdaten
- **index.astro:** Telefonnummern, WhatsApp-Link
- **impressum.astro:** Vollständige Impressumsdaten

### Farben anpassen

In `tailwind.config.mjs` unter `theme.extend.colors`:

```js
colors: {
  primary: {
    DEFAULT: '#6fa822',  // Neue Primärfarbe
    // ...
  },
}
```

### Neue Seite hinzufügen

Neue `.astro` Datei in `src/pages/` erstellen:

```astro
---
import Layout from '../layouts/Layout.astro';
import Header from '../components/Header.astro';
import Footer from '../components/Footer.astro';

const pageTitle = 'Seitentitel | Robin Gartenbau';
const pageDescription = 'Beschreibung für SEO';
---

<Layout title={pageTitle} description={pageDescription}>
  <Header slot="header" />
  
  <section class="py-16">
    <div class="max-w-7xl mx-auto px-4">
      <!-- Inhalt hier -->
    </div>
  </section>
  
  <Footer slot="footer" />
</Layout>
```

## 📞 Support

Bei Fragen zur Website:
- Hosting: Netlify Support
- Framework: [Astro Dokumentation](https://docs.astro.build/)
- Styling: [Tailwind CSS Dokumentation](https://tailwindcss.com/docs)

---

**Hinweis:** Diese Website wurde mit Blick auf Performance, Accessibility und DSGVO-Konformität entwickelt. Änderungen sollten diese Aspekte berücksichtigen.
