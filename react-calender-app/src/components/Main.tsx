import React, { useState } from "react";
import styled from "styled-components";
import ControlDate from "./ControlDate";
import DateBox from "./DateBox";

const Container = styled.div`
  width: 700px;
  height: 500px;
  display: flex;
  flex-direction: column;
`;

const Main = () => {
  const [nowDate, setNowDate] = useState<Date>(new Date());
  const [clickedDate, setClickedDate] = useState<Date>();

  return (
    <Container>
      <ControlDate nowDate={nowDate} setNowDate={setNowDate} />
      <DateBox />
    </Container>
  );
};

export default Main;
