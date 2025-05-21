import { useState } from "react";
import styled from "@emotion/styled";
import { motion, AnimatePresence } from "framer-motion";
import { Routes, Route, useNavigate } from "react-router-dom";
import cleaner1 from "./assets/cleaner1.jpg";
import aboutBg from "./assets/about.jpeg";
import timeslotBg from "./assets/cleaner1.jpg"; // reuse blue bg or use a new one if you have
import slotBg from "./assets/slot.jpg";
import bankBg from "./assets/bank.jpg";
import cardsBg from "./assets/cards.jpg";
import cardDetailBg from "./assets/carddetail.jpg";
import netbankingBg from "./assets/netbanking.jpeg";
import FarmingPage from "./pages/FarmingPage";
import FarmingAboutPage from "./pages/FarmingAboutPage";

const FIST_IMAGE =
  "https://www.pngmart.com/files/7/Labour-Union-PNG-Transparent-Image.png";
const SELECTION_BG =
  "https://image.slidesdocs.com/responsive-images/background/gradient-atmosphere-business-finance-company-geometric-simple-powerpoint-background_eb5a36a6ad__960_540.jpg";
const LABOUR_BG =
  "https://buildcarewaterproofing.in/wp-content/uploads/2020/07/construction.png";

const PageContainer = styled.div`
  display: flex;
  min-height: 100vh;
  width: 100vw;
  background: #fff;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftSection = styled.div`
  background: #e5392e;
  color: #fff;
  flex: 1.1;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  justify-content: center;
  padding: 0 2vw;
  @media (max-width: 768px) {
    flex: none;
    min-height: 40vh;
    padding: 2rem 1rem;
  }
`;

const TopRow = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 18px;
`;

const TopText = styled.div`
  font-family: "Brush Script MT", cursive, sans-serif;
  font-size: 1.3rem;
  color: #000;
`;

const CenteredImage = styled.img`
  width: 270px;
  height: 150px;
  object-fit: contain;
  margin: 40px 0 30px 0;
  background: #fff;
  border-radius: 8px;
  @media (max-width: 768px) {
    width: 200px;
    height: 110px;
    margin: 20px 0;
  }
`;

const WelcomeText = styled.div`
  text-align: center;
  margin-top: 30px;
  margin-bottom: 30px;
`;

const WelcomeLine = styled.div`
  font-size: 2.2rem;
  font-weight: 400;
  margin-bottom: 18px;
  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const SkillFull = styled.span`
  font-size: 2.1rem;
  font-style: italic;
  font-weight: bold;
  color: #000;
  display: block;
  margin: 10px 0;
  @media (max-width: 768px) {
    font-size: 1.7rem;
  }
`;

const World = styled.div`
  font-size: 2rem;
  font-weight: 300;
  margin-top: 30px;
  @media (max-width: 768px) {
    font-size: 1.6rem;
    margin-top: 20px;
  }
`;

const RightSection = styled.div`
  flex: 1.3;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 0 2vw;
  position: relative;
  @media (max-width: 768px) {
    flex: none;
    min-height: 60vh;
    padding: 1rem;
  }
`;

const RightLogo = styled.img`
  width: 110px;
  height: 110px;
  object-fit: contain;
  margin: 30px auto 10px auto;
  display: block;
  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
    margin: 20px auto 5px auto;
  }
`;

const WelcomeHeader = styled.div`
  color: #e5392e;
  font-size: 2.5rem;
  font-weight: 500;
  margin-top: 10px;
  margin-bottom: 10px;
  text-align: left;
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const SubHeader = styled.div`
  color: #757575;
  font-size: 1.2rem;
  margin-bottom: 30px;
  text-align: left;
  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 20px;
  }
`;

const LoginForm = styled.form`
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  gap: 25px;
  @media (max-width: 768px) {
    max-width: 100%;
    gap: 20px;
  }
`;

const Label = styled.label`
  font-size: 1.4rem;
  color: #222;
  font-weight: 400;
  margin-bottom: 5px;
`;

