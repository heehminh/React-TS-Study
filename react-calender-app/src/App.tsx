import React from "react";
import styled from "styled-components";
import "./App.css";
import Main from "./components/Main";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <Container>
      <Main />
    </Container>
  );
}

export default App;
