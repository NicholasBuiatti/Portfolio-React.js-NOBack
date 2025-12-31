import { create } from "zustand";
import echo1 from "../../assets/echo-images/echo1.png";
import echo2 from "../../assets/echo-images/echo2.png";
import echo3 from "../../assets/echo-images/echo3.png";
import echo4 from "../../assets/echo-images/echo4.png";
import echoVideo from "../../assets/echo-images/echoVideo.mp4";

import NB1 from "../../assets/NBflix-images/NB1.png";
import NB2 from "../../assets/NBflix-images/NB2.png";
import NB3 from "../../assets/NBflix-images/NB3.png";
import NB4 from "../../assets/NBflix-images/NB4.png";
import NB5 from "../../assets/NBflix-images/NB5.png";
import NB6 from "../../assets/NBflix-images/NB6.png";
import NB7 from "../../assets/NBflix-images/NB7.png";
import NBVideo from "../../assets/NBflix-images/NBVideo.mp4";

import Lingo1 from "../../assets/Lingo-images/L1.png";
import Lingo2 from "../../assets/Lingo-images/L2.png";
import Lingo3 from "../../assets/Lingo-images/L3.png";
import Lingo4 from "../../assets/Lingo-images/L4.png";
import Lingo5 from "../../assets/Lingo-images/L5.png";
import LingoVideo from "../../assets/Lingo-images/LVideo.mp4";

import BnB2 from "../../assets/BnB-images/BnB2.png";
import BnB3 from "../../assets/BnB-images/BnB3.png";
import BnB4 from "../../assets/BnB-images/BnB4.png";
import BnB5 from "../../assets/BnB-images/BnB5.png";
import BnB6 from "../../assets/BnB-images/BnB6.png";
import BnB7 from "../../assets/BnB-images/BnB7.png";
import BnB8 from "../../assets/BnB-images/BnB8.png";

import BnBf1 from "../../assets/BnBFront-images/BnBf1.png";
import BnBf2 from "../../assets/BnBFront-images/BnBf2.png";
import BnBf3 from "../../assets/BnBFront-images/BnBf3.png";
import BnBf4 from "../../assets/BnBFront-images/BnBf4.png";
import BnBf5 from "../../assets/BnBFront-images/BnBf5.png";
import BnBf6 from "../../assets/BnBFront-images/BnBf6.png";

import WA1 from "../../assets/Whatsapp-images/WA1.png";
import WA2 from "../../assets/Whatsapp-images/WA2.png";
import WA3 from "../../assets/Whatsapp-images/WA3.png";
import WA4 from "../../assets/Whatsapp-images/WA4.png";
import WA5 from "../../assets/Whatsapp-images/WA5.mp4";

// Dati mock per i tipi di progetto
const mockTypes = [
  { id: 1, name: "Web Application" },
  { id: 2, name: "Mobile App" },
  { id: 3, name: "Desktop App" },
  { id: 4, name: "E-commerce" },
  { id: 5, name: "Portfolio" },
  { id: 6, name: "Landing Page" },
  { id: 7, name: "Backoffice / Admin Panel" },
  { id: 8, name: "Game" },
];

// Dati mock per i linguaggi
const mockLanguages = [
  { id: 1, name: "JavaScript" },
  { id: 2, name: "TypeScript" },
  { id: 3, name: "React" },
  { id: 4, name: "Vue.js" },
  { id: 5, name: "PHP" },
  { id: 6, name: "Laravel" },
  { id: 7, name: "Python" },
];

