# Portfolio React.js (No Backend)

## Descrizione

Questo progetto è la versione **frontend-only** di un portfolio React.js. È stato completamente refactorizzato per rimuovere tutte le dipendenze dal backend e dalle chiamate API, sostituendole con store locali basati su Zustand e dati mock.

## Modifiche Apportate

### 🔄 Refactoring Completato

1. **Rimozione dipendenze API**:
   - Eliminato `@tanstack/react-query`
   - Eliminato `axios`
   - Rimosso `QueryClient` e `QueryClientProvider`

2. **File eliminati**:
   - `src/features/messages/api.js`
   - `src/features/messages/hooks.js`
   - `src/features/projects/api.js`  
   - `src/features/projects/hooks.js`
   - `src/lib/apiClient.js`

3. **Nuovi store locali**:
   - `src/features/projects/store.js` - Gestione completa dei progetti con dati mock
   - `src/features/messages/store.js` - Simulazione invio messaggi

### 🎯 Funzionalità Mantenute

- **Progetti**: Visualizzazione, filtri, paginazione, progetti in evidenza
- **Dettagli progetti**: Visualizzazione completa delle informazioni
- **Form contatti**: Simulazione invio messaggi con feedback
- **Filtri avanzati**: Per tipo, linguaggio e nome progetto
- **Animazioni**: Tutte le animazioni Framer Motion preservate
- **UI/UX**: Interfaccia utente identica

### 📊 Dati Mock Inclusi

- **8 progetti di esempio** con dati realistici
- **6 tipi di progetto**: Web Application, Mobile App, Desktop App, E-commerce, Portfolio, Landing Page  
- **10 linguaggi/tecnologie**: JavaScript, TypeScript, React, Vue.js, PHP, Laravel, Node.js, Python, Java, C#
- **Progetti in evidenza**: 4 progetti marcati come favoriti

### 🛠️ Struttura Store

#### Projects Store (`src/features/projects/store.js`)
```javascript
// Funzionalità principali:
- getFilteredProjects(page, filters) // Progetti filtrati con paginazione
- getStarProjects() // Progetti in evidenza  
- getProjectDetails(slug) // Dettagli progetto specifico
- getTypes() // Lista tipi progetto
- getLanguages() // Lista linguaggi
- Filtri per: tipo, linguaggio, nome progetto
```

#### Messages Store (`src/features/messages/store.js`)
```javascript
// Funzionalità principali:
- sendMessage(messageData) // Simula invio messaggio
- getMessages() // Recupera messaggi inviati
- getMessageStats() // Statistiche messaggi
```

### 🔧 Componenti Aggiornati

- ✅ `src/pages/Projects.jsx` - Utilizza store locale
- ✅ `src/pages/Home.jsx` - Progetti in evidenza da store
- ✅ `src/pages/ContactMe.jsx` - Invio messaggi simulato
- ✅ `src/pages/ProjectDetails.jsx` - Dettagli da store
- ✅ `src/features/projects/components/ProjectsFilters.jsx` - Filtri aggiornati
- ✅ `src/components/ui/Select.jsx` - Supporto opzioni statiche

## 🚀 Installazione e Avvio

```bash
# Installa le dipendenze
npm install

# Avvia il server di sviluppo
npm run dev

# Build per produzione
npm run build
```

## 💡 Caratteristiche Tecniche

- **Stato Globale**: Zustand per gestione stato
- **Simulazione API**: Delay artificiali per realisticità
- **Gestione Errori**: Simulazione errori casuali (5% probabilità)  
- **Performance**: Componenti ottimizzati con lazy loading
- **Responsive**: Design completamente responsive
- **Animazioni**: Framer Motion per transizioni fluide

## 🎨 Tecnologie Utilizzate

- React 18.3.1
- Zustand 5.0.6 (State Management)
- React Router DOM 6.27.0
- Framer Motion 12.23.11 (Animazioni)
- Tailwind CSS 3.4.14 (Styling)
- Vite 5.4.8 (Build Tool)
- Moment 2.30.1 (Date Formatting)

## 📁 Struttura Progetto

```
src/
├── components/          # Componenti UI riutilizzabili
├── features/           
│   ├── messages/       
│   │   └── store.js    # Store messaggi
│   └── projects/       
│       ├── store.js    # Store progetti (PRINCIPALE)
│       └── components/ # Componenti specifici progetti
├── pages/              # Pagine dell'applicazione
├── router/             # Configurazione routing
└── store/              # Store UI globale
```

## 🔄 Migrazione da API a Store

Il progetto mantiene la stessa struttura di dati dell'API originale per garantire compatibilità:

```javascript
// Formato risposta progetti (compatibile con API precedente)
{
  projects: {
    data: [...],
    current_page: 1,
    last_page: 3,
    per_page: 6,
    total: 15
  }
}
```

## 📝 Note per lo Sviluppatore

- I dati mock sono facilmente personalizzabili in `src/features/projects/store.js`
- Il sistema di filtri è stato adattato per funzionare con array locali
- Tutti i componenti mantengono la stessa interfaccia pubblica
- Le funzioni di loading/error sono simulate per mantenere l'UX originale

## 🌟 Vantaggi della Refactor

- ✅ **Nessuna dipendenza backend** - Funziona completamente offline
- ✅ **Deployment semplificato** - Solo frontend statico
- ✅ **Performance migliori** - Nessuna latenza di rete
- ✅ **Facilità di testing** - Dati controllati e predicibili
- ✅ **Costi ridotti** - Nessun server da mantenere