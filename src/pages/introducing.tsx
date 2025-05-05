import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./introducing.css";

const Container: React.FC<{ children: React.ReactNode; isActive: boolean;}> = ({
    children,
    isActive,
  }) => {
    return <StyledContainer className={`${isActive ? "fade-in" : ""}`}>{children}</StyledContainer>;
  };
  
  
  const StyledContainer = styled.div`
    width: 445px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100dvh;
    gap: 4px;
    position: relative;
    overflow: hidden;
    user-select: none;
  `;
  
  const Logo = styled.img`
    width: 47px;
    height: 46px;
  `;
  
  const Menu_btn: React.FC<{ isClicked: boolean; onClick: () => void }> = ({ isClicked, onClick }) => {
    return (
      <nav className="menu-button" onClick={onClick}>
        <Bar />
        <Bar />
        <Bar style={{ width: "32px" }} />
      </nav>
    );
  };
  
  const Bar = styled.div`
    background-color: #000000;
    border: 1px solid #000000;
    width: 42px;
    height: 3px;
  `;
  
  function Introducing() {
    const location = useLocation();
    const [isActive, setIsActive] = useState(false);
    const [isClicked, setIsClicked] = useState(false);
    const navigate = useNavigate();
  
    useEffect(() => {
      if (location.state?.from === "loading") {
        setIsActive(true);
      }
    }, [location.state]);
  
    return (
      <Container isActive={isActive}>
        <header className="page-header">
          <a href = "/home">
            <Logo src="cagi_logo.png" alt="로고 이미지" />
          </a>
          <Menu_btn isClicked={isClicked} onClick={() => setIsClicked((prev) => !prev)} />
        </header>
        <main>
        <div className="bubble-container">
          <h1 className="title">ABOUT CAGI</h1>
          {[...Array(15)].map((_, i) => (
          <div key={i} className={`bubble bubble-${i}`} />
            ))}
        </div>

        </main>
        <div className={`menu-container ${isClicked ? "active" : "deactivate"}`}>
          <a onClick={()=> navigate("/introducing")}>
            <object data="svg/check-svgrepo-com.svg" width="39px" height="40px"></object>Introducing
          </a>
          <hr />
          <a href="">
            <object data="svg/people-svgrepo-com.svg" width="39px" height="40px"></object>Recruiting
          </a>
          <hr />
          <a href="">
            <object data="svg/book-open-svgrepo-com.svg" width="39px" height="40px"></object>Apply for study group
          </a>
          <hr />
          <a href="">
          <object data="svg/pencil-edit-create-compose-write-new-svgrepo-com.svg" width="39px" height="40px"></object>Q&A
          </a>
          <hr />
        </div>
        <footer className="page-footer">
          <p className="footer-phrase">©CAGI. 2025 All rights reserved.</p>
        </footer>
      </Container>
    );
  }
export default Introducing;