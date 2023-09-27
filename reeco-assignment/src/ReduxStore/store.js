import { configureStore } from "@reduxjs/toolkit";
import OrderSlice from "./Slices/OrderSlice";


export const store = configureStore({
    reducer: {
        orders: OrderSlice,
    }
});