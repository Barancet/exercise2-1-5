import React from "react";

const Total = ({ parts }) => {
  const totalEx = parts.reduce((sum, parts) => sum + parts.exercises, 0);

  return <p>Total number of exercises: {totalEx}</p>;
};

export default Total;
