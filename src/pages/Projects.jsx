import { useProjectStore } from "../features/projects/store";
import { Error, Loading, NoResults } from "../components/ui/Error&Loading";
import { useEffect, useState } from "react";
import ProjectCard from "../features/projects/components/ProjectCard";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import StartingPage from "../components/ui/StartingPage";
import Pagination from "../components/ui/Pagination";
import Filter from "../features/projects/components/ProjectsFilters";
import Section from "../components/ui/Section";

const Projects = () => {
  return (
    <>
      <Section>
        <div className="max-w-6xl mx-auto">
          <StartingPage
            title="portfolio."
            semiTitle="Sono orgoglioso di presentarvi i miei progetti."
            description="In questa sezione raccolgo alcuni dei progetti che ho realizzato durante il mio percorso di formazione in Boolean, insieme a progetti sviluppati in autonomia per esercitazione e approfondimento personale.
              Ho iniziato a studiare programmazione all’inizio del 2014, e questi lavori rappresentano l’evoluzione delle mie competenze, del mio metodo e del mio approccio allo sviluppo software."
            image={
              <img
                className="w-2/3 md:mx-auto mx-auto"
                src="/NbPortfolioLogo.png"
                alt="Prova"
              />
            }
          />
        </div>
      </Section>
      <div className="bg-gray-100 p-10">
        <div className="max-w-6xl mx-auto">
          <ProjectsList />
        </div>
      </div>
    </>
  );
};

export default Projects;

const ProjectsList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({});
  const [projects, setProjects] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const { getFilteredProjects } = useProjectStore();

  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-100px",
  });

  useEffect(() => {
    const loadProjects = async () => {
      setIsLoading(true);
      setError(null);

      try {
        await new Promise((resolve) => setTimeout(resolve, 500));

        const projectsData = getFilteredProjects(currentPage, filters);
        setProjects(projectsData);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    loadProjects();
  }, [currentPage, filters, getFilteredProjects]);

  if (isLoading)
    return <Loading message="Caricamento in corso. Attendi un istante..." />;

  if (error)
    return (
      <Error
        message={
          error.message ||
          "Ops... si è verificato un errore. Contatta l'assistenza."
        }
      />
    );

  if (!projects || projects.projects.data.length === 0)
    return (
      <NoResults message="Nessun progetto trovato per i filtri selezionati." />
    );

  return (
    <>
      {/* <div>
        <Filter setFilters={setFilters} />
      </div> */}
      {/* <Pagination
        currentPage={projects.projects.current_page}
        totalPages={projects.projects.last_page}
        onPageChange={setCurrentPage}
      /> */}

      <div className="flex flex-wrap pt-6" ref={ref}>
        {projects.projects.data &&
          projects.projects.data.map((project, idx) => {
            return (
              <motion.div
                key={project.id}
                className="w-full md:w-6/12 xl:w-4/12 p-4"
                initial={{ opacity: 0, x: 100 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
                transition={{
                  duration: 0.6,
                  delay: idx * 0.15,
                  type: "spring",
                }}
              >
                <ProjectCard project={project} />
              </motion.div>
            );
          })}
      </div>
    </>
  );
};
