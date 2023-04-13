import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: end;
  align-items: end;
`;

const Number = styled.h1`
  color: #fff;
  font-size: 100px;
  font-weight: 300;
  padding: 0 20px 10px 0;
`;

interface Props {
  calcSum: string;
}

const Screen = ({ calcSum }: Props) => {
  return (
    <Container>
      <Number>{calcSum}</Number>
    </Container>
  );
};

export default Screen;