const Input = styled.input`
  border: none;
  border-bottom: 2px solid #222;
  padding: 10px 5px;
  font-size: 1.1rem;
  background: transparent;
  outline: none;
  margin-bottom: 10px;
  color: #222;
`;

const LoginButton = styled(motion.button)`
  background: #b92b22;
  color: #fff;
  border: none;
  border-radius: 3px;
  padding: 13px 0;
  font-size: 1.2rem;
  font-weight: 500;
  margin-top: 10px;
  cursor: pointer;
  width: 100%;
  transition: background 0.2s;
  box-shadow: 0 2px 8px rgba(229, 57, 46, 0.08);
`;

const NewUserRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 18px;
  margin-top: 18px;
`;

const NewUserText = styled.span`
  font-size: 1.1rem;
  font-style: italic;
  font-weight: 600;
  color: #222;
`;

const SmallButton = styled.button`
  background: #fff;
  color: #222;
  border: 2px solid #222;
  border-radius: 5px;
  padding: 7px 22px;
  font-size: 1.1rem;
  font-weight: 500;
  margin-left: 8px;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
  &:hover {
    background: #e5392e;
    color: #fff;
    border-color: #e5392e;
  }
`;

// Improved Selection Page Styles
const SelectionContainer = styled.div`
  min-height: 100vh;
  width: 100vw;
  background: url(${SELECTION_BG}) no-repeat center center/cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const SelectionContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2.5rem;
  width: 100%;
  max-width: 400px;
`;
const SelectButton = styled(motion.button)`
  width: 100%;
  max-width: 340px;
  height: 110px;
  font-size: 2.2rem;
  font-weight: bold;
  color: #fff;
  border: none;
  border-radius: 16px;
  margin-bottom: 0.5rem;
  box-shadow: 0 6px 32px 0 rgba(0, 0, 0, 0.13), 0 1.5px 6px 0 rgba(0, 0, 0, 0.1);
  cursor: pointer;
  background: ${(props) =>
    props.variant === "labour"
      ? "#e5392e"
      : "linear-gradient(135deg, #8e9e3f 60%, #bfcf6a 100%)"};
  outline: ${(props) => (props.selected ? "3px solid #5a7cff" : "none")};
  transition: outline 0.2s, transform 0.2s, box-shadow 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 2px;
  &:hover {
    box-shadow: 0 10px 40px 0 rgba(0, 0, 0, 0.18),
      0 2px 8px 0 rgba(0, 0, 0, 0.13);
    transform: translateY(-4px) scale(1.03);
  }
`;

function SelectionPage() {
  const navigate = useNavigate();
  return (
    <SelectionContainer>
      <SelectionContent>
        <SelectButton
          variant="labour"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => navigate("/labour")}
        >
          LABOUR
        </SelectButton>
        <SelectButton
          variant="maid"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => navigate("/maid")}
        >
          MAID
        </SelectButton>
      </SelectionContent>
    </SelectionContainer>
  );
}

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();
    // You can add validation/auth here
    navigate("/select");
  }

  return (
    <PageContainer>
      <LeftSection>
        <TopRow>
          <TopText>Login</TopText>
          <TopText style={{ fontFamily: "inherit", fontSize: "1.3rem" }}>
            Here
          </TopText>
        </TopRow>
        <div style={{ flex: 1 }} />
        <CenteredImage src={FIST_IMAGE} alt="Fist" />
        <WelcomeText>
          <WelcomeLine>Welcome To</WelcomeLine>
          <SkillFull>Skill Full</SkillFull>
          <World>World</World>
        </WelcomeText>
        <div style={{ flex: 2 }} />
      </LeftSection>
      <RightSection>
        <RightLogo src={FIST_IMAGE} alt="Fist Logo" />
        <WelcomeHeader>WELCOME</WelcomeHeader>
        <SubHeader>Sign in to continue</SubHeader>
        <LoginForm onSubmit={handleLogin}>
          <div>
            <Label htmlFor="username">Username:</Label>
            <Input
              id="username"
              type="text"
              placeholder="Enter Username..."
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="password">Password:</Label>
            <Input
              id="password"
              type="password"
              placeholder="Enter password:"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <LoginButton
            type="submit"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Login
          </LoginButton>
        </LoginForm>
        <NewUserRow>
          <NewUserText>New user?</NewUserText>
          <SmallButton type="button">Sinup</SmallButton>
          <SmallButton type="button">Worker</SmallButton>
        </NewUserRow>
      </RightSection>
    </PageContainer>
  );
}

// Labour Page Styles
const LabourContainer = styled.div`
  min-height: 100vh;
  width: 100vw;
  background: #a49be1;
  position: relative;
  overflow: hidden;
