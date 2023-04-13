import React from "react";
import styled from "styled-components";
import Main from "./components/Main";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const App = () => {
  return (
    <Container>
      <Main />
    </Container>
  );
};

export default App;
