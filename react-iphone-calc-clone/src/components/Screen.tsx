import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: end;
  align-items: end;
`;

interface NumberProps {
  numberLen: number;
}

const Number = styled.h1<NumberProps>`
  color: #fff;
  font-size: 100px;
  font-weight: 300;
  padding: 0 20px 10px 0;
`;

interface Props {
  calcSum: string;
}

const Screen = ({ calcSum }: Props) => {
  // 정규식 패턴: 숫자들을 찾아서, 3글자씩 끊어서, 추가
  // 1234567890abc => 1,234,567,890
  const calcSumNumber = calcSum
    .substring(0, 10)
    .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");

  return (
    <Container>
      <Number numberLen={calcSumNumber.length}>{calcSumNumber}</Number>
    </Container>
  );
};

export default Screen;
