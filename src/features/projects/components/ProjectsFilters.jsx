import { useProjectStore } from "../store";
import Input from "../../../components/ui/Input";
import Select from "../../../components/ui/Select";
import { useState, useEffect } from "react";
import Button from "../../../components/ui/Button";
import PropTypes from "prop-types";

const ProjectsFilters = ({ setFilters }) => {
  const [form, setForm] = useState({
    name_project: "",
    type: "",
    language: "",
  });

  const { getTypes, getLanguages } = useProjectStore();
  const [typesOptions, setTypesOptions] = useState([]);
  const [languagesOptions, setLanguagesOptions] = useState([]);

  useEffect(() => {
    const loadOptions = () => {
      const types = getTypes();
      const languages = getLanguages();
      
      setTypesOptions(types.map(type => ({
        value: type.name,
        label: type.name,
      })));
      
      setLanguagesOptions(languages.map(language => ({
        value: language.name,
        label: language.name,
      })));
    };

    loadOptions();
  }, [getTypes, getLanguages]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFilters(form);
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-between items-end">
      <div className="md:w-1/3 px-2">
        <Input
          label={"Nome Progetto"}
          name="name_project"
          placeholder="Cerca progetto..."
          value={form.name_project}
          onChange={(e) =>
            setForm({ ...form, [e.target.name]: e.target.value })
          }
        />
      </div>

      <div className="w-1/3 px-2">
        <Select
          label={"Tipo"}
          options={typesOptions}
          value={form.type}
          name="type"
          onChange={(e) =>
            setForm({ ...form, [e.target.name]: e.target.value })
          }
        />
      </div>

      <div className="w-1/3 px-2">
        <Select
          label={"Linguaggio"}
          options={languagesOptions}
          value={form.language}
          name="language"
          onChange={(e) =>
            setForm({ ...form, [e.target.name]: e.target.value })
          }
        />
      </div>
      <div>
        <Button text={"Filtra"} variant="outline" className="mb-5" />
      </div>
    </form>
  );
};

ProjectsFilters.propTypes = {
  setFilters: PropTypes.func.isRequired,
};

export default ProjectsFilters;
