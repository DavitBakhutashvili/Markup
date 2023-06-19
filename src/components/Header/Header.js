import React from 'react';
import styled from 'styled-components';
import Chrome from '../../assets/chrome.png';
import Avatar from '../../assets/avatar.png';
import Vector from '../../assets/arrow.png';

const Header = () => {
  return (
    <HeaderWrapper>
      <ButtonsContainer>
        <ChromeButton>
          <img src={Chrome} alt="ChromeImg" />
          <StyledLabel>Add to Chrome</StyledLabel>
        </ChromeButton>
        <UpgradeButton>
          <StyledTypography>Upgrade to Pro </StyledTypography>
        </UpgradeButton>
      </ButtonsContainer>
      <AvatarButtonWrapper>
        <AvatarButton>
          <img src={Avatar} alt="AvatarImg" />
        </AvatarButton>
        <ArrowWButton>
          <img src={Vector} alt="VectorImg" />
        </ArrowWButton>
      </AvatarButtonWrapper>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 80px;
  gap: 80px;
  border-bottom: 1px solid #e3e3e3;
  transform: rotate(0.04deg);
`;

const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 16px;
`;

const ChromeButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 8px 20px;
  gap: 10px;
  width: 172px;
  height: 36px;
  margin-left: 16px;
  background: #ffffff;
  border: 1px solid #dfdfdf;
  border-radius: 8px;
  cursor: pointer;
`;

const UpgradeButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 4px 20px;
  gap: 4px;
  width: 152px;
  height: 36px;
  border: none;
  background: #2d62ed;
  border-radius: 6px;
  margin-left: 16px;
  cursor: pointer;
`;

const StyledTypography = styled.label`
  width: fit-content;
  height: 28px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 28px;
  align-items: center;
  text-align: center;
  color: #ffffff;
  cursor: pointer;
`;

const StyledLabel = styled.label`
  width: 102px;
  height: 17px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  cursor: pointer;
  text-align: center;
  color: #4b4b4b;
  flex: none;
  order: 1;
  flex-grow: 0;
`;

const AvatarButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items center:
    margin-left: 180px;
    margin-right: 20px;
`;

const AvatarButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  border-radius: 18px;
  cursor: pointer;
`;

const ArrowWButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  margin-left: 2px;
  margin-top: 5px;
  border: none;
  background: transparent;
  cursor: pointer;
`;
