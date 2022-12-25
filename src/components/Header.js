import React from "react";
import { useSelector } from "react-redux";

const Header = () => {
  const { currentMoney } = useSelector((state) => state.data);
  return (
    <>
      <div className="flex flex-col items-center justify-center py-8 gap-y-[25px] bg-white">
        <img
          className="h-[125px] w-[125px] rounded-full"
          src="img/billgates.jpg"
          alt=""
        />
        <h1 className="text-3xl font-bold text-[rgb(51,51,51)]">
          Spend Bill Gates' Money
        </h1>
      </div>
      <div className="sticky top-0 z-50 p-5 bg-[linear-gradient(180deg,#2ecc71,#1abc9c)] flex justify-center items-center text-white font-bold text-3xl my-[10px]">
        {new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
          maximumFractionDigits: 0,
        }).format(currentMoney)}
      </div>
    </>
  );
};

export default Header;