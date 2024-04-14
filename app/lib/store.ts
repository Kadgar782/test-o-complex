import { configureStore, combineReducers } from "@reduxjs/toolkit";
import reviwesReducer from "./features/reviewSlice";
import cartReducer from "./features/productsInCartSlice";
import productReducer from "./features/productsSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};
// we combine the redusers to pass them to the persistedReducer
const rootReducer = combineReducers({
  reviwes: reviwesReducer,
  cart: cartReducer,
  products: productReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {products: ProductsState, cart: CartState, reviews: ReviewsState}
export type AppDispatch = typeof store.dispatch;
