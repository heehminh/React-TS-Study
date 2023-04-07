import React from "react";
import { useThemeContext } from "../../context/themeContext";
import styled from "styled-components";

const Container = styled.div`
  position: absolute;
`;

const Switch = () => {
  const { toggleTheme } = useThemeContext();

  return (
    <Container>
      <button>{`테마 변경`}</button>
    </Container>
  );
};

export default Switch;
