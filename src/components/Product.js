import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { buy } from "../redux/dataSlice";

const Product = ({ item }) => {
  const { currentMoney } = useSelector((state) => state.data);
  const dispatch = useDispatch();
  const [count, setCount] = useState(0);
  const handleChange = (value) => {
    const maxValue = Math.floor(currentMoney / item.price) + Number(count);
    if (value >= 0) {
      if (value > maxValue) {
        setCount(maxValue);
      } else {
        setCount(Number(value));
      }
    } else {
      setCount(0);
    }
  };
  useEffect(() => {
    dispatch(buy({ item, count }));
  }, [item, count, dispatch]);
  return (
    <div className="bg-white py-5 px-[15px] flex flex-col items-center justify-center">
      <img src={item.image} alt="" className="mx-20 my-4 h-[120px]" />
      <h2 className="text-[#333] text-[22px] font-bold">{item.name}</h2>
      <p className="mb-6 text-[#24c486] text-xl font-semibold">
        {new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
          maximumFractionDigits: 0,
        }).format(item.price)}
      </p>
      <div className="grid grid-cols-3 gap-x-[10px]">
        <button
          onClick={() => setCount(Number(count) - 1)}
          disabled={count <= 0}
          className="py-[7px] font-bold text-white bg-[linear-gradient(180deg,#f53b82,#f53b57)] rounded disabled:bg-none disabled:bg-[#f1f2f6] disabled:text-[#333]"
        >
          Sell
        </button>
        <input
          value={Number(count)}
          onChange={(e) => handleChange(e.target.value, item)}
          className="border border-[#b2bec3] rounded text-center"
        />
        <button
          onClick={() => setCount(Number(count) + 1)}
          disabled={currentMoney <= 0 || item.price > currentMoney}
          className="font-bold text-white bg-[linear-gradient(180deg,#2ecc71,#1abc9c)] rounded disabled:bg-none disabled:bg-[#f1f2f6] disabled:text-[#333]"
        >
          Buy
        </button>
      </div>
    </div>
  );
};

export default Product;