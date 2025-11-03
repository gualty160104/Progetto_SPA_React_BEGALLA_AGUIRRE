# Progetto SPA React BEGALLA - AGUIRRE
Repository per il progetto SPA di React (Begalla - Aguirre)


# Descrizione del progetto REACT
Descrizione
Creazione di una Single Page Application (SPA) utilizzando React, React Router e API esterne. È possibile utilizzare Redux, ma non è obbligatorio: sarà vostra cura valutare se sia necessario o se invece sia sufficiente la Context API.

Modalità di svolgimento
Il lavoro sarà svolto in coppia durante le ore di lezione;
il lavoro a casa è facoltativo;
è possibile scegliere tra il progetto standard guidato (Netflix Clone) o un progetto personale, purché rispetti tutti i requisiti tecnici obbligatori.
Modalità e tempi di consegna
Deadline: venerdì 28 novembre, ore 9:00;
caricamento sulla piattaforma FAD;
repository Git pubblica con link da fornire;
presentazione in classe il 28 novembre (10 minuti per coppia):
dimostrazione del funzionamento dell'app;
domande sulle scelte progettuali e tecniche;
la presentazione vale 2,5 punti sul totale.
⚠️ Nota: Il ritardo nella consegna comporta una penalità di -3 punti per ogni giorno di ritardo.

🎯 Scelta del Progetto
Avete DUE opzioni per il progetto finale:

Opzione A: Netflix Clone (Progetto Guidato) 📺
Creazione di una SPA in stile Netflix, utilizzando le API di The Movie Database (TMDB).

L'app permetterà agli utenti di:

Esplorare film e serie TV;
visualizzare i dettagli di ciascun contenuto;
cercare contenuti specifici;
gestire una lista personale di preferiti.
Funzionalità specifiche richieste
Homepage

Visualizzazione di almeno 2-3 categorie (es. film popolari, top rated, in tendenza);
liste per ogni categoria;
banner hero con un film in evidenza.
Ricerca

Barra di ricerca nella navbar;
pagina dedicata con i risultati di ricerca.
Pagina dettaglio

Informazioni complete: poster, titolo, descrizione, valutazione, data di uscita, lista dei generi;
cast principale;
pulsante per aggiungere il contenuto ai preferiti.
Lista dei preferiti

Pagina dedicata ai contenuti salvati;
persistenza dei dati con localStorage o Redux;
possibilità di rimuovere elementi dalla lista;
indicatore nella navbar con il numero dei preferiti.
Navigazione

Navbar con: Home, Film, Serie TV, Ricerca, Preferiti;
routing tra le pagine con React Router.
Opzione B: Progetto Personale ⚛️
Potete sviluppare un progetto a vostra scelta, purché rispetti tutti i requisiti tecnici obbligatori elencati nella sezione successiva.

⚠️ Prima di iniziare: proporre l'idea al docente per validazione e assicurarsi che rispetti i requisiti.

✅ REQUISITI TECNICI OBBLIGATORI
Questi requisiti valgono per QUALSIASI progetto (sia Netflix Clone che progetto personale)

📦 Props, State, Lifecycle e Hooks
 Props : passaggio di dati tra componenti parent-child in modo appropriato
 useState : gestione dello stato locale 
 useEffect 
Chiamate API
Sincronizzazione con localStorage
Cleanup (rimozione event listener, timeout, cancellazione fetch, ecc.)
 Custom Hook: creazione di almeno 1 custom hook riutilizzabile
Esempi: useFetch, useLocalStorage, useAuth, useForm
🌐 Gestione dello Stato Globale
Scegliere UNA delle due opzioni (la scelta non influisce sul voto, ma va motivata nel README):

Opzione A: Context API
 Creazione di almeno 1 Context
 Provider configurato a livello di <App />
 Consumo del context in almeno 2 componenti diversi tramite useContext
Opzione B: Redux
 Store configurato correttamente
 Utilizzo di useSelector per leggere lo stato
 Utilizzo di useDispatch per inviare azioni
 Azioni definite per gestire lo stato globale
Nel README dovrete spiegare perché avete scelto Context API o Redux per il vostro progetto specifico.

🧩 Componenti e Struttura del Progetto
L'app deve essere suddivisa in componenti riutilizzabili e ben organizzati


 Componenti riutilizzabili: componenti usati in più parti dell'app
 Single Responsibility: ogni componente ha una singola responsabilità chiara
 Struttura cartelle organizzata e logica
La struttura delle cartelle è a vostra discrezione, ma deve rispettare i principi di:

Single responsibility: ogni componente una responsabilità
Riutilizzabilità: componenti utilizzabili in più contesti
Organizzazione logica: file raggruppati in modo coerente
🛣️ React Router - Routing e Navigazione
Route minime richieste
 / - Homepage
 /lista - Pagina con lista di elementi (prodotti, film, articoli, ecc.)
 /dettaglio/:id - Pagina dettaglio con route dinamica
 /ricerca o /ricerca?q=... - Pagina risultati di ricerca
 /preferiti (o /salvati, /carrello) - Lista personale con persistenza
 /about (o altra pagina informativa)
 * - Pagina 404 per gestire route inesistenti
