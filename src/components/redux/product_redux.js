import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const product = createSlice({
  name: "product reducer",
  initialState,
  reducers: {
    getProduct: (state, action) => {
        console.log(state);
        return { ...state, data: action.payload };
      },
  
      reset: () => {
        return [];
      }
    
   
  }
});

export const productAction = product.actions;
export default product.reducer;
