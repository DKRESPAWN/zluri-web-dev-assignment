import React, { useState } from "react";
import styled from "styled-components";
import { Container, Wrapper } from "./style";
import mountain from "../images/mountain-img.png";
import forest from "../images/forest-img.png";
import ocean from "../images/ocean-img.png";
import desert from "../images/desert-img.png";
import vector from "../images/vector.png";

const optionsWithImages = [
  { label: "Mountain", image: mountain },
  { label: "Forest", image: forest },
  { label: "Ocean", image: ocean },
  { label: "Desert", image: desert },
];

const S4 = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [hoveredOption, setHoveredOption] = useState(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const selectOption = (option) => {
    setSelectedOption(option);
    setIsDropdownOpen(false);
  };

  return (
    <StyledWrapper>
      <Container>
        <Title>
          <h4>Solution Here</h4>
          <p>Answer below this.</p>
        </Title>
        <AnswerDiv>
          <CustomDropdown>
            <div className="selected-item" onClick={toggleDropdown}>
              {selectedOption ? selectedOption.label : "Dropdown"}
              <img src={vector} />
            </div>
            {isDropdownOpen && (
              <ul className="dropdown-list">
                {optionsWithImages.map((option, index) => (
                  <li
                    key={index}
                    onClick={() => selectOption(option)}
                    onMouseEnter={() => setHoveredOption(option)}
                    onMouseLeave={() => setHoveredOption(null)}
                  >
                    {option.label}
                  </li>
                ))}
              </ul>
            )}
          </CustomDropdown>
          {hoveredOption && (
            <PhotoDiv>
              <img src={hoveredOption.image} alt={hoveredOption.label} />
            </PhotoDiv>
          )}
        </AnswerDiv>
      </Container>
    </StyledWrapper>
  );
};

export default S4;

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
const AnswerDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  height: 342px;
`;

const CustomDropdown = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  background-color: #f6f7f9;
  width: 236px;
  margin-top: 110px;

  .selected-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: var(--secondary-grey-2, #484848);
    font-family: Lexend Medium;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    border-radius: 8px;
    border: 1px solid var(--secondary-grey-5, #ddd);
    padding: 10px;
    background-color: #fff;
  }
  .selected-item:hover,
  .selected-item:active {
    border: 1px solid var(--primary-blue-dark-2, #5287e8);
  }
  ul {
    display: flex;
    flex-direction: column;
    font-family: Lexend Regular;
    font-weight: 400;
    margin-top: 2px;
    margin-bottom: 0px;
    border-radius: 8px;
    box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.16);
    gap: 2px;
    padding: 8px;
    background-color: #fff;
  }
  li {
    color: black;
    display: flex;
    padding: 10px;
    align-items: center;
    gap: 10px;
    align-self: stretch;
    list-style-type: none;
    color: #000;
    font-family: Lexend Regular;
    font-size: 16px;
    font-weight: 400;
  }
  li:hover {
    border-radius: 8px;
    background: var(--primary-blue-light-1, #e1e8f8);
    font-family: Lexend Medium;
    font-size: 16px;
    font-weight: 500;
  }
`;

const PhotoDiv = styled.div`
  padding: 10px;
  background-color: white;
  border: 1px solid var(--primary-blue-light-3, #e8f0fc);
  border-radius: 8px;
  margin-left: 50px;
  img {
    max-width: 100%;
    border-radius: 8px;
  }
`;

{
  /* <label>
              <select
                className="dropdown"
                value={selectedOption}
                onChange={handleDropdownChange}
              >
                <option value="" onMouseEnter={handleOptionLeave}>
                  Dropdown
                </option>
                <option
                  value="mountain"
                  onMouseEnter={() => handleOptionHover("mountain")}
                >
                  Mountain
                </option>
                <option
                  value="forest"
                  onMouseEnter={() => handleOptionHover("forest")}
                >
                  Forest
                </option>
                <option
                  value="ocean"
                  onMouseEnter={() => handleOptionHover("ocean")}
                >
                  Ocean
                </option>
                <option
                  value="desert"
                  onMouseEnter={() => handleOptionHover("desert")}
                >
                  Desert
                </option>
              </select>
            </label> */
}
