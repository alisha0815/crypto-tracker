import React from "react";
import styled from "styled-components";
import Spinner from "react-spinner-material";

export const LoadingSpinner = () => {
  const Loading = styled.div`
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h2 {
      margin-top: 1rem;
      display: inline-block;
      font-size: 1.2em;
    }
  `;

  return (
    <Loading>
      <Spinner radius={120} color="white" stroke={2} visible={true} />
      <h2>Loading....</h2>
    </Loading>
  );
};
