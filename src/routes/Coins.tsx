import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ICoin } from "../Interface/CoinInterface";

const Coins = () => {
  const Container = styled.div`
    margin: 1rem 2rem;
  `;
  const Header = styled.header`
    height: 10vh;
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  const Title = styled.div`
    color: ${(props) => props.theme.accentColor};
    h2 {
      font-size: 2em;
    }
  `;
  const CoinItem = styled.li`
    background-color: ${(props) => props.theme.textColor};
    color: ${(props) => props.theme.bgColor};
    font-size: 1.2em;
    margin-bottom: 1rem;
    padding: 1rem 2rem;
    border-radius: 15px;
  `;

  const CoinWrapper = styled.div`
    max-width: 500px;
    margin: 0 auto;
  `;

  const apiURL = "https://api.coinpaprika.com/v1/coins";
  const [coins, setCoins] = useState<ICoin[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchCoins = async () => {
    try {
      const res = await fetch(apiURL);
      const coins = await res.json();
      setCoins(coins);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    // (async () => {
    //   const resp = await fetch(apiURL);
    //   const coins = await resp.json();
    //   console.log(coins.slice(0, 100));
    fetchCoins();

    //   setCoins(coins.slice(0, 100));
    //   setIsLoading(false);
    // })();
  }, []);

  console.log(coins);
  return (
    <Container>
      <Header>
        <Title>
          <h2>Coins</h2>
        </Title>
      </Header>
      <CoinWrapper>
        {isLoading
          ? "Loading...."
          : coins.map((coin) => (
              <CoinItem key={coin.id}>
                <Link to={`/${coin.id}`}>{coin.name}&#10142;</Link>
              </CoinItem>
            ))}
      </CoinWrapper>
    </Container>
  );
};

export default Coins;