`;
const LabourBackButton = styled.button`
  position: absolute;
  top: 18px;
  left: 18px;
  background: #fff;
  color: #222;
  border: 1.5px solid #888;
  border-radius: 6px;
  padding: 6px 16px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.07);
  z-index: 2;
`;
const LabourButtonRow = styled.div`
  position: absolute;
  top: 60px;
  left: 0;
  width: 100vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 2.5rem;
  z-index: 2;
`;
const LabourButton = styled(motion.button)`
  min-width: 220px;
  min-height: 48px;
  font-size: 1.5rem;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.13);
  cursor: pointer;
  letter-spacing: 1.5px;
  background: ${(props) =>
    props.variant === "mason"
      ? "linear-gradient(90deg, #bfcf6a 70%, #8e9e3f 100%)"
      : "#f9b6b6"};
  color: #222;
  border: ${(props) =>
    props.variant === "mason" ? "2.5px solid #757c1a" : "2.5px solid #b97a7a"};
  transition: box-shadow 0.2s, transform 0.2s;
  &:hover {
    box-shadow: 0 6px 24px 0 rgba(0, 0, 0, 0.18);
    transform: translateY(-3px) scale(1.04);
  }
`;
const LabourBgImg = styled.img`
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  width: 85vw;
  max-width: 1200px;
  min-width: 400px;
  z-index: 1;
  pointer-events: none;
`;

function LabourPage() {
  const navigate = useNavigate();
  return (
    <LabourContainer>
      <LabourBackButton onClick={() => navigate(-1)}>BACK</LabourBackButton>
      <LabourButtonRow>
        <LabourButton
          variant="mason"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
        >
          MASON
        </LabourButton>
        <LabourButton
          variant="farming"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => navigate("/farming")}
        >
          FARMING
        </LabourButton>
      </LabourButtonRow>
      <LabourBgImg src={LABOUR_BG} alt="Labour background" />
    </LabourContainer>
  );
}

// Maid Page Styles
const MaidContainer = styled.div`
  min-height: 100vh;
  width: 100vw;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f7e6b7;
`;
const MaidBgBlur = styled.div`
  position: absolute;
  inset: 0;
  width: 100vw;
  height: 100vh;
  background: url(${cleaner1}) center center/cover no-repeat;
  filter: blur(10px) brightness(0.85);
  z-index: 0;
`;
const MaidBackButton = styled.button`
  position: absolute;
  top: 18px;
  left: 18px;
  background: #fff;
  color: #222;
  border: 1.5px solid #888;
  border-radius: 6px;
  padding: 6px 16px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.07);
  z-index: 2;
`;
const MaidButtonRow = styled.div`
  position: absolute;
  top: 60px;
  left: 0;
  width: 100vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 2.5rem;
  z-index: 2;
`;
const MaidButton = styled(motion.button)`
  min-width: 220px;
  min-height: 48px;
  font-size: 1.5rem;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.13);
  cursor: pointer;
  letter-spacing: 1.5px;
  background: ${(props) =>
    props.variant === "maid1"
      ? "#e5392e"
      : props.variant === "maid2"
      ? "#bfcf6a"
      : "#f9b6b6"};
  color: #222;
  border: ${(props) =>
    props.variant === "maid1"
      ? "2.5px solid #b97a7a"
      : props.variant === "maid2"
      ? "2.5px solid #757c1a"
      : "2.5px solid #b97a7a"};
  transition: box-shadow 0.2s, transform 0.2s;
  &:hover {
    box-shadow: 0 6px 24px 0 rgba(0, 0, 0, 0.18);
    transform: translateY(-3px) scale(1.04);
  }
