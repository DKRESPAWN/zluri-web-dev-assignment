import React from "react";
import styled from "styled-components";
import { Container } from "./style";

const PricingCard = ({ title, description, features }) => {
  const cardStyle = {
    backgroundColor:
      title === "Growth"
        ? "#CBFFEE"
        : title === "Scale"
        ? "#FFEEB9"
        : title === "Enterprise"
        ? "#C9E8FF"
        : "transparent",
    borderRadius: title === "Scale" ? "0px 0px 19px 19px" : "19px",
  };

  return (
    <CardContainer>
      {title === "Scale" ? (
        <div className="popular">Most Popular</div>
      ) : (
        <div className="empty"></div>
      )}

      <div className="pricing-container" style={cardStyle}>
        <div className="sub-title">
          <h3>{title}</h3>
        </div>
        <div className="sub-description">
          <h3>{description}</h3>
        </div>
        <div className="sub-button">
          <button>Contact Sales</button>
        </div>
        <ul className="sub-details">
          {features.map((feature, index) => (
            <li className="sub-detail" key={index}>
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </CardContainer>
  );
};

export default PricingCard;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 375px;
  height: 605px;

  .popular {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    background-color: #ffce70;
    border-radius: 19px;
    padding-top: 5px;
    height: 50px;
    margin-bottom: -16px;
    color: #363535;

    text-align: center;
    font-family: Lexend Medium;
    font-size: 18.857px;
    font-style: normal;
    font-weight: 500;
  }

  .empty {
    height: 34px;
  }

  .pricing-container {
    display: flex;
    flex-direction: column;
    border-radius: 19px;
    height: 100%;
  }
  .sub-title h3 {
    color: #141c32;
    font-family: Lexend Medium;
    font-size: 40.843px;
    font-style: normal;
    font-weight: 600;
    margin: 0px;
  }
  .sub-title {
    margin-left: 34px;
    margin-top: 45px;
  }

  .sub-description h3 {
    color: #393939;
    font-family: Lexend Medium;
    font-size: 18.857px;
    font-style: normal;
    font-weight: 400;
    margin: 0px;
  }

  .sub-description {
    margin-left: 34px;
    margin-top: 10px;
    padding-right: 48px;
    height: 89px;
  }

  .sub-button {
    margin-top: 50px;
  }

  .sub-button button {
    width: 150.194px;
    height: 54.57px;
    border-radius: 65.289px;
    border: 0.974px solid #2e2e2e;
    background: #fff;
    margin-left: 28.5px;
  }

  .sub-details {
    color: #141c32;
    font-family: Lexend Medium;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    margin-top: 29.43px;
    margin-left: 57px;
    padding: 0px;
    padding-right: 70px;
  }
  .sub-details li {
    margin-bottom: 5px;
  }
`;
