import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IExampleStoreState {
  hi?: string;
}

const initialState: IExampleStoreState = {
  hi: undefined,
};

const store = createSlice({
  name: "example",
  initialState,
  reducers: {
    setHi: (
      state: IExampleStoreState,
      action: PayloadAction<string | undefined>
    ) => {
      state.hi = action.payload;
    },
  },
});

export default store;