`;

// About Page Styles
const AboutContainer = styled.div`
  min-height: 100vh;
  width: 100vw;
  position: relative;
  background: url(${aboutBg}) center center/cover no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;
const AboutOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(255, 255, 255, 0.15);
  z-index: 0;
`;
const AboutTitle = styled.h1`
  margin-top: 32px;
  font-size: 2.2rem;
  font-weight: 500;
  color: #111;
  letter-spacing: 2px;
  z-index: 2;
`;
const AboutBox = styled.div`
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
`;
const AboutButtonRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin-top: 32px;
  width: 100%;
  z-index: 2;
`;
const AboutButton = styled.button`
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
`;
const AboutBackButton = styled(AboutButton)`
  position: absolute;
  bottom: 32px;
  right: 32px;
  background: #fff;
  color: #222;
  border: 1.5px solid #888;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.07);
  &:hover {
    background: #e0e0e0;
    color: #111;
  }
`;

const responsibilities = [
  "Maid Responsibilities:",
  "Keeping carpets and rugs clean and odor–free by shampooing, vacuuming, and applying deodorizers as needed.",
  "Sweeping, mopping, dusting, and vacuuming to remove dirt, debris, and dust from floors and other surfaces.",
  "Washing windows and walls as well as polishing woodwork as needed.",
  "Scrubbing toilets, showers, baths, and bathroom sinks as well as restocking bathroom supplies.",
  "Wiping down kitchen appliances, equipment, and counters to remove dirt, grease, and grime.",
];

function AboutPage({ location }) {
  const navigate = useNavigate();
  // Get name from location state
  const name = location?.state?.name || "";
  return (
    <AboutContainer>
      <AboutOverlay />
      <AboutTitle>ABOUT</AboutTitle>
      <AboutBox>
        <div style={{ fontWeight: 600, fontSize: "2rem", marginBottom: 16 }}>
          {name && `${name}'s `}Maid Responsibilities:
        </div>
        <div style={{ fontSize: "1.3rem", fontWeight: 400 }}>
          Keeping carpets and rugs clean and odor–free by shampooing, vacuuming,
          and applying deodorizers as needed.
          <br />
          <br />
          Sweeping, mopping, dusting, and vacuuming to remove dirt, debris, and
          dust from floors and other surfaces.
          <br />
          <br />
          Washing windows and walls as well as polishing woodwork as needed.
          <br />
          <br />
          Scrubbing toilets, showers, baths, and bathroom sinks as well as
          restocking bathroom supplies.
          <br />
          <br />
          Wiping down kitchen appliances, equipment, and counters to remove
          dirt, grease, and grime.
        </div>
      </AboutBox>
      <AboutButtonRow>
        <AboutButton onClick={() => navigate("/timeslot")}>NEXT</AboutButton>
      </AboutButtonRow>
      <AboutBackButton onClick={() => navigate(-1)}>BACK</AboutBackButton>
    </AboutContainer>
  );
}

