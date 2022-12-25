import React from "react";
import { useSelector } from "react-redux";

const Receipt = () => {
  const { products } = useSelector((state) => state.data);
  const total = products.reduce((acc, item) => (acc += item.amount), 0);
  return (
    total !== 0 && (
      <div className="mt-[10px] bg-white flex flex-col items-center justify-center pb-4">
        <h1 className="p-4 text-3xl font-bold text-[#333]">Your Receipt</h1>
        {products.map(
          (item) =>
            item.count !== 0 && (
              <div
                key={item.id}
                className="w-[290px] flex pb-[10px] text-lg font-semibold text-[#333]"
              >
                <div className="w-3/5">{item.name}</div>
                <div className="w-1/5">
                  x
                  {new Intl.NumberFormat("en-US", {
                    stye: "currency",
                    currency: "USD",
                    maximumFractionDigits: 0,
                    notation: "compact",
                  }).format(item.count)}
                </div>
                <div className="w-1/5 text-right text-[#24c486] font-bold">
                  {new Intl.NumberFormat("en-US", {
                    stye: "currency",
                    currency: "USD",
                    maximumFractionDigits: 0,
                    notation: "compact",
                  }).format(item.amount)}
                </div>
              </div>
            )
        )}
        <div className="flex w-[290px] justify-between pt-[10px] border-t border-[#333] text-lg font-semibold text-[#333]">
          <div className="w-1/2 font-bold">TOTAL</div>
          <div className="w-1/2 font-bold text-right text-[#24c486]">
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
              maximumFractionDigits: 0,
            }).format(total)}
          </div>
        </div>
      </div>
    )
  );
};

export default Receipt;