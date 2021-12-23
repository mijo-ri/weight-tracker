import React from 'react';
import WeightDashboard from '../components/weights/WeightDashboard';

const Home = ({ weights }) => {
  return <WeightDashboard weights={weights} />;
};

export async function getStaticProps() {
  const res = await fetch('http://localhost:3001/weights');
  const weights = await res.json();

  return {
    props: {
      weights,
    },
  };
}

export default Home;
