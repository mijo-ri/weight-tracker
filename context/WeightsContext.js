import { createContext, useState } from 'react';

const WeightsContext = createContext();

const WeightsProvider = ({ children }) => {
  const [weights, setWeights] = useState([]);

  return (
    <WeightsContext.Provider value={{ weights, setWeights }}>
      {children}
    </WeightsContext.Provider>
  );
};

export { WeightsProvider, WeightsContext };
