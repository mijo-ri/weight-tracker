import React, { useEffect, useContext } from 'react';
import WeightDashboard from '../components/weights/WeightDashboard';
import { WeightsContext } from '../context/WeightsContext';

const Home = ({ initialWeights }) => {
  const { weights, setWeights } = useContext(WeightsContext);

  useEffect(() => {
    setWeights(initialWeights);
  }, []);

  return <WeightDashboard />;
};

export async function getServerSideProps() {
  const res = await fetch('http://localhost:3001/weights?_sort=date');
  const weights = await res.json();

  return {
    props: {
      initialWeights: weights,
    },
  };
}

export default Home;
