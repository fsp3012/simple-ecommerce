import React, { useState } from "react";
import menu from "../images/icon-menu.svg";
import cart from "../images/icon-cart.svg";
import avatar from "../images/image-avatar.png";
import close from "../images/icon-close.svg";

const Navbar = ({ showcart, setShowCart }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const active = isMenuOpen === true ? "active" : "";
  return (
    <nav className="d-flex justify-content-between mw1240 mx-auto border-bottom">
      <div className="d-flex ">
        <div className="d-flex align-items-center gap-2">
          <img
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
            }}
            className={`close ${active}`}
            src={close}
            alt=""
          />
          <img
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
            }}
            className={`d-lg-none menu ${active} `}
            src={menu}
            alt=""
          />
          <h3 className="fw-bold">sneakers</h3>
        </div>

        <div className="">
          <ul
            className={`position-absolute d-lg-flex mt-lg-2 gap-4 text-gray ${active}`}
          >
            <li className="fw-semibold">Collections</li>
            <li className="fw-semibold">Men</li>
            <li className="fw-semibold">Women</li>
            <li className="fw-semibold">About</li>
            <li className="fw-semibold">Contact</li>
          </ul>
        </div>
      </div>

      <div className="d-flex flex gap-4 align-items-center">
        <img
          onClick={() => {
            setShowCart(!showcart);
          }}
          src={cart}
          alt=""
        />
        <div className="imgg">
          <img width={20} src={avatar} alt="" className="menu" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
