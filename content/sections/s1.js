import React from "react";
import styled from "styled-components";
import { Container, Wrapper } from "./style";

const S1 = () => {
  return (
    <StyledWrapper>
      <Container>
        <Title>
          <h4>Solution Here</h4>
          <p>Answer below this.</p>
        </Title>
        <AnswerDiv>
          {/* <FlexColumn>
            <FlexRow>
              <FlexItem>1st</FlexItem>
              <FlexItem>2nd</FlexItem>
            </FlexRow>
            <FlexRow>
              <FlexItem>3rd</FlexItem>
              <FlexItem>4th</FlexItem>
            </FlexRow>
          </FlexColumn> */}
          <GridContainer>
            <GridItem>1st</GridItem>
            <GridItem>2nd</GridItem>
            <GridItem>3rd</GridItem>
            <GridItem>4th</GridItem>
          </GridContainer>
        </AnswerDiv>
      </Container>
    </StyledWrapper>
  );
};

export default S1;

const StyledWrapper = styled(Wrapper)`
  background: #f6f7f9;
`;

const Title = styled.div`
  h4 {
    font-size: 32px;
    font-family: Lexend Medium;
    font-style: normal;
    font-weight: 500;
    line-height: 40px;
    letter-spacing: -0.4px;
    span {
      background: #fae090;
    }
  }
  p {
    font-size: 18px;
    font-family: Lexend Regular;
    font-style: normal;
    font-weight: 400;
    line-height: 28px;
  }
`;
const AnswerDiv = styled.div``;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 40px;
`;

const GridItem = styled.div`
  display: flex;
  flex-direction: column;
  padding: 80px;
  background: #ffffff;
  border: 1px solid #000000;
  border-radius: 20px;
  justify-items: center;
  align-items: center;
`;
