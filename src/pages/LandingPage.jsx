import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  min-height: 100vh;
  width: 100vw;
  background: linear-gradient(135deg, #e0eafc 0%, #cfdef3 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Title = styled.h1`
  font-size: 3.2rem;
  font-weight: 700;
  color: #1760e6;
  margin-bottom: 18px;
`;
const Description = styled.p`
  font-size: 1.5rem;
  color: #444;
  margin-bottom: 40px;
  max-width: 500px;
  text-align: center;
`;
const GetStartedButton = styled.button`
  background: #1760e6;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 18px 48px;
  font-size: 1.4rem;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.13);
  transition: background 0.2s;
  &:hover {
    background: #0d3c91;
  }
`;

export default function LandingPage() {
  const navigate = useNavigate();
  return (
    <Container>
      <Title>SkillFull Booking Platform</Title>
      <Description>
        Book trusted Maids and Labourers in just a few clicks. Secure, simple,
        and professional service booking for your home or business.
      </Description>
      <GetStartedButton onClick={() => navigate("/login")}>
        Get Started
      </GetStartedButton>
    </Container>
  );
}
