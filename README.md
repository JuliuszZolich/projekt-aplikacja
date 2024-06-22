# Projekt Aplikacja

Projekt Aplikacja to aplikacja webowa stworzona przy użyciu Vite i React.js. Aplikacja jest przeznaczona do pomocy studentowi podczas jego studiów.

## Wymagania

- Node.js (wersja 12.0.0 lub nowsza)
- npm (wersja 6.0.0 lub nowsza)

## Instalacja

Aby uruchomić projekt lokalnie, wykonaj poniższe kroki:

1. Sklonuj repozytorium:
    ```sh
    git clone https://github.com/JuliuszZolich/projekt-aplikacja
    ```

2. Przejdź do katalogu projektu:
    ```sh
    cd projekt-aplikacja
    ```

3. Zainstaluj zależności:
    ```sh
    npm install
    ```

4. Uruchom aplikację:
    ```sh
    npm run dev
    ```

Po uruchomieniu aplikacji będzie dostępna pod adresem [http://localhost:5173](http://localhost:5173).

## Struktura katalogów

Poniżej znajduje się podstawowa struktura katalogów projektu:
```
projekt-aplikacja/
├── node_modules/
├── css/
├── public/
│ ├── index.html
│ └── ...
├── src/
│ ├── assets/
│ ├── css/
│ | ├── index.css
| │ └── ...
│ ├── translations/
│ | ├── pl.json
| │ └── en.json
│ ├── main.jsx
│ └── ...
├── .gitignore
├── package.json
├── README.md
└── vite.config.js
```

- `src/` - Katalog z kodem źródłowym aplikacji.
- `css/` - Katalog z arkuszami styli.
- `assets/` - Katalog z grafikami oraz plikami wykorzystywanymi na stronie
- `main.jsx` - Punkt wejściowy aplikacji.
- `vite.config.js` - Konfiguracja Vite.