Per il progetto Netflix: /, /movies, /tv, /movie/:id, /tv/:id, /search, /favourites, 

Funzionalità routing obbligatorie
 Layout condiviso con <Outlet /> per header/footer persistenti
 NavLink con classe/stile attivo per indicare la pagina corrente
 Navigazione programmatica con useNavigate (almeno 1 utilizzo) Esempio: redirect dopo login, dopo salvataggio, ecc.
 useParams per leggere parametri dinamici dalle route
 useLocation o useSearchParams per gestire query string nella ricerca
🔌 Consumo di Dati e API
 API esterna: consumo di almeno una API esterna (REST)
Per Netflix: TMDB API
Per progetti personali: scegliere API pubbliche appropriate (confrontarsi con docente)
 Chiamate API: fetch in almeno 3 punti diversi dell'app
 Loading state: indicatori di caricamento visibili durante le chiamate
 Error handling: gestione degli errori con messaggi chiari all'utente
Messaggi di errore, possibilità di retry, fallback appropriati
 Persistenza dati: utilizzo di localStorage per salvare:Preferiti/carrello/lista salvata,  Preferenze utente (tema, lingua, ecc.)
 Performance : chiamate API ottimizzateEvitare chiamate ridondanti. 

Le API devono essere utilizzate in modo efficiente, pensando sia alle performance che alla user experience.
🎨 Stili e UI/UX
Tecnologia CSS (scegliere UNA)
 CSS puro / CSS Modules
 Styled Components
 Tailwind CSS
 SCSS
Requisiti design obbligatori
 Responsive design
 Coerenza visiva :
 Stati interattivi: hover states su bottoni, link, card
 Indicatori di caricamento: feedback durante operazioni asincrone
 Gestione immagini: placeholder/fallback se immagine mancante o in errore
Il layout deve essere gradevole, usabile e professionale.

💻 Qualità del Codice e Best Practices
 Codice pulito:
Indentazione corretta;
no console.log lasciati per debug.
 Naming convention coerente:
Scegliere italiano O inglese (non misto);
nomi di variabili/funzioni descrittivi;
convenzioni React (componenti PascalCase, funzioni camelCase).
Console pulita:
No errori in console;
no warning non gestiti.
 Commenti appropriati:
Commenti dove la logica è complessa;
documentazione delle scelte tecniche non ovvie.
 Gestione credenziali:
File .env per chiavi API (non committare chiavi) se necessario;
.env.example con struttura delle variabili.
📦 Git e Collaborazione
Repository e README
README.md completo con:
Titolo e descrizione del progetto;
tecnologie utilizzate (con versioni);
istruzioni per installazione e avvio;
API utilizzate (con link alla documentazione);
scelte progettuali:
perché Context API o Redux;
motivazione librerie esterne utilizzate;
eventuali problemi noti o limitazioni.
Git workflow
Branch strategy:
Branch feature creati e mergiati su main/master;
branch nominati in modo descrittivo (es. feature/search, fix/api-error).
Commit frequenti:
Commit significativi distribuiti nel tempo;
evitare mega-commit con tutto il lavoro.
 Commit message chiari:
Messaggi descrittivi e in inglese/italiano coerente:
Esempi BUONI:
feat: add search functionality
fix: resolve API error handling
style: improve responsive layout
Esempi DA EVITARE:
fix
update
final commit
asdasd
Collaborazione
 Contributi bilanciati:
Entrambi gli studenti devono committare regolarmente;
visibile dalla history Git chi ha fatto cosa;
partecipazione attiva di entrambi nelle decisioni.
📚 Librerie Esterne (Opzionale)
Oltre a React, React Router e Redux (se scelto), è possibile utilizzare altre librerie esterne.

Se utilizzate librerie aggiuntive, dovete documentare nel README:

Quale problema risolve la libreria;
perché era necessaria (vs soluzione in React puro);
 come è stata integrata nel progetto.
Esempi di librerie comunemente accettate:
Axios: per chiamate HTTP più semplici di fetch;
date-fns / day.js: per manipolazione date;
Swiper / react-slick: per carousel/slider;
Framer Motion: per animazioni complesse;
React Icons , Phosphor Icons, etc: per icone.
⚠️ Non è obbligatorio usare librerie esterne, ma se le usate devono essere giustificate.

📊 Criteri di valutazione
La valutazione sarà espressa in trentesimi (30/30).
2,5 punti sono riservati alla presentazione in classe.
Verranno valutati:
Completezza requisiti, funzionamento corretto, assenza bug critici;
organizzazione, pulizia, best practices React, componenti riutilizzabili;
uso appropriato di state/props, chiamate API efficienti, error handling;
design responsive, coerenza visiva, usabilità, feedback utente;
commit significativi, branch workflow, contributi bilanciati;
motivazioni chiare per Context/Redux, librerie esterne, architettura;
chiarezza esposizione, padronanza del progetto, risposte a domande.
⚠️⚠️⚠️ La mancata consegna del progetto entro i tempi stabiliti comporterà una penalità di -3 punti per ogni giorno di ritardo. ⚠️⚠️⚠️
