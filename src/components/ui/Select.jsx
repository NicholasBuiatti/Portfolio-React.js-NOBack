import { useState, useEffect } from "react";
import PropTypes from "prop-types";

export default function Select({
  label,
  size = "sm",
  endpoint,
  options: staticOptions,
  onChange,
  value,
  mapOptions,
  name,
  multiple,
  ...props
}) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (endpoint) {
      const fetchData = async () => {
        setIsLoading(true);
        setError(null);
        
        try {
          const result = await endpoint();
          setData(result);
        } catch (err) {
          setError(err);
        } finally {
          setIsLoading(false);
        }
      };

      fetchData();
    }
  }, [endpoint]);

  // Usa le opzioni statiche se fornite, altrimenti quelle dal data fetching
  const options = staticOptions || (data && mapOptions ? mapOptions(data) : []);

  if (isLoading)
    return (
      <div className="mb-5 group">
        {label && <label className="text-gray-600">{label}</label>}
        <select
          className="block w-full border rounded-md border-gray-700 py-2.5 px-1"
          // size={size}
          disabled
        >
          <option>Caricamento...</option>
        </select>
      </div>
    );

  if (error)
    return (
      <div className="mb-5 group">
        {label && <label className="text-gray-600">{label}</label>}
        <select
          className="block w-full border rounded-md border-gray-700 py-2.5 px-1"
          // size={size}
          disabled
        >
          <option>Errore!</option>
        </select>
      </div>
    );

  return (
    <div className="w-full mb-5 group">
      {label && <label className="text-gray-600">{label}</label>}
      <select
        className="block w-full border rounded-md border-gray-700 py-2.5 px-1"
        onChange={onChange}
        value={value}
        name={name}
        multiple={multiple}
        size={size}
        {...props}
      >
        <option value="">Seleziona...</option>
        {options?.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

Select.propTypes = {
  label: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  endpoint: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    label: PropTypes.string,
  })),
  onChange: PropTypes.func,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    ),
  ]),
  mapOptions: PropTypes.func,
  name: PropTypes.string,
  multiple: PropTypes.bool,
};
