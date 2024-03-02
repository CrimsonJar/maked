import React from "react";

type StockProps = {
  values: {
    usd: number;
    eur: number;
    oil: number;
  };
};

const Stock: React.FC<StockProps> = ({ values }) => {
  const { usd, eur, oil } = values;

  return (
    <div>
      <span>USD MOEX {usd} </span>
      <span> EUR MOEX {eur}</span>
      <span> НЕФТЬ {oil} </span>
      <a href='#'>...</a>
    </div>
  );
};

export default Stock;