function MaidPage() {
  const navigate = useNavigate();
  const [view, setView] = useState("select"); // select, fulltime, parttime

  const fulltimeNames = [
    "Aaradhya",
    "Ananya",
    "Priya",
    "Sakshi",
    "Riya",
    "Isha",
  ];
  const parttimeNames = ["Sneha", "Pooja", "Neha", "Swati", "Meera", "Kavya"];

  return (
    <MaidContainer>
      <MaidBgBlur />
      <MaidBackButton
        onClick={() => {
          if (view === "select") navigate(-1);
          else setView("select");
        }}
      >
        BACK
      </MaidBackButton>
      {view === "select" && (
        <MaidButtonRow>
          <MaidButton
            variant="maid1"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => setView("fulltime")}
          >
            FULLTIME
          </MaidButton>
          <MaidButton
            variant="maid2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => setView("parttime")}
          >
            PARTTIME
          </MaidButton>
        </MaidButtonRow>
      )}
      {view === "fulltime" && (
        <MaidButtonRow
          style={{ flexDirection: "column", top: 100, gap: "1.2rem" }}
        >
          {fulltimeNames.map((name) => (
            <MaidButton
              key={name}
              variant="maid1"
              style={{ minWidth: 220, minHeight: 48, fontSize: "1.2rem" }}
              onClick={() => navigate("/about", { state: { name } })}
            >
              {name}
            </MaidButton>
          ))}
        </MaidButtonRow>
      )}
      {view === "parttime" && (
        <MaidButtonRow
          style={{ flexDirection: "column", top: 100, gap: "1.2rem" }}
        >
          {parttimeNames.map((name) => (
            <MaidButton
              key={name}
              variant="maid2"
              style={{ minWidth: 220, minHeight: 48, fontSize: "1.2rem" }}
              onClick={() => navigate("/about", { state: { name } })}
            >
              {name}
            </MaidButton>
          ))}
        </MaidButtonRow>
      )}
    </MaidContainer>
  );
}

// Time Slot Page Styles
const TimeSlotContainer = styled.div`
  min-height: 100vh;
  width: 100vw;
  background: linear-gradient(135deg, #2d5c5c 0%, #1b3939 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const TimeSlotHeading = styled.h2`
  position: absolute;
  top: 40px;
  left: 50%;
  transform: translateX(-50%);
  color: #fff;
  font-size: 2.7rem;
  font-weight: 700;
  letter-spacing: 2px;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  z-index: 2;
  text-align: center;
  width: 100%;
  padding: 0 1rem;
  @media (max-width: 768px) {
    font-size: 2rem;
    top: 24px;
  }
`;

const TimeSlotList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.5rem;
  align-items: center;
  width: 100%;
  max-width: 600px;
  padding: 0 2rem;
  margin-top: 4vh;
  @media (max-width: 768px) {
    gap: 2rem;
    padding: 0 1rem;
    margin-top: 2vh;
    margin-bottom: 120px;
  }
`;

const TimeSlotLabel = styled.label`
  font-size: 2.2rem;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;
  font-weight: 400;
  width: 100%;
  max-width: 400px;
  cursor: pointer;
  padding: 0.8rem 1.5rem;
  border-radius: 8px;
  transition: all 0.2s ease;
  position: relative;
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(4px);
  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
    transform: translateX(5px);
  }
  @media (max-width: 768px) {
    font-size: 1.8rem;
    gap: 0.8rem;
    padding: 0.6rem 1.2rem;
  }
`;

const TimeSlotRadio = styled.input`
  width: 32px;
  height: 32px;
  cursor: pointer;
  position: absolute;
  right: 1.5rem;
  @media (max-width: 768px) {
    width: 24px;
    height: 24px;
    right: 1.2rem;
  }
`;

const BookButton = styled.button`
  position: absolute;
  right: 18vw;
  top: 50%;
  transform: translateY(-50%);
  background: #2d5c5c;
  color: #fff;
  border: none;
  border-radius: 12px;
  width: 160px;
  height: 160px;
  font-size: 2.3rem;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.13);
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  &:hover {
    background: #1b3939;
    transform: translateY(-50%) scale(1.05);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  }
  @media (max-width: 768px) {
    position: fixed;
    bottom: 20px;
    left: 50%;
    right: auto;
    top: auto;
    transform: translateX(-50%);
    width: 120px;
    height: 120px;
    font-size: 1.8rem;
    &:hover {
      transform: translateX(-50%) scale(1.05);
    }
  }
  @media (max-width: 480px) {
    width: 100px;
    height: 100px;
    font-size: 1.6rem;
    bottom: 16px;
    border-radius: 8px;
  }
`;

