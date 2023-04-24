import React from "react";
import { useSelector } from "react-redux";
import CardItem from "../components/CardItem/CardItem";

const Cart = () => {
  const productData = useSelector((state) => state.bazar.productData);
  console.log(productData);
  return (
    <div>
      <img
        src="https://images.pexels.com/photos/2668314/pexels-photo-2668314.jpeg"
        alt="cardImg"
        className={"w-full h-60 object-cover"}
      />
      <div className={"max-w-screen-xl mx-auto py-20 flex"}>
        <CardItem />
        <div className={"w-1/3 bg-[#fafafa] py-6 px-4"}>
          <div
            className={
              "flex flex-col gap-6 border-b-[1px] border-b-gray-400 pb-6"
            }
          >
            <h2 className={"text-xl"}>Card totals</h2>
            <p className={"flex items-center gap-4"}>
              Subtotal
              <span className={"font-bold text-lg"}> $ 200</span>
            </p>
            <p className={"flex items-start gap-4"}>
              Shipping
              <span className={"text-sm"}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aperiam, atque.
              </span>
            </p>
          </div>
          <p className={"flex justify-between mt-6"}>
            Total
            <span className={"text-xl font-bold"}>$ 200</span>
          </p>

          <button
            className={
              " bg-black text-white w-full py-3 mt-6 hover:bg-gray-800 duration-300"
            }
          >
            Proceed to checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
