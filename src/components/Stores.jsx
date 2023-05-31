import React, { useState } from "react";
import next from "../images/icon-next.svg";
import previous from "../images/icon-previous.svg";
import plus from "../images/icon-plus.svg";
import minus from "../images/icon-minus.svg";
// import mobilesneaker from "../images/image-product-1-thumbnail.jpg";
import desktopsneaker1 from "../images/image-product-1.jpg";
import desktopsneaker2 from "../images/image-product-2.jpg";
import desktopsneaker3 from "../images/image-product-3.jpg";
import desktopsneaker4 from "../images/image-product-4.jpg";
import cart from "../images/icon-cart.svg";
import { imagecomp } from "../utils/Imagecomponent";

const Stores = ({ modal, count, setCount, cart1, setCart1 }) => {
  const [index, setIndex] = useState(0);
  return (
    <div
      style={{
        zIndex: 2,
      }}
      className="mww1240 mx-lg-auto"
    >
      <div className=" d-lg-flex align-items-center gap-5 py-lg-5 ms-lg-5 ">
        <div className="d-lg-none position-relative">
          <img className="d-lg-none mob" src={imagecomp[index].image1} alt="" />
          <div className="d-lg-none d-flex justify-content-between">
            <img
              onClick={() => {
                index > 0 && setIndex(index - 1);
              }}
              className="bg-white rounded-circle py-2 px-2 mx-3 position-absolute top-50 start-0 "
              src={previous}
              alt=""
            />
            <img
              onClick={() => {
                index < imagecomp.length - 1 && setIndex(index + 1);
              }}
              className="bg-white  rounded-circle py-2 px-2 mx-3  position-absolute top-50 end-0"
              src={next}
              alt=""
            />
          </div>
        </div>

        <img
          onClick={() => {
            modal(true);
          }}
          className="d-none d-md-none d-lg-flex rounded-2 desktopsneaker1"
          src={imagecomp[index].image1}
          alt=""
        />
        <div className="d-flex flex-column d-md-flex d-lg-flex flex-column gap-2 px-3 w-100">
          <h6 className="text-orange">sneaker company</h6>
          <h1 className="fw-bold">Fall Limited Edition Sneakers</h1>
          <p>
            These low profile sneaker are your perfect casual wear companion
            Featuring a durable rubber outer sole they'll withstand everything
            the weather can offer
          </p>
          <div className="d-flex flex-lg-column justify-content-between ">
            <h3 className="fw-bold">
              $125.00{" "}
              <small className="text-orange bg-paleorange border rounded-1 fw-semibold fs-6">
                50%
              </small>
            </h3>
            <span className="text-decoration-line-through fw-semibold text-gray">
              $250
            </span>
          </div>
          <div className="d-flex flex-column rounded-2 flex-lg-row gap-3">
            <div className="bg-gray mobwidth d-flex align-items-center justify-content-between px-2 deskwidth">
              <img
                onClick={() => {
                  setCount(count - 1);
                }}
                src={minus}
                alt=""
              />
              <p className="">{count}</p>
              <img
                onClick={() => {
                  setCount(count + 1);
                }}
                src={plus}
                alt=""
              />
            </div>
            <button
              onClick={() => {
                const addData = {
                  img: desktopsneaker1,
                  desc: "fall limited edition sneakers",
                  qty: count,
                  price: 125.0,
                };
                count > 0 && setCart1([addData]);
                // console.log(setCart1);
                console.log(cart1);
              }}
              className="btn bg-orange mobwidth  text-white d-block"
            >
              <img src={cart} alt="" /> Add to Cart
            </button>
          </div>
        </div>
      </div>
      <div className="d-none d-lg-flex gap-lg-3 w-25 ms-5 modall">
        <img
          onClick={() => {
            setIndex(0);
          }}
          className="w-25 h-25 rounded-2"
          src={desktopsneaker1}
          alt=""
        />
        <img
          onClick={() => {
            setIndex(1);
          }}
          className="w-25 h-25 rounded-2"
          src={desktopsneaker2}
          alt=""
        />
        <img
          onClick={() => {
            setIndex(2);
          }}
          className="w-25 h-25 rounded-2"
          src={desktopsneaker3}
          alt=""
        />
        <img
          onClick={() => {
            setIndex(3);
          }}
          className="w-25 h-25 rounded-2"
          src={desktopsneaker4}
          alt=""
        />
      </div>
    </div>
  );
};

export default Stores;
