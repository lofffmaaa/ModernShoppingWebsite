import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdOutlineClose } from "react-icons/md";
import { deleteItem } from "../../redux/bazarSlice";
import { toast, ToastContainer } from "react-toastify";

const CardItem = () => {
  const dispatch = useDispatch();
  const productData = useSelector((state) => state.bazar.productData);

  return (
    <div className={"w-2/3 pr-10 select-none"}>
      <div className={"w-full"}>
        <h2 className={"font-titleFont text-xl"}>Shopping Cart</h2>
      </div>

      <div>
        {productData?.map((item) => (
          <div
            key={item._id}
            className={"flex items-center justify-between gap-6 mt-6"}
          >
            <div className={"flex items-center gap-2"}>
              <MdOutlineClose
                onClick={() =>
                  dispatch(deleteItem(item._id)) &
                  toast.error(`${item.title} is removed`)
                }
                className={
                  "text-gray-600 hover:text-red-600 cursor-pointer duration-300"
                }
              />
              <img
                src={item.image}
                alt="productImg"
                className={"w-32 h-32 object-cover"}
              />
            </div>

            <h2 className={"w-52"}>{item.title}</h2>
            <p className={"w-10 flex"}>
              <span>$ </span>
              {item.price}
            </p>

            <div className={"flex gap-4"}>
              <div
                className={
                  "w-52 flex items-center justify-between text-gray-500 gap-4 border p-3"
                }
              >
                <p className={"text-sm"}>Quantity</p>
                <div
                  className={"flex items-center gap-4 text-sm font-semibold"}
                >
                  <button
                    className={
                      "border h-5 font-normal text-lg flex items-center justify-center px-2 hover:text-white hover:bg-gray-700 cursor-pointer duration-300 active:bg-black"
                    }
                  >
                    <span>-</span>
                  </button>
                  <span>1</span>
                  <button
                    className={
                      "border h-5 font-normal text-lg flex items-center justify-center px-2 hover:text-white hover:bg-gray-700 cursor-pointer duration-300 active:bg-black"
                    }
                  >
                    <span>+</span>
                  </button>
                </div>
              </div>
            </div>
            <p className={"w-14 flex"}>
              <span>$</span>
              {item?.quantity * item?.price}
            </p>
          </div>
        ))}
      </div>
      <ToastContainer
        position={"top-left"}
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={true}
        draggable={true}
        pauseOnHover={true}
        theme={"dark"}
      />
    </div>
  );
};

export default CardItem;