// Dati mock per i progetti
const mockProjects = [
  {
    id: 1,
    title: "EchoSphere",
    slug: "echo-sphere",
    description:
      "Sistema di autenticazione con registrazione email, login sicuro e verifica dell’account.",
    long_description:
      "Applicazione web sviluppata con React e Laravel che implementa un sistema completo di autenticazione degli utenti. La piattaforma consente la registrazione tramite email e password, il login sicuro e la gestione delle sessioni. Durante la registrazione viene inviata automaticamente un’email di verifica contenente un link univoco, necessario per attivare l’account e garantire l’autenticità dell’indirizzo email. Il backend in Laravel gestisce la validazione dei dati, la sicurezza e l’invio delle email, mentre il frontend in React offre un’interfaccia moderna, reattiva e intuitiva. Il progetto segue buone pratiche di sviluppo full-stack.",
    image: echo1,
    images: [
      { type: "video", video_path: echoVideo },
      { type: "image", image_path: echo2 },
      { type: "image", image_path: echo3 },
      { type: "image", image_path: echo4 },
    ],
    technologies: ["React", "Laravel", "Tailwind CSS", "Framer Motion"],
    type: "Authentication",
    languages: ["JavaScript", "PHP"],
    github_url: "https://github.com/NicholasBuiatti/Echosphere-Front",
    demo_url: "",
    is_favorite: true,
    created_at: "2025-01-15",
    updated_at: "2025-02-08",
  },
  {
    id: 2,
    title: "NBflix",
    slug: "nbflix",
    description:
      "Replica semplificata di Netflix in React con catalogo film e ricerca.",
    long_description:
      "NBFlix è una replica semplificata di Netflix sviluppata interamente in React, che utilizza le API di TMDB per recuperare dati aggiornati sui film. L’applicazione offre un catalogo dei film più popolari e di maggiore successo, una sezione dedicata alle ultime uscite e ai titoli in arrivo, oltre a un sistema di ricerca per titolo che consente di trovare rapidamente i contenuti di interesse. È presente anche una funzionalità di salvataggio locale, che permette agli utenti di memorizzare i film selezionati per una consultazione successiva. Grazie all’integrazione con API esterne, il catalogo rimane sempre aggiornato, mentre l’interfaccia in React garantisce un’esperienza utente moderna, fluida e reattiva.",
    image: NB1,
    images: [
      { type: "video", video_path: NBVideo },
      { type: "image", image_path: NB2 },
      { type: "image", image_path: NB3 },
      { type: "image", image_path: NB4 },
      { type: "image", image_path: NB5 },
      { type: "image", image_path: NB6 },
      { type: "image", image_path: NB7 },
    ],
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    type: "Web Application",
    languages: ["JavaScript"],
    github_url: "https://github.com/NicholasBuiatti/NBflix",
    demo_url: "",
    is_favorite: false,
    created_at: "2024-11-11",
    updated_at: "2024-11-22",
  },
  {
    id: 3,
    title: "B&B Back Office",
    slug: "BnB-backoffice",
    description:
      "Back office B&B in Laravel con gestione dati, pagamenti e comunicazioni.",
    long_description:
      "BnB Backoffice è il progetto di fine corso realizzato in team durante il percorso formativo in Boolean. L’applicazione è sviluppata in Laravel e rappresenta il backoffice della piattaforma B&B ClientSide, occupandosi della gestione amministrativa delle strutture ricettive. Il sistema implementa operazioni CRUD complete per la gestione dei dati, consentendo il controllo e l’aggiornamento delle informazioni in modo strutturato ed efficiente. È stato integrato Braintree per la gestione dei pagamenti, mentre Mailtrap è stato utilizzato per il testing dell’invio delle email. Il progetto riflette un approccio collaborativo allo sviluppo e l’applicazione delle principali best practice backend, ponendo particolare attenzione a sicurezza, organizzazione del codice e scalabilità.",
    image: BnB2,
    images: [
      { type: "image", image_path: BnB2 },
      { type: "image", image_path: BnB3 },
      { type: "image", image_path: BnB4 },
      { type: "image", image_path: BnB5 },
      { type: "image", image_path: BnB6 },
      { type: "image", image_path: BnB7 },
      { type: "image", image_path: BnB8 },
    ],
    technologies: ["Laravel", "Bootstrap", "Mailtrap", "Braintree", "MySQL"],
    type: "Web Application",
    languages: ["PHP"],
    github_url: "https://github.com/NicholasBuiatti/boolBnB-auth",
    demo_url: "",
    is_favorite: true,
    created_at: "2024-08-30",
    updated_at: "2024-09-16",
  },
  {
    id: 4,
    title: "B&B Client-Side",
    slug: "BnB-clientside",
    description: "Frontend B&B in Vue con ricerca avanzata e contatto host.",
    long_description:
      "B&B ClientSide è la controparte frontend del progetto di fine corso realizzato in team durante il percorso Boolean. L’applicazione è sviluppata in Vue e consente agli utenti di ricercare appartamenti in base alla zona desiderata, alla distanza dal luogo di ricerca e a diversi filtri personalizzati, come numero di camere, bagni e altre caratteristiche. I risultati vengono visualizzati dando priorità agli appartamenti sponsorizzati e successivamente ordinati in base alla vicinanza alla posizione selezionata. L’interfaccia permette inoltre di inviare messaggi direttamente al gestore dell’appartamento, facilitando il contatto e il processo di prenotazione. Il progetto è stato realizzato con un forte focus sull’esperienza utente, sulla chiarezza dell’interfaccia e sulla collaborazione in team.",
    image: BnBf1,
    images: [
      { type: "image", image_path: BnBf2 },
      { type: "image", image_path: BnBf3 },
      { type: "image", image_path: BnBf4 },
      { type: "image", image_path: BnBf5 },
      { type: "image", image_path: BnBf6 },
    ],
    technologies: ["Vue", "CSS"],
    type: "Web Application",
    languages: ["JavaScript"],
    github_url: "https://github.com/NicholasBuiatti/boolBnB-client",
    demo_url: "",
    is_favorite: true,
    created_at: "2024-08-30",
    updated_at: "2024-09-16",
  },
  {
    id: 5,
    title: "Lingo",
    slug: "lingo",
    description:
      "Gioco Lingo in React per allenare logica e gestione dello stato.",
    long_description:
      "Lingo Game è un semplice gioco sviluppato in React con l’obiettivo di esercitarmi nella logica di programmazione e migliorare le mie competenze nello sviluppo frontend. Il gioco sfida i giocatori a indovinare parole o frasi seguendo regole precise, offrendo un’esperienza chiara e coinvolgente. Lo sviluppo si è concentrato sulla gestione dello stato per mantenere il flusso di gioco fluido e reattivo, sull’implementazione di un’interfaccia minimale e intuitiva e sulla creazione della logica di gioco, inclusa la validazione delle risposte, la fornitura di suggerimenti e il calcolo dei punteggi. Il progetto ha rappresentato un ottimo esercizio per approfondire l’uso dei componenti, della gestione degli eventi e dello stato in React, unendo apprendimento e divertimento.",
    image: Lingo1,
    images: [
      { type: "video", video_path: LingoVideo },
      { type: "image", image_path: Lingo2 },
      { type: "image", image_path: Lingo3 },
      { type: "image", image_path: Lingo4 },
      { type: "image", image_path: Lingo5 },
    ],
    technologies: ["React", "Tailwind CSS"],
    type: "Game",
    languages: ["JavaScript"],
    github_url: "https://github.com/NicholasBuiatti/Lingo-Game",
    demo_url: "",
    is_favorite: false,
    created_at: "2024-12-03",
    updated_at: "2024-12-12",
  },
  {
    id: 6,
    title: "Booltsapp",
    slug: "booltsapp",
    description: "Un clone del layout di WhatsApp.",
    long_description:
      "Questa esercitazione è stata realizzata durante il corso di Boolean con l’obiettivo di replicare il layout e le principali dinamiche dell’interfaccia di WhatsApp utilizzando Vue. Il progetto si concentra sulla riproduzione fedele della struttura dell’applicazione, includendo la lista delle chat, l’area dei messaggi e la gestione dello stato dell’interfaccia. Lo sviluppo ha permesso di approfondire l’uso dei componenti Vue, del data binding e della gestione degli eventi, simulando l’interazione tra contatti e conversazioni. L’esercizio è stato utile per migliorare la comprensione della logica frontend, dell’organizzazione dei componenti e della costruzione di interfacce responsive e intuitive, rappresentando un importante passo nel percorso di apprendimento del framework Vue.",
    image: WA1,
    images: [
      { type: "video", video_path: WA5 },
      { type: "image", image_path: WA2 },
      { type: "image", image_path: WA3 },
      { type: "image", image_path: WA4 },
      { type: "image", image_path: WA5 },
    ],
    technologies: ["Vue"],
    type: "Web Application",
    languages: ["Javascript", "CSS"],
    github_url: "https://github.com/NicholasBuiatti/vue-boolzapp",
    demo_url: "",
    is_favorite: false,
    created_at: "2024-05-16",
    updated_at: "2024-05-21",
  },
];

