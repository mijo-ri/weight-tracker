import { createContext, useState } from 'react';

const WeightsContext = createContext();

const WeightsProvider = ({ children }) => {
  const [weights, setWeights] = useState([]);
  const [current, setCurrent] = useState(null);

  const clearCurrent = () => {
    setCurrent(null);
  };

  // Add Weight
  const addWeight = async (weight) => {
    try {
      const res = await fetch('http://localhost:3001/weights', {
        method: 'POST',
        body: JSON.stringify(weight),
        headers: { 'Content-Type': 'application/json' },
      });

      const newWeight = await res.json();

      setWeights((prevWeights) => {
        let updatedWeights = [newWeight, ...prevWeights];

        // sort weights by date
        updatedWeights.sort((a, b) => new Date(a.date) - new Date(b.date));

        return updatedWeights;
      });
    } catch (err) {
      console.log(err);
    }
  };

  // Update Weight
  const updateWeight = async (updatedWeight) => {
    try {
      const res = await fetch(
        `http://localhost:3001/weights/${updatedWeight.id}`,
        {
          method: 'PUT',
          body: JSON.stringify(updatedWeight),
          headers: { 'Content-Type': 'application/json' },
        }
      );

      setWeights((prevWeights) => {
        const existingWeights = [...prevWeights];

        let updatedWeights = existingWeights.map((weight) =>
          weight.id === updatedWeight.id ? updatedWeight : weight
        );

        // sort weights by date
        updatedWeights.sort((a, b) => new Date(a.date) - new Date(b.date));

        return updatedWeights;
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <WeightsContext.Provider
      value={{
        weights,
        current,
        setWeights,
        setCurrent,
        clearCurrent,
        addWeight,
        updateWeight,
      }}
    >
      {children}
    </WeightsContext.Provider>
  );
};

export { WeightsProvider, WeightsContext };
