import { create } from "zustand";

// Dati mock per i tipi di progetto
const mockTypes = [
  { id: 1, name: "Web Application" },
  { id: 2, name: "Mobile App" },
  { id: 3, name: "Desktop App" },
  { id: 4, name: "E-commerce" },
  { id: 5, name: "Portfolio" },
  { id: 6, name: "Landing Page" },
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
    description: "Una piattaforma e-commerce completa con gestione prodotti, carrello e pagamenti.",
    long_description: "Una piattaforma e-commerce moderna costruita con React e Node.js, che include funzionalità avanzate come gestione inventario, sistema di pagamenti integrato, dashboard amministratore e molto altro. Il progetto utilizza le tecnologie più moderne per garantire performance e scalabilità.",
    image: "/images/ecommerce-project.jpg",
    images: [
      "/images/ecommerce-1.jpg",
      "/images/ecommerce-2.jpg",
      "/images/ecommerce-3.jpg",
      "/images/ecommerce-4.jpg",
      "/images/ecommerce-5.jpg",
    ],
    technologies: ["React", "Laravel", "Tailwind CSS",],
    type: "Authentication",
    languages: ["JavaScript", "PHP"],
    github_url: "https://github.com/username/ecommerce-platform",
    demo_url: "https://demo-ecommerce.com",
    is_favorite: true,
    created_at: "2024-01-15",
    updated_at: "2024-01-15"
  },
  {
    id: 2,
    title: "NBflix",
    slug: "nbflix",
    description: "Un'applicazione per la gestione dei task con funzionalità collaborative.",
    long_description: "Un'applicazione web per la gestione dei task e progetti, con funzionalità collaborative, notifiche real-time e dashboard personalizzabili. Costruita con tecnologie moderne per garantire un'esperienza utente fluida e reattiva.",
    image: "/images/task-app.jpg",
    technologies: ["React", "Tailwind CSS",],
    type: "Web Application",
    languages: ["JavaScript",],
    github_url: "https://github.com/username/task-manager",
    demo_url: "https://demo-taskmanager.com",
    is_favorite: true,
    created_at: "2024-11-02",
    updated_at: "2024-11-18"
  },
  {
    id: 3,
    title: "Portfolio Website",
    slug: "portfolio-website",
    description: "Un portfolio moderno e responsive per mostrare i propri lavori.",
    long_description: "Un sito portfolio elegante e moderno, completamente responsive e ottimizzato per le performance. Include animazioni fluide, design accattivante e una struttura SEO-friendly.",
    image: "/images/portfolio.jpg",
    technologies: ["React", "Tailwind CSS", "Framer Motion", "Zustand"],
    type: "Portfolio",
    languages: ["JavaScript",],
    github_url: "https://github.com/username/portfolio",
    demo_url: "https://myportfolio.com",
    is_favorite: false,
    created_at: "2025-08-05",
    updated_at: "2025-08-19"
  },
  {
    id: 4,
    title: "Lingo",
    slug: "lingo",
    description: "Un'app meteo con previsioni dettagliate e interfaccia intuitiva.",
    long_description: "Un'applicazione meteo moderna che fornisce previsioni accurate e dettagliate. Include mappe interattive, grafici delle temperature e notifiche personalizzabili per eventi meteorologici.",
    image: "/images/weather-app.jpg",
    technologies: ["React", "Tailwind CSS",],
    type: "Mobile App",
    languages: ["JavaScript", "React"],
    github_url: "https://github.com/username/weather-app",
    demo_url: null,
    is_favorite: true,
    created_at: "2024-10-15",
    updated_at: "2024-10-19"
  },
  {
    id: 5,
    title: "Spotify layout clone",
    slug: "spotify-clone",
    description: "Un clone del layout di Spotify.",
    long_description: "Un'applicazione web per lo streaming musicale, ispirata a Spotify, con funzionalità di ricerca, playlist personalizzate e raccomandazioni basate sugli ascolti.",
    image: "/images/spotify-clone.jpg",
    technologies: ["CSS",],
    type: "Web Application",
    languages: ["CSS",],
    github_url: "https://github.com/username/blog-cms",
    demo_url: "https://demo-blog.com",
    is_favorite: false,
    created_at: "2024-05-12",
    updated_at: "2024-05-12"
  },
  {
    id: 6,
    title: "Fitness Tracker",
    slug: "fitness-tracker",
    description: "App per il tracking degli allenamenti e obiettivi fitness.",
    long_description: "Un'applicazione completa per il tracking delle attività fitness, con monitoraggio degli allenamenti, statistiche dettagliate e programmi di allenamento personalizzati.",
    image: "/images/fitness-tracker.jpg",
    technologies: ["React Native", "Firebase", "Charts.js"],
    type: "Mobile App",
    languages: ["JavaScript", "React"],
    github_url: "https://github.com/username/fitness-tracker",
    demo_url: null,
    is_favorite: false,
    created_at: "2024-06-08",
    updated_at: "2024-06-08"
  },
  {
    id: 7,
    title: "Restaurant Website",
    slug: "restaurant-website",
    description: "Sito web per ristorante con prenotazioni online.",
    long_description: "Un sito web elegante per ristoranti che include menu digitale, sistema di prenotazioni online, gallery fotografica e integrazione con social media.",
    image: "/images/restaurant-site.jpg",
    technologies: ["Next.js", "Tailwind CSS", "Prisma", "PostgreSQL"],
    type: "Landing Page",
    languages: ["JavaScript", "TypeScript"],
    github_url: "https://github.com/username/restaurant-site",
    demo_url: "https://demo-restaurant.com",
    is_favorite: false,
    created_at: "2024-07-15",
    updated_at: "2024-07-15"
  },
  {
    id: 8,
    title: "Chat Application",
    slug: "chat-application",
    description: "Applicazione di chat real-time con rooms e notifiche.",
    long_description: "Un'applicazione di messaggistica real-time con supporto per chat di gruppo, invio di file, emoji e notifiche push. Costruita per essere veloce e affidabile.",
    image: "/images/chat-app.jpg",
    technologies: ["Socket.io", "Express", "React", "MongoDB"],
    type: "Web Application",
    languages: ["JavaScript", "Node.js"],
    github_url: "https://github.com/username/chat-app",
    demo_url: "https://demo-chat.com",
    is_favorite: true,
    created_at: "2024-08-22",
    updated_at: "2024-08-22"
  }
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
  setSelectedLanguage: (lang) => set({ selectedLanguage: lang, currentPage: 1 }),
  setCurrentPage: (page) => set({ currentPage: page }),

  getFilteredProjects: (page = 1, filters = {}) => {
    const { projects, selectedType, selectedLanguage } = get();
    const itemsPerPage = 6;
    
    let filteredProjects = [...projects];

    const typeFilter = filters.type || selectedType;
    const langFilter = filters.language || selectedLanguage;
    const nameFilter = filters.name_project || "";
    
    if (typeFilter) {
      filteredProjects = filteredProjects.filter(project => 
        project.type === typeFilter
      );
    }
    
    if (langFilter) {
      filteredProjects = filteredProjects.filter(project => 
        project.languages.includes(langFilter)
      );
    }
    
    if (nameFilter) {
      filteredProjects = filteredProjects.filter(project => 
        project.title.toLowerCase().includes(nameFilter.toLowerCase()) ||
        project.description.toLowerCase().includes(nameFilter.toLowerCase())
      );
    }

    const totalItems = filteredProjects.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const startIndex = (page - 1) * itemsPerPage;
    const paginatedProjects = filteredProjects.slice(startIndex, startIndex + itemsPerPage);
    
    return {
      projects: {
        data: paginatedProjects,
        current_page: page,
        last_page: totalPages,
        per_page: itemsPerPage,
        total: totalItems
      }
    };
  },

  getStarProjects: () => {
    const { projects } = get();
    const starProjects = projects.filter(project => project.is_favorite);
    
    return {
      projects: starProjects
    };
  },

  getProjectDetails: (slug) => {
    const { projects } = get();
    const project = projects.find(p => p.slug === slug);
    
    if (!project) {
      throw new Error('Progetto non trovato');
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
