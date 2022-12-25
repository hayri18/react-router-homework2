import { createSlice } from "@reduxjs/toolkit";
import { products } from "../data/data";

export const dataSlice = createSlice({
  name: "data",
  initialState: {
    initialMoney: 100000000000,
    currentMoney: 100000000000,
    products,
  },
  reducers: {
    buy: (state, action) => {
      const { item, count } = action.payload;
      const findedItem = state.products.find(
        (product) => product.id === item.id
      );
      findedItem.count = count;
      findedItem.amount = findedItem.price * findedItem.count;
      const total = state.products.reduce(
        (acc, item) => (acc += item.amount),
        0
      );
      state.currentMoney = state.initialMoney - total;
    },
  },
});

export default dataSlice.reducer;
export const { buy } = dataSlice.actions;