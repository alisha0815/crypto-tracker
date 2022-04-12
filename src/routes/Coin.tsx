import React from "react";
import { useParams } from "react-router-dom";

const Coin = () => {
  const { coinId } = useParams();

  return (
    <div>
      <h3>Coin: {coinId}</h3>
    </div>
  );
};

export default Coin;
