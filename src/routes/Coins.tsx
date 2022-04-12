import React from "react";
import styled from "styled-components";

const Coins = () => {
  const Title = styled.div`
    color: ${(props) => props.theme.accentColor};
  `;
  return (
    <Title>
      <h2>Coins</h2>
    </Title>
  );
};

export default Coins;
