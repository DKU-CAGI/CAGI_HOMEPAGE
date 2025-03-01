import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./home.css";

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

function Home() {
  const location = useLocation();
  const [isActive, setIsActive] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    if (location.state?.from === "loading") {
      setIsActive(true);
    }
  }, [location.state]);

  return (
    <Container isActive={isActive}>
      <header className="page-header">
        <a>
          <Logo src="cagi_logo.png" alt="로고 이미지" />
        </a>
        <Menu_btn isClicked={isClicked} onClick={() => setIsClicked((prev) => !prev)} />
      </header>
      <main className={`${isClicked ? "blurred" : ""}`}>
        <div className="main-title-container">
          <h1 className="main-title Big">CAGI</h1>
          <h4>DKU MAKER STUDIO</h4>
        </div>
        <h1 className="shadow-title Big" id="shadow1">CAGI</h1>
        <h1 className="shadow-title" id="shadow2">CAGI</h1>
        <aside>
          <p>3D Modeling</p>
          <p>3D Printing</p>
          <p>Illustration</p>
          <p>Programming</p>
        </aside>
        <div id="red-container">
          <div className="Circle" id="red-circle"></div>
          <div className="Circle shadow"></div>
        </div>
        <div id="yellow-container">
          <div className="Circle" id="yellow-circle"></div>
          <div className="Circle shadow"></div>
        </div>
        <div id="blue-container">
          <div className="Circle" id="blue-circle"></div>
          <div className="Circle shadow"></div>
        </div>
      </main>
      <div className={`menu-container ${isClicked ? "active" : "deactivate"}`}>
        <a href="">
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

export default Home;