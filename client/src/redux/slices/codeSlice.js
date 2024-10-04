
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  code :""

};

const codeSlice = createSlice({
  name: 'code',
  initialState,
  reducers: {
    setCode: (state, action) => {
        state.code = (action.payload);
    },
    
  }
});


export const { setCode } = codeSlice.actions;

export default codeSlice.reducer;

