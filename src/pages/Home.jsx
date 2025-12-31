import { useProjectStore } from "../features/projects/store";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useRef, useState, useEffect } from "react";
import Section from "../components/ui/Section";

import ProjectCard from "../features/projects/components/ProjectCard";
import { Error, Loading, NoResults } from "../components/ui/Error&Loading";

import H1 from "../assets/Home1.png";
import H2 from "../assets/Home2.png";
import H3 from "../assets/Home3.png";
// import cv from "../assets/Nicholas Buiatti CV.pdf";

const Home = () => {
  return (
    <>
      <Section className="p-0">
        <div className="max-w-6xl mx-auto">
          <Jumbotron />
        </div>
      </Section>
      <div>
        <div className="max-w-6xl mx-auto">
          <StarProjects />
        </div>
      </div>
    </>
  );
};

const Jumbotron = () => {
  return (
    <ImageCompare
      leftImg={H3}
      rightImg={H3}
      altLeft="Left Image"
      altRight="Right Image"
    />
  );
};

///////////////////////////////////////////////////////////////////////////////////////////DA SISTEMARE

const ImageCompare = ({ leftImg, rightImg, altLeft = "", altRight = "" }) => {
  const containerRef = useRef(null);
  const [divider, setDivider] = useState(50);

  const backendTechs = [
    "PHP",
    "Laravel",
    "Node.js",
    "Express",
    "Python",
    "Django",
    "Flask",
    "Java",
    "Spring Boot",
    "C#",
    ".NET",
    "Ruby",
    "Rails",
    "Go",
    "Fiber",
    "Rust",
    "Actix",
    "MySQL",
    "PostgreSQL",
    "MongoDB",
    "Redis",
    "Docker",
  ];
  const frontendTechs = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Vue.js",
    "Angular",
    "Svelte",
    "Next.js",
    "Nuxt.js",
    "Gatsby",
    "Bootstrap",
    "Tailwind CSS",
    "Sass",
    "Less",
    "jQuery",
    "Alpine.js",
    "Webpack",
    "Vite",
    "Parcel",
    "Figma",
    "Adobe XD",
  ];

  const generateRandomTechs = (array) => {
    const screenWidth = window.innerWidth;
    let availableSizes = ["text-base", "text-xl"];
    if (screenWidth >= 768) {
      availableSizes.push("text-3xl");
    }
    let numberLan = 10;
    if (screenWidth >= 768) {
      numberLan = 15;
    }
    const rimescolo = [...array].sort(() => 0.5 - Math.random());
    return rimescolo.slice(0, numberLan).map((tech) => ({
      name: tech,
      size: availableSizes[Math.floor(Math.random() * availableSizes.length)],
    }));
  };

  const [randomBackendTechs] = useState(generateRandomTechs(backendTechs));
  const [randomFrontendTechs] = useState(generateRandomTechs(frontendTechs));

  const handleMove = (e) => {
    if (e.touches) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.touches ? e.touches[0].clientX : e.clientX) - rect.left;
    const percent = Math.max(0, Math.min(100, 100 - (x / rect.width) * 100));
    setDivider(percent);
  };

  //VALUTARE L'ALTEZZA FISSA IN BASE ALL'IMMAGINE CHE INSERISCO
  return (
    <motion.div
      ref={containerRef}
      className="relative h-[20rem] md:h-[32rem] select-none mx-auto border-b"
      onMouseMove={handleMove}
      onTouchMove={handleMove}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ type: "spring", stiffness: 120, damping: 20 }}
      style={{
        userSelect: "none",
        touchAction: "none",
      }}
    >
      <img
        src={leftImg}
        alt={altLeft}
        className="absolute top-0 left-0 w-full h-full object-contain z-50"
        draggable={false}
        style={{
          clipPath: `inset(0 ${100 - divider}% 0 0)`,
          // height: "34.5rem",
          filter: "grayscale(100%)",
          objectPosition: "bottom",
        }}
      />
      <img
        src={rightImg}
        alt={altRight}
        className="absolute top-0 left-0 w-full h-full object-contain z-50"
        draggable={false}
        style={{
          clipPath: `inset(0 0 0 ${divider}%)`,
          // height: "34.5rem",
          objectPosition: "bottom",
        }}
      />
      <div className="absolute top-0 left-0 right-0 w-full h-full">
        <div className="flex justify-between items-center h-full">
          <motion.div
            className="w-full h-full flex flex-col justify-between"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: divider / 100 }}
            transition={{ duration: 0.1, ease: "easeOut" }}
          >
            <div></div>
            <h2 className="text-3xl md:text-6xl">Back-End</h2>
            <div className="flex flex-wrap-reverse">
              {randomBackendTechs.map((tech, index) => (
                <span
                  key={index}
                  className={`${tech.size} text-gray-600 opacity-75`}
                >
                  {tech.name}
                  {index < randomBackendTechs.length - 1 ? " • " : ""}
                </span>
              ))}
            </div>
          </motion.div>
          <motion.div
            className="w-full h-full text-end flex flex-col justify-between"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 - divider / 100 }}
            transition={{ duration: 0.1, ease: "easeOut" }}
          >
            <div></div>
            <h2 className="text-3xl md:text-6xl">Front-End</h2>
            <div className="flex flex-wrap-reverse justify-end">
              {randomFrontendTechs.map((tech, index) => (
                <span
                  key={index}
                  className={`${tech.size} text-gray-600 opacity-75`}
                >
                  {tech.name}
                  {index < randomFrontendTechs.length - 1 ? " • " : ""}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      <div
        className="absolute top-0 h-full pointer-events-none"
        style={{ left: `${divider}%` }}
      />
    </motion.div>
  );
};

const StarProjects = () => {
  const [starProjects, setStarProjects] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const { getStarProjects } = useProjectStore();

  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-100px",
  });

  useEffect(() => {
    const loadStarProjects = async () => {
      setIsLoading(true);
      setError(null);

      try {
        // Simula un delay di caricamento
        await new Promise((resolve) => setTimeout(resolve, 300));

        const projectsData = getStarProjects();
        setStarProjects(projectsData);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    loadStarProjects();
  }, [getStarProjects]);

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

  if (starProjects?.projects?.length === 0)
    return <NoResults message="Nessun progetto in evidenza al momento." />;
  console.log(starProjects);

  return (
    <section className=" container mx-auto py-12">
      <div className="flex justify-between items-center text-dark">
        <hr className="flex-1 border-gray-200" />
        <h1 className="mx-5 text-2xl text-gray-700 whitespace-nowrap">
          Progetti in rilievo
        </h1>
        <hr className="flex-1 border-gray-200" />
      </div>
      <div className="flex flex-wrap px-10" ref={ref}>
        {starProjects?.projects.map((project, idx) => (
          <motion.div
            key={project.id}
            className="w-full md:w-6/12 xl:w-4/12 p-4"
            initial={{ opacity: 0, x: 100 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
            transition={{ duration: 0.6, delay: idx * 0.15, type: "spring" }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Home;
