# Bilder für die Website

In diesen Ordner kommen alle Bilder für die Website.

## Benötigte Bilder

### 1. Hero-Bild (Startseite)
- **Datei:** `hero-garten.jpg`
- **Empfohlen:** 1920x800px (oder ähnliches 16:9 Format)
- **Beschreibung:** Ein schöner Garten, der die Expertise des Unternehmens zeigt

### 2. Über Uns / Team
- **Datei:** `team-arbeit.jpg`
- **Empfohlen:** 800x800px oder 800x600px
- **Beschreibung:** Team bei der Arbeit, Inhaber, oder Gartengeräte

### 3. Galerie Projekte
- **Dateien:** `gallery/projekt-1.jpg` bis `projekt-6.jpg`
- **Empfohlen:** 800x600px (4:3 Format)
- **Beschreibung:** Verschiedene abgeschlossene Projekte

## Bild-Checkliste

- [ ] hero-garten.jpg
- [ ] team-arbeit.jpg
- [ ] gallery/projekt-1.jpg
- [ ] gallery/projekt-2.jpg
- [ ] gallery/projekt-3.jpg
- [ ] gallery/projekt-4.jpg
- [ ] gallery/projekt-5.jpg
- [ ] gallery/projekt-6.jpg

## Tipps für gute Bilder

1. **Qualität:** Mindestens 72 DPI, besser 150 DPI
2. **Format:** JPEG für Fotos, PNG für Grafiken mit Transparenz
3. **Optimierung:** Vor Upload komprimieren (z.B. mit https://squoosh.app/)
4. **Alt-Texte:** Im Code anpassen für bessere Accessibility
5. **Lizenz:** Nur Bilder verwenden, für die die Rechte vorliegen

## Bilder einbinden

Die Bilder werden in `src/pages/index.astro` eingebunden. Suche nach:
```
<!-- PLATZHALTER: ... -->
```

Und ersetze durch:
```astro
<Image 
  src="/images/NAME.jpg" 
  alt="Beschreibung des Bildes" 
  width={1920} 
  height={800}
  class="w-full h-full object-cover"
/>
```
