import React from 'react';

const WeightListItem = ({ weight }) => {
  return <li key={weight.id}>{weight.total}</li>;
};

export default WeightListItem;
