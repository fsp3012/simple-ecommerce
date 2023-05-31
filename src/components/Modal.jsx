import React, { useState } from "react";
import desktopsneaker1 from "../images/image-product-1.jpg";
import desktopsneaker2 from "../images/image-product-2.jpg";
import desktopsneaker3 from "../images/image-product-3.jpg";
import desktopsneaker4 from "../images/image-product-4.jpg";
import { imagecomp } from "../utils/Imagecomponent";
import deletee from "../images/icon-close.svg";

const Modal = ({ modal }) => {
  const [index, setIndex] = useState(0);
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        top: "0",
        zIndex: 10,
        opacity: 0.9,
        paddingTop: "5%",
      }}
      className="bg-black text-center position-absolute d-flex flex-column gap-4"
    >
      <div>
        <img className="clickimg" src={imagecomp[index].image1} alt="" />
        <img
          onClick={() => {
            modal(false);
          }}
          style={{
            top: "30px",
            right: "35%",
          }}
          className="position-absolute deletee"
          src={deletee}
          alt=""
        />
      </div>
      <div className="d-none d-lg-flex gap-lg-2 w-25 mx-auto">
        <img
          onClick={() => {
            setIndex(0);
          }}
          className="w-25 rounded-2"
          src={desktopsneaker1}
          alt=""
        />
        <img
          onClick={() => {
            setIndex(1);
          }}
          className="w-25 rounded-2"
          src={desktopsneaker2}
          alt=""
        />
        <img
          onClick={() => {
            setIndex(2);
          }}
          className="w-25 rounded-2"
          src={desktopsneaker3}
          alt=""
        />
        <img
          onClick={() => {
            setIndex(3);
          }}
          className="w-25 rounded-2"
          src={desktopsneaker4}
          alt=""
        />
      </div>
    </div>
  );
};

export default Modal;
