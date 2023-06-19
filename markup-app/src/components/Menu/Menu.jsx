import React, { useState } from 'react';
import styled from 'styled-components';
import Done from '../../assets/done.png';
import Text from '../../assets/text.png';
import Voice from '../../assets/voice.png';
import Facebook from '../../assets/facebook.png';
import Setting from '../../assets/setting.png';
import Contact from '../../assets/question.png';
import Sun from '../../assets/sun.png';
import Moon from '../../assets/moon.png';

const Menu = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };
  return (
    <MenuWrapper>
      <StyledContainer>
        <ListItem>
          <img src={Done} alt="Done" />
          <ListText>Spellchecker</ListText>
        </ListItem>
        <ListItem>
          <img src={Text} alt="Text" />
          <ListText>Text to Speech</ListText>
        </ListItem>
        <ListItem>
          <img src={Voice} alt="Voice" />
          <ListText>Speech to Text</ListText>
        </ListItem>
      </StyledContainer>
      <StyledLineContainer>
        <StyledLine />
      </StyledLineContainer>
      <StyledSecondContainer>
        <StyledWrapper>
          <img src={Setting} alt="Setting" />
          <ListText>Settings</ListText>
        </StyledWrapper>
        <StyledWrapper>
          <img src={Facebook} alt="Facebook" />
          <ListText>Facebook</ListText>
        </StyledWrapper>
        <StyledWrapper>
          <img src={Contact} alt="Contact" />
          <ListText>Contact support</ListText>
        </StyledWrapper>
      </StyledSecondContainer>
      <StyledSecondLineContainer>
        <StyledLine />
      </StyledSecondLineContainer>
      <ToggleWrapper>
        <ToggleSwitch checked={isToggled} onClick={handleToggle}>
          <ToggleSlider checked={isToggled} />
          <ToggleIconLeft src={Sun} alt="Sun" checked={isToggled} />
          <ToggleIconRight src={Moon} alt="Moon" checked={isToggled} />
        </ToggleSwitch>
      </ToggleWrapper>
    </MenuWrapper>
  );
};

export default Menu;

const MenuWrapper = styled.aside`
  width: 177px;
  height: 100%;
  background-color: #2d62ed;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 120px;
`;

const ListItem = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  width: 130px;
  height: 38px;
  border-radius: 30px 0px 0px 30px;
  background-color: transparent;
  margin-left: 30px;
  color: #ffffff;
  &:hover {
    background-color: #ffffff;
    color: #2d62ed;
  }
`;

const ListText = styled.span`
  margin-left: 10px;
  width: fit-content;
  height: 20px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
`;

const StyledLineContainer = styled.div`
  width: 100%;
  height: 5px;
  justify-content: center;
  align-items: center;
  margin-top: 200px;
  margin-bottom: 50px;
`;

const StyledLine = styled.div`
  width: 141px;
  height: 0px;
  align-items: center;
  margin-left: 15px;
  justify-content: center;
  border: 1px solid #9eb9ff;
`;

const StyledSecondContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

const StyledWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: #ffffff;
  padding: 10px;
  margin-left: 22px;
  width: 135px;
  height: 38px;
  cursor: pointer;
  &:hover {
    border-radius: 30px 0px 0px 30px;
    background-color: #ffffff;
    color: #2d62ed;
  }
`;

const StyledSecondLineContainer = styled.div`
  width: 100%;
  height: 5px;
  justify-content: center;
  align-items: center;
  margin-top: 48px;
  margin-bottom: 50px;
`;

const ToggleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
`;

const ToggleSwitch = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 26px;
  border-radius: 13px;
  background-color: ${(props) => (props.checked ? '#2d62ed' : 'transparent')};
  cursor: pointer;
  border: 0.702703px solid #dbe9fd;
`;

const ToggleSlider = styled.span`
  position: absolute;
  top: 2px;
  left: ${(props) => (props.checked ? 'calc(100% - 20px)' : '2px')};
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #fff;
  transition: left 0.3s ease-in-out;
`;

const ToggleIconLeft = styled.img`
  position: absolute;
  top: 2px;
  left: 4px;
  width: 20px;
  height: 20px;
  visibility: ${(props) => (props.checked ? 'visible' : 'hidden')};
`;

const ToggleIconRight = styled.img`
  position: absolute;
  top: 2px;
  right: 4px;
  width: 20px;
  height: 20px;
  visibility: ${(props) => (props.checked ? 'hidden' : 'visible')};
`;
