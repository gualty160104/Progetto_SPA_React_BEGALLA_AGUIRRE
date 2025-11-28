
# Netflix Clone - React TMDB App

## Descrizione del Progetto
Questo progetto è un clone di Netflix realizzato in **React**. L'app consente di esplorare film e serie TV, visualizzare i dettagli, gestire i preferiti e cercare contenuti tramite query. I dati provengono dall'API **TMDB (The Movie Database)**.

L'obiettivo del progetto è dimostrare la capacità di sviluppare un'app React complessa con:

- Gestione dello stato globale tramite **Context API**
- Routing avanzato con **React Router**
- Consumo di API esterne
- Gestione di errori, loading e fallback delle immagini
- UI/UX responsive e interattiva


## Tecnologie Utilizzate

- **React**: 18.x  
- **React Router Dom**: 6.x  
- **Tailwind CSS**: 3.x  
- **React Icons**: 4.x (per icone interattive come stelle e pulsanti)
- **JavaScript ES6+**
- **TMDB API**: [Documentazione TMDB](https://developers.themoviedb.org/3)


## Installazione e Avvio

1. Clonare il repository:
```bash
git clone https://github.com/gualty160104/Progetto_SPA_React_BEGALLA_AGUIRRE.git 
```

2. Entrare nella cartella del progetto:
```bash
cd netflix-clone
```

3. Installare le dipendenze:
```bash
npm install
# oppure
yarn install
```

4. Creare un file `.env` nella root con la tua chiave TMDB:
```env
REACT_APP_TMDB_API_KEY=your_api_key_here
```

5. Avviare il progetto in sviluppo:
```bash
npm start
# oppure
yarn start
```

6. L'app sarà disponibile su `http://localhost:3000`


## API Utilizzate

**TMDB API** - The Movie Database  

- Documentazione: [https://developers.themoviedb.org/3](https://developers.themoviedb.org/3)  
- Endpoint principali utilizzati:
  - `/discover/movie` per film
  - `/discover/tv` per serie TV
  - `/search/movie` e `/search/tv` per ricerca
  - `/movie/:id` e `/tv/:id` per dettagli
  - `/movie/:id/credits` e `/tv/:id/credits` per cast


## Scelte Progettuali

### Gestione dello Stato Globale
È stato scelto **Context API** invece di Redux perché:

- Lo stato globale principale riguarda solo i **preferiti**, quindi non serve un sistema complesso come Redux.
- Context API permette di condividere lo stato tra componenti in modo semplice e leggibile.
- Il provider `FavoriteContext` è configurato a livello di `<App />` e consumato in più componenti (`Movies`, `Serietv`, `Details`, `Favorites`).

### Librerie Esterne
- **React Icons**:  
  - Problema risolto: fornire icone professionali e scalabili senza dover creare immagini custom.  
  - Necessità: garantire coerenza visiva e semplicità nell’integrazione.  
  - Integrazione: icone utilizzate in stelle valutazione (`AiFillStar`) e pulsanti interattivi.

- **Tailwind CSS**:  
  - Problema risolto: creazione rapida di layout responsive con design coerente.  
  - Necessità: evitare scrittura manuale di CSS complesso e ridondante.  
  - Integrazione: classi Tailwind applicate a tutti i componenti e layout principali.


## Funzionalità

- Visualizzazione di film e serie TV in griglia
- Pagine dettagli con informazioni complete, cast e generi
- Sistema di preferiti persistente tramite **Context + localStorage**
- Ricerca di film e serie TV con query dinamiche
- Routing avanzato con gestione 404
- Indicatore di caricamento e gestione errori con retry
- Placeholder immagini per contenuti mancanti
- Layout responsive per mobile, tablet e desktop


## Problemi Noti o Limitazioni

- Non sono implementate autenticazione e account utente; i preferiti sono memorizzati solo nel browser (localStorage).  
- La ricerca è limitata ai contenuti forniti dall’API TMDB.  
- Alcuni contenuti potrebbero avere immagini mancanti, gestite con placeholder.


## Stile e UI/UX

- Layout coerente e moderno ispirato a Netflix
- Stati interattivi: hover su card, pulsanti e link
- Placeholder immagini per fallback
- Indicatori di caricamento e messaggi di errore visibili all’utente
- Responsive design ottimizzato


## Licenza
Questo progetto è realizzato a scopo didattico e personale.
