import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { ICoin } from "../Interface/CoinInterface";

// interface ICoin {
//   name?: string;
//   id?: string;
// }
const Coin = () => {
  const { coinId } = useParams();
  const baseUrl = `https://api.coinpaprika.com/v1/coins/${coinId}`;

  console.log("coinId", coinId);
  console.log("url", baseUrl);

  const fetchCoin = async () => {
    const res = await (await fetch(baseUrl)).json();
    // const json = await response.json();
    console.log("json", res);
  };

  console.log("fetch coin", fetchCoin());

  // useEffect(() => {
  //   const coin = await fetch(baseUrl);
  // }, []);

  return (
    <div>
      <h3>Coin: {coinId}</h3>
    </div>
  );
};

export default Coin;
