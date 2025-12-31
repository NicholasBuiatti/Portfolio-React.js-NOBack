import { useProjectStore } from "../features/projects/store";
import { useParams } from "react-router-dom";
import { Error, Loading } from "../components/ui/Error&Loading";
import Section from "../components/ui/Section";
import StartingPage from "../components/ui/StartingPage";
import CarouselProject from "../features/projects/components/CarouselProject";
import moment from "moment";
import { useState, useEffect } from "react";

const ProjectDetails = () => {
  const { slug } = useParams();
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const { getProjectDetails } = useProjectStore();

  useEffect(() => {
    const loadProjectDetails = async () => {
      setIsLoading(true);
      setError(null);

      try {
        // Simula un delay di caricamento
        await new Promise((resolve) => setTimeout(resolve, 300));

        const project = getProjectDetails(slug);
        setData({ project });
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    if (slug) {
      loadProjectDetails();
    }
  }, [slug, getProjectDetails]);

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

  if (!data) {
    return <Error message="Progetto non trovato" />;
  }
  console.log("data: ", data);

  return (
    <div className="min-h-screen">
      <Section>
        <div className="max-w-6xl mx-auto">
          <StartingPage
            title={
              <>
                {data.project.title}
                <hr />
              </>
            }
            semiTitle={
              <div className="flex justify-between">
                <div>{data.project.type || "N/A"}</div>
                <div>
                  {data.project.created_at
                    ? moment(data.project.created_at).format("DD/MM/YYYY")
                    : "N/A"}
                </div>
              </div>
            }
            description={
              <>
                <div>
                  {data.project.long_description || data.project.description}
                </div>
                <hr />
                <div className="mt-4 flex justify-between">
                  <ul className="list-disc list-inside mt-2 col-4 text-start">
                    {data.project.languages
                      ? data.project.languages.map((language, index) => (
                          <li key={index} className="text-gray-600 relative">
                            <span>{language}</span>
                          </li>
                        ))
                      : "N/A"}
                  </ul>
                  <ul className="list-disc list-inside mt-2 col-4 text-start">
                    {data.project.technologies
                      ? data.project.technologies.map((technology, index) => (
                          <li key={index} className="text-gray-600 relative">
                            <span>{technology}</span>
                          </li>
                        ))
                      : "N/A"}
                  </ul>
                  <div className="col-8">
                    {data.project.github_url && (
                      <p className="mb-2">
                        <a
                          href={data.project.github_url}
                          className="text-blue-400 underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          GitHub project
                        </a>
                      </p>
                    )}
                    {data.project.demo_url && (
                      <p className="mb-2">
                        <a
                          href={data.project.demo_url}
                          className="text-green-400 underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Demo Live
                        </a>
                      </p>
                    )}
                  </div>
                </div>
              </>
            }
            image={
              <img
                src={data.project.image || "/images/placeholder.jpg"}
                className="rounded-2xl object-cover h-full w-full"
                alt={data.project.title}
              />
            }
          />
        </div>
      </Section>

      <CarouselProject images={data.project.images || []} />
    </div>
  );
};

export default ProjectDetails;
