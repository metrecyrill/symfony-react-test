import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface OrderSearchState {
  by: string;
  query: string;
}

const initialState: OrderSearchState = {
  by: '',
  query: ''
}

export const orderSearchSlice = createSlice({
  name: 'orderSearch',
  initialState,
  reducers: {
    changeBy(state, action: PayloadAction<string>) {
      state.by = action.payload;
    },
    changeQuery(state, action: PayloadAction<string>) {
      state.query = action.payload;
    }
  }
})

export default orderSearchSlice.reducer;