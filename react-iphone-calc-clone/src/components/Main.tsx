import React, { useState } from "react";
import styled from "styled-components";
import ButtonBox from "./ButtonBox";
import Screen from "./Screen";

const Container = styled.div`
  width: 350px;
  height: 700px;
  background-color: #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Main = () => {
  const [calcSum, setCalcSum] = useState("0");
  const [operation, setOperation] = useState("");
  const [prevSum, setPrevSum] = useState(0);

  return (
    <Container>
      <Screen calcSum={calcSum} />
      <ButtonBox />
    </Container>
  );
};

export default Main;
