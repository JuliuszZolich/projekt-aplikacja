# Projekt Aplikacja

Projekt Aplikacja to serwer napisany w Javie. Serwer jest przeznaczony do użytku wraz z aplikacją webową.

## Wymagania

- Java Development Kit (JDK) 11 lub nowszy
- Maven 3.6.0 lub nowszy
- Klucz do bazy danych

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

3. Skopiuj klucz do bazy danych do obecnego folderu pod nazwą `project_keys.json` 

4. Uruchom aplikację:
    ```sh
    java Main.java
    ```

Po uruchomieniu serwera będzie dostępny pod adresem http://localhost:8080.

## Dodatkowe biblioteki

Należy doinstalować następujące biblioteki, korzystając z wbudowanego menedżera bibliotek Intellij IDEA lub ręcznie za pomocą Maven:
- com.courier:courier-java:3.0.4
- com.fasterxml.jackson.core:jackson-databind:2.17.1
- com.google.firebase:firebase-admin:9.3.0
- org.json:json:20240303
- org.projectlombok:lombok:1.18.32


## Struktura projetku

```
projekt-aplikacja/
├── src/
│   ├── DBUtils/
│   |   ├── DBAnnouncements.java
│   |   ├── DBLogin.java
│   |   └── ...
│   ├── Utils/
│   |   ├── EmailData.java
│   |   ├── User.java
│   |   └── Utils.java
│   ├── 404.jpg
│   ├── Main.java
│   ├── AnnouncementsHandler.java
│   ├── LoginHandler.java
│   └── ...
├── .gitignore
├── README.md
└── kck-server.iml
```
