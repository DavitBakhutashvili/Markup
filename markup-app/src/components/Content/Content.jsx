import React, { useState } from 'react';
import styled from 'styled-components';
import Done from '../../assets/done.png';
import Delete from '../../assets/delete.png';
import Copy from '../../assets/copy.png';
import Georgia from '../../assets/georgia.png';
import British from '../../assets/britain.png';
import Spain from '../../assets/spain.png';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import MyClass from '../../helpers/myClass';

const Content = () => {
  const languages = [
    { code: 'ge', label: 'Georgian', flag: Georgia },
    { code: 'es', label: 'Spanish', flag: Spain },
    { code: 'en', label: 'English', flag: British },
  ];

  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
  const [inputValue, setInputValue] = useState('');
  const [editorContent, setEditorContent] = useState('');
  const [isChecking, setIsChecking] = useState(false);

  const handleCheckButtonClick = () => {
    setIsChecking(true);
    cl.start();
  };

  const handleLanguageChange = (event) => {
    const selectedLanguageCode = event.target.value;
    const selectedLanguage = languages.find(
      (language) => language.code === selectedLanguageCode
    );
    setSelectedLanguage(selectedLanguage);
  };

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
    setEditorContent(value);
  };

  const characterCount = inputValue.length;
  const wordCount = inputValue.trim().split(/\s+/).length;

  const cl = new MyClass();
  cl.text =
    'ეს არის მომხიბლავი ტექნოლოგია,რომელსაც აქვს პოტენციალი,მოახდინოს რევოლუცია კომპიუტერებთან ურთიერთობის გზაზე.ეს არის ძლიერი ინსტრუმენტი,რომელიც შეიძლება გამოყენებულ იქნას სხვადასხვა მიზნებისთვის,როგორიცაა წერა,კვლევა და გასართობი.თუმცა,მნიშვნელოვანია იცოდეთ მისი შეზღუდვები და გამოიყენოთ იგი სიფრთხილით.ChatGPT-ის ერთ-ერთი ყველაზე შთამბეჭდავი რამ არის ადამიანის ხარისხის ტექსტის გენერირების უნარი.მას შეუძლია დაწეროს მოთხრობები, ლექსები და ესეები,რომლებიც არ განსხვავდება ადამიანის მიერ დაწერილისგან.მას ასევე შეუძლია უპასუხოს თქვენს კითხვებს ყოვლისმომცველი და ინფორმატიული გზით,თუნდაც ისინი იყოს ღია,რთული ან უცნაური.თუმცა,მნიშვნელოვანია გვახსოვდეს,რომ ChatGPT არის მანქანათმცოდნეობის მოდელი.იგი გაწვრთნილია ტექსტისა და კოდის მასიურ მონაცემთა ბაზაზე, მაგრამ მას არ აქვს სამყაროს გაგება. ეს ნიშნავს, რომ ზოგჯერ მას შეუძლია შექმნას ტექსტი, რომელიც ფაქტიურად არასწორია ან შეცდომაში შემყვანი.ChatGPT-ის კიდევ ერთი შეზღუდვა ის არის, რომ მისი კონტროლი ზოგჯერ რთულია. Ეს არის შექმნილია იყოს ინფორმაციული და ყოვლისმომცველი, ამიტომ ის ხშირად იშლება ტანგენტებზე ან მოგცემთ იმაზე მეტ ინფორმაციას, ვიდრე თქვენ მოითხოვეთ.საერთო ჯამში, მე ძალიან აღფრთოვანებული ვარ OpenAI-ს ChatGPT-ით. ეს არის ძლიერი ინსტრუმენტი,რომელსაც აქვს პოტენციალი გამოიყენოს სხვადასხვა მიზნებისთვის. თუმცა, მნიშვნელოვანია იცოდეთ მისი შეზღუდვები და გამოიყენოთ იგი სიფრთხილით.';
  cl.onresult = function (result) {
    var MyResult = result.sourceUrl;
    setIsChecking(false);
  };

  return (
    <ContentWrapper>
      <StyledButtonContainer>
        {!isChecking && (
          <CheckButton onClick={handleCheckButtonClick}>
            <img src={Done} alt="doneIcon" />
            <StyledCheckButtonText>Check</StyledCheckButtonText>
          </CheckButton>
        )}
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
          placeholder="| Type or paste (⌘+V) something here."
        />
      </TextAreaContainer>
      <StyledContainer>
        <ReactQuillWrapper
          value={editorContent}
          onChange={setEditorContent}
          placeholder="Enter your text"
        />

        <StyledCountWrapper>
          <CountText>
            {characterCount} characters, {wordCount} words
          </CountText>
        </StyledCountWrapper>
      </StyledContainer>
    </ContentWrapper>
  );
};

export default Content;

const ContentWrapper = styled.main`
  flex-grow: 1;
  max-width: 1520px; /* Adjust the value as needed */
  margin: 0 auto; /* Center the content horizontally */
`;

const StyledButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap; /* Allow buttons to wrap to the next line */
  justify-content: center;
  align-items: center;
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
  @media (max-width: 768px) {
    width: 100%; /* Take up full width on smaller screens */
    margin-top: 10px; /* Add some space between buttons */
  }
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
  @media (max-width: 768px) {
    width: 100%; /* Take up full width on smaller screens */
    margin-top: 10px; /* Add some space between buttons */
  }
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
  @media (max-width: 768px) {
    width: 100%; /* Take up full width on smaller screens */
    margin-top: 10px; /* Add some space between buttons */
  }
`;

const StyledLine = styled.div`
  position: absolute;
  width: 1px;
  height: 24px;
  left: calc(50% - 1px / 2 + 603.5px);
  top: calc(50% - 24px / 2 - 385px);
  border: 1px solid #cccaca;
  @media (max-width: 768px) {
    display: none; /* Hide the line on smaller screens */
  }
`;

const DropdownWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 14px;
  gap: 10px;
  position: absolute;
  width: 144px;
  height: 36px;
  top: 130px;
  float: right;
  right: 170px;
  background: #f8f8f8;
  border-radius: 4px;
  @media (max-width: 768px) {
    width: 100%; /* Take up full width on smaller screens */
    margin-top: 10px; /* Add some space between buttons */
    justify-content: flex-end; /* Align the dropdown to the right */
  }
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
  flex-direction: column;
  align-items: center;
  width: 90%;
  float: left;
  @media (max-width: 768px) {
    margin-left: 0; /* Remove the left margin on smaller screens */
  }
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
  flex-shrink: 0;
  gap: 50px;
  @media (max-width: 768px) {
    flex-direction: column; /* Stack the elements vertically on smaller screens */
    align-items: flex-start; /* Align elements to the left */
    margin-left: 0; /* Remove the left margin on smaller screens */
    margin-top: 30px; /* Adjust the spacing */
  }
`;

const ReactQuillWrapper = styled(ReactQuill)`
  margin-top: 30px;
  //   flex-shrink: 0;
`;

const StyledCountWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 8px 20px;
  gap: 10px;
  width: fit-content;
  height: 30px;
  margin-left: 400px;
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
