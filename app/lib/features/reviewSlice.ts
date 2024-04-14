import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

// Define a type for the slice state
export interface SingleReview {
  text: string;
  id: number;
}

export type Reviews = SingleReview[];

// Define a type for the slice state
export interface ReviewsState {
  reviews: Reviews;
}

// Define the initial state using that type
const initialState: ReviewsState = {
  reviews: [],
};

export const reviesSlice = createSlice({
  name: "reviews",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addReview: (state: ReviewsState, action: PayloadAction<Reviews>) => {
      state.reviews.push(...action.payload);
    },
  },
});

export const { addReview } = reviesSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectReviews = (state: RootState) => state.reviwes;

export default reviesSlice.reducer;