// Bank Selection Page Styles
const BankContainer = styled.div`
  min-height: 100vh;
  width: 100vw;
  background: linear-gradient(135deg, #7ed6d6 0%, #2d5c5c 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;
const BankHeading = styled.h1`
  margin-top: 32px;
  font-size: 3.2rem;
  font-family: "Permanent Marker", "Comic Sans MS", cursive, sans-serif;
  color: #ff8eb5;
  letter-spacing: 2px;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.18);
  z-index: 2;
`;
const BankList = styled.div`
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  align-items: flex-start;
`;
const BankLabel = styled.label`
  font-size: 2.7rem;
  color: #7ed6d6;
  display: flex;
  align-items: center;
  gap: 1.2rem;
  font-weight: 500;
`;
const BankRadio = styled.input`
  width: 32px;
  height: 32px;
`;
const BankButtonRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 60vw;
  max-width: 600px;
  margin: 60px auto 0 auto;
`;
const BankButton = styled.button`
  background: #e6e6e6;
  color: #6cc;
  border: none;
  border-radius: 8px;
  padding: 16px 48px;
  font-size: 2.1rem;
  font-weight: 500;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.13);
  transition: background 0.2s, color 0.2s;
  &:hover {
    background: #b2f0f0;
    color: #333;
  }
`;

function BankSelectionPage() {
  const [selected, setSelected] = useState("SBI");
  const navigate = useNavigate();
  const banks = ["SBI", "ICICI", "HDFC", "BOB"];
  return (
    <BankContainer>
      <BankHeading>CHOOSE YOUR BANK</BankHeading>
      <BankList>
        {banks.map((bank) => (
          <BankLabel key={bank}>
            <BankRadio
              type="radio"
              name="bank"
              value={bank}
              checked={selected === bank}
              onChange={() => setSelected(bank)}
            />
            {bank}
          </BankLabel>
        ))}
      </BankList>
      <BankButtonRow>
        <BankButton onClick={() => navigate(-1)}>BACK</BankButton>
        <BankButton
          style={{ textTransform: "lowercase" }}
          onClick={() => navigate("/payment")}
        >
          next
        </BankButton>
      </BankButtonRow>
    </BankContainer>
  );
}

function TimeSlotPage() {
  const [selected, setSelected] = useState("");
  const navigate = useNavigate();
  const slots = ["9:00–12:00", "12:00–1:00", "3:00–6:00"];
  return (
    <TimeSlotContainer>
      <TimeSlotHeading>Book Your Slot</TimeSlotHeading>
      <TimeSlotList>
        {slots.map((slot) => (
          <TimeSlotLabel key={slot}>
            <TimeSlotRadio
              type="radio"
              name="slot"
              value={slot}
              checked={selected === slot}
              onChange={() => setSelected(slot)}
            />
            {slot}
          </TimeSlotLabel>
        ))}
      </TimeSlotList>
      <BookButton onClick={() => navigate("/bank")}>BOOK</BookButton>
    </TimeSlotContainer>
  );
}

// Payment Mode Page Styles
const PaymentContainer = styled.div`
  min-height: 100vh;
  width: 100vw;
  background: linear-gradient(135deg, #e5392e 0%, #b92b22 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;
const PaymentHeading = styled.h1`
  margin-top: 32px;
  font-size: 3.2rem;
  color: #e5392e;
  letter-spacing: 2px;
  font-family: "Oswald", "Arial Black", Arial, sans-serif;
  text-transform: uppercase;
  z-index: 2;
`;
const PaymentButtonGroup = styled.div`
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  gap: 2.7rem;
  align-items: center;
`;
const PaymentButton = styled.button`
  width: 340px;
  height: 90px;
  font-size: 2.6rem;
  font-weight: 700;
  color: #1760e6;
  background: #f5f7fa;
  border: 3px solid #b7c6d9;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.13);
  cursor: pointer;
  letter-spacing: 2px;
  transition: background 0.2s, color 0.2s, border 0.2s;
  &:hover {
    background: #e6f0ff;
    color: #e5392e;
    border: 3px solid #e5392e;
  }
