import React from "react";
import styled from "styled-components";
import { Container } from "./style";
import ellipse_pink from "../images/ellipse-pink.png";
import ellipse_yellow from "../images/ellipse-yellow.png";
import PricingCard from "./PricingCard";

const S5 = () => {
  return (
    <Container>
      <Title>
        <h4>Solution Here</h4>
        <p>Put the created component below this.</p>
      </Title>
      <AnswerDiv>
        <PricingHeader>
          <div className="tab1">
            <h4>SaaS Management</h4>
          </div>
          <div className="tab2">
            <h4>Lifecycle Management</h4>
          </div>
        </PricingHeader>
        <PricingBody>
          <PricingCard
            title="Growth"
            description="Discover & manage all your apps in one place"
            features={[
              "Complete SaaS discovery",
              "Unlimited App Integrations",
              "Unlimited financial integrations",
              "Complete user and app management",
              "All financial transactions",
              "Basic Reports",
            ]}
          />
          <PricingCard
            title="Scale"
            description="Complete SaaS optimization by leveraging license management & financial intelligence"
            features={[
              "Complete license management",
              "Complete vendor & renewal management",
              "Cost optimization insights",
              "Budgeting & chargebacks",
              "Advanced Reports",
            ]}
          />
          <PricingCard
            title="Enterprise"
            description="Powerful automations, advanced security & access control that deliver robust & streamlined SaaSOps"
            features={[
              "Workflow Automations",
              "Employee App Store",
              "Security and Compliance",
              "Dedicated account manager",
              "Audit logs",
              "Custom reports",
            ]}
          />
        </PricingBody>
      </AnswerDiv>
    </Container>
  );
};

export default S5;

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
const AnswerDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 55px 60px;
  width: 1280px;
  height: 901px;
  background-image: url(${ellipse_yellow}), url(${ellipse_pink});
  background-position: left center, right top;
  background-size: auto, auto;
  background-repeat: no-repeat, no-repeat;
`;

const PricingHeader = styled.div`
  display: flex;
  height: 79px;
  justify-content: center;
  align-items: center;
  margin-bottom: 80px;
  border-bottom: 1px solid #dcdcdc;
  gap: 40px;
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 320px;
  }
  h4 {
    color: #545454;
    text-align: center;
    font-family: Lexend Medium;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  .tab1 {
    border-bottom: 2px solid #ffce70;
  }
`;
const PricingBody = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
