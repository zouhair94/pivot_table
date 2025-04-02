import './App.css';
import { Pivot } from './components/pivot/pivot';
import { sales as data } from "./components/pivot/data"
import { useEffect, useState, useCallback } from 'react';


function App() {
  const [filters, setFilter] = useState([])

  // Options for the checkboxes (can be fetched dynamically)
  const [options, setOptions] = useState([
    { id: 1, label: "Region", value: "region", checked: true },
    { id: 2, label: "Country", value: "country", checked: false },
    { id: 3, label: "City", value: "city", checked: false },
  ]);

  // Handle checkbox state changes
  const handleCheckboxChange = (id) => {
    setOptions((prevOptions) =>
      prevOptions.map((option) =>
        option.id === id ? { ...option, checked: !option.checked } : option
      )
    );
  };

  // Handle form submission
  const handleSubmit = useCallback((event) => {
    if (event)
      event.preventDefault();
    const selectedOptions = options.filter((option) => option.checked).map((option) => option.value);
    setFilter(selectedOptions);
  }, [options]);

  useEffect((e) => {
    handleSubmit(e);
  }, [handleSubmit]);

  return (
    <div className="App">
      <div>
        <h1>Pivot Grid Example</h1>
        <form onSubmit={handleSubmit}>
          {options.map((option) => (
            <div key={option.id}>
              <input
                type="checkbox"
                id={`checkbox-${option.id}`}
                name={option.value}
                value={option.value}
                checked={option.checked}
                onChange={() => handleCheckboxChange(option.id)}
              />
              <label htmlFor={`checkbox-${option.id}`}>{option.label}</label>
            </div>
          ))}
        </form>

        <Pivot
          data={data}
          rows={[...filters]}
          cols="date"
          value="amount"
        />
      </div >

    </div >

  );
}

export default App;