`;

// Card Details Page Styles
const CardDetailsContainer = styled.div`
  min-height: 100vh;
  width: 100vw;
  background: linear-gradient(135deg, #2d5c5c 0%, #1b3939 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;
const CardDetailsHeading = styled.h2`
  margin-top: 24px;
  font-size: 2.2rem;
  color: #fff;
  font-family: "Permanent Marker", "Comic Sans MS", cursive, sans-serif;
  letter-spacing: 2px;
  text-align: center;
  z-index: 2;
`;
const CardForm = styled.form`
  margin-top: 32px;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 12px;
  padding: 36px 32px 32px 32px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  min-width: 480px;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.18);
  position: relative;
`;
const CardLabel = styled.label`
  color: #fff;
  font-size: 2.1rem;
  font-family: "Permanent Marker", "Comic Sans MS", cursive, sans-serif;
  margin-bottom: 8px;
`;
const CardInput = styled.input`
  width: 100%;
  font-size: 1.5rem;
  padding: 10px 12px;
  border: none;
  border-radius: 4px;
  margin-bottom: 8px;
  outline: none;
`;
const CardRow = styled.div`
  display: flex;
  gap: 24px;
`;
const CardButtonRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 24px;
`;
const CardPayButton = styled.button`
  background: #e6e6e6;
  color: #6cc;
  border: none;
  border-radius: 8px;
  padding: 16px 48px;
  font-size: 2.1rem;
  font-weight: 500;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.13);
  transition: background 0.2s, color 0.2s;
  &:hover {
    background: #b2f0f0;
    color: #333;
  }
`;
const CardBackButton = styled.button`
  background: #e5392e;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 16px 48px;
  font-size: 2.1rem;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.13);
  transition: background 0.2s, color 0.2s;
  &:hover {
    background: #b92b22;
    color: #fff;
  }
