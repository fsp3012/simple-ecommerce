import React from "react";
import deletx from "../images/icon-delete.svg";

const AddToCart = ({ count, setCount, cart1, setCart1 }) => {
  console.log(cart1);
  return (
    <div className=" bg-white position-absolute addtocart">
      <p className="border-bottom fw-semibold px-3 py-1">Cart</p>
      <div className="px-4">
        <div className="d-flex align-items-center gap-5">
          {cart1.length < 1 ? (
            <p>Your cart is empty</p>
          ) : (
            <div className="row align-items-center mb-4 mb-lg-4">
              <img
                className="col-3 rounded-2"
                width={50}
                src={cart1[0].img}
                alt=""
              />
              <div className="col-7 delet">
                <p className="mb-0">{cart1[0].desc}</p>
                <p className="mb-0">
                  {cart1[0].price} x {cart1[0].qty}=
                  <span className="fw-semibold"> ${cart1[0].price * cart1[0].qty}</span>
                </p>
              </div>
              <img
                onClick={() => {
                  setCart1([]);
                }}
                className="col-2 deletx"
                src={deletx}
                alt=""
              />
            </div>
          )}
        </div>
        <button className="text-white bg-orange w-100 border-0 py-2 rounded-1">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default AddToCart;
