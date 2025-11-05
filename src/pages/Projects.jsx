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
            semiTitle="Sono un Full Stack Developer residente in un bellissimo paesino friulano."
            description="Dal 2024 ho intrapreso un percorso nel mondo dell’informatica,
          dedicandomi con entusiasmo alla programmazione full stack. Se non
          sono al computer puoi trovarmi in palestra, a giocare a beach
          volley o a passare del tempo con gli amici."
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
        // Simula un delay di caricamento
        await new Promise(resolve => setTimeout(resolve, 500));
        
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
    return <NoResults message="Nessun progetto trovato per i filtri selezionati." />;

  return (
    <>
      <div>
        <Filter setFilters={setFilters} />
      </div>
      <Pagination
        currentPage={projects.projects.current_page}
        totalPages={projects.projects.last_page}
        onPageChange={setCurrentPage}
      />

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
