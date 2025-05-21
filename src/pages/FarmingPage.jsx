import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import farmingBg from "../assets/farming.jpg";

const Container = styled.div`
  min-height: 100vh;
  width: 100vw;
  background: url(${farmingBg}) center center/cover no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  @media (max-width: 600px) {
    padding: 0 2vw;
    background-size: cover;
  }
`;
const Title = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  color: #222;
  margin-top: 40px;
  margin-bottom: 40px;
  letter-spacing: 2px;
  @media (max-width: 600px) {
    font-size: 2rem;
    margin-top: 18px;
    margin-bottom: 18px;
  }
`;
const ButtonList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 100%;
  max-width: 500px;
  align-items: center;
  max-height: 340px;
  overflow-y: auto;
  background: rgba(255, 255, 255, 0.85);
  border-radius: 16px;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.1);
  padding: 24px 0;
  @media (max-width: 600px) {
    max-width: 95vw;
    gap: 18px;
    padding: 12px 0;
    max-height: 220px;
  }
`;
const NameButton = styled.button`
  width: 500px;
  max-width: 90vw;
  font-size: 2rem;
  font-weight: 500;
  color: #222;
  background: #f5f7fa;
  border: 3px solid #b7c6d9;
  border-radius: 8px;
  padding: 18px 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.13);
  cursor: pointer;
  transition: background 0.2s, color 0.2s, border 0.2s;
  &:hover {
    background: #e6f0ff;
    color: #e5392e;
    border: 3px solid #e5392e;
  }
  @media (max-width: 600px) {
    width: 90vw;
    font-size: 1.1rem;
    padding: 10px 0;
  }
`;
const BackButton = styled.button`
  position: absolute;
  right: 40px;
  bottom: 40px;
  background: #e6e6e6;
  color: #222;
  border: none;
  border-radius: 8px;
  padding: 16px 48px;
  font-size: 1.5rem;
  font-weight: 500;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.13);
  transition: background 0.2s, color 0.2s;
  &:hover {
    background: #b2f0f0;
    color: #333;
  }
  @media (max-width: 600px) {
    right: 10px;
    bottom: 10px;
    padding: 10px 18px;
    font-size: 1rem;
  }
`;

const names = ["Aarav", "Vivaan", "Aditya", "Krishna", "Rahul", "Rohan"];

export default function FarmingPage() {
  const navigate = useNavigate();
  return (
    <Container>
      <Title>FARMING</Title>
      <ButtonList>
        {names.map((name, idx) => (
          <NameButton
            key={idx}
            onClick={() => navigate("/farmingabout", { state: { name } })}
          >
            {name}
          </NameButton>
        ))}
      </ButtonList>
      <BackButton onClick={() => navigate(-1)}>BACK</BackButton>
    </Container>
  );
}
