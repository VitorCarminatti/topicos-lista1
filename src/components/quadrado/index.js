import React from "react";

import { Container, StyledNormalButton, StyledWinnerButton } from "./styles";

const Quadrado = props => {
  const { valor, onClick, styleGanhador } = props;
  console.log(styleGanhador);
  return (
    <Container>
      {styleGanhador ? (
        <StyledWinnerButton onClick={onClick}>{valor}</StyledWinnerButton>
      ) : (
        <StyledNormalButton onClick={onClick}>{valor}</StyledNormalButton>
      )}
    </Container>
  );
};

export default Quadrado;
