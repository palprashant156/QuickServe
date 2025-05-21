import styled from "@emotion/styled";
import { useNavigate, useLocation } from "react-router-dom";
import aboutBg from "../assets/about.jpeg";
import { motion } from "framer-motion";

const Container = styled.div`
  min-height: 100vh;
  width: 100vw;
  position: relative;
  background: url(${aboutBg}) center center/cover no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  @media (max-width: 600px) {
    padding: 0 2vw;
    background-size: cover;
  }
`;
const Title = styled.h1`
  margin-top: 32px;
  font-size: 3.2rem;
  font-weight: 700;
  color: #111;
  letter-spacing: 2px;
  z-index: 2;
  @media (max-width: 600px) {
    font-size: 1.5rem;
    margin-top: 16px;
  }
`;
const Box = styled(motion.div)`
  margin-top: 32px;
  background: #fff;
  border: 3px solid #b7c6d9;
  border-radius: 8px;
  width: 80vw;
  max-width: 900px;
  min-height: 220px;
  max-height: 320px;
  overflow: auto;
  font-size: 2rem;
  color: #111;
  padding: 24px 18px;
  z-index: 2;
  box-shadow: 0 4px 24px 0 rgba(0, 0, 0, 0.13);
  @media (max-width: 600px) {
    width: 95vw;
    font-size: 1.1rem;
    padding: 10px 6px;
    min-height: 120px;
    max-height: 180px;
  }
`;
const ButtonRow = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin-top: 32px;
  width: 100%;
  z-index: 2;
  @media (max-width: 600px) {
    gap: 1rem;
    margin-top: 18px;
  }
`;
const NextButton = styled.button`
  background: #2d5c5c;
  color: #fff;
  border: none;
  border-radius: 6px;
  padding: 10px 38px;
  font-size: 1.3rem;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.13);
  transition: background 0.2s;
  &:hover {
    background: #1b3939;
  }
  @media (max-width: 600px) {
    padding: 8px 18px;
    font-size: 1rem;
  }
`;
const BackButton = styled.button`
  background: #fff;
  color: #222;
  border: 1.5px solid #888;
  border-radius: 6px;
  padding: 10px 38px;
  font-size: 1.3rem;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.07);
  transition: background 0.2s;
  position: absolute;
  right: 32px;
  bottom: 32px;
  &:hover {
    background: #e0e0e0;
    color: #111;
  }
  @media (max-width: 600px) {
    right: 10px;
    bottom: 10px;
    padding: 8px 18px;
    font-size: 1rem;
  }
`;

const farmingResponsibilities = [
  "Planting, fertilizing and harvesting plants.",
  "Feeding and herding groups of animals.",
  "Providing special diets and care for animals.",
  "Collecting food or animal products.",
  "Performing manual labor.",
  "Operating farm equipment.",
  "Selecting and purchasing products such as fertilizer, seeds and equipment.",
  "Maintaining farm facilities and equipment.",
  "Monitoring the health of crops and livestock.",
  "Keeping records of production and farm activities.",
];

export default function FarmingAboutPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const name = location?.state?.name || "";
  return (
    <Container>
      <Title>ABOUT</Title>
      <Box
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {farmingResponsibilities.map((item, idx) => (
          <div key={idx}>{item}</div>
        ))}
      </Box>
      <ButtonRow
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
      >
        <NextButton
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => navigate("/timeslot")}
        >
          NEXT
        </NextButton>
      </ButtonRow>
      <BackButton onClick={() => navigate(-1)}>BACK</BackButton>
    </Container>
  );
}