`;

function CardDetailsPage() {
  const navigate = useNavigate();
  return (
    <CardDetailsContainer>
      <CardDetailsHeading>SECURITY:128 BIT SSL ENCRYPTION</CardDetailsHeading>
      <CardForm
        onSubmit={(e) => {
          e.preventDefault();
          navigate("/success");
        }}
      >
        <div>
          <CardLabel>Card Number</CardLabel>
          <CardInput type="text" maxLength={16} />
        </div>
        <CardRow>
          <div style={{ flex: 1 }}>
            <CardLabel>MM</CardLabel>
            <CardInput type="text" maxLength={2} />
          </div>
          <div style={{ flex: 1 }}>
            <CardLabel>YY</CardLabel>
            <CardInput type="text" maxLength={2} />
          </div>
          <div style={{ flex: 1 }}>
            <CardLabel>CVV</CardLabel>
            <CardInput type="password" maxLength={4} />
          </div>
        </CardRow>
        <CardButtonRow>
          <CardPayButton type="submit">SECURILY PAY</CardPayButton>
          <CardBackButton type="button" onClick={() => navigate(-1)}>
            BACK
          </CardBackButton>
        </CardButtonRow>
      </CardForm>
    </CardDetailsContainer>
  );
}

// Netbanking Page Styles
const NetbankingContainer = styled.div`
  min-height: 100vh;
  width: 100vw;
  background: linear-gradient(135deg, #8e24aa 0%, #4a148c 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;
const NetbankingHeading = styled.h2`
  margin-top: 32px;
  font-size: 2.7rem;
  color: #c62828;
  font-family: "Creepster", "Cinzel Decorative", cursive, serif;
  letter-spacing: 2px;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  z-index: 2;
  text-align: center;
`;
const NetbankingForm = styled.form`
  margin-top: 32px;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 12px;
  padding: 36px 32px 32px 32px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  min-width: 480px;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.18);
  position: relative;
`;
const NetbankingLabel = styled.label`
  color: #fff;
  font-size: 2.1rem;
  font-family: "UnifrakturCook", "Cinzel Decorative", cursive, serif;
  margin-bottom: 8px;
`;
const NetbankingInput = styled.input`
  width: 100%;
  font-size: 1.5rem;
  padding: 10px 12px;
  border: none;
  border-radius: 4px;
  margin-bottom: 8px;
  outline: none;
`;
const NetbankingPayButton = styled.button`
  background: #fff;
  color: #8e24aa;
  border: none;
  border-radius: 8px;
  padding: 16px 48px;
  font-size: 2.1rem;
  font-family: "UnifrakturCook", "Cinzel Decorative", cursive, serif;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.13);
  transition: background 0.2s, color 0.2s;
  margin-top: 24px;
  &:hover {
    background: #f3e5f5;
    color: #4a148c;
  }
`;

function NetbankingPage() {
  const navigate = useNavigate();
  return (
    <NetbankingContainer>
      <NetbankingHeading>
        CARE: USERNAME AND PASSWORD ARE CASE SENSITIVE
      </NetbankingHeading>
      <NetbankingForm
        onSubmit={(e) => {
          e.preventDefault();
          navigate("/success");
        }}
      >
        <div>
          <NetbankingLabel>USER ID</NetbankingLabel>
          <NetbankingInput type="text" />
        </div>
        <div>
          <NetbankingLabel>PASSWORD</NetbankingLabel>
          <NetbankingInput type="password" />
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <NetbankingPayButton type="submit">PAY</NetbankingPayButton>
        </div>
      </NetbankingForm>
    </NetbankingContainer>
  );
}

function PaymentModePage() {
  const navigate = useNavigate();
  return (
    <PaymentContainer>
      <PaymentHeading>CHOOSE YOUR PAYMENT MODE</PaymentHeading>
      <PaymentButtonGroup>
        <PaymentButton onClick={() => navigate("/carddetails")}>
          DEBIT
        </PaymentButton>
        <PaymentButton onClick={() => navigate("/carddetails")}>
          CREDIT
        </PaymentButton>
        <PaymentButton onClick={() => navigate("/netbanking")}>
          NETBANKING
        </PaymentButton>
      </PaymentButtonGroup>
    </PaymentContainer>
  );
}

// Payment Success Page Styles
const SuccessContainer = styled.div`
  min-height: 100vh;
  width: 100vw;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const SuccessCheck = styled.div`
  width: 260px;
  height: 260px;
  background: #5bc145;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 32px;
`;
const SuccessCheckMark = styled.div`
  color: #fff;
  font-size: 8rem;
  font-weight: bold;
  line-height: 1;
`;
const SuccessTitle = styled.h1`
  color: #666;
  font-size: 2.8rem;
  font-weight: 700;
  margin-bottom: 18px;
`;
const SuccessText = styled.p`
  color: #888;
  font-size: 1.6rem;
  text-align: center;
  max-width: 500px;
`;

function PaymentSuccessPage() {
  return (
    <SuccessContainer>
      <SuccessCheck>
        <SuccessCheckMark>✓</SuccessCheckMark>
      </SuccessCheck>
      <SuccessTitle>Your payment was successful</SuccessTitle>
      <SuccessText>
        Thank you for your payment. We will be in contact with more details
        shortly
      </SuccessText>
    </SuccessContainer>
  );
}

export default function App() {
  return (
    <Routes>
      <Route
        path="*"
        element={
          <AnimatePresence mode="wait">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              style={{ minHeight: "100vh", width: "100vw" }}
            >
              <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/select" element={<SelectionPage />} />
                <Route path="/labour" element={<LabourPage />} />
                <Route path="/maid" element={<MaidPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/timeslot" element={<TimeSlotPage />} />
                <Route path="/bank" element={<BankSelectionPage />} />
                <Route path="/payment" element={<PaymentModePage />} />
                <Route path="/carddetails" element={<CardDetailsPage />} />
                <Route path="/netbanking" element={<NetbankingPage />} />
                <Route path="/success" element={<PaymentSuccessPage />} />
                <Route path="/farming" element={<FarmingPage />} />
                <Route path="/farmingabout" element={<FarmingAboutPage />} />
              </Routes>
            </motion.div>
          </AnimatePresence>
        }
      />
    </Routes>
  );
}
