import React from "react";
import styled from "styled-components";
import Coin from "./Coin";

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

  //   interface ICoin {
  //       id: string,
  //       name: string,
  //       symbol: string,
  //       rank: number,
  //       type: string
  //   }

  const coins = [
    {
      id: "btc-bitcoin",
      name: "Bitcoin",
      symbol: "BTC",
      rank: 1,
      is_new: false,
      is_active: true,
      type: "coin",
    },
    {
      id: "eth-ethereum",
      name: "Ethereum",
      symbol: "ETH",
      rank: 2,
      is_new: false,
      is_active: true,
      type: "coin",
    },
    {
      id: "hex-hex",
      name: "HEX",
      symbol: "HEX",
      rank: 3,
      is_new: false,
      is_active: true,
      type: "token",
    },
  ];
  return (
    <Container>
      <Header>
        <Title>
          <h2>Coins</h2>
        </Title>
      </Header>

      {coins.map((coin) => (
        <CoinItem>
          <Coin key={coin.id} name={coin.name} />
        </CoinItem>
      ))}
    </Container>
  );
};

export default Coins;
