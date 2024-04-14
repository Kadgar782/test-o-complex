import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

// Define a type for the slice state
export interface SingleProduct {
  id: number;
  image_url: string;
  title: string;
  description: string;
  price: number;
}

export type Products = SingleProduct[];

// Define a type for the slice state
export interface ProductsState {
  products: Products;
}

// Define the initial state using that type
const initialState: ProductsState = {
  products: [],
};

export const productsSlice = createSlice({
  name: "products",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addProduct: (state: ProductsState, action: PayloadAction<Products>) => {
      state.products.push(...action.payload);
    },
  },
});

export const { addProduct } = productsSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectProducts = (state: RootState) => state.products;

export default productsSlice.reducer;
