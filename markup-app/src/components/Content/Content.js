import React, { useState } from 'react';
import styled from 'styled-components';
import Done from '../../assets/done2.png';
import Delete from '../../assets/delete.png';
import Copy from '../../assets/copy.png';
import Georgia from '../../assets/georgia.png';
import British from '../../assets/british.png';
import Spain from '../../assets/spain.png';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import MyClass from '../myClass/myClass';

const Content = () => {
  const languages = [
    { code: 'ge', label: 'Georgian', flag: Georgia },
    { code: 'es', label: 'Spanish', flag: Spain },
    { code: 'en', label: 'English', flag: British },
  ];

  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
  const [inputValue, setInputValue] = useState('');
  const [editorContent, setEditorContent] = useState('');

  const handleLanguageChange = (event) => {
    const selectedLanguageCode = event.target.value;
    const selectedLanguage = languages.find(
      (language) => language.code === selectedLanguageCode
    );
    setSelectedLanguage(selectedLanguage);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const characterCount = inputValue.length;
  const wordCount = inputValue.trim().split(/\s+/).length;

  const cl = new MyClass();
  cl.text =
    'გრძელი ტექსტი დასამუშავებლად. სასვენი ნიშნებით და სხვა სიმბოლოებით’';
  cl.onresult = function (result) {
    var MyResult = result.sourceUrl;
    console.log('my result:', MyResult);
  };

  cl.start();

  return (
    <ContentWrapper>
      <StyledButtonContainer>
        <CheckButton>
          <img src={Done} alt="doneIcon" />
          <StyledCheckButtonText>Check</StyledCheckButtonText>
        </CheckButton>
        <CopyButton>
          <img src={Copy} alt="copyIcon" />
          <StyledCopyButtonText>Copy</StyledCopyButtonText>
        </CopyButton>
        <DeleteButton>
          <img src={Delete} alt="deleteIcon" />
          <StyledDeleteButtonText>Delete</StyledDeleteButtonText>
        </DeleteButton>
        <StyledLine></StyledLine>
        <DropdownWrapper>
          <FlagImage src={selectedLanguage.flag} alt={selectedLanguage.label} />
          <Dropdown
            value={selectedLanguage.code}
            onChange={handleLanguageChange}
          >
            {languages.map((language) => (
              <Option key={language.code} value={language.code}>
                {language.label}
              </Option>
            ))}
          </Dropdown>
        </DropdownWrapper>
      </StyledButtonContainer>
      <TextAreaContainer>
        <TextArea
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter your text"
        />
      </TextAreaContainer>
      <StyledContainer>
        <ReactQuill
          value={editorContent}
          onChange={setEditorContent}
          placeholder="Enter your text"
        />
        <StyledCountWrapper>
          <CountText>
            {characterCount} characters, {wordCount} words{' '}
          </CountText>
        </StyledCountWrapper>
      </StyledContainer>
    </ContentWrapper>
  );
};

export default Content;

const ContentWrapper = styled.main`
  flex-grow: 1;
`;

const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 120px;
  border-bottom: 1px solid #ededed;
`;

const CheckButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 4px 20px 4px 14px;
  gap: 4px;
  position: absolute;
  width: 106px;
  height: 36px;
  border: none;
  left: 295px;
  top: 145px;
  cursor: pointer;
  background: #2d62ed;
  border-radius: 6px;
`;

const CopyButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 4px 14px;
  gap: 8px;
  position: absolute;
  width: 90px;
  height: 36px;
  right: 500px;
  cursor: pointer;
  border: none;
  top: 145px;
  background: #ededed;
  border-radius: 4px;
`;

const DeleteButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 4px 14px;
  gap: 8px;
  position: absolute;
  width: 97px;
  height: 36px;
  cursor: pointer;
  right: 380px;
  border: none;
  top: 145px;
  background: #f8f8f8;
  border-radius: 4px;
`;

const StyledLine = styled.div`
  position: absolute;
  width: 1px;
  height: 24px;
  left: calc(50% - 1px / 2 + 603.5px);
  top: calc(50% - 24px / 2 - 385px);

  border: 1px solid #cccaca;
`;

const DropdownWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 4px 14px;
  gap: 8px;
  position: absolute;
  width: 144px;
  height: 36px;
  //   left: 1340px;
  top: 140px;
  float: right;
  right: 170px;
  background: #f8f8f8;
  border-radius: 4px;
`;

const StyledCheckButtonText = styled.span`
  width: 44px;
  height: 28px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 28px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #ffffff;
  flex: none;
  order: 1;
  flex-grow: 0;
`;

const StyledCopyButtonText = styled.span`
  width: 30px;
  height: 28px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 28px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #2d62ed;
  flex: none;
  order: 1;
  flex-grow: 0;
`;

const StyledDeleteButtonText = styled.span`
  width: 37px;
  height: 28px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 28px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #606060;
  flex: none;
  order: 1;
  flex-grow: 0;
`;

const FlagImage = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 8px;
`;

const Dropdown = styled.select`
  padding: 8px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: transparent;
`;

const Option = styled.option``;

const TextAreaContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 120px;
`;

const TextArea = styled.textarea`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-top: auto;
  border: none;
  background: transparent;
  width: 100%;
  height: 700px;
`;

const StyledContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 50px;
  width: 90%;
  height: 120px;
  margin-top: 630px;
  gap: 50px;
`;

const StyledCountWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 8px 20px;
  gap: 10px;
  width: 192px;
  height: 36px;
  margin-left: 400px;
  margin-bottom: 50px;
  background: #ffffff;
`;

const CountText = styled.span`
  width: 152px;
  height: 20px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  text-align: center;
  color: #000000;
  flex: none;
  order: 0;
  flex-grow: 0;
`;
