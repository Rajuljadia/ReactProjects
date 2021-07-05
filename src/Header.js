import React from "react";
import './styles/Header.css';
import logo from './assets/logo.png';
function Header() {
  return (
    <div className="header">
      <img
        className="header__logo"
         src={logo}
        // src="https://png.pngitem.com/pimgs/s/1-12080_amazon-logo-png-amazon-white-text-logo-transparent.png"
        alt="Img Not Found"
      />
      <div className="header__search">
        <input type="text" />
        {/*logo*/}
      </div>
      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionLineOne">Hello! Guest</span>
          <span className="header__optionLineTwo">Sign In</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
