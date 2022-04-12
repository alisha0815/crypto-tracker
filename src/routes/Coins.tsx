import React from "react";
import styled from "styled-components";
import Coin from "./Coin";

const Coins = () => {
  const Container = styled.div``;
  const Header = styled.header``;

  const Title = styled.div`
    color: ${(props) => props.theme.accentColor};
  `;
  const CoinList = styled.li``;

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
      <CoinList>
        {coins.map((coin) => (
          <Coin key={coin.id} name={coin.name} />
        ))}
      </CoinList>
    </Container>
  );
};

export default Coins;
