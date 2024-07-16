import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from '../assets/ui/styles';
import ProgressBar from './ProgressBar';
import Pain1 from '../assets/images/pain_level_1.png';
import Pain10 from '../assets/images/pain_level_10.png';

const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  margin: auto;
  position: relative;
  overflow: auto;
`;

const Content = styled.div`
  padding: 10px 24px;
  background-color: #ffffff;
  border-radius: 8px;
  max-width: 360px;
  width: 100%;
  position: relative;
  letter-spacing: -0.3px;
`;

const Title = styled.h2`
  color: ${colors.darkblue};
  font-weight: 800;
  letter-spacing: -0.5px;
  margin-top: 40px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid ${colors.gray300};
  border-radius: 4px;
  box-sizing: border-box;
`;

const Label = styled.label`
  font-size: 16px;
  font-weight: 700;
  color: ${colors.gray700};
  margin-top: 24px;
  padding-bottom: 4px;
  display: block;
`;

const PainContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 16px;
  flex-direction: column;
`;

const PainImage = styled.img`
  height: 88px;
`;

const PainText = styled.span`
  font-size: 14px;
  width: 120px;
  color: ${colors.gray700};
  text-align: center;
`;

const PainLevelContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  
`;

const PainLevelNumber = styled.span`
color: ${colors.gray700};
font-size: 28px;
font-weight: 800;
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  margin-bottom: 30px;
`;

const Button = styled.button`
  background-color: ${colors.darkblue};
  color: white;
  border: none;
  padding: 12px 20px;
  border-radius: 24px;
  cursor: pointer;
  font-weight: 700;
  font-size: 16px;
  flex: 1;
  margin: 0 5px;

  &:first-child {
    margin-right: 10px;
  }
  &:last-child {
    margin-left: 10px;
  }
`;

const PainLevelButton = styled.button`
  background-color: ${props => props.selected ? colors.darkblue : colors.gray100};
  color: ${props => props.selected ? 'white' : colors.gray700};
  border: none;
  padding: 4px;
  width: 34px;
  border-radius: 2px;
  cursor: pointer;
  font-weight: 700;
  font-size: 18px;
  margin: 0 1px;
  margin-top: 18px;
  &:hover {
    background-color: ${colors.darkblue};
    color: white;
  }
`;


const Step4 = ({ formData, setFormData, handleSubmit }) => {
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePainLevelChange = (level) => {
    setFormData({ ...formData, painLevel: level });
  };

  const handlePrev = () => {
    navigate('/checkup/step3');
  };

  return (
    <Container>
      <Content>
        <ProgressBar currentStep={3}/>
        <Title>3. 증상 입력</Title>
        <Label>어디가 불편하신가요?</Label>
        <Input
          type="text"
          name="symptoms"
          placeholder="증상을 자유롭게 적어주세요."
          value={formData.symptoms || ''}
          onChange={handleChange}
        />

        <Label>현재 증상이 시작된 시기는 언제인가요?</Label>
        <Input
          type="text"
          name="onset"
          placeholder="예시: 1주일 전, 2개월 전 등"
          value={formData.onset || ''}
          onChange={handleChange}
        />

        <Label>통증의 크기를 선택해주세요 (1-10)</Label>
        <PainLevelContainer>
          <PainContainer>
            <PainImage src={Pain1} alt="Pain Level 1"/>
            <PainText>
              <PainLevelNumber>1</PainLevelNumber>
            <br/>전혀 통증이<br/>없습니다.</PainText>
          </PainContainer>
          <PainContainer>
            <PainImage src={Pain10} alt="Pain Level 10"/>
            <PainText><PainLevelNumber>10</PainLevelNumber>
            <br/>견디기 어려운<br/>극심한 통증입니다.</PainText>
          </PainContainer>
        </PainLevelContainer>
        {[...Array(10)].map((_, i) => (
            <PainLevelButton
              key={i + 1}
              selected={formData.painLevel === i + 1}
              onClick={() => handlePainLevelChange(i + 1)}
            >
              {i + 1}
            </PainLevelButton>
          ))}

        <ButtonContainer>
          <Button onClick={handlePrev}>이전</Button>
          <Button onClick={handleSubmit}>제출</Button>
        </ButtonContainer>
      </Content>
    </Container>
  );
};

export default Step4;