# template für Sass und Gulp 4

In diesem Tutorial wird Schritt für Schritt erklärt, wie Sie Gulp 4 in Ihrem Workflow einrichten.

Hier findest Du eine Anleitung in englisch [here](https://coder-coder.com/gulp-4-walk-through).

## Schnelleinstieg

* Speichere diese Dateien auf deinem Rechner.
* Installiere [Node.js](https://nodejs.org/de/) falls Du es noch nicht hast.
* Starte `npm install`
* Starte `gulp` um den Gulp default task auszuführen.

Welche Module verwenden wir und was bewirken sie?

* Basisprogramm Gulp -> gulp
* Kompilieren von Sass Dateien in CSS -> gulp-sass
* Hinzufügen von Prefixes zur CSS Datei -> gulp-sourcemaps
* Bearbeitungsprogramm von CSS Dateien -> gulp-postcss
* Hinzufügen von Vendor-Präfixe -> autoprefixer
* Minimieren der finalen CSS Datei -> cssnano
* Kombinieren mehrerer JS Dateien in einer Datei -> gulp-concat
* Minimieren von JS Dateien -> gulp-uglify
* Verschieben der Endversionen in den Ordner /dist.

Browser starten
* Browser anzeigen um Änderungen direkt anzuzeigen -> browser-sync

 
