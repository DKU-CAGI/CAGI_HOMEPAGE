/*import styled from "@emotion/styled";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";

const Bar = styled.div`
  background-color: #000000;
  border: 1px solid #000000;
  width: 42px;
  height: 3px;
`;

const Menu_btn: React.FC<{onClick: () => void }> = ({onClick }) => {
    return (
      <nav className="menu-button" onClick={onClick}>
        <Bar />
        <Bar />
        <Bar style={{ width: "32px" }} />
      </nav>
    );
  };

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuClick = (page) => {
    setIsMenuOpen(false);

    setTimeout(() => {
      navigate(page);
    }, 1000);
  };

  return (
    <header className="header">
      <div className="logo">
        <h1>
          <a href="/">IsItEmpty</a>
        </h1>
      </div>

      <Menu_btn onClick={toggleMenu} />

      <nav className={`nav ${isMenuOpen ? "open" : ""}`}>
        <ul>
          <li onClick={() => handleMenuClick("/login")}>
            <a href="/login">Login</a>
          </li>
          <li onClick={() => handleMenuClick("/mypage")}>
            <a href="/mypage">Mypage</a>
          </li>
          <li onClick={() => handleMenuClick("/about")}>
            <a href="/about">About</a>
          </li>
          <li onClick={() => handleMenuClick("/contact")}>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}*/
function Header(){

}
export default Header;