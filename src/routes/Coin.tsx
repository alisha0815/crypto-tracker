import React from "react";
import { useParams } from "react-router-dom";

interface ICoin {
  name?: string;
  id?: string;
}
const Coin: React.FC<ICoin> = ({ name, id }: ICoin) => {
  // const { coinId } = useParams();

  return (
    <div>
      <h3>Coin: {name}</h3>
    </div>
  );
};

export default Coin;
