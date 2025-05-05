import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import './loading.css';

const Container: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsActive(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return <StyledContainer className={isActive ? "fade-out" : ""}>{children}</StyledContainer>;
};

const StyledContainer = styled.div`
  width: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100dvh;
  gap: 4px;
`;

const Logo = styled.img`
  width: 208px;
  height: 206px;
`;

const Maintitle = styled.h1`
  margin: 0;
  font-family: "Inter", sans-serif;
  font-size: 24px;
`;

const Subtitle = styled.h3`
  margin: 0;
  font-family: "Inter", sans-serif;
  font-size: 17px;
  font-weight: 400;
`;

function Loading() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/home",{ state: { from: "loading"}}); // ✅ 3초 후 자동 이동
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <Container>
      <Logo src="cagi_logo.png" alt="로고 이미지" />
      <Maintitle>CAGI:MAKER STUDIO</Maintitle>
      <Subtitle>SINCE 1991</Subtitle>
    </Container>
  );
}

export default Loading;