export const useProjectStore = create((set, get) => ({
  selectedType: "",
  selectedLanguage: "",
  currentPage: 1,

  projects: mockProjects,
  types: mockTypes,
  languages: mockLanguages,

  isLoading: false,
  error: null,

  setSelectedType: (type) => set({ selectedType: type, currentPage: 1 }),
  setSelectedLanguage: (lang) =>
    set({ selectedLanguage: lang, currentPage: 1 }),
  setCurrentPage: (page) => set({ currentPage: page }),

  getFilteredProjects: (page = 1, filters = {}) => {
    const { projects, selectedType, selectedLanguage } = get();
    const itemsPerPage = 6;

    let filteredProjects = [...projects];

    const typeFilter = filters.type || selectedType;
    const langFilter = filters.language || selectedLanguage;
    const nameFilter = filters.name_project || "";

    if (typeFilter) {
      filteredProjects = filteredProjects.filter(
        (project) => project.type === typeFilter
      );
    }

    if (langFilter) {
      filteredProjects = filteredProjects.filter((project) =>
        project.languages.includes(langFilter)
      );
    }

    if (nameFilter) {
      filteredProjects = filteredProjects.filter(
        (project) =>
          project.title.toLowerCase().includes(nameFilter.toLowerCase()) ||
          project.description.toLowerCase().includes(nameFilter.toLowerCase())
      );
    }

    const totalItems = filteredProjects.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const startIndex = (page - 1) * itemsPerPage;
    const paginatedProjects = filteredProjects.slice(
      startIndex,
      startIndex + itemsPerPage
    );

    return {
      projects: {
        data: paginatedProjects,
        current_page: page,
        last_page: totalPages,
        per_page: itemsPerPage,
        total: totalItems,
      },
    };
  },

  getStarProjects: () => {
    const { projects } = get();
    const starProjects = projects.filter((project) => project.is_favorite);

    return {
      projects: starProjects,
    };
  },

  getProjectDetails: (slug) => {
    const { projects } = get();
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
      throw new Error("Progetto non trovato");
    }

    return project;
  },

  getTypes: () => {
    const { types } = get();
    return types;
  },

  getLanguages: () => {
    const { languages } = get();
    return languages;
  },

  setLoading: (loading) => set({ isLoading: loading }),

  setError: (error) => set({ error }),
}));
