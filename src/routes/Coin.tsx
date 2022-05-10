import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ICoin } from "../Interface/CoinInterface";

const Coin = () => {
  const { coinId } = useParams();
  const [coinInfo, setCoinInfo] = useState({});
  const baseUrl = `https://api.coinpaprika.com/v1/coins/${coinId}`;
  const priceUrl = `https://api.coinpaprika.com/v1/tickers/${coinId}`;
  //api.coinpaprika.com/v1/tickers/btc-bitcoin

  console.log("url", baseUrl);

  const fetchCoin = async () => {
    return await (await fetch(baseUrl)).json();
  };

  const fetchPrice = async () => {
    return await (await fetch(priceUrl)).json();
  };
  console.log("fetch coin", fetchCoin());

  useEffect(() => {
    (async () => {
      const coin = await fetchCoin();
      setCoinInfo(coin);
      const price = await fetchPrice();
      console.log("price info", price);
      console.log("coin info", coin);
    })();
  }, []);

  return (
    <div>
      <h3>Coin: {coinId}</h3>
      <ul>
        <li>{coinInfo.name}</li>
      </ul>
    </div>
  );
};

export default Coin;
