import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  orderList: [],
};

const headers = { "Content-type": "application/json" };

export const fetchOrders = createAsyncThunk("orders/fetchOrders", async () => {
  try {
    const response = await fetch("http://localhost:3001/orders");
    const result = await response.json();
    console.log("result", result);
    return result;
  } catch (error) {
    throw new Error("Failed to fetch orders");
  }
});

export const updateStatus = createAsyncThunk(
  "orders/updateStatus",
  async (data) => {
  
    const response = await fetch(
      `http://localhost:3001/orders/${data.itemID}`,
      {
        method: "PUT",
        headers: headers,
        body: JSON.stringify({...data.order}),
      }
    );
    const updatedOrder = await response.json();
    return updatedOrder;
  }
);

export const OrderSlice = createSlice({
  name: "Orders",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrders.fulfilled, (state, action) => {
        state.orderList = action.payload;
      })
      .addCase(updateStatus.fulfilled, (state, action) => {
        const updatedOrder = action.payload;
        const index = state.orderList.findIndex(order => order.id === updatedOrder.id);
        if (index !== -1) {
          state.orderList[index] = updatedOrder;
        }
      });
  },
});

export default OrderSlice.reducer;
